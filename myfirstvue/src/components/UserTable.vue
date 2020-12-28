<template>
    <div>
        <b-table striped hover :items="items" :fields="fields"></b-table>        
    </div>
</template>
<script>
    import Vue from'vue'
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    
    Vue.use(VueAxios, axios)

    export default {
        data(){
            return{
                fields:[
                    {
                        key: 'id'
                        // sortable: true
                    }, {
                        key: 'name'
                        // sortable: true
                    }, {
                        key: 'company'
                        // sortable: true
                    }, {
                        key: 'phone'
                        // sortable: true
                    }, {
                        key: 'email'
                        // sortable: true
                        // Variant applies to the whole column, including the header and footer
                        // variant: 'danger'
                    },
                ],
                items:[]
            }
        },
        mounted: async function(){

            let result=await axios.get('https://jsonplaceholder.typicode.com/users');
            // console.log(result);            
            result.data.forEach((element) => {
                //console.log(element); // print data on Console
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