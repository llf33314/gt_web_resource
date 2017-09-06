<!-- btn.vue组件 -->
<template>
  <button class="gt-btn" @click="handleClick"><i class="iconfont gt-play"></i><slot></slot></button>
</template>

<script>
  export default {
    props: {

    },
    methods:{
      handleClick(evt) {
        this.$emit('click', evt);
      },
    }
  }
</script>

<style lang="scss" type="text/css" scoped>
  .gt-btn{
    height: 35px;
    min-width: 75px;
    border: 0;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
    padding: 0 10px;
    background-color: #fcba65;
    border: 1px solid #fcba65;
    color: #fff;
    &:hover{
       opacity: 0.95;
     }
    .iconfont{
      padding: 0 5px;
    }
  }
</style>
