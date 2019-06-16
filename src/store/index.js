import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    imgList:[],
    projectData:[],
    matchs:[],
    linkList:[],
    tabData: {
      todayMatchs: {
        match: [],
        date: ""
      },
      tomorrowMatchs: {
        match: [],
        date: ""
      },
      thirdMatchs: {
        match: [],
        date: ""
      },
      fourMatchs: {
        match: [],
        date: ""
      },
      fiveMatchs: {
        match: [],
        date: ""
      },
      sixMatchs: {
        match: [],
        date: ""
      },
      sevenMatchs: {
        match: [],
        date: ""
      }
    }
}

const getters = {
    banner(state) {
        return state.imgList;
    },
    projectData(state) {
        return state.projectData;
    },
    matchs(state) {
        return state.matchs;
    },
    tabData(state) {
        return state.tabData;
    },
    linkList(state) {
        return state.linkList;
    }
}

const actions = {
    getBanner({commit, state}) {
        axios.post('http://47.75.166.143:8080/front/data/getBanner').then(resp => {
            if(resp.data.status === "200") {
                //console.log(resp.data.data.banners);
                commit("GET_BANNER", resp.data.data.banners);
            }
        })
    },
    getProjects({commit, state}) {
        axios.post('http://47.75.166.143:8080/front/tmatch/getProjects').then(resp => {
            if(resp.data.status === "200") {
                // console.log(resp.data.data.projects);
                commit("GET_PROJECTS", resp.data.data.projects);
            }
        })
    },
    getMatchByProject({commit, state}, id) {
        // let matchId = id || state.projectData[0].id;
        let matchId = id;
        let url = "";
        if (id) {
            url = "http://47.75.166.143:8080/front/tmatch/getMatchByProject?projectId=" +matchId;
        } else {
            url = "http://47.75.166.143:8080/front/tmatch/getMatchByProject";
        }
        axios.get(url).then(resp => {
            if(resp.data.status === "200") {
                //console.log(resp.data.data.matchs);
                commit("GET_MATCHBYPROJECT", resp.data.data.matchs);
            }
        });
    },
    getTableList({commit, state}, id) {
        let toMatchId = id || [];
        axios.get("http://47.75.166.143:8080/front/tmatch/getTodayMatch?toMatchId=" +toMatchId).then(resp => {
            if(resp.data.status === "200") {
                //console.log(resp.data.data);
                commit("GET_TABLELIST", resp.data.data);
            }
        })
    },
    getLinkList({commit, state}) {
        axios.get("http://47.75.166.143:8080/front/data/getLink?network=24zhibo").then(resp => {
            if(resp.data.status === "200") {
                //console.log(resp.data.data.links);
                commit("GET_LINKLIST", resp.data.data.links);
            }
        });
    }
}

const mutations = {
    ["GET_BANNER"](state, data) {
        state.imgList = data;
    },
    ["GET_PROJECTS"](state, data) {
        state.projectData = data;
    },
    ["GET_MATCHBYPROJECT"](state, data) {
        state.matchs = data || [];
    },
    ["GET_TABLELIST"](state, data) {
        state.tabData = data || {};
    },
    ["GET_LINKLIST"](state, data) {
        state.linkList = data || [];
    }
}


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})







