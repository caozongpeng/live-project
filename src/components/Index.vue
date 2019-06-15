<template>
  <div id="index">
    <div class="banner">
        <el-carousel>
            <el-carousel-item v-for="item in banner" :key="item.index"  height="200px">
                <h3><a :href="item.jumpUrl" target="_blank"><img :src="'http://47.75.166.143:8080'+item.icon" :alt="item.title"></a></h3>
            </el-carousel-item>
        </el-carousel>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
        
    }
  },
  created() {
      this.$store.dispatch("getBanner")
  },
  computed: mapGetters([
      "banner"
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#index {
    margin-top: 80px;
    .banner {
        width: 1000px;
        margin: 100px auto 10px;
    }

}
</style>
