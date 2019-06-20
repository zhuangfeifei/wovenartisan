<template>
    <div>

        <!-- 轮播 -->
        <nav>
            <div id="swiper">
                <el-carousel height="8rem">
                    <el-carousel-item v-for="(item, index) in swiperList" :key="index">
                        <div class="swiperList">
                            <img :src="imgUrl+item.pic" alt="" srcset="">
                            <swiper-item :swiperIndex="index"></swiper-item>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </nav>

        <!-- 织匠服务 -->
        <div id="service">
            <img class="service_title" src="~/static/images/home/SBT-1.png" alt="" srcset="">
            <div class="service_list">
                <div class="service_content" @mouseenter="enter(index)" @mouseleave="leave"
                    v-for="(item,index) in getTypeList" :key="index" :class="{service_content_active: index == activeIndex}" >
                    <!-- :style="{background:'url('+require('~/static/images/home/-s-bg-1.png')+') no-repeat;',backgroundSize: '100% 100%;'}" -->
                    <img v-if="index == activeIndex" class="service_back" :src="serviceImg[activeIndex].back" alt="" srcset="">
                    <div v-if="index == activeIndex" class="service_contents">
                        <div class="service_content_title">
                            <div>
                                <div>
                                    <img :src="serviceImg[activeIndex].small" alt="" srcset="">
                                </div>
                                <span>{{item.title}}</span>
                            </div>
                            <div @click="router(index)">
                                <img src="~/static/images/home/more.png" alt="" srcset="">
                                <!-- <nuxt-link :to="{name: serviceImg[index].url}"><img src="~/static/images/home/more.png" alt="" srcset=""></nuxt-link> -->
                            </div>
                        </div>
                        <div class="service_content_">
                            <div v-for="(itemClass, calssIndex) in item.service" :key="calssIndex">
                                <h3>{{itemClass.name}}</h3>
                                <div><p>{{itemClass.description}}</p></div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="service_contents">
                        <section><img :src="serviceImg[index].big" alt="" srcset=""></section>
                        <h4>{{item.title}}</h4>
                        <div class="service_content_solid">
                            <p v-for="(itemClass, calssIndex) in item.service" :key="calssIndex">{{itemClass.name}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="SmallProgram">
            <img src="~/static/images/home/-s-WZ-1.png" alt="" srcset="">
        </div>
        
        <!-- 客户案例 -->
        <customer-case :getCategoryList="getCategoryList"></customer-case>

        <div id="why">
            <section class="whyTitle"><img src="~/static/images/home/SBT-3.png" alt="" srcset=""></section>
            <div class="whyContext">
                <section v-for="(item,index) in whyList" :key="index">
                    <div>
                        <span>{{item.title}}</span>
                        <p>{{item.cont}}</p>
                    </div>
                </section>
            </div>
        </div>

    </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import swiper_item from "~/components/swiper_item";
import customer_case from "~/components/customer_case";
import storage from "../../static/js/storage"
export default {
    scrollToTop: true,
    data(){
        return{
            activeIndex: 0,
            serviceImg:[
                {url:'index-wechat', back:require('~/static/images/home/-s-bg-1.png'), small:require('~/static/images/home/WXKFXZ.png'), big:require('~/static/images/home/WXKFWXZ.png')},
                {url:'index-appDevelopment',back:require('~/static/images/home/-s-bg-3.png'), small:require('~/static/images/home/APPKFXZ.png'), big:require('~/static/images/home/APPKFWXZ.png')},
                {url:'index-webConstruction',back:require('~/static/images/home/-s-bg-4.png'), small:require('~/static/images/home/WZJSXZ.png'), big:require('~/static/images/home/WZJSWXZ.png')}
            ],
            whyList:[
                {title:'可靠性与安全性', cont:'基于系统安全模块，对传输数据加密，校验、地址防注入、动态验证等多种方式保障系统安全。'},
                {title:'专业开发团队', cont:'资深技术团队，项目经理全场监督，从设计到开发到交付，确保所想即所得。'},
                {title:'树立良好品牌', cont:'公司秉承以用户需求为核心，提供优质、用心的服务树立公司良好品牌。'},
                {title:'售后服务保障', cont:'资深网络公司，公司深度整合，全面捍卫品牌品质、程序、技术、服务。'},
            ]
        }
    },
    components:{
        "swiper-item": swiper_item,
        "customer-case": customer_case,
    },
    computed:{
        ...mapState({
            imgUrl: state => state.imgUrl,
            swiperList: state => state.swiperList,
            getTypeList: state => state.getTypeList,
            getCategoryList: state => state.getCategoryList,
        })
    },
    asyncData(){
        // return 
    },
    created(){
        
        // window.scrollTo(0,0);
    },
    methods:{
        enter(index){
            // this.$store.dispatch('getServiceList', { serviceType: id })
            this.activeIndex = index
        },
        leave(){
            this.activeIndex = -1
        },
        router(index){
            this.$store.commit('indexUrlActive', index)
            this.$router.push({name:this.serviceImg[index].url})
        }
    },
}
</script>
<style lang="less" scoped>

nav{
    width: 100%; height: 8rem; position: relative;
    // background: url(https://www.zjwl.shop/business/website/img/-s-banner1ditu.png) no-repeat; background-size: 100% 100%;
    #swiper{
        width: 100%; height: 100%;
        .swiperList{
            img{width: 100%; height: 8rem;}
        }
    }
}


#service{
    width: 100%; height: 8.72rem; text-align: center; padding-top: 0.3rem;
    .service_title{
        width: 3.58rem; height: 1.34rem;
    }
    .service_list{
        height: 5.6rem; margin: 0 auto; margin-top: 0.6rem; display: flex; justify-content: center;
        .service_content{
            width: 3.6rem; height: 5.4rem; border-radius: 0.15rem; border:1px solid rgba(206,206,206,1); border-right: 0;
            font-family:SourceHanSansCN-Regular; font-weight: 400; position: relative;
            .service_back{
                position: absolute; top: 0; left: 0; -webkit-transform:scale(1.15); -ms-transform:scale(1.15); transform:scale(1.15);
            }
            .service_contents{position: relative;}
            section{
                margin-top: 0.44rem;
                img{width: 1.35rem; height: 1.335rem; border-radius: 50%;}
            }
            h4{font-size: 0.24rem; color: #1E1E1E; font-family:SourceHanSansCN-Regular; font-weight: 400; line-height: 0.4rem;}
            .service_content_solid{
                width: 2rem; border-top: 1px solid #CECECE; margin: 0 auto; margin-top: 0.3rem;
                p{font-size: 0.18rem; color: #6F6F6F; margin-top: 0.4rem;}
            }
        }
        .service_content_active{
            width: 4.82rem; height: 5.6rem; background-size: 100% 100%; border: 0;
            // background-color: #2589FF; box-shadow:0px 0px 0.3rem 0px rgba(37,137,255,0.71);
            padding: 0 0.25rem; color: white; overflow: hidden!important;
            .service_content_title{
                width: 100%; height: 1.23rem; display: flex; justify-content: space-between; align-items: center;
                & div:nth-child(1){
                    height: 0.7rem; display: flex; align-items: center;
                    & div{
                        width: 0.7rem; height: 0.7rem; margin-right: 0.21rem;
                        img{ width: 100%; height: 100%; border-radius: 50%;}
                    }
                    & span{font-size: 0.24rem;}
                }
                & div:nth-child(2){
                    width: 1rem; height: 0.4rem; background-color: white; border-radius: 0.05rem; line-height: 0.4rem; color: #2589FF;
                    img{width: 1rem; height: 0.4rem;}
                    p{ font-size: 0.16rem; 
                        // transform:scale(0.7); -webkit-transform:scale(0.7); -ms-transform:scale(0.7);
                    }
                }
                & div:hover{cursor:pointer;}
            }
            .service_content_{
                width: 100%; height: 4.1rem; border-top: 1px solid #CECECE; text-align: left; padding: 0.38rem 0;
                overflow: hidden!important;
                // overflow-y: scroll;
                h3{font-size: 0.18rem; line-height: 0.4rem}
                div{
                    // width: 145%;
                    margin-bottom: 0.25rem;
                    p{
                        font-size: 0.14rem; 
                        // position: relative; top: -15%; left: -15%;
                        // transform:scale(0.7); -webkit-transform:scale(0.7); -ms-transform:scale(0.7);
                    }
                }
            }
        }
        .service_content:last-child{
            border-right: 1px solid rgba(206,206,206,1);
        }
        // .service_content:hover{
        //     width: 4.82rem; height: 5.6rem; border: 0;
        //     background-color: #2589FF; box-shadow:0px 0px 0.3rem 0px rgba(37,137,255,0.71);
        // }
    }
}


#SmallProgram{
    width: 100%; height: 5.91rem; background: url('../../static/images/home/-s-bg-5.png') no-repeat; background-size: 100% 100%;
    display: flex; justify-content: center; align-items: center;
    img{width: 12.67rem; height: 4.5rem;}
}


#why{
    width: 100%; height: 5.5rem; padding-top: 0.44rem;
    .whyTitle{
        width: 6.22rem; height: 1.37; margin: 0 auto;
        img{width: 100%; height: 100%;}
    }
    .whyContext{
        width: 12.4rem; display: flex; flex-wrap: wrap; justify-content: center; margin: 0 auto; margin-top: 0.35rem;
        section{
            width: 6.2rem; height: 1.6rem; display: flex; align-items: center; padding: 0 0.3rem 0 1.49rem;
            span{font-size: 0.18rem; color: #363636;font-family:SourceHanSansCN-Medium; font-weight:550;}
            p{font-size: 0.16rem; color: #7F7F7F; line-height: 0.25rem; }
        }
        section:nth-child(1){
            background: url('../../static/images/home/-s-bg-7.png') no-repeat; background-size: 100% 100%;
        }
        section:nth-child(2){
            background: url('../../static/images/home/-s-bg-8.png') no-repeat; background-size: 100% 100%; position: relative; left: -0.25rem;
        }
        section:nth-child(3){
            background: url('../../static/images/home/-s-bg-9.png') no-repeat; background-size: 100% 100%; position: relative; top: -0.3rem;
        }
        section:nth-child(4){
            background: url('../../static/images/home/-s-bg-10.png') no-repeat; background-size: 100% 100%; position: relative; left: -0.25rem; top: -0.3rem;
        }
    }
}
</style>


