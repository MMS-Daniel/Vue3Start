<template>
    <div class="about">
        <div class="left">
            <div style="padding:20px;">关于我们</div>
            <router-link to="/about/help" style="margin-left:20px;" replace>帮助</router-link>
            <router-link to="/about/contact" style="margin-left:20px;" replace>联系我们</router-link>
        </div>

        <div style="padding:20px;" class="right">
            <div>当前加载的页面:</div>
            <router-view></router-view>
        </div>
    </div>
</template>


<style lang="scss">
.about {
    height: 100%;
    .left {
        width: 250px;
        height: 100%;
        border-right: 1px solid #eaeaea;
        float: left;
    }
    .right{
        padding: 20px;
        overflow: hidden;
        height: 100%;
    }
}
</style>


