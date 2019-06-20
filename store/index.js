import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Api from './axios/api'

const store = () => new Vuex.Store({

  state: {
    // imgUrl:'http://192.168.0.105:8080/bus/kaptcha/file/website/',
    imgUrl:'https://www.zjwl.shop/business/website/',
    indexUrlActive: 0,
    swiperList:'',
    getTypeList:'',
    getServiceList:'',
    getCategoryList:'',
    isContact: false
  },
  mutations: {
    isContact(state, res){
        state.isContact = res
    },
    indexUrlActive(state, res){
        state.indexUrlActive = res
    },
    swiperList(state, res){
        state.swiperList = res
    },
    getTypeList(state, res){
        state.getTypeList = res
    },
    // getServiceList(state, res){
    //     state.getServiceList = res
    // },
    getCategoryList(state, res){
        state.getCategoryList = res
    },
  },
  actions:{
    getBannerList({commit}){ // 获取轮播图
        Api('/bus/api/banner/getBannerList').then(res=>{
            // console.log(res.data)
            if(res.data.code == 200){
                commit('swiperList', res.data.data)
            }
        })
    }, 
    getTypeList({commit}){ // 获取服务类型列表
        Api('/bus/api/type/getTypeList').then(res=>{
            // console.log(res.data)
            if(res.data.code == 200){
                commit('getTypeList', res.data.data)
            }
        })
    }, 
    // getServiceList({commit}, data){ // 获取服务列表
    //     Api('/bus/api/service/getServiceList', data).then(res=>{
    //         // console.log(res.data)
    //         if(res.data.code == 200){
    //             commit('getServiceList', res.data.data)
    //         }
    //     })
    // }, 
    getCategoryList({commit}){ // 获取客户案例分类列表
        Api('/bus/api/category/getCategoryList').then(res=>{
            // console.log(res.data)
            if(res.data.code == 200){
                commit('getCategoryList', res.data.data)
            }
        })
    }, 
  }
})

export default store