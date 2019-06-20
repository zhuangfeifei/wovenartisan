<template>
    <div id="bottom">

        <div class="consulting">
            <img src="~/static/images/home/KFTB.png" alt="" srcset="">
            <div>
                <span>咨询热线吴先生：</span>
                <p>13989729255</p>
                <img class="WXma" src="~/static/images/home/WXma.png" alt="" srcset="">
                <h5>扫描二维码添加微信</h5>
            </div>
        </div>

        <div class="bottom_solid"></div>

        <div class="bottom_category">
            <div><p>开发合作</p><p>微信小程序</p><p>微信公众号</p><p>朋友圈广告</p><p>IOS 开发</p><p>Android开发</p></div>
            <div><p>开发合作</p><p>企业网站建设</p><p>移动网站建设</p></div>
            <div><p>友情链接</p><p>前端开发</p><p>PHP中文网</p><p>小程序开发</p><p>微信编辑器</p><p>小程序社区</p></div>
            <div><p>手游排行榜</p><p>小程序社区</p><p>二维码生成器</p><p>微信编辑器</p><p>支付宝小程序</p></div>
        </div>

        <div class="footer">
            <div>
                <span>苏州织匠网络科技有限公司是一家专注于APP开发、微信小程序开发、网站建设以及朋友圈广告的互联网科技公司。</span>
                <p>苏ICP备19012600号</p>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
#bottom{
    width: 100%; height: 4.02rem; background-color: #192C43; display: flex; justify-content: center; padding-top: 0.36rem; position: relative;
    letter-spacing: 0.03rem;
}


.consulting{
    font-family:SourceHanSansCN-Regular; font-weight:bold; color: #ffffff; display: flex;
    img{width: 0.74rem; height: 0.74rem; margin-right: 0.32rem;}
    span{font-size: 0.2rem;}
    p{font-size: 0.24rem; }
    .WXma{width: 1.6rem; height: 1.6rem; margin-top: 0.1rem;}
    h5{font-size: 0.14rem!important;}
}

.bottom_solid{
    width: 1px; height: 2.4rem; background-color: #FFFFFF; margin-top: 0.2rem; margin-left: 1.14rem; margin-right: 1.21rem;
}


.bottom_category{
    width: 7rem; display: flex; justify-content: space-between; color: #FFFFFF; font-size: 0.16rem; line-height: 0.45rem;
}


.footer{
    width: 100%; height: 0.82rem; background-color: #051428; position: absolute; bottom: 0; left: 0;
    color: #FFFFFF; font-size: 0.12rem; text-align: center; display: flex; justify-content: center; align-items: center;
    p{margin-top: 0.05rem;}
}

</style>


