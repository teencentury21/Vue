import CheckBox from './components/check-box.vue';
import RadioBox from './components/radio-box.vue';
import SelectField from './components/select-field.vue';
import TextField from './components/text-field.vue';

const myPlugin = {
    install: function(Vue) {
        Vue.component('check-box', CheckBox);
        Vue.component('radio-box', RadioBox);
        Vue.component('select-field', SelectField);
        Vue.component('text-field', TextField);
    }
}

export default myPlugin;
