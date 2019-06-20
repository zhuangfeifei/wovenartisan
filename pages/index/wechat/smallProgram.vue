<template>
    <div id="smallProgram">
        
        <nav><img src="~/static/images/wx/xiaochengxukaifaBANNERwz.png" alt="" srcset=""></nav>

        <div class="aboutSmallProgram">
            <img src="~/static/images/wx/guanyuxiaochengxutu.png" alt="" srcset="">
            <div>
                <h4>关于小程序</h4>
                <p>微信小程序是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或者搜一下即可打开应用。小程序能够实现消息通知、线下扫码、对话分享、历史列表、小程序切换、搜索查找、公众号关联等七大功能。其中，通过公众号关联，用户可以实现公众号与小程序之间相互跳转。</p>
            </div>
        </div>

        <div class="storeApplet">
            <img class="storeApplet_title" src="~/static/images/wx/mendiaoxiaochengxuBT.png" alt="" srcset="">
            <div class="storeApplet_content">
                <div v-for="(item,index) in storeAppletList" :key="index">
                    <img :src="item.img" alt="" srcset="">
                    <p>{{item.title}}</p>
                </div>
            </div>
            <img @click="contact" class="XlianxikefuAN" src="~/static/images/wx/XlianxikefuAN.png" alt="" srcset="">
        </div>

        <div class="shopApplet">
            <img class="shopApplet_title" src="~/static/images/wx/shangchengxiaochengxuBT.png" alt="">
            <h5>商城小程序，独创分销引流+营销裂变=双核运营模式！</h5>
            <div class="shopApplet_title_content">
                <p>内置业内首屈一指的海量营销模块，为你打造独一无二的小程序</p>
                <p>微信小程序商城具备强大“分销”的吸粉功能，并实现分销裂变锁粉、供应</p>
            </div>
            <div class="shopApplet_list">
                <div class="shopApplet_list_item" v-for="(item,index) in shopAppletList" :key="index">
                    <div>
                        <h4>{{item.title}}</h4>
                        <p>{{item.cont}}</p>
                    </div>
                    <img :src="item.img" alt="" srcset="">
                </div>
            </div>
            <img @click="contact" class="shopApplet_bottom" src="~/static/images/wx/XlianxikefuAN.png" alt="">
        </div>

        <div class="smallProgram_footer">
            <img class="smallProgram_footer_title" src="~/static/images/wx/shangchengxiaochengxuBT.png" alt="">
            <div class="process">
                <div class="process_solid"></div>
                <section>
                    <img src="~/static/images/wx/XCXKFLCtu11.png" alt="" srcset="">
                    <!-- <div class="process_list" v-for="(item,index) in processList" :key="index">
                        <img class="process_list_icon" :src="item.icon" alt="" srcset="">
                        <div>
                            <img class="process_list_back" :src="item.img" alt="" srcset="">
                            <p>{{item.title}}</p>
                            <p>{{item.cont}}</p>
                        </div>
                    </div> -->
                </section>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    scrollToTop: true,
    data(){
        return{
            storeAppletList:[
                {title:'不用下载，即开即用，用完就走。省流量，省设备时间，不占用桌面；', img: require('~/static/images/wx/MDXCX1.png')},
                {title:'体验上虽然无法完全媲美原生APP，但概括考虑仍是更优；', img: require('~/static/images/wx/MDXCX2.png')},
                {title:'于商家来说，小程序开发本钱更低，能够有更多财力，人力，精力放在怎样运营好产品，做好内容本身；', img: require('~/static/images/wx/MDXCX3.png')},
                {title:'于用户来说，相较于各种APP，微信小程序UI和操作流程会更共同。这也会下降用户的运用难度；', img: require('~/static/images/wx/MDXCX4.png')},
                {title:'相较于原生APP，小程序推行更简略更简略，更省本钱。', img: require('~/static/images/wx/MDXCX5.png')},
            ],
            shopAppletList:[
                {title:'可拓展', img: require('~/static/images/wx/SCXCXTB1.png'), cont:'可打通强大的“微分销”系统使用，一店双核全面引流'},
                {title:'可分销', img: require('~/static/images/wx/SCXCXTB2.png'), cont:'独立小程序实现小程序分销锁粉，佣金计算和自动发放机制'},
                {title:'智锁粉', img: require('~/static/images/wx/SCXCXTB3.png'), cont:'通过精细化的粉丝触达进行锁粉'},
                {title:'能营销', img: require('~/static/images/wx/SCXCXTB4.png'), cont:'自带几十款热门的营销工具'},
                {title:'能管理', img: require('~/static/images/wx/SCXCXTB5.png'), cont:'设置分销中心，会员、佣金、余额等一目了然'},
                {title:'一键开店', img: require('~/static/images/wx/SCXCXTB6.png'), cont:'一键授权，平台自动发布上线，省时省力'},
            ],
            // processList:[
            //     {title:'产品咨询', icon: require('~/static/images/wx/XCXKFLCTB1.png'), img: require('~/static/images/wx/XCXKFLCXBG1.png'), cont:'结合您的项目需求和微信小程序自身的性质，我们的产品经理会帮您策划合理可行的方案。'},
            //     {title:'需求梳理', icon: require('~/static/images/wx/XCXKFLCTB2.png'), img: require('~/static/images/wx/XCXKFLCXBG2.png'), cont:'我们会把需求梳理成完善的功能文档，包含前端和后台详细的功能描述，让项目执行更高效透明。'},
            //     {title:'设计开发', icon: require('~/static/images/wx/XCXKFLCTB3.png'), img: require('~/static/images/wx/XCXKFLCXBG3.png'), cont:'熟悉微信小程序开发和设计规范的设计师和工程师进行项目开发，定期会向您发送项目进度报告。'},
            //     {title:'测试上线', icon: require('~/static/images/wx/XCXKFLCTB4.png'), img: require('~/static/images/wx/XCXKFLCXBG4.png'), cont:'我们联合第三方测试机构，对小程序在不同手机和微信版本做全面测试。'},
            // ],
        }
    },
    created(){
        
    },
    methods:{
        contact(){
            this.$store.commit('isContact', true)
        }
    }
}
</script>
<style lang="less" scoped>
#smallProgram{
    width: 100%;
}


nav{
    width: 100%; height: 8rem; background: url(../../../static/images/wx/xiaochengxukaifaBANNERbg.png) no-repeat; background-size: 100% 100%;
    text-align: center; padding-top: 2.66rem;
    img{width: 10.25rem; height: 2.93rem;}
}


.aboutSmallProgram{
    width: 100%; height: 6.4rem; display: flex; justify-content: center; padding-top: 0.61rem;
    img{width: 6rem; height: 5.12rem;}
    div{
        width: 4.55rem; margin-left: 1.4rem; letter-spacing: 0.05rem;
        h4{font-size: 0.36rem; font-family:SourceHanSansCN-Medium; font-weight:500; margin: 0.4rem 0;}
        p{font-size: 0.26rem;}
    }
}


.storeApplet{
    width: 100%; height: 12.62rem; background-color: #F8F8F8; padding-top: 0.31rem; text-align: center;
    .storeApplet_title{
        width: 3.32rem; height: 1.34rem;
    }
    .storeApplet_content{
        width: 14rem; display: flex; flex-wrap: wrap; margin: 0 auto; margin-top: 0.67rem;
        div{
            width: 3rem; padding-bottom: 0.81rem; margin-left: 1.34rem; font-size: 0.2rem;
            img{width: 100%; height: 2.29rem; margin-bottom: 0.2rem;}
        }
    }
    .XlianxikefuAN{width: 2.8rem; height: 0.6rem;}
    .XlianxikefuAN:hover{cursor:pointer;}
}


.shopApplet{
    width: 100%; height: 13.41rem; padding-top: 0.3rem; text-align: center;
    .shopApplet_title{
        width: 3.33rem; height: 1.34rem; margin-bottom: 0.5rem;
    }
    h5{font-size: 0.3rem; font-family:SourceHanSansCN-Regular; font-weight:400;}
    h5::before{
        content: ' '; display: inline-block; width: 0.06rem; height: 0.2rem; background-color: #2589FF; margin-right: 0.15rem;
    }
    .shopApplet_title_content{
        width: 7rem; text-align: left; margin: 0 auto; margin-top: 0.38rem;
    }
    p{font-size: 0.2rem;}
    .shopApplet_list{
        width: 12rem; margin: 0 auto; display: flex; justify-content: space-between; flex-wrap: wrap; margin-top: 1rem;
        .shopApplet_list_item{
            width: 5.9rem; height: 2rem; background-color: rgba(37,137,255, 0.1); margin-bottom: 0.21rem; border-radius: 0.1rem;
            display: flex; justify-content: space-between; align-items: center; text-align: left; padding-right: 0.45rem;
            h4{font-size: 0.3rem; font-family:SourceHanSansCN-Regular; font-weight:400; margin-bottom: 0.1rem;}
            div{width: 3.6rem; height: 100%; padding: 0.4rem 0 0.45rem 0.3rem;}
            img{width: 1.22rem; height: 1.22rem;}
        }
    }
    .shopApplet_bottom{
        width: 2.8rem; height: 0.6rem; margin-top: 0.85rem;
    }
    .shopApplet_bottom:hover{cursor:pointer;}
}


.smallProgram_footer{
    width: 100%; height: 7.5rem; background: url(../../../static/images/wx/XCXKFLCBG.png) no-repeat; background-size: 100% 100%;
    text-align: center; padding-top: 0.78rem;
    .smallProgram_footer_title{
        width: 3.41rem; height: 1.34rem;
    }
    .process{
        width: 12rem; margin: 0 auto; margin-top: 0.95rem; position: relative; padding-top: 0.2rem;
        // .process_solid{
        //     width: 100%; height: 0.1rem; background-color: #E1E1E1;
        // }
        section{
            width: 100%; display: flex; justify-content: space-around; position: absolute; top: 0; left: 0;
            img{
                width: 12rem; height: 2.98rem;
            }
            // .process_list{
            //     width: 2rem;
            //     .process_list_icon{width: 0.36rem; height: 0.42rem;}
            //     div{
            //         width: 100%; height: 2.21rem; margin-top: 0.35rem; position: relative; padding: 0.3rem 0.17rem; letter-spacing: 0.02rem;
            //         .process_list_back{width: 100%; height: 100%; position: absolute; top: 0; left: 0;}
            //         p:nth-child(2){position: relative; line-height: 0.4rem; text-align: center;}
            //         p{position: relative; font-size: 0.16rem; color: #FFFFFF; text-align: left;}
            //     }
            // }
        }
    }
}



</style>


