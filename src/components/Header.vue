<template>
    <header id="header">
        <div class="container_nav">
            <div class="subnav_box">
                <div :style="{width: myWidth}" class="nav_content">
                    <div class="logo" @click="goUrl('/')"  style="cursor: pointer;"></div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        myWidth: {
            type: String,
            default: "1000px"
        }
    },
    methods: {
        goUrl(url) {
            window.location.href = url;
        }
    }
}
</script>

<style lang="less" scoped> 
#header {
    .subnav_box {
        position: fixed;
        z-index: 999;
        top:0;
        height: 80px;
        width: 100%;
        line-height: 80px;
        border-bottom: 1px solid rgba(0,0,0,.1);
        background: #fff;
        .nav_content {
            margin: 0 auto;
            .logo {
                background: url(../assets/logo.png) center center no-repeat;
                background-size: 100%;
                width: 233px;
                height: 80px;
            }
        }
    }
}
</style>