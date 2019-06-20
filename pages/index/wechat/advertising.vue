<template>
    <div id="advertising">
        
        <nav><img src="~/static/images/advertising/PYQGGBANNERwz.png" alt="" srcset=""></nav>

        <div class="aboutadvertising">
            <img src="~/static/images/advertising/GYPYQtu.png" alt="" srcset="">
            <div>
                <h4>关于朋友圈广告</h4>
                <p>基于微信庞大且活跃的用户群体，近10亿的用户流量，我们为您提供了众多广告的定向条件，您可以从中选择适合达成您商业目标的条件来锁定人群。这些条件包括人口属性、商业兴趣、地理位置、使用设备、天气环境等等。更合理、透明的费用管理模式帮您平衡成本和收益。</p>
            </div>
        </div>
        <div class="aboutadvertising_list">
            <div class="aboutadvertising_list_">
                <section v-for="(item,index) in aboutadvertisingList" :key="index">
                    <img class="aboutadvertising_list_icon" :src="item.img" alt="" srcset="">
                    <h5>{{item.title}}</h5>
                    <div class="aboutadvertising_list_solid"></div>
                    <div>{{item.cont}}</div>
                    <img @click="contact" class="WXKFFWlxkfAN" src="~/static/images/advertising/PYQGGlianxikefuAN.png" alt="" srcset="">
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
            aboutadvertisingList:[
                {title:'本地推广广告', img: require('~/static/images/advertising/bdtgggTB1.png'), cont:'借助LBS定位功能，朋友圈本地推广可以精准定向周边3-5公里人群，无论您是新店开业、促销、新品上市、会员营销，朋友圈本地广告都能有效触达顾客，提高门店顾客到访。商户可以通过门店名称、城市的方式加强所在地用户对商家品牌的认知，1000元即可起投，便宜又灵活。'},
                {title:'原生推广页广告', img: require('~/static/images/advertising/bdtgggTB2.png'), cont:'打造完美品牌故事，光有内容远远不够，原生推广页广告能够更好的助力品牌在形式技术等方面提升用户观赏体验。原生推广页广告由微信朋友圈外层展示和内层原生推广页两部分组成，点击可直接打开原生推广页，体验流程自然。'},
                {title:'小视频广告', img: require('~/static/images/advertising/bdtgggTB3.png'), cont:'外层小视频默认播放，点击进入完整视频，同时可选择跳转链接，层层深入，将目标受众“自然地”带入故事情境之中，生动呈现品牌主张。'},
                {title:'图文广告', img: require('~/static/images/advertising/bdtgggTB4.png'), cont:'如同朋友圈好友动态的形态结构，文字、图片、链接等可灵活自由配置，提供多样的展示形式，满足个性化的创意表达。'},
            ],
        }
    },
    methods:{
        enter(index){
            this.activeIndex = index
        },
        leave(){
            this.activeIndex = -1
        },
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
#advertising{
    width: 100%;
}


nav{
    width: 100%; height: 8rem; background: url(../../../static/images/advertising/PYQGGBANNERbg.png) no-repeat; background-size: 100% 100%;
    text-align: center; padding-top: 2.66rem;
    img{width: 10.15rem; height: 3.83rem;}
}

.aboutadvertising{
    width: 100%; height: 6.4rem; display: flex; justify-content: center; padding-top: 0.61rem;
    img{width: 6rem; height: 5.12rem;}
    div{
        width: 4.55rem; margin-left: 1.4rem; letter-spacing: 0.05rem;
        h4{font-size: 0.36rem; font-family:SourceHanSansCN-Medium; font-weight:500; margin: 0.4rem 0;}
        p{font-size: 0.26rem;}
    }
}
.aboutadvertising_list{
    width: 100%; height: 13rem; background-color: #F8F8F8; padding-top: 0.7rem;
    .aboutadvertising_list_{
        width: 12rem; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between;
        section{
            width: 5.9rem; height: 5.6rem; border: 0.01rem solid #CECECE; border-radius: 0.1rem; text-align: center; margin-bottom: 0.2rem;
            padding: 0.4rem 0.52rem; position: relative; background-color: #FFFFFF;
            .aboutadvertising_list_icon{width: 0.88rem; height: 0.88rem;}
            h5{font-size: 0.3rem;font-family:SourceHanSansCN-Medium;font-weight:500; margin-top: 0.44rem; margin-bottom: 0.22rem;}
            .aboutadvertising_list_solid{width: 0.6rem; height: 0.06rem; background-color: #2589FF; border-radius: 0.03rem; margin: 0 auto;}
            div{text-align: left; margin-top: 0.65rem; font-size: 0.16rem;}
            .WXKFFWlxkfAN{width: 1.4rem; height: 0.44rem; position: absolute; bottom: 0.4rem; left: 2.25rem; }
            .WXKFFWlxkfAN:hover{cursor:pointer;}
        }
        section:nth-child(2) .aboutadvertising_list_icon{width: 0.74rem; height: 0.88rem;}
        section:nth-child(3) .aboutadvertising_list_icon{width: 0.78rem; height: 0.78rem;}
        section:nth-child(4) .aboutadvertising_list_icon{width: 0.82rem; height: 0.72rem;}
    }
}




</style>


