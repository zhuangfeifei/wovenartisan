<template>
    <div id="webConstruction">

        <nav>
            <img src="~/static/images/webConstruction/WZJSbannerwenzi.png" alt="" srcset=""><br/>
            <div @click="contact" class="weChatDevelopment">联系我们</div>
        </nav>

        <div class="web_construction">
            <img src="~/static/images/webConstruction/QYGWJStu1.png" alt="">
            <section>
                <h3>企业网站建设</h3>
                <p>展示企业形象 宣传产品与服务</p>
                <img @click="contact" src="~/static/images/webConstruction/QYGWJSlianxikefuAN.png" alt="">
            </section>
        </div>


        <div class="webConstruction_advantage">
            <img class="webConstruction_advantage_title" src="~/static/images/webConstruction/QYWZJSYSBT.png" alt="" srcset="">
            <section class="aboutIOS_list">
                <div v-for="(item,index) in aboutIOSList" :key="index">
                    <img :src="item.img" alt="" srcset="">
                    <h5>{{item.title}}</h5>
                    <p>{{item.cont}}</p>
                </div>
            </section>
        </div>


        <div class="h5web_construction">
            <section>
                <h3>移动网站建设</h3>
                <p>实现多平台下依然保持风格一致的阅读性</p>
                <img @click="contact" src="~/static/images/webConstruction/QYGWJSlianxikefuAN.png" alt="">
            </section>
            <img class="h5web_construction_" src="~/static/images/webConstruction/YDWZJStu1.png" alt="">
        </div>


        <div id="why">
            <section class="whyTitle"><img src="~/static/images/webConstruction/YDWZYS.png" alt="" srcset=""></section>
            <div class="whyContext">
                <section v-for="(item,index) in whyList" :key="index">
                    <div>
                        <span>{{item.title}}</span>
                        <p>{{item.cont}}</p>
                    </div>
                </section>
            </div>
        </div>


        <div class="webConstructionProcess">
            <img class="webConstructionProcess_title" src="~/static/images/webConstruction/WZKFLC.png" alt="" srcset="">
            <section class="webConstructionProcess_cont">
                <img src="~/static/images/webConstruction/WZKFLCtu.png" alt="" srcset="">
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
                {title:'提升企业形象', img: require('~/static/images/webConstruction/QYWZJSYStb1.png'), cont:'有助于用户深入了解企业动态，提高用户体验'},
                {title:'全面介绍公司及产品', img: require('~/static/images/webConstruction/QYWZJSYStb2.png'), cont:'有助于用户快速、全面了解产品信息，起到推广产品的作用'},
                {title:'及时了解客户需求', img: require('~/static/images/webConstruction/QYWZJSYStb3.png'), cont:'具备网络沟通能力，事实判断行业发展趋势'},
                {title:'降低销售成本', img: require('~/static/images/webConstruction/QYWZJSYStb4.png'), cont:'可利用专业SEO优化技术，大大减少员工出行时间和成本'},
                {title:'顺应互联网发展', img: require('~/static/images/webConstruction/QYWZJSYStb5.png'), cont:'信息化时代，互联网能以最快时间完成信息交互'},
            ],
            whyList:[
                {title:'跨平台，节省开发成本', cont:'完美兼容Android和IOS两大主流手机平台'},
                {title:'无需下载，即刻浏览', cont:'瞬间打开手机网站，节省加载时间'},
                {title:'有效利用搜索引擎推广', cont:'手机网站可被百度、谷歌、360等搜索引擎检索'},
                {title:'便于网络营销推广', cont:'网页链接可通过多种渠道推广，APP则不支持超链接'},
                {title:'易于维护', cont:'APP升级需要再次下载，而手机网站会自动更新'},
                {title:'域名自动跳转，节省成本', cont:'使用统一域名，能识别判断不同终端自动跳转'},
            ]
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
#webConstruction{
    width: 100%;
}

nav{
    width: 100%; height: 8rem; background: url(../../../static/images/webConstruction/WZJSbannertu.png) no-repeat; background-size: 100% 100%;
    padding-top: 2.75rem; padding-left: 3.19rem;
    img{width: 4.5rem; height: 2.19rem;}
    .weChatDevelopment{
        width: 3.4rem; height: 0.7rem; border: 0.02rem solid white; border-radius: 0.1rem; line-height: 0.6rem; margin-top: 0.5rem;
        font-family:SourceHanSansCN-Regular; font-weight:400; font-size: 0.2rem; color: white; text-align: center;
    }
    .weChatDevelopment:hover{cursor:pointer;}
}



.web_construction{
    width: 100%; height: 6.6rem; padding: 0.61rem 3.39rem; position: relative;
    img{width: 6.32rem; height: 5.42rem;}
    section{
        width: 7.76rem; height: 3.22rem; position: absolute; top: 1.62rem; right: 3.49rem; text-align: center; padding-top: 0.58rem; padding-left: 1.8rem;
        background: url(../../../static/images/webConstruction/QYGWJStu2.png) no-repeat; background-size: 100% 100%;
        h3{font-size: 0.36rem;font-family:SourceHanSansCN-Medium; font-weight:500;}
        p{font-size: 0.2rem; line-height: 0.8rem;}
        img{width: 1.4rem; height: 0.44rem; margin-top: 0.2rem;}
        img:hover{cursor:pointer;}
    }
}



.webConstruction_advantage{
    width: 100%; height: 8.5rem; background-color: #F8F8F8;
    text-align: center; padding-top: 0.8rem;
    .webConstruction_advantage_title{width: 2.49rem; height: 0.42rem;}
    .aboutIOS_list{
        display: flex; padding: 0.72rem 3rem; flex-wrap: wrap;
        div{
            width: 4.3rem; padding: 0 0.4rem; margin-bottom: 0.6rem;
            img{width: 1.29rem; height: 1.29rem;}
            h5{font-size: 0.2rem; font-family:SourceHanSansCN-Medium; font-weight:550; margin-top: 0.2rem; margin-bottom: 0.3rem;}
            p{font-size: 0.16rem; font-family:SourceHanSansCN-Regular; font-weight:400;}
        }
    }
}


.h5web_construction{
    width: 100%; height: 6.6rem; padding: 1.62rem 3.39rem; position: relative;
    .h5web_construction_{width: 6.32rem; height: 5.42rem; position: absolute; top: 0.61rem; right: 3.49rem;}
    section{
        width: 7.76rem; height: 3.22rem; text-align: center; padding-top: 0.58rem; padding-right: 1.8rem; position: relative; z-index: 10;
        background: url(../../../static/images/webConstruction/YDWZJStu2.png) no-repeat; background-size: 100% 100%;
        h3{font-size: 0.36rem;font-family:SourceHanSansCN-Medium; font-weight:500;}
        p{font-size: 0.2rem; line-height: 0.8rem;}
        img{width: 1.4rem; height: 0.44rem; margin-top: 0.2rem;}
        img:hover{cursor:pointer;}
    }
}



#why{
    width: 100%; height: 7rem; padding-top: 1.13rem; background-color: #F8F8F8;
    .whyTitle{
        width: 1.86rem; height: 0.42rem; margin: 0 auto;
        img{width: 100%; height: 100%;}
    }
    .whyContext{
        width: 12.4rem; display: flex; flex-wrap: wrap; justify-content: center; margin: 0 auto; margin-top: 0.8rem;
        section{
            width: 5.9rem; height: 1rem; display: flex; align-items: center; padding: 0 0.3rem 0 1.49rem; margin-top: 0.2rem; margin-right: 0.2rem;
            span{font-size: 0.18rem; color: #363636;font-family:SourceHanSansCN-Medium; font-weight:550;}
            p{font-size: 0.16rem; color: #7F7F7F; line-height: 0.25rem; }
        }
        section:nth-child(1){
            background: url('../../../static/images/webConstruction/YDWZYStu1.png') no-repeat; background-size: 100% 100%;
        }
        section:nth-child(2){
            background: url('../../../static/images/webConstruction/YDWZYStu2.png') no-repeat; background-size: 100% 100%;
        }
        section:nth-child(3){
            background: url('../../../static/images/webConstruction/YDWZYStu3.png') no-repeat; background-size: 100% 100%;
        }
        section:nth-child(4){
            background: url('../../../static/images/webConstruction/YDWZYStu4.png') no-repeat; background-size: 100% 100%;
        }
        section:nth-child(5){
            background: url('../../../static/images/webConstruction/YDWZYStu5.png') no-repeat; background-size: 100% 100%;
        }
        section:nth-child(6){
            background: url('../../../static/images/webConstruction/YDWZYStu6.png') no-repeat; background-size: 100% 100%;
        }
    }
}



.webConstructionProcess{
    width: 100%; height: 7rem; text-align: center; padding-top: 0.7rem;
    background: url(../../../static/images/webConstruction/WZKFLCbg.png) no-repeat; background-size: 100% 100%;
    .webConstructionProcess_title{width: 1.84rem; height: 0.42rem;}
    .webConstructionProcess_cont{
        width: 10.89rem; height: 3.9rem; margin: 0 auto; margin-top: 0.94rem;
        img{width: 100%; height: 100%;}
    }
}




</style>


