<template>
  <div id="index">
    <div class="banner">
        <el-carousel>
            <el-carousel-item v-for="item in banner" :key="item.index" height="200px">
                <h3><a :href="item.jumpUrl" target="_blank"><img :src="'http://47.75.166.143:8080'+item.icon" :alt="item.title"></a></h3>
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="navList"> 
      <ul>
        <li @click="handleClickActive()">全部</li>
        <li v-if="index<=1" v-for="(item,index) in projectData" @click="handleClickActive(index,item.id)" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
    <div class="contentList">
      <el-row :gutter="20">
        <el-col :span="4" v-if="matchs">
          <div class="grid-content bg-purple">
            <div class="contentListLeft">
              <ul>
                <li :class="index==active1?'on':''" v-if="index<10" v-for="(item,index) in matchs" @click="getTableList(index,item.id)" :key="item.id">{{item.name}}</li>
              </ul>
            </div>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple-light">
            <div class="contentListRight">
              <el-table
                :data="tabData.todayMatchs.match">
                <el-table-column :label="tabData.todayMatchs.date">
                  <el-table-column
                    prop="startTime"
                    >
                  </el-table-column>
                  <el-table-column width="140">
                    <template slot-scope="scope">
                      <span>{{scope.row.matchName}}</span><span>{{scope.row.rotation}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="450">
                    <template slot-scope="scope">
                      <span style="display:inline-block;text-align:right;width:200px;vertical-align:middle"><span style="vertical-align:middle">{{scope.row.hometeam}}</span><img :src="'http://47.75.166.143:8080'+scope.row.matchImage1" v-if="scope.row.matchImage1" width="30px" style="vertical-align:middle;margin-left:10px" alt=""></span>
                      <span style="display:inline-block;width:20px;vertical-align:middle;text-align:center"> VS </span>
                      <span style="display:inline-block;text-align:left;width:200px;vertical-align:middle"><img :src="'http://47.75.166.143:8080'+scope.row.matchImage2" v-if="scope.row.matchImage2" width="30px" style="vertical-align:middle;margin-right:10px" alt=""><span style="vertical-align:middle">{{scope.row.visitingTeam}}</span></span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="name">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text">视频直播</el-button>
                    </template>
                  </el-table-column>
                </el-table-column>
              </el-table>
              <el-table
                :data="tabData.tomorrowMatchs.match">
                <el-table-column :label="tabData.tomorrowMatchs.date">
                  <el-table-column
                    prop="startTime"
                    >
                  </el-table-column>
                  <el-table-column width="140">
                    <template slot-scope="scope">
                      <span>{{scope.row.matchName}}</span><span>{{scope.row.rotation}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="450">
                    <template slot-scope="scope">
                      <span style="display:inline-block;text-align:right;width:200px;"><span style="vertical-align:middle">{{scope.row.hometeam}}</span><img :src="'http://47.75.166.143:8080'+scope.row.matchImage1" v-if="scope.row.matchImage1" width="30px" style="vertical-align:middle;margin-left:10px" alt=""></span>
                      <span style="display:inline-block;width:20px;vertical-align:middle;text-align:center"> VS </span>
                      <span style="display:inline-block;text-align:left;width:200px;"><img :src="'http://47.75.166.143:8080'+scope.row.matchImage2" v-if="scope.row.matchImage2" width="30px" style="vertical-align:middle;margin-right:10px" alt=""><span style="vertical-align:middle">{{scope.row.visitingTeam}}</span></span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="name">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text">视频直播</el-button>
                    </template>
                  </el-table-column>
                </el-table-column>
              </el-table>
              <el-table
                :data="tabData.thirdMatchs.match">
                <el-table-column :label="tabData.thirdMatchs.date">
                  <el-table-column
                    prop="startTime"
                    >
                  </el-table-column>
                  <el-table-column width="140">
                    <template slot-scope="scope">
                      <span>{{scope.row.matchName}}</span><span>{{scope.row.rotation}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="450">
                    <template slot-scope="scope">
                      <span style="display:inline-block;text-align:right;width:200px;"><span style="vertical-align:middle">{{scope.row.hometeam}}</span><img :src="'http://47.75.166.143:8080'+scope.row.matchImage1" v-if="scope.row.matchImage1" width="30px" style="vertical-align:middle;margin-left:10px" alt=""></span>
                      <span style="display:inline-block;width:20px;vertical-align:middle;text-align:center"> VS </span>
                      <span style="display:inline-block;text-align:left;width:200px;"><img :src="'http://47.75.166.143:8080'+scope.row.matchImage2" v-if="scope.row.matchImage2" width="30px" style="vertical-align:middle;margin-right:10px" alt=""><span style="vertical-align:middle">{{scope.row.visitingTeam}}</span></span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="name">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text">视频直播</el-button>
                    </template>
                  </el-table-column>
                </el-table-column>
              </el-table>
              <el-table
                :data="tabData.fourMatchs.match">
                <el-table-column :label="tabData.fourMatchs.date">
                  <el-table-column
                    prop="startTime"
                    >
                  </el-table-column>
                  <el-table-column width="140">
                    <template slot-scope="scope">
                      <span>{{scope.row.matchName}}</span><span>{{scope.row.rotation}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="450">
                    <template slot-scope="scope">
                      <span style="display:inline-block;text-align:right;width:200px;"><span style="vertical-align:middle">{{scope.row.hometeam}}</span><img :src="'http://47.75.166.143:8080'+scope.row.matchImage1" v-if="scope.row.matchImage1" width="30px" style="vertical-align:middle;margin-left:10px" alt=""></span>
                      <span style="display:inline-block;width:20px;vertical-align:middle;text-align:center"> VS </span>
                      <span style="display:inline-block;text-align:left;width:200px;"><img :src="'http://47.75.166.143:8080'+scope.row.matchImage2" v-if="scope.row.matchImage2" width="30px" style="vertical-align:middle;margin-right:10px" alt=""><span style="vertical-align:middle">{{scope.row.visitingTeam}}</span></span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="name">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text">视频直播</el-button>
                    </template>
                  </el-table-column>
                </el-table-column>
              </el-table>
              <el-table
                :data="tabData.fiveMatchs.match">
                <el-table-column :label="tabData.fiveMatchs.date">
                  <el-table-column
                    prop="startTime"
                    >
                  </el-table-column>
                  <el-table-column width="140">
                    <template slot-scope="scope">
                      <span>{{scope.row.matchName}}</span><span>{{scope.row.rotation}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="450">
                    <template slot-scope="scope">
                      <span style="display:inline-block;text-align:right;width:200px;"><span style="vertical-align:middle">{{scope.row.hometeam}}</span><img :src="'http://47.75.166.143:8080'+scope.row.matchImage1" v-if="scope.row.matchImage1" width="30px" style="vertical-align:middle;margin-left:10px" alt=""></span>
                      <span style="display:inline-block;width:20px;vertical-align:middle;text-align:center"> VS </span>
                      <span style="display:inline-block;text-align:left;width:200px;"><img :src="'http://47.75.166.143:8080'+scope.row.matchImage2" v-if="scope.row.matchImage2" width="30px" style="vertical-align:middle;margin-right:10px" alt=""><span style="vertical-align:middle">{{scope.row.visitingTeam}}</span></span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="name">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text">视频直播</el-button>
                    </template>
                  </el-table-column>
                </el-table-column>
              </el-table>
              <el-table
                :data="tabData.sixMatchs.match">
                <el-table-column :label="tabData.sixMatchs.date">
                  <el-table-column
                    prop="startTime"
                    >
                  </el-table-column>
                  <el-table-column width="140">
                    <template slot-scope="scope">
                      <span>{{scope.row.matchName}}</span><span>{{scope.row.rotation}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="450">
                    <template slot-scope="scope">
                      <span style="display:inline-block;text-align:right;width:200px;"><span style="vertical-align:middle">{{scope.row.hometeam}}</span><img :src="'http://47.75.166.143:8080'+scope.row.matchImage1" v-if="scope.row.matchImage1" width="30px" style="vertical-align:middle;margin-left:10px" alt=""></span>
                      <span style="display:inline-block;width:20px;vertical-align:middle;text-align:center"> VS </span>
                      <span style="display:inline-block;text-align:left;width:200px;"><img :src="'http://47.75.166.143:8080'+scope.row.matchImage2" v-if="scope.row.matchImage2" width="30px" style="vertical-align:middle;margin-right:10px" alt=""><span style="vertical-align:middle">{{scope.row.visitingTeam}}</span></span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="name">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text">视频直播</el-button>
                    </template>
                  </el-table-column>
                </el-table-column>
              </el-table>
              <el-table
                :data="tabData.sevenMatchs.match">
                <el-table-column :label="tabData.sevenMatchs.date">
                  <el-table-column
                    prop="startTime"
                    >
                  </el-table-column>
                  <el-table-column width="140">
                    <template slot-scope="scope">
                      <span>{{scope.row.matchName}}</span><span>{{scope.row.rotation}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column width="450">
                    <template slot-scope="scope">
                      <span style="display:inline-block;text-align:right;width:200px;"><span style="vertical-align:middle">{{scope.row.hometeam}}</span><img :src="'http://47.75.166.143:8080'+scope.row.matchImage1" v-if="scope.row.matchImage1" width="30px" style="vertical-align:middle;margin-left:10px" alt=""></span>
                      <span style="display:inline-block;width:20px;vertical-align:middle;text-align:center"> VS </span>
                      <span style="display:inline-block;text-align:left;width:200px;"><img :src="'http://47.75.166.143:8080'+scope.row.matchImage2" v-if="scope.row.matchImage2" width="30px" style="vertical-align:middle;margin-right:10px" alt=""><span style="vertical-align:middle">{{scope.row.visitingTeam}}</span></span>
                    </template>
                  </el-table-column>
                  <el-table-column
                    prop="name">
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="text">视频直播</el-button>
                    </template>
                  </el-table-column>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-col> 
      </el-row>
    </div>
    <div id="footer">
        <div class="fglo_bg">
          <div class="link fl" id="js_link">
            <!-- <h3 class="hl_icon">友情链接</h3> -->
            <div class="link_c">
              <div>
                <span style="color:#888;margin-right:20px;">友情链接</span><a v-for="(item,index) in linkList" :key="index" :href="item.link" target="_blank">{{item.linkName}}</a>
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
import {mapGetters} from 'vuex'
export default {
  name: 'Index',
  data () {
    return {
        //projectData: []
        active: -1,
        active1: -1        
    }
  },
  mounted() {
      this.$store.dispatch("getBanner");
      this.$store.dispatch("getProjects");
      this.$store.dispatch("getMatchByProject");
      this.$store.dispatch("getTableList");
      this.$store.dispatch("getLinkList");
  },
  computed: mapGetters([
      "banner",
      "projectData",
      "matchs",
      "tabData",
      "linkList"
  ]),
  methods: {
      handleClickActive(index, id) {
          this.active1 = -1;
          if(!id) {
            this.$store.dispatch("getMatchByProject");
          } else {
            this.$store.dispatch("getMatchByProject",id);
          }
      },
      getTableList(index, id) {
          this.active1 = index;
          this.$store.dispatch("getTableList", id);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#index {
    .banner {
        width: 1000px;
        margin: 100px auto 10px;
    }
    .navList {
        height: 48px;
        background: #333;
        width: 1000px;
        margin: 0 auto;
        ul {
            li {
                float: left;
                font-size: 16px;
                line-height: 48px;
                margin: 0 20px;
                color: #999;
                cursor: pointer;
                &.on {
                    color: #fff;
                }
            }
        } 
    }
    .contentList {
        width: 1000px;
        margin: 10px auto;
        .contentListLeft {
            background: #f3f3f3;
            padding: 5px;
            // width: 184px;
            ul {
                li {
                    cursor: pointer;
                    height: 40px;
                    background: #fff;
                    width: 100%;
                    color: #000;
                    text-align: center;
                    line-height: 40px;
                    font-size: 14px;
                    &.on {
                        background: #3a84ff;
                        color: #fff;
                    }
                    img {
                        margin-right: 10px;
                    }
                }
            }
        }
    }
    #footer {
        bottom: 0;
        margin-top: 50px;
        width: 1000px;
        left: 50%;
        margin: 50px auto 0;
        background: #002b62;
    }
    #footer .foot {
        width: 1000px;
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
        max-width: 1000px;
        margin: 0 auto;
    }
    .foot_global p {
        color: #b1b1b1;
        line-height: 24px;
    }
}
</style>