<template>
    <div id="weChatDevelopment">

        <nav>
            <img src="~/static/images/wx/WXKFbannerwenzi.png" alt="" srcset="">
            <div @click="contact" class="weChatDevelopment">联系我们</div>
        </nav>

        <!-- 微信开发服务 -->
        <div class="wechatServices">
            <img class="wechatServices_title" src="~/static/images/wx/wxkffw.png" alt="" srcset="">
            <div class="wechatServices_class">
                <section v-for="(item,index) in wechatServicesList" :key="index">
                    <img class="wechatServices_class_img" :src="item.img" alt="" srcset="">
                    <h3>{{item.name}}</h3>
                    <div>
                        <p>{{item.content}}</p>
                    </div>
                    <nuxt-link :to="{name: item.url}">
                        <img class="wechatServices_more" src="~/static/images/wx/chakanxiangqingAN.png" alt="" srcset="">
                    </nuxt-link>
                </section>
            </div>
        </div>

        <!-- 移动营销服务 -->
        <div class="mobileMarketingServices">
            <img class="mobileMarketingServices_title" src="~/static/images/wx/YDYXFW.png" alt="" srcset="">
            <div class="mobileMarketingServices_list">
                <div v-for="(item,index) in mobileMarketingServicesList" :key="index">
                    <img :src="item.img" alt="" srcset="">
                    <h4>{{item.name}}</h4>
                    <span>{{item.cont1}}</span>
                    <p>{{item.cont2}}</p>
                </div>
            </div>
        </div>
        

    </div>
</template>
<script>
export default {
    scrollToTop: true,
    data(){
        return{
            wechatServicesList:[
                {name:'微信小程序', url:'index-wechat-smallProgram', img:require('~/static/images/wx/xiaochengxutb.png'), content:'微信小程序，是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或者搜一下即可打开应用。小程序能够实现消息通知、线下扫码、对话分享、历史列表、小程序切换、搜索查找、公众号关联等七大功能。其中，通过公众号关联，用户可以实现公众号与小程序之间相互跳转。'},
                {name:'微信公众号', url:'index-wechat-public', img:require('~/static/images/wx/weixintb.png'), content:'微信营销作为当下热门的线上营销方式被越来越多的企业所看重，但是微信平台自带的功能有很多局限性，无法满足企业的功能服务需求，所以就需要对微信公众平台进行二次开发。织匠为客户提供专业的微信公众平台开发，在金融、医疗、酒店、教育、快递等行业有成熟的微信开发解决方案。'},
                {name:'朋友圈广告', url:'index-wechat-advertising', img:require('~/static/images/wx/pengyouquantb.png'), content:'基于微信庞大且活跃的用户群体，近10亿的用户流量，我们为您提供了众多广告定向条件，您可以从中选择适合达成您商业目标的条件锁定人群。这些条件包括人口属性、商业兴趣、地理位置、使用设备、天气环境等等。更合理、透明的费用管理模式帮您平衡成本和收益。'},
            ],
            mobileMarketingServicesList:[
                {name:'微门店', img:require('~/static/images/wx/weimendiantb.png'), cont1:'适用于多门店、多服务点', cont2:'让客户更方便的找到你'},
                {name:'微商城', img:require('~/static/images/wx/weishangchengtb.png'), cont1:'小微信也有大商城', cont2:'电商轻松走入微信'},
                {name:'微外卖', img:require('~/static/images/wx/weiwaimaitb.png'), cont1:'在线餐饮点菜服务', cont2:'无需烦恼平台扣点'},
                {name:'微支付', img:require('~/static/images/wx/weizhifutb.png'), cont1:'支付领红包、摇一摇等', cont2:'促使客户多次消费'},
                {name:'微分销', img:require('~/static/images/wx/weifenxiaotb.png'), cont1:'裂变分销智能锁粉', cont2:'帮助企业快速沉淀客户'},
                {name:'微团购', img:require('~/static/images/wx/weituangoutb.png'), cont1:'轻松实现打造销量爆款', cont2:'库存压货不用愁'},
                {name:'微管理', img:require('~/static/images/wx/weiguanlitb.png'), cont1:'支持会员卡、权益、等级等', cont2:'完美提升用户忠诚度'},
            ],
        }
    },
    components:{
        
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
#weChatDevelopment{
    width: 100%; letter-spacing: 0.03rem;
}

nav{
    width: 100%; height: 8rem; padding-left: 3.2rem; padding-top: 2.75rem;
    background: url(../../../static/images/wx/WXKFbannertu.png) no-repeat; background-size: 100% 100%;
    img{width: 4.5rem; height: 2.21rem;}
    .weChatDevelopment{
        width: 3.4rem; height: 0.7rem; border: 0.02rem solid white; border-radius: 0.1rem; line-height: 0.6rem; margin-top: 0.5rem;
        font-family:SourceHanSansCN-Regular; font-weight:400; font-size: 0.2rem; color: white; text-align: center;
    }
    .weChatDevelopment:hover{cursor:pointer;}
}


.wechatServices{
    width: 100%; height: 8.8rem; text-align: center; padding-top: 0.79rem;
    .wechatServices_title{
        width: 1.86rem; height: 0.42rem;
    }
    .wechatServices_class{
        width: 100%; display: flex; justify-content: center; margin-top: 0.88rem;
        section{
            width: 3.9rem; min-height: 5.3rem; max-height: 6rem; margin-left: 0.2rem; position: relative; padding-bottom: 1rem;
            border: 1px solid #CECECE; border-radius: 0.1rem; overflow: hidden;
            .wechatServices_class_img{width: 0.88rem; height: 0.88rem; margin: 0.4rem 0;}
            h3{font-size: 0.3rem; font-family:SourceHanSansCN-Medium; font-weight:500;}
            div{
                padding: 0.2rem 0.2rem 0 0.2rem;
                p{text-align: left; font-size: 0.16rem; color: #363636;}
            }
            .wechatServices_more{width: 1.4rem; height: 0.44rem; position: absolute; left: 1.25rem; bottom: 0.4rem;}
        }
        section:nth-child(2) .wechatServices_class_img{width: 0.97rem; height: 0.79rem;}
        section:nth-child(3) .wechatServices_class_img{width: 0.86rem; height: 0.86rem;}
    }
}


.mobileMarketingServices{
    width: 100%; height: 12rem; background-color: #F8F8F8; text-align: center; padding-top: 0.8rem;
    .mobileMarketingServices_title{width: 1.86rem; height: 0.42rem;}
    .mobileMarketingServices_list{
        width: 12.45rem; margin: 0 auto; display: flex; flex-wrap: wrap; margin-top: 1.1rem;
        div{
            width: 2.9rem; height: 4rem; background:rgba(255,255,255,1); box-shadow:0px 0.03rem 0.12rem 1px rgba(0, 0, 0, 0.11); border-radius: 0.1rem;
            margin-right: 0.2rem; margin-bottom: 0.2rem; padding-top: 0.58rem; font-size: 0.18rem; color: #666666; overflow: hidden;
            img{width: 1.29rem; height: 1.3rem; margin-bottom: 0.5rem;}
            h4{font-size: 0.3rem; font-family:SourceHanSansCN-Medium; font-weight:500; color: #363636; margin-bottom: 0.1rem;}
        }
        div:nth-child(1) img,div:nth-child(2) img{height: 1.27rem;}
        div:nth-child(5) img{height: 1.26rem;}
        div:nth-child(6) img{height: 1.25rem;}
    }
}




</style>


