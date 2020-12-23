<template>
  <div class="firstQuery">
    <h1>This is query page</h1>

  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: 'firstQuery',
    data() {
      return {
        info: "",
        formdata: {
          var13: "1",
          var14: "2",
          var15: "",
          var16: "",
          var17: "",
        },
        postreturnval: ""
      }
    },
    methods: {
      PostForm: function () {

        let _this = this

        //==============Post=======================
        axios.post('api/setting/httppostmethodtest', _this.formdata).then((response) => {
          _this.postreturnval = response.data.data
        }).catch((error) => {
          console.log(error.description);
          //_this.$ii_message('error', error.description)
        })

      }
    },
    mounted() {
      let _this = this

      //================Get===========================
      axios.get('http://localhost:58865/api/setting/httpgetmethodtest/1395T3079901', {
        headers: {
          ContentType: 'text/plain',
        }
      }).then((response) => {
        _this.info = response.data.data
      }).catch((error) => {
        console.log(error.description);
        //_this.$ii_message('error', error.description)
      })


    }
  }
</script>