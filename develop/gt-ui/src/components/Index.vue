<template>
  <section class="index">
    <div class="row">
        <gt-button>视频教程</gt-button>
    </div>
    <div class="row">
        <gt-null-data>您还没有授权人信息，<span @click="test()">点击这里</span>添加授权人吧</gt-null-data>
    </div>
  </section>
</template>

<script type="application/ecmascript">
  import GtButton from './button/button'
  import GtNullData from './null-data/nullData'
  export default {
    name: 'Index',
    data() {
      return {
        testz:666
      }
    },
    components:{
      GtButton,
      GtNullData
    },
    methods:{
      test(){
        console.log(this.testz)
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row{
  margin: 15px;
}
</style>
