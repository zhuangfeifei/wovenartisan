<template>
    <div id="swiperItem">

        <div v-if="swiperIndex == 0" class="swiperFirst">
            <img src="~/static/images/home/banner1WZ.png" alt="" srcset="">
            <!-- <h1>苏州织匠网络科技有限公司</h1>
            <h2>公司以“<span>专注，用心，服务</span>”为核心价值</h2>
            <span class="swiper_solid"></span>
            <div class="swiper_tip"><p>一切以客户利益为中心，客户的满意就是我们永恒的追求。苏州织匠网络科技有限公司秉承以用户需求为核心，提供优质、用心的服务树立公</p></div> -->
            <div @click="contact" class="swiper_contact">联系我们</div>
        </div>

        <div v-if="swiperIndex == 1" class="swiperSecond">
            <img src="~/static/images/home/banner2WZ.png" alt="" srcset="">
            <div @click="contact" class="swiper_contact">联系我们</div>
        </div>

        <div v-if="swiperIndex == 2" class="swiperThird">
            <img src="~/static/images/home/banner3WZ.png" alt="" srcset="">
            <div @click="contact" class="swiper_contact">联系我们</div>
        </div>

        <div v-if="swiperIndex == 3" class="swiperFourth">
            <img src="~/static/images/home/banner4WZ.png" alt="" srcset="">
            <div @click="contact" class="swiper_contact">联系我们</div>
        </div>

    </div>
</template>
<script>
export default {
    props:['swiperIndex'],
    methods:{
        contact(){
            this.$store.commit('isContact', true)
        }
    }
}
</script>
<style lang="less" scoped>
#swiperItem{
    width: 100%; 
}



.swiperFirst{
    width: 100%; height: 100%; position: absolute; top: 0; left: 0; color: white; text-align: center; padding-top: 2.29rem; letter-spacing: 0.08rem;
    // h1{font-size: 0.6rem; font-family:SourceHanSansCN-Medium; font-weight:500; line-height: 0.6rem;}
    // h2{
    //     font-size: 0.5rem; font-family:SourceHanSansCN-Regular; font-weight:400; line-height: 0.9rem;
    //     span{color: #2589FF; font-size: 0.48rem;}
    // }
    // .swiper_solid{display: inline-block; width: 2rem; height: 0.06rem; background-color: white;}
    // .swiper_tip{
    //     width: 70%; margin: 0 auto; margin-top: 0.3rem;font-family:SourceHanSansCN-Regular; font-weight:400; 
    //     p{ font-size: 0.14rem; transform:scale(0.7); -webkit-transform:scale(0.7); -ms-transform:scale(0.7);}
    // }
    img{width: 9.01rem; height: 2.77rem;}
    .swiper_contact{
        width: 3.4rem; height: 0.7rem; border: 0.03rem solid white; border-radius: 0.1rem; line-height: 0.6rem; margin: 0 auto; margin-top: 0.5rem;
        font-family:SourceHanSansCN-Regular; font-weight:400; font-size: 0.2rem;
    }
    .swiper_contact:hover{cursor:pointer;}
}


.swiper_List{
    img{width: 100%; height: 2.76rem;}
    .swiper_contact{
        width: 3.4rem; height: 0.7rem; border: 0.03rem solid white; border-radius: 0.1rem; line-height: 0.6rem; margin-top: 0.5rem;
        font-family:SourceHanSansCN-Regular; font-weight:400; font-size: 0.2rem; color: white; text-align: center;
    }
    .swiper_contact:hover{cursor:pointer;}
}
.swiperSecond{
    width: 7.94rem; position: absolute; left: 2.46rem; top: 2.02rem;
    .swiper_List;
}
.swiperThird{
    width: 6.68rem; position: absolute; right: 2.02rem; top: 2.02rem;
    .swiper_List;
}
.swiperFourth{
    width: 6.27rem; position: absolute; left: 2.48rem; top: 2.02rem;
    .swiper_List;
}
</style>

