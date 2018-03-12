<template>
    <div>
        首页
    </div>
</template>

<script>
import http from './../public/http';

export default {
  data(){
    return {
        goodsdata:"",
    };
  },
  created(){

  },
  mounted(){
    http.ajaxGet("http://localhost:9999/news", res => {
        console.log(res)
        
    });
  },
  methods: {
        
  },
}
</script>


<style scoped>

</style>

