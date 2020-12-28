<template>
  <div class="firstQuery">
    <h1>This is query page</h1>

    <!-- <img v-bind:src="avatar_url" class="circular--square" alt="avatar" /> -->
    <!-- <a v-bind:href="html_url" target="_blank"><img src="@/assets/github.png" style="width:50px;display: inline-block;" /></a> -->
    <!-- <span style="font-weight: bold;font-size: large;"> {{ name}} </span><br>
    <span> {{location}} </span>     -->
    <hr>
    <UserTable></UserTable>
    
  </div>
</template>
<script>
  import UserTable from '@/components/UserTable.vue'
  export default {
    components: {
      UserTable
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