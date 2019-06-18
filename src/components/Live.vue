<template>
    <div id="live">
        <v-header myWidth="780px"></v-header>
        <div class="today" style="margin-top: 90px;">
            <!-- PC端显示这个 -->
            <div class="info">
                <img src="../assets/bgLive.jpg" width="781px" class="bg">
                <a href="index.html" class="back"></a>
                <div class="infoWrap">
                    <div class="list1">
                        <img class="first homeTeam_img" :src="'http://47.75.166.143:8080'+data.matchImage1">
                        <span class="name1 homeTeam">{{data.hometeam}}</span>
                    </div>
                    <div class="list2">
                        <p class="gameName matchTitle">{{data.matchName}}{{data.rotation}}</p>
                        <p class="gameTime matchTime_pc">{{data.startDate}} {{data.startTime}}</p>
                    </div>
                    <div class="list3">
                        <img class="second visitingTeam_img" :src="'http://47.75.166.143:8080'+data.matchImage2">
                        <span class="name2 visitingTeam">{{data.visitingTeam}}</span>
                    </div>
                </div>
            </div>
            <div class="info2">
                <div class="liveshow">
                <a
                    href="javascript:"
                    class="toLive"
                    v-bind:class="active==index?'picked':''"
                    v-for="(item,index) in data.chains"
                    :key="index"
                    @click="handleChangeUrl(item.url,index,item.type)"
                >{{item.name}}</a>
                <a
                    :href="item.jumpUrl"
                    target="_blank"
                    class="toLive"
                    v-for="(item,index) in getAdvert4"
                    :key="index"
                >{{item.words}}</a>
                </div>
            </div>
            <div class="liveCotainer" v-if="!videoIfr">
                <div class="guangg" v-show="vGuangShow && getAdvert9.length!=0">
                    <a :href="item.jumpUrl" target="_blank" :key="item" v-for="item in getAdvert9">
                    <img width="780px" height="454px" :src="'http://47.75.166.143:8080'+item.icon" alt>
                    </a>
                   
                    <div class="timeOff" @click="vGuangShow = false">{{timeCount}} 秒钟后自动关闭 x</div>
                </div>
                <div id="video"></div>
            </div>
            <div class="liveCotainer" v-if="videoIfr">
                <div class="guangg" v-show="vGuangShow && getAdvert9.length!=0">
                    <a :href="item.jumpUrl" target="_blank" :key="item" v-for="item in getAdvert9">
                    <img width="780px" height="454px" :src="'http://47.75.166.143:8080'+item.icon" alt>
                    </a>
                    <div class="timeOff" @click="vGuangShow = false">{{timeCount}} 秒钟后自动关闭 x</div>
                </div>
                <iframe
                :src="videoIfr"
                width="100%"
                height="454px"
                frameborder="0"
                allowfullscreen
                scrolling="no"
                ></iframe>
            </div>
            <div v-for="item in getAdvert5" :key="item" style="margin:0 auto;width:780px;">
                <a :href="item.jumpUrl" target="_blank">
                <img
                    width="780px"
                    height="80px"
                    style="margin-top:10px;"
                    :src="'http://47.75.166.143:8080'+item.icon"
                    alt
                >
                </a>
            </div> 
        </div>
        <div id="footer">
            <div class="fglo_bg">
                <div class="link fl" id="js_link">
                    <!-- <h3 class="hl_icon">友情链接</h3> -->
                    <div class="link_c">
                        <div>
                            <span style="color:#888;margin-right:20px;">友情链接：</span>
                            <a v-for="(item,index) in linkList" :key="index" :href="item.link" target="_blank" >{{item.linkName}}</a>
                        </div>
                    </div>
                </div>
                <div class="foot_global">
                <p>24直播吧所有视频数据均调用第三方资源，不提供任何视听上传服务，如有版权问题请联系我们。</p>
                <p>微信客服：zhibomei2019  </p>
                <p>Copyright @ 2018 24直播吧</p>
                </div>
            </div>
            <!--footer-end-->
        </div>
    </div>
</template>
<script>

import Header from './Header'
import {mapGetters} from 'vuex'
import { Loading } from 'element-ui'
import axios from 'axios'
export default {
    name: "Live",
    components: {
        "v-header": Header
    },
    data () {
        return {
            active: 0,
            todatMatchId: this.$route.query.todatMatchId,
            videoObjectPc: {
                width: 1015, // 宽度，也可以支持百分比(不过父元素宽度要有)
                height: 574, // 高度，也可以支持百分比
                container: "#video", //“#”代表容器的ID，“.”或“”代表容器的class
                variable: "player", //该属性必需设置，值等于下面的new chplayer()的对象
                autoplay: true, //自动播放
                live: true,
                video: "" //视频地址
            },
            data: {},
            videoIfr: "",
            vGuangShow:true,
            timeCount:10,
            duiShow:true
        }
    },
    mounted() {
        this.$store.dispatch("getAdvert",2);
        this.$store.dispatch("getAdvert",3);
        this.$store.dispatch("getAdvert",4);
        this.$store.dispatch("getAdvert",5);
         this.$store.dispatch("getAdvert",9);
        this.$store.dispatch("getLinkList");
        this.init();
        // this.videoGu();
    },
    computed: mapGetters([
        "getAdvert2",
        "getAdvert3",
        "getAdvert4",
        "getAdvert5",
        "getAdvert9",
        "linkList"
    ]),
    methods: {
        videoGu() {
            let clock = setInterval(()=>{
                this.timeCount --;
                if(this.timeCount == 0){
                    clearInterval(clock)
                    this.timeCount = 10;
                    this.vGuangShow = false;
                }
            },1000)
        },
        init() {
            let loadingInstance = Loading.service({
                fullscreen: true,
                text: "数据加载中..."
            });

            axios.get("http://47.75.166.143:8080/front/tmatch/getChain?todatMatchId=" + this.todatMatchId).then(resp => {
                // console.log(resp);
                // console.log(resp.data.data);
                this.data = resp.data.data;
                if(resp.data.status === "200") {
                    if (resp.data.data.chains.length != 0) {
                        if (resp.data.data.chains[0].type == 1) {
                            if (resp.data.data.chains[0].url.indexOf(".m3u8") != -1) {
                                this.videoIfr = "";
                                this.videoObjectPc.video = resp.data.data.chains[0].url;
                                let player = new ckplayer(this.videoObjectPc);
                            } else {
                                this.videoIfr = resp.data.data.chains[0].url;
                            }
                        } else {
                            window.open(resp.data.data.chains[0].url, "_blank");
                        }
                    } else {
                        this.$message({
                            showClose: true,
                            message: "没有直播信号",
                            type: "error"
                        });
                    }
                    document.title = "【24直播吧】" + this.data.hometeam + "vs" + this.data.visitingTeam + "视频直播";
                    loadingInstance.close();
                    let player = new ckplayer(this.videoObjectPc);
                }
            });


        }
    }
}
</script>


<style lang="less" scoped>
#live {
    .list {
        font-size: 16px;
    }
    .liveCotainer {
        margin: 0 auto;
        width: 780px;
        position: relative;
        .guangg{
            background: #000;
            width: 780px;
            height: 454px;
            position: absolute;
            top: 0;
            left: 0;
            a{
                display: block;
            }
            .timeOff{
                cursor: pointer;
                position: absolute;
                right: 5px;
                top: 5px;
                color: #fff;
                padding: 5px;
                border: 1px solid rgb(196, 91, 91);
                border-radius: 5px;
            }
        }
        #video {
            width: 780px;
            height: 454px;
        }
    }
    .banner {
        width: 780px;
        margin: 10px auto 10px;
    }
    .today {
        position: relative;
    }
    #footer {
        // position: absolute;
        bottom: 0;
        margin-top: 50px;
        // padding-top: 20px;
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
        // height: 85px;
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
}
</style>


