<template>
    <!--<div class="wrapper">-->
    <!--<v-head></v-head>-->
    <!--<v-sidebar></v-sidebar>-->
    <!--<div class="content">-->
    <!--<transition name="move" mode="out-in">-->
    <!--<router-view>-->
    <!--</router-view>-->
    <!--</transition>-->
    <!--</div>-->
    <!--</div>-->
    <el-container>
        <el-header height="70px">
            <v-head></v-head>
        </el-header>
        <el-container>
            <el-aside width="210px">
                <v-sidebar></v-sidebar>
            </el-aside>
            <el-main>
                <transition name="move" mode="out-in">
                    <router-view>
                    </router-view>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';

    export default {
        components: {
            vHead, vSidebar
        }
    }
</script>

<style scoped lang="scss">
    .move-enter-active, .move-leave-active {
        transition: opacity .5s;
    }

    .move-enter, .move-leave {
        opacity: 0;
    }
    .el-container{
        width: 100%;
        height: 100%;
        .el-header{
            padding: 0;
        }
        .el-aside{
            width: 210px;
            min-width: 210px;
        }
    }
</style>
