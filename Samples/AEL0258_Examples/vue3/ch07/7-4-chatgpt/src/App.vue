<template>
    <div id="app">
        <h4>ChatGPT 對話視窗</h4>
        <TalkList
            ref="chat-container"
            :talk-contents="talk_contents"
        />
        <WordsInput
            v-model="words"
            @send="send"
            :disabled="is_wait_chatgpt_response === true"
        />
    </div>
</template>

<script>
import axios from 'axios';
import TalkList from './components/talk-list.vue';
import WordsInput from './components/words-input.vue';

export default {
    name: 'App',
    data: () => ({
        // 對話內容
        talk_contents: [],
        // 輸入對話內容
        words: '',
        // 等待 ChatGPT
        is_wait_chatgpt_response: false,
        // ChatGPT Setting
        api_settings: {
            url: 'https://api.openai.com/v1/chat/completions',
            model: 'gpt-3.5-turbo-0301',
            api_token: 'api-token',
            organization_id: 'org-id',
        },
    }),
    methods: {
        async sendRequestToChatGPT(words) {

            const headers = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.api_settings.api_token}`,
                "OpenAI-Organization": this.api_settings.organization_id,
            }

            const params = {
                model: 'gpt-3.5-turbo-0301',
                messages: [
                    {
                        role: 'user',
                        content: words
                    }
                ],
                temperature: 0.7
            }

            const response = await axios.post(this.api_settings.url, params, {
                headers: headers,
            });

            let result = {};
            if(response.status === 200) {
                result = await response.data;
            }

            return result;
        },
        // 送出
        async send() {

            // 送出後須鎖定送出按鈕(避免重覆發送)
            this.is_wait_chatgpt_response = true;

            // 對話櫃加入自己的發話
            let words = this.words;
            this.talk_contents.push({
                class: 'user',
                user: '我',
                content: words,
            });
            // 清除發話內容
            this.words = '';

            // 發送請求給 ChatGPT API
            const response = await this.sendRequestToChatGPT(words);

            // 取得 API 回應後，解析回應內容並取出回應訊息
            let message = '';
            if(response.choices !== undefined && response.choices.length > 0) {
                message = response.choices[0].message.content;
            }
            this.talk_contents.push({
                class: 'chatgpt',
                user: 'ChatGPT',
                content: message,
            });

            this.$nextTick(function() {
                this.is_wait_chatgpt_response = false;
                // 自動滑到底
                let height = this.$refs['chat-container'].clientHeight;
                let scrollHeight = this.$refs['chat-container'].scrollHeight;
                let scrollTop = scrollHeight - height + 100;
                this.$refs['chat-container'].scrollTop = scrollTop;
            })
        },
    },
    components: {
        WordsInput,
        TalkList,
    },
}
</script>

<style scoped>
#app {
    padding: 1rem;
}
</style>