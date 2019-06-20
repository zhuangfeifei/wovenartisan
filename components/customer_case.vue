<template>
    <div id="customer_case">
        <img class="customer_case_back" :src="require('~/static/images/home/'+img[tabIndex])" alt="" srcset="">

        <img class="customer_case_title" src="~/static/images/home/SBT-2.png" alt="" srcset="">
        <div class="customer_case_">
            <div class="customer_case_tab">
                <div class="customer_case_tab_left">
                    <div v-for="(item,index) in getCategoryList" :key="index" :class="{active: index == tabIndex}" @mouseenter="tab(index)">
                        <span>{{item.name}}</span><section v-if="index == tabIndex"></section>
                    </div>
                </div>
                <div class="customer_case_tab_right"></div>
            </div>
            <div class="customer_case_list" v-if="getCategoryList">
                <div class="customer_case_lists">
                    <section v-for="(item,index) in getCategoryList[tabIndex].case" :key="index" @mouseenter="card(index)" @mouseleave="leave">
                        <img :src="imgUrl+ (index == cardIndex ? item.qrcode : item.pic)" alt="" srcset="">
                    </section>
                </div>
                <span>{{getCategoryList[tabIndex].name}}</span>
                <p>{{getCategoryList[tabIndex].description}}</p>
            </div>
        </div>

    </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
    props:['getCategoryList'],
    data(){
        return{
            tabIndex:0, cardIndex: -1,
            img:['-s-shenghuobeijing.png','-s-jiaoyubeijing.png','-s-lvyoubeijing.png','-s-canyinbeijing.png','-s-tiyubeijing.png','-s-qichebeijing.png']
        }
    },
    computed:{
        ...mapState({
            imgUrl: state => state.imgUrl,
            
        })
    },
    created(){
        
    },
    methods:{
        tab(index){
            this.tabIndex = index
            this.cardIndex = -1
        },
        card(index){
            this.cardIndex = index
        },
        leave(index){
            this.cardIndex = -1
        },
    }
}
</script>

<style lang="less" scoped>
#customer_case{
    width: 100%; height: 9rem; position: relative; padding-top: 0.47rem;
    text-align: center;
    .customer_case_back{width: 100%; height: 100%; position: absolute; top: 0; left: 0;}
    .customer_case_title{width: 5.29rem; height: 1.34rem; position: relative;}
}



.customer_case_{
    width: 100%; height: 6rem; display: flex; margin-top: 0.62rem; justify-content: center; position: relative;
}
.customer_case_tab{
    width: 1.6rem; height: 100%; color: white; position: relative; margin-right: 0.5rem;
    .customer_case_tab_left{
        width: 100%; height: 100%; text-align: center; line-height: 1rem; font-size: 0.18rem;
        div{ 
            width: 100%; height: 1rem; position: relative; border-top-right-radius: 0.04rem; border-bottom: 0.04rem;
            section{
                width: 0.08rem; height: 100%; background-color: #FFFFFF; position: absolute; right: 0; top: 0; border-radius: 0.1rem!important;
            }
        }
        .active{
            background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) , #2589FF); /* Safari 5.1 - 6.0 */
            background: -o-linear-gradient(right, rgba(255, 255, 255, 0), #2589FF); /* Opera 11.1 - 12.0 */
            background: -moz-linear-gradient(right, rgba(255, 255, 255, 0), #2589FF); /* Firefox 3.6 - 15 */
            background: linear-gradient(to right, rgba(255, 255, 255, 0) , #2589FF); /* 标准的语法 */
            cursor:pointer;
        }
    }
    .customer_case_tab_right{
        width: 0.08rem; height: 100%; background: rgba(255, 255, 255, 0.45); border-radius: 0.04rem; position: absolute; right: 0; top: 0;
    }
}


.customer_case_list{
    width: 10.25rem; height: 100%; text-align: left; color: #FFFFFF;
    .customer_case_lists{
        width: 100%; height: 3.5rem; display: flex; margin-bottom: 0.8rem;
        section{
            width: 2.42rem; height: 100%; margin-right: 0.2rem;
            img{width: 100%; height: 100%; border-radius: 0.15rem;}
        }
    }
    span{font-size: 0.18rem; line-height: 0.4rem; }
    p{font-size: 12px!important;}
}
</style>

