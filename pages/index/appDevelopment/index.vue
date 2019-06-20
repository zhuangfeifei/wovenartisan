<template>
    <div id="appDevelopment">
        
        <nav>
            <img src="~/static/images/app/APPKAIFAbannerwz.png" alt="" srcset=""><br/>
            <div @click="contact" class="weChatDevelopment">联系我们</div>
        </nav>

        <div class="aboutIOS">
            <img src="~/static/images/app/IOSAPPkaifatu.png" alt="" srcset="">
            <div>
                <h4>iOS 开发</h4>
                <p>IOS是由苹果公司开发移动操作系统，原名为iPhone OS，因为iPhone、iPad、iPod touch都使用iPhone OS，便改名为IOS。最初是设计给iPhone使用的，后来陆续用到iPad、iPod touch以及Apple TV等产品上。因为IOS的系统稳定性高，界面美观易操作，安全性强以及应用软件数量多，所以IOS平台拥有数量庞大的app和第三方开发公司。</p>
                <img @click="contact" src="~/static/images/app/IOSAPPkaifaLXKF.png" alt="" srcset="">
            </div>
        </div>
        
        <div class="appDevelopment_advantage">
            <img class="appDevelopment_advantage_title" src="~/static/images/app/IOSAPPkfysBT.png" alt="" srcset="">
            <section class="aboutIOS_list">
                <div v-for="(item,index) in aboutIOSList" :key="index">
                    <img :src="item.img" alt="" srcset="">
                    <h5>{{item.title}}</h5>
                    <p>{{item.cont}}</p>
                </div>
            </section>
        </div>

        <div class="aboutAndroid">
            <div>
                <h4>Android 开发</h4>
                <p>安卓是由Google公司和开放手机联盟的领导开发的操作系统，最初主要支持手机，后逐渐扩展到平板电脑以及其他各领域。2007年11月，谷歌与众多硬件制造商、软件开发商及电信运营商组成开放手持设备联盟来共同研发改良Android。随后Google发布了Android源代码，并于2008年发布了第一款Android智能手机。</p>
                <img @click="contact" src="~/static/images/app/AndroidkaifaLXWM.png" alt="" srcset="">
            </div>
            <img src="~/static/images/app/Androidkaifatu.png" alt="" srcset="">
        </div>


        <div class="appDevelopment_advantage Android_advantage">
            <img class="appDevelopment_advantage_title Android" src="~/static/images/app/AndroidAPPkfysBT.png" alt="" srcset="">
            <section class="aboutIOS_list">
                <div v-for="(item,index) in aboutAndroidList" :key="index">
                    <img :src="item.img" alt="" srcset="">
                    <h5>{{item.title}}</h5>
                    <p>{{item.cont}}</p>
                </div>
            </section>
        </div>


        <div class="appDevelopment_plan">
            <img class="appDevelopment_plan_title" src="~/static/images/app/APPjiejuefanganBT.png" alt="" srcset="">
            <section>
                <div @click="prev" class="appDevelopment_plan_left"></div>
                <el-carousel height="10.4rem" :autoplay="false" arrow="never" indicator-position="none" ref="carousel">
                    <el-carousel-item v-for="(item,index) in planList" :key="index">
                        <div class="plan_list">
                            <img v-for="(listItem, itemIndex) in planList[index].list" :key="itemIndex" :src="itemIndex == planIndex ? listItem.activeImg : listItem.img" 
                                @mouseenter="planEnter(itemIndex)" @mouseleave="planLeave" alt="" srcset="">
                        </div>
                    </el-carousel-item>
                </el-carousel>
                <div @click="next" class="appDevelopment_plan_right"></div>
                <div class="carousel_position">
                    <span v-for="(item,index) in planList" :key="index" @mouseenter="enter(index)" :class="{active_carousel_position: index==activeIndex}"></span>
                </div>
            </section>
        </div>


        <div class="appDevelopmentProcess">
            <img class="appDevelopmentProcess_title" src="~/static/images/app/APP-KFLCBT.png" alt="" srcset="">
            <section class="appDevelopmentProcess_cont">
                <img src="~/static/images/app/-APP-KFLCtu.png" alt="" srcset="">
            </section>
        </div>



    </div>
</template>
<script>
export default {
    scrollToTop: true,
    data(){
        return{
            aboutIOSList:[
                {title:'iOS APP营收更容易', img: require('~/static/images/app/IOSAPPkfysTB1.png'), cont:'相对于Android用户来说，iPhone用户具有较高的消费能力，一方面来说苹果用户较为宽裕，另一方面iOS系统支付方式也很方便。'},
                {title:'iOS系统机型少，适配性高', img: require('~/static/images/app/IOSAPPkfysTB2.png'), cont:'相对于Android用户来说，iPhone用户具有较高的消费能力，一方面来说苹果用户较为宽裕，另一方面iOS系统支付方式也很方便。'},
                {title:'iOS应用发布统一且唯一', img: require('~/static/images/app/IOSAPPkfysTB3.png'), cont:'相对于Android用户来说，iPhone用户具有较高的消费能力，一方面来说苹果用户较为宽裕，另一方面iOS系统支付方式也很方便。'},
            ],
            aboutAndroidList:[
                {title:'Android系统用户数量多', img: require('~/static/images/app/AndroidAPPkfysTB1.png'), cont:'截止到2018年12月，国内智能机市场安卓占有80%的市场份额，远远领先IOS用户，而使用安卓系统的各类国产手机销量日益增高，安卓APP应用市场有更好的发展。'},
                {title:'Android系统开放性高', img: require('~/static/images/app/AndroidAPPkfysTB2.png'), cont:'安卓系统显著的开放性使其拥有更多的开发者，而且安卓APP开发难度相对于IOS要小，有利于Android系统人气的积累。'},
                {title:'硬件条件丰富', img: require('~/static/images/app/AndroidAPPkfysTB3.png'), cont:'Android硬件条件丰富源和安卓系统的开放性相关，众多厂商会推出功能各异的多种产品，功能上的差异和特色，不会影响到数据同步、设置软件的兼容。'},
            ],
            activeIndex:0,
            planList:[
                {
                    list:[
                        {img: require('~/static/images/app/APPjiejuefanganTU1.png'), activeImg: require('~/static/images/app/APPjiejuefanganWZ1.png')},
                        {img: require('~/static/images/app/APPjiejuefanganTU2.png'), activeImg: require('~/static/images/app/APPjiejuefanganWZ2.png')},
                        {img: require('~/static/images/app/APPjiejuefanganTU3.png'), activeImg: require('~/static/images/app/APPjiejuefanganWZ3.png')},
                        {img: require('~/static/images/app/APPjiejuefanganTU4.png'), activeImg: require('~/static/images/app/APPjiejuefanganWZ4.png')},
                        {img: require('~/static/images/app/APPjiejuefanganTU5.png'), activeImg: require('~/static/images/app/APPjiejuefanganWZ5.png')},
                        {img: require('~/static/images/app/APPjiejuefanganTU6.png'), activeImg: require('~/static/images/app/APPjiejuefanganWZ6.png')},
                    ]
                },
                {
                    list:[
                        {img: require('~/static/images/app/APPjiejuefanganTU7.png'), activeImg: require('~/static/images/app/APPjiejuefanganWZ7.png')},
                        {img: require('~/static/images/app/APPjiejuefanganTU8.png'), activeImg: require('~/static/images/app/APPjiejuefanganWZ8.png')},
                        {img: require('~/static/images/app/APPjiejuefanganTU9.png'), activeImg: require('~/static/images/app/APPjiejuefanganWZ9.png')},
                        {img: require('~/static/images/app/APPjiejuefanganTU10.png'), activeImg: require('~/static/images/app/APPjiejuefanganWZ10.png')},
                    ]
                }
            ],
            planIndex: -1
        }
    },
    created(){
        
    },
    methods:{
        enter(index){
            this.activeIndex = index
            this.$refs.carousel.setActiveItem(index)
        },
        prev(){
            this.$refs.carousel.prev()
            this.activeIndex = this.activeIndex == 0 ? 1 : 0
        },
        next(){
            this.$refs.carousel.next()
            this.activeIndex = this.activeIndex == 0 ? 1 : 0
        },
        planEnter(index){
            this.planIndex = index
        },
        planLeave(){
            this.planIndex = -1
        },
        contact(){
            this.$store.commit('isContact', true)
        }
    }
}
</script>
<style lang="less" scoped>
#appDevelopment{
    width: 100%;
}


nav{
    width: 100%; height: 8rem; background: url(../../../static/images/app/APPKAIFAbannertu.png) no-repeat; background-size: 100% 100%;
    padding-top: 2.75rem; padding-left: 3.19rem;
    img{width: 4.5rem; height: 2.19rem;}
    .weChatDevelopment{
        width: 3.4rem; height: 0.7rem; border: 0.02rem solid white; border-radius: 0.1rem; line-height: 0.6rem; margin-top: 0.5rem;
        font-family:SourceHanSansCN-Regular; font-weight:400; font-size: 0.2rem; color: white; text-align: center;
    }
    .weChatDevelopment:hover{cursor:pointer;}
}

.aboutIOS,.aboutAndroid{
    width: 100%; height: 6.4rem; display: flex; justify-content: center; padding-top: 0.61rem;
    img{width: 5.9rem; height: 5rem;}
    div{
        width: 5.2rem; margin-left: 1.4rem; letter-spacing: 0.05rem;
        h4{font-size: 0.36rem; font-family:SourceHanSansCN-Medium; font-weight:500; margin: 0.4rem 0;}
        p{font-size: 0.2rem;}
        img{width: 1.4rem; height: 0.44rem; margin-top: 0.39rem;}
        img:hover{cursor:pointer;}
    }
}
.aboutAndroid{
    div{ margin-right: 1.4rem;}
}


.appDevelopment_advantage{
    width: 100%; height: 6rem; background: url(../../../static/images/app/IOSAPPkfysBG.png) no-repeat; background-size: 100% 100%;
    text-align: center; padding-top: 1.09rem;
    .appDevelopment_advantage_title{width: 2.46rem; height: 0.42rem;}
    .aboutIOS_list{
        display: flex; justify-content: space-around; padding: 0.9rem 3rem;
        div{
            width: 3.4rem;
            img{width: 0.7rem; height: 0.78rem;}
            h5{font-size: 0.2rem; font-family:SourceHanSansCN-Medium; font-weight:550; margin-top: 0.5rem; margin-bottom: 0.3rem;}
            p{font-size: 0.16rem; text-align: left;}
        }
        div:nth-child(2) img{width: 0.5rem; height: 0.78rem;}
        div:nth-child(3) img{width: 0.66rem; height: 0.76rem;}
    }
}
.Android_advantage{
    background: url(../../../static/images/app/AndroidAPPkfysBG.png) no-repeat; background-size: 100% 100%;
    .aboutIOS_list{
        div:nth-child(1) img{width: 0.63rem; height: 0.72rem;}
        div:nth-child(2) img{width: 0.78rem; height: 0.74rem;}
        div:nth-child(3) img{width: 0.74rem; height: 0.74rem;}
    }
}
.Android{
    width: 3.19rem; height: 0.42rem;
}




.appDevelopment_plan{
    width: 100%; height: 14.5rem; background-color: #F8F8F8; text-align: center; padding-top: 0.8rem;
    .appDevelopment_plan_title{width: 1.86rem; height: 0.42rem;}
    section{
        width: 100%; display: flex; justify-content: space-around; align-items: center; margin-top: 0.9rem; position: relative;
        .appDevelopment_plan_left{
            width: 1.11rem; height: 1.11rem;
            background: url(../../../static/images/app/APPJJFAsygTB.png) no-repeat; background-size: 100% 100%;
        }
        .appDevelopment_plan_right{
            width: 1.11rem; height: 1.11rem;
            background: url(../../../static/images/app/APPJJFAxygTB.png) no-repeat; background-size: 100% 100%;
        }
        .appDevelopment_plan_left:hover{
            background: url(../../../static/images/app/APPJJFAsygYTB.png) no-repeat; background-size: 100% 100%;
            cursor:pointer;
        }
        .appDevelopment_plan_right:hover{
            background: url(../../../static/images/app/APPJJFAxygYTB.png) no-repeat; background-size: 100% 100%;
            cursor:pointer;
        }
    }
}



.el-carousel{
    width: 11.5rem;
}
.el-carousel__item{height: 100%;}
.carousel_position{
    width: 100%; height: 0.1rem; position: absolute; bottom: -1.1rem; left: 0;
    span{
        display: inline-block; width: 1rem; height: 100%; background-color: #2589FF; opacity: 0.2; margin-right: 0.2rem;
    }
    .active_carousel_position{opacity: 0.8;cursor:pointer;}
}
.plan_list{
    width: 100%; display: flex; flex-wrap: wrap;
    img{width: 3.82rem; height: 5.22rem;}
}



.appDevelopmentProcess{
    width: 100%; height: 7.5rem; background-color: white;
    text-align: center; padding-top: 0.7rem;
    .appDevelopmentProcess_title{width: 1.22rem; height: 0.42rem;}
    .appDevelopmentProcess_cont{
        width: 12rem; height: 4.32rem; margin: 0 auto; margin-top: 0.96rem;
        img{width: 100%; height: 100%;}
    }
}



</style>


