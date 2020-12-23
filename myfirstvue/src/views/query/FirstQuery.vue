<template>
  <div class="firstQuery">
    <h1>This is query page</h1>

    <img v-bind:src="avatar_url" class="circular--square" alt="avatar" />
    <a v-bind:href="html_url" target="_blank"><img src="@/assets/github.png" style="width:50px;display: inline-block;" /></a>
    <span style="font-weight: bold;font-size: large;"> {{ name}} </span><br>
    <span> {{location}} </span>
    <hr>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios';
  import VueAxios from 'vue-axios'

  Vue.use(VueAxios, axios)
  
  export default {
    data(){
      return{
        // Note 'isActive' is left out and will not appear in the return table
        fields: [{
          key: 'id',
        }, {
          key: 'name',
        }, {
          key: 'company',
        }, {
          key: 'phone',
        }, {
          key: 'email',
        }],
        items:[]
      }
    },
    mounted: async function(){
      let result = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(result)
      result.data.array.forEach(element => {
        console.log(element)
        let itemObj={};
        itemObj.id=element.id;
        itemObj.name=element.name;
        itemObj.company=element.company.name;
        itemObj.phone=element.phone;
        itemObj.email=element.email;
        this.items.push(itemObj);        
      });
    }
  }
</script>

<style scoped>
    img {
        vertical-align: middle;
        width: 200px;
        display: inherit;
        margin: 0 auto;
    }
    .circular--square {
        border-top-left-radius: 50% 50%;
        border-top-right-radius: 50% 50%;
        border-bottom-right-radius: 50% 50%;
        border-bottom-left-radius: 50% 50%;
    }
</style>