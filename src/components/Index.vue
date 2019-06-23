<template>
  <div id="index">
    <v-header></v-header>
    <div class="banner">
        <el-carousel>
            <el-carousel-item v-for="item in banner" :key="item.index" height="200px">
                <h3><a :href="item.jumpUrl" target="_blank"><img :src="url + item.icon" :alt="item.title"></a></h3>
            </el-carousel-item>
        </el-carousel>
    </div>
    <div class="navList"> 
      <ul>
        <li :class="activeClass == -1 ? 'active' :''" @click="handleClickActive()">全部</li>
        <li :class="activeClass == index ? 'active' :''" v-if="index<=1" v-for="(item,index) in projectData" @click="handleClickActive(index,item.id)" :key="item.id">{{item.name}}</li>
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
                      <span style="display:inline-block;text-align:left;width:200px;vertical-align:middle"><img :src="url + scope.row.matchImage2" v-if="scope.row.matchImage2" width="30px" style="vertical-align:middle;margin-right:10px" alt=""><span style="vertical-align:middle">{{scope.row.visitingTeam}}</span></span>
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
                      <span style="display:inline-block;text-align:left;width:200px;"><img :src="url + scope.row.matchImage2" v-if="scope.row.matchImage2" width="30px" style="vertical-align:middle;margin-right:10px" alt=""><span style="vertical-align:middle">{{scope.row.visitingTeam}}</span></span>
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
                      <span style="display:inline-block;text-align:left;width:200px;"><img :src="url + scope.row.matchImage2" v-if="scope.row.matchImage2" width="30px" style="vertical-align:middle;margin-right:10px" alt=""><span style="vertical-align:middle">{{scope.row.visitingTeam}}</span></span>
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
                      <span style="display:inline-block;text-align:left;width:200px;"><img :src="url + scope.row.matchImage2" v-if="scope.row.matchImage2" width="30px" style="vertical-align:middle;margin-right:10px" alt=""><span style="vertical-align:middle">{{scope.row.visitingTeam}}</span></span>
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
                      <span style="display:inline-block;text-align:left;width:200px;"><img :src="url + scope.row.matchImage2" v-if="scope.row.matchImage2" width="30px" style="vertical-align:middle;margin-right:10px" alt=""><span style="vertical-align:middle">{{scope.row.visitingTeam}}</span></span>
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
                      <span style="display:inline-block;text-align:left;width:200px;"><img :src="url + scope.row.matchImage2" v-if="scope.row.matchImage2" width="30px" style="vertical-align:middle;margin-right:10px" alt=""><span style="vertical-align:middle">{{scope.row.visitingTeam}}</span></span>
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
                      <span style="display:inline-block;text-align:left;width:200px;"><img :src="url + scope.row.matchImage2" v-if="scope.row.matchImage2" width="30px" style="vertical-align:middle;margin-right:10px" alt=""><span style="vertical-align:middle">{{scope.row.visitingTeam}}</span></span>
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
    <v-footer></v-footer>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'Index',
  components: {
    "v-header": Header,
    "v-footer": Footer
  },
  data () {
    return {
        active: -1,
        active1: -1,
        activeClass: -1,
        url: "http://47.75.166.143:8080"        
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
          this.activeClass = index;
          if(!id) {
            this.activeClass = -1;
            this.$store.dispatch("getMatchByProject");
          } else {
            this.$store.dispatch("getMatchByProject",id);
          }
          // 刷新列表
          this.getTableList();
      },
      getTableList(index, id) {
          this.active1 = index;
          this.$store.dispatch("getTableList", id);
      },
      handleClick(obj) {
          window.open("/live?todatMatchId="+ obj.id, "_blank");
      }
  }
}
</script>

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
        .active {
            background-color: #000;
        }
        ul {
            li {
                float: left;
                font-size: 16px;
                line-height: 48px;
                width: 80px;
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
}
</style>