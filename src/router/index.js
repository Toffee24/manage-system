import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    caseSensitive: true,
    routes: [//路由页面
        //登陆页面
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        // //自述
        {
            path: '/readme',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                }
            ]
        },
        //表格
        {
            path: '/table',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: 'basetable',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                }, {
                    path: 'vuetable',
                    component: resolve => require(['../components/page/VueTable.vue'], resolve)
                },
                {
                    path: 'basetable/id',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve)
                }
            ]
        },
        //表单
        {
            path: '/form',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: 'baseform',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve)
                },
                {
                    path: 'vueeditor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
                },
                {
                    path: 'markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
                },
                {
                    path: 'upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
                }
            ]
        },
        //图表
        {
            path: '/basecharts',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve)   // vue-schart组件
                }
            ]
        },
        //拖拽
        {
            path: '/drag',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/',
                    component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
                }
            ]
        }
    ]
})

//设置导航钩子
router.beforeEach((to, from, next) => {
    // let path=to.fullPath.substr(1).split('/')
    //判断是否登陆
    // if(to.fullPath != '/login' && true){
    //     router.push({path:'login'})
    // }
    // router.push({path:'login'})

    next()
})

export default router
