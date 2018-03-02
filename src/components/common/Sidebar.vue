<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark"
                 unique-opened
                 :collapse="isCollapse"
                 :background-color="backgroundColor"
                 :text-color="textColor"
                 :router="true">
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :to="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                            </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isCollapse: false,
                backgroundColor:'#324157', //左侧导航背景色
                textColor:'#bfcbd9',  //左侧导航字体颜色
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: '/readme',
                        title: '自述'
                    },
                    {
                        icon: 'el-icon-menu',
                        index: '/table',
                        title: '表格',
                        subs: [
                            {
                                index: '/table/basetable',
                                title: '基础表格',
                            },
                            {
                                index: '/table/vuetable',
                                title: 'Vue表格组件',
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-date',
                        index: '/form',
                        title: '表单',
                        subs: [
                            {
                                index: '/form/baseform',
                                title: '基本表单'
                            },
                            {
                                index: '/form/vueeditor',
                                title: '编辑器'
                            },
                            {
                                index: '/form/markdown',
                                title: 'markdown'
                            },
                            {
                                index: '/form/upload',
                                title: '文件上传'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-star-on',
                        index: '/basecharts',
                        title: '图表'
                    },
                    {
                        icon: 'el-icon-upload2',
                        index: '/drag',
                        title: '拖拽'
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                //左侧导航高亮
                let path = this.$route.path.split('/')
                let newPath = `/${path[1]}/${path[2]}`
                return newPath
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .sidebar{
        /*display: block;*/
        /*position: absolute;*/
        width: 100%;
        height: 100%;
        /*left: 0;*/
        /*top: 70px;*/
        /*bottom:0;*/
        background: #2E363F;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
