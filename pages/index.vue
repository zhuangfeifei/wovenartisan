<template>
    <div id="Index" v-if="getCategoryList">
        <!-- 导航 -->
        <top-item></top-item>
        
        <nuxt-child></nuxt-child>

        <!-- 底部 -->
        <bottom-item></bottom-item>

        <transition name="fade">
            <section v-if="isContact" id="contact_us">
                <img src="~/static/images/about/-s-LXKFtanchuangTU.png" alt="" srcset="">
                <div @click="clear"></div>
            </section>
        </transition>

        <img v-if="isTop" id="moveUp" @click="top" src="~/static/images/about/move-up.png" alt="" srcset="">

    </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import top from '~/components/top'
import bottom from "~/components/bottom"
export default {
    data(){
        return{
            isTop: false, 
        }
    },
    components:{
        "bottom-item": bottom,
        "top-item": top,
    },
    computed:{
        ...mapState({
            getCategoryList: state => state.getCategoryList,
            isContact: state => state.isContact,
        })
    },
    asyncData(){
         
    },
    created(){
        this.$store.dispatch('getBannerList')
        this.$store.dispatch('getTypeList')
        this.$store.dispatch('getCategoryList')

    },
    mounted(){
        $(document).ready(()=>{
            $(window).scroll(()=>{
                this.clear()
                if ($(window).scrollTop()>10){
                    this.isTop = true
                }
                else{
                    this.isTop = false
                }
            });
        })
    },
    methods:{
        top(){
            if ($('html').scrollTop()) {
                $('html').animate({ scrollTop: 0 }, 500);
                return false;
            }
            $('body').animate({ scrollTop: 0 }, 500);
            return false;  
        },
        clear(){
            this.$store.commit('isContact', false)
        }
    },
    watch: {
      $route: {
        handler: function(val, oldVal){
            if(val.name === 'index') this.$store.commit('indexUrlActive', 0)
            if(val.name === 'index-wechat') this.$store.commit('indexUrlActive', 1)
            if(val.name === 'index-appDevelopment') this.$store.commit('indexUrlActive', 2)
            if(val.name === 'index-webConstruction') this.$store.commit('indexUrlActive', 3)
            if(val.name === 'index-about') this.$store.commit('indexUrlActive', 4)
        },
        // 深度观察监听
        deep: true
      }
    }
}
</script>
<style lang="less" scoped>
#Index{
    width: 100%; background-color: white;
}

#moveUp{
    position: fixed; right: 40px; bottom: 60px;
}
#moveUp:hover{
    cursor:pointer;
    -webkit-transform:scale(1.2); -ms-transform:scale(1.2); transform:scale(1.2); 
}


#contact_us{
    width: 135px; height: 425px; position: fixed; right: 0; top: calc(50% - 212.5px); z-index: 10;
    img{width: 100%; height: 100%}
    div{
        width: 35px; height: 35px; position: absolute; bottom: 0; left: calc(50% - 17.5px);
    }
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  margin-right: -135px;
}

</style>


