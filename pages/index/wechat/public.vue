<template>
    <div id="public">
        
        <nav><img src="~/static/images/public/wxgzhkfBANNERwz.png" alt="" srcset=""></nav>

        <div class="aboutpublic">
            <div>
                <h4>关于公众号</h4>
                <p>微信营销作为当下热门的线上营销方式被越来越多的企业所看重，但是微信平台自带的功能有很多局限性，无法满足企业的功能服务需求，所以就需要对微信公众平台进行二次开发。织匠为客户提供专业的微信公众平台开发，在金融、医疗、酒店、教育、快递等行业有成熟的微信开发解决方案。</p>
            </div>
            <img src="~/static/images/public/guanyugongzhonghaotu.png" alt="" srcset="">
        </div>
        <div class="aboutpublic_list">
            <section v-for="(item,index) in aboutpublicList" :key="index">
                <img class="aboutpublic_list_icon" :src="item.img" alt="" srcset="">
                <h5>{{item.title}}</h5>
                <div class="aboutpublic_list_solid"></div>
                <div>{{item.cont}}</div>
                <img @click="contact" class="WXKFFWlxkfAN" src="~/static/images/public/WXKFFWlxkfAN.png" alt="" srcset="">
            </section>
        </div>


        <div class="advantage">
            <img class="advantage_title" src="~/static/images/public/wxgzhysBT.png" alt="" srcset="">
            <div class="advantage_list">
                <section v-for="(item,index) in advantageList" :key="index">
                    <div class="advantage_list_num">{{index+1}}</div>
                    <div class="advantage_list_cont">
                        <span>{{item.title}}</span>
                        <p>{{item.cont}}</p>
                    </div>
                </section>
            </div>
        </div>


        <div class="function">
            <img class="function_title" src="~/static/images/public/wxgzhgnBT.png" alt="" srcset="">
            <section class="function_list">
                <img v-for="(item,index) in functionList" :key="index" :src="index == activeIndex ? item.activeImg : item.img" 
                    @mouseenter="enter(index)" @mouseleave="leave" alt="" srcset="">
            </section>
        </div>


        <div class="publicProcess">
            <img class="publicProcess_title" src="~/static/images/public/gzhkflcBT.png" alt="" srcset="">
            <section class="publicProcess_cont">
                <img src="~/static/images/public/GZHKFLCneirong.png" alt="" srcset="">
            </section>
        </div>



    </div>
</template>
<script>
export default {
    scrollToTop: true,
    data(){
        return{
            aboutpublicList:[
                {title:'微信服务号开发', img: require('~/static/images/public/wxfwhkfTB.png'), cont:'微信服务号开发，定制个性化功能，可以和企业网站、手机站、APP等连接，实现数据的同步，提升企业的业务能力和用户管理能力，让营销变得更容易。'},
                {title:'微信订阅号开发', img: require('~/static/images/public/wxdyhkfTB.png'), cont:'微信订阅号开发，能够帮助企业实现产品宣传，提供图文、视频、音频传播方式，更好的与用户互动。'},
                {title:'微信企业号开发', img: require('~/static/images/public/wxqyhkfTB.png'), cont:'微信企业号开发以企业需求为前提，帮助企业建立员工、上下游供应链与企业IT系统间的连接，实现生产、管理、协作、运营的移动化。'},
            ],
            advantageList:[
                {title:'移动互联网趋势', cont:'移动互联网用户已超传统互联网用户，成为目前的主流。'},
                {title:'巨大流量入口', cont:'微信日平均用户达7亿，用户基数大，活跃度高。'},
                {title:'强大的用户粘性和使用习惯', cont:'人人都在使用微信，其用户黏度远超其他社交APP。'},
                {title:'差异化服务', cont:'微信公众号开发定制，更有特色，更符合用户需求。'},
                {title:'时尚的产品销售渠道', cont:'微商城开发，在线购买、支付、促销，互动强的电商平台。'},
                {title:'高效CRM管理', cont:'微信粉丝即用户，对用户分类管理和营销。'},
                {title:'低成本营销', cont:'企业微信公众号是一次性投资，终身可以使用，物超所值。'},
            ],
            functionList:[
                {img: require('~/static/images/public/WXh5YMZZ1.png'), activeImg: require('~/static/images/public/WXh5YMZZ2.png')},
                {img: require('~/static/images/public/WGWKF1.png'), activeImg: require('~/static/images/public/WXGWKF2.png')},
                {img: require('~/static/images/public/WXYYGNKF1.png'), activeImg: require('~/static/images/public/WXYYGNKF2.png')},
                {img: require('~/static/images/public/WXlbsDWGNKF1.png'), activeImg: require('~/static/images/public/WXlsbDWGNKF2.png')},
                {img: require('~/static/images/public/WHYGNKF1.png'), activeImg: require('~/static/images/public/WHYGNKF2.png')},
                {img: require('~/static/images/public/WXh5XYXKF1.png'), activeImg: require('~/static/images/public/WXh5XYXKF2.png')},
            ],
            activeIndex: -1
        }
    },
    created(){
        
    },
    methods:{
        enter(index){
            this.activeIndex = index
        },
        leave(){
            this.activeIndex = -1
        },
        contact(){
            this.$store.commit('isContact', true)
        }
    }
}
</script>
<style lang="less" scoped>
#public{
    width: 100%;
}


nav{
    width: 100%; height: 8rem; background: url(../../../static/images/public/wxgzhkfBANNERbg.png) no-repeat; background-size: 100% 100%;
    text-align: center; padding-top: 2.66rem;
    img{width: 10.25rem; height: 2.93rem;}
}

.aboutpublic{
    width: 100%; height: 6.4rem; display: flex; justify-content: center; padding-top: 0.61rem;
    img{width: 6rem; height: 5.12rem;}
    div{
        width: 4.55rem; margin-right: 1.4rem; letter-spacing: 0.05rem;
        h4{font-size: 0.36rem; font-family:SourceHanSansCN-Medium; font-weight:500; margin: 0.4rem 0;}
        p{font-size: 0.26rem;}
    }
}
.aboutpublic_list{
    width: 100%; display: flex; justify-content: center; padding-bottom: 1rem; margin-top: 0.5rem;
    section{
        width: 3.9rem; height: 5.3rem; border: 1px solid #CECECE; border-radius: 0.1rem; text-align: center; 
        padding: 0.4rem; position: relative; margin-left: 0.2rem;
        .aboutpublic_list_icon{width: 0.88rem; height: 0.82rem;}
        h5{font-size: 0.3rem;font-family:SourceHanSansCN-Medium;font-weight:500; margin-top: 0.5rem; margin-bottom: 0.22rem;}
        .aboutpublic_list_solid{width: 1.5rem; height: 0.06rem; background-color: #2589FF; border-radius: 0.03rem; margin: 0 auto;}
        div{text-align: left; margin-top: 0.65rem; font-size: 0.16rem;}
        .WXKFFWlxkfAN{width: 1.4rem; height: 0.44rem; position: absolute; bottom: 0.4rem; left: 1.25rem; }
    }
    section:nth-child(2) .aboutpublic_list_icon{width: 0.72rem; height: 0.84rem;}
    section:nth-child(3) .aboutpublic_list_icon{width: 0.89rem; height: 0.82rem;}
}



.advantage{
    width: 100%; height: 8rem; background: url(../../../static/images/public/weixingongzhonghaoyoushiBG.png) no-repeat; background-size: 100% 100%;
    padding-top: 0.7rem; text-align: center;
    .advantage_title{width: 2.17rem; height: 0.42rem; margin-bottom: 0.99rem;}
    .advantage_list{
        width: 12rem; margin: 0 auto; text-align: left;
        display: flex; flex-wrap: wrap; justify-content: space-between;
        section{
            width: 5.5rem; height: 0.7rem; margin-bottom: 0.66rem; display: flex; justify-content: space-between; align-items: center;
            .advantage_list_num{
                width: 0.7rem; height: 0.7rem; background: url(../../../static/images/public/fang.png) no-repeat; background-size: 100% 100%;
                text-align: center; line-height: 0.7rem; color: white; font-size: 0.3rem; font-family:SourceHanSansCN-Medium; font-weight:500;
            }
            .advantage_list_cont{
                width: 80%;
                span{font-size: 0.2rem;font-family:SourceHanSansCN-Medium;font-weight:500; line-height: 0.4rem;}
                p{font-size: 0.16rem;}
            }
        }
    }
}



.function{
    width: 100%; height: 11.21rem; padding-top: 0.79rem; text-align: center;
    .function_title{width: 2.17rem; height: 0.42rem;}
    .function_list{
        width: 13rem; margin: 0 auto; margin-top: 0.7rem; position: relative; left: 0.1rem;
        img{width: 4.09rem; height: 4.29rem; position: relative; left: -0.1rem;}
        img:nth-child(3), img:nth-child(6){left: -0.2rem;}
        img:nth-child(1), img:nth-child(4){left: 0;}
        img:nth-child(4), img:nth-child(5), img:nth-child(6){top: -0.1rem;}
    }
}


.publicProcess{
    width: 100%; height: 7rem; background: url(../../../static/images/public/GZHKFLCBG.png) no-repeat; background-size: 100% 100%;
    text-align: center; padding-top: 0.7rem;
    .publicProcess_title{width: 2.17rem; height: 0.42rem;}
    .publicProcess_cont{
        width: 10.92rem; height: 2.84rem; margin: 0 auto; margin-top: 1.48rem;
        img{width: 100%; height: 100%;}
    }
}



</style>


