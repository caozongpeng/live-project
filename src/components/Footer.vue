<template>
    <div :style="{width: myWidth}" id="footer">
        <div class="fglo_bg">
            <div class="link fl" id="js_link">
                <div class="link_c">
                    <div>
                        <span style="color:#888;margin-right:20px;">友情链接：</span>
                        <a v-for="(item,index) in linkList" :key="'4'+index" :href="item.link" target="_blank" >{{item.linkName}}</a>
                    </div>
                </div>
            </div>
            <div class="foot_global">
            <p>24直播吧所有视频数据均调用第三方资源，不提供任何视听上传服务，如有版权问题请联系我们。</p>
            <p>微信客服：zhibomei2019  </p>
            <p>Copyright @ 2018 24直播吧</p>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    props: {
        myWidth: {
            type: String,
            default: "1000px"
        }
    },
    mounted() {
        this.$store.dispatch("getLinkList");
    },
    computed: mapGetters([
        "linkList"
    ])
}
</script>

<style lang="less" scoped>
#footer {
    bottom: 0;
    margin-top: 50px;
    width: 780px;
    left: 50%;
    margin: 50px auto 0;
}
    #footer .foot {
    width: 780px;
    overflow: hidden;
    padding-bottom: 33px;
    height: auto;
    margin: 0 auto;
}

#footer .link {
    padding-right: 20px;
    position: relative;
    margin-left: 50px;
}
#footer h3 {
    font-size: 16px;
    line-height: 33px;
    color: #fff;
    margin-bottom: 8px;
    font-weight: 700;
}
.link_c a {
    color: #999;
    display: inline-block;
    margin-right: 20px;
    line-height: 26px;
}
.fglo_bg {
    background: #1b1616;
    padding-top: 18px;
    text-align: center;
}
.foot_global {
    max-width: 780px;
    margin: 0 auto;
}
.foot_global p {
    color: #b1b1b1;
    line-height: 24px;
}
</style>

