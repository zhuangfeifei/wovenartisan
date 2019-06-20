<template>
    <div id="about">

        <nav>
            <img src="~/static/images/about/GYZJbannertuWZ.png" alt="" srcset="">
        </nav>

        <div class="aboutCompany">
            <div>
                <h4>苏州织匠网络科技有限公司</h4>
                <p>苏州织匠网络科技有限公司，是一家专注于APP开发、微信小程序开发、网站建设以及朋友圈广告的互联网科技公司。公司以“专注，用心，服务”为核心价值，一切以客户利益为中心，客户的满意就是我们永恒的追求。 苏州织匠网络科技有限公司秉承以用户需求为核心，提供优质、用心的服务树立公司良好品牌。</p>
                <p>公司不仅仅提供专业的服务，同时还建立了完善的售后服务体系，为中途遇到的问题和困难提供指导帮助。我们相信，通过我们的不断努力和追求，一定能够实现互利共赢。</p>
            </div>
            <img src="~/static/images/about/GYWMtu1.png" alt="" srcset="">
        </div>


        <div class="about_address">
            <section>
                <img src="~/static/images/about/DITU.png" alt="">
                <div>地址：江苏省苏州市相城区元和街道华元路818号迈家众创A8408</div>
            </section>
        </div>

    </div>
</template>
<script>
export default {
    scrollToTop: true,
    created(){
       
    }
}
</script>

<style lang="less" scoped>
#about{
    width: 100%;
}


nav{
    width: 100%; height: 8rem; background: url(../../../static/images/about/GYZJbannerBG.png) no-repeat; background-size: 100% 100%;
    display: flex; align-items: center; justify-content: center;
    img{width: 11.74rem; height: 1.96rem;}
}

.aboutCompany{
    width: 100%; height: 8rem; display: flex; justify-content: center; padding-top: 1.41rem;
    img{width: 5.51rem; height: 5.19rem;}
    div{
        width: 5.2rem; margin-right: 1.78rem; letter-spacing: 0.05rem;
        h4{font-size: 0.3rem; font-family:SourceHanSansCN-Medium; font-weight:550; margin: 0.4rem 0; text-align: center;}
        p{font-size: 0.2rem;}
        p:nth-child(3){margin-top: 0.3rem;}
    }
}


.about_address{
    width: 100%; height: 6.05rem; background: url(../../../static/images/about/DITUbg.png) no-repeat; background-size: 100% 100%;
    display: flex; justify-content: center; align-items: center;
    section{
        width: 12rem; height: 4.4rem; position: relative;
        img{
            width: 100%; height: 100%;
        }
        div{
            width: 100%; height: 0.5rem; background: rgba(0, 0, 0, 0.5); position: absolute; bottom: 0; left: 0;
            text-align: center; font-size: 0.2rem; color: #FFFFFF; line-height: 0.5rem; letter-spacing: 0.02rem;
        }
    }
}
</style>

