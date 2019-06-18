<template>
    <div id="live">
        <div class="today" style="margin-top: 90px;">
            <!-- PC端显示这个 -->
            <div class="info">
                <img src="../assets/bgLive.jpg" width="781px" class="bg">
                <a href="index.html" class="back"></a>
                <!-- <div class="infoWrap">
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
                </div> -->
            </div>
            <!-- <div class="info2">
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
                    <a :href="item.jumpUrl" target="_blank" v-for="item in getAdvert9">
                    <img width="780px" height="454px" :src="'http://47.75.166.143:8080'+item.icon" alt>
                    </a>
                   
                    <div class="timeOff" @click="vGuangShow = false">{{timeCount}} 秒钟后自动关闭 x</div>
                </div>
                <div id="video"></div>
            </div>
            <div class="liveCotainer" v-if="videoIfr">
                <div class="guangg" v-show="vGuangShow && getAdvert9.length!=0">
                    <a :href="item.jumpUrl" target="_blank" v-for="item in getAdvert9">
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
            <div v-for="item in getAdvert5" style="margin:0 auto;width:780px;">
                <a :href="item.jumpUrl" target="_blank">
                <img
                    width="780px"
                    height="80px"
                    style="margin-top:10px;"
                    :src="'http://47.75.166.143:8080'+item.icon"
                    alt
                >
                </a>
            </div> -->
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name: "Live",
    data () {
        return {

        }
    },
    mounted() {
        this.$store.dispatch("getAdvert",2);
        this.$store.dispatch("getAdvert",3);
        this.$store.dispatch("getAdvert",4);
        this.$store.dispatch("getAdvert",5);
        this.$store.dispatch("getAdvert",9);
    },
    computed: mapGetters([
        "getAdvert2",
        "getAdvert3",
        "getAdvert4",
        "getAdvert5",
        "getAdvert9"
    ]),
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
}
</style>


