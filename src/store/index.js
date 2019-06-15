import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    imgList:[]
}

const getters = {
    banner(state) {
        return state.imgList;
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
        //url: "http://47.75.166.143:8080/front/data/getBanner"
    }
}

const mutations = {
    ["GET_BANNER"](state, data) {
        state.imgList = data;
    }
}


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})







