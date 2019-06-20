<template>
    <div id="top">
        <div class="nav_tab">
            <img src="~/static/images/home/nav.png" alt="" srcset="">
            <div class="tabList">
                <div v-for="(item, index) in tabLists" :key="index" @click="router(index)">
                    <p>{{item.name}}</p><span v-if="index == indexUrlActive"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
    data(){
        return{
            tabLists:[
                {name:'首页', url:'index'},
                {name:'微信开发', url:'index-wechat'},
                {name:'APP开发', url:'index-appDevelopment'},
                {name:'网站建设', url:'index-webConstruction'},
                {name:'关于织匠', url:'index-about'}
            ],
        }
    },
    computed:{
        ...mapState({
            indexUrlActive: state => state.indexUrlActive,
        })
    },
    methods:{
        router(index){
            this.$store.commit('indexUrlActive', index)
            this.$router.push({name:this.tabLists[index].url})
        }
    }
}
</script>
<style lang="less" scoped>
#top{
    width: 100%; height: 1rem; position: fixed; top: 0; left: 0; z-index: 1000;
}
.nav_tab{
    width: 100%; height: 1rem; background:rgba(3,23,47,0.77); position: absolute; top: 0; left: 0; color: white; z-index: 10;
    display: flex; justify-content: space-around; align-items: center; 
    img{width: 1.62rem; height: 0.43rem;}
    .tabList{
        display: flex;
        div{ 
            margin-right: 0.6rem; font-size: 0.16rem; font-family:SourceHanSansCN-Medium; font-weight:500; text-align: center; position: relative;
            p{line-height: 0.15rem;}
            span{ display: inline-block; width: 40%; height: 0.04rem; background-color: #2589FF; position: absolute; bottom: -0.2rem; left: 30%;}
            p:hover{cursor:pointer;}
        }
    }
}
</style>


