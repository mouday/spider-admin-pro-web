import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/home/home"),
        meta: { title: "控制台", icon: "dashboard" }
      }
    ]
  },

  {
    path: "/project",
    component: Layout,
    redirect: "/project/list",
    name: "project",
    meta: { title: "项目", icon: "project" },
    children: [
      {
        path: "list",
        name: "project-list",
        component: () => import("@/views/project/projectIndex"),
        meta: { title: "项目列表", icon: "project" }
      },
      
      {
        path: "version/:project",
        name: "project-version",
        component: () => import("@/views/version/VersionIndex"),
        meta: { title: "版本列表", icon: "table" },
        hidden: true
      },
      {
        path: "spider/:project",
        name: "project-spider",
        component: () => import("@/views/spider/SpiderIndex"),
        meta: { title: "Spider列表", icon: "table" },
        hidden: true
      },
      {
        path: "job/:project",
        name: "project-job",
        component: () => import("@/views/job/JobIndex"),
        meta: { title: "任务列表", icon: "table" },
        hidden: true
      },
    ]
  },
  {
    path: "/logs",
    component: Layout,
    redirect: "/logs/list",
    name: "logs",
    meta: { title: "日志", icon: "log" },
    children: [
      {
        path: "list",
        name: "logs-list",
        component: () => import("@/views/log/LogIndex"),
        meta: { title: "运行日志", icon: "log" }
      },
      {
        path: ":project",
        name: "logs-project",
        component: () => import("@/views/log/LogProject"),
        meta: { title: "项目日志", icon: "table" },
        hidden: true

      },
      {
        path: ":project/:spider",
        name: "logs-project-spider",
        component: () => import("@/views/log/LogSpider"),
        meta: { title: "Spider日志", icon: "table" },
        hidden: true
      },
      {
        path: ":project/:spider/:job",
        name: "logs-project-spider-job",
        component: () => import("@/views/log/LogJob"),
        meta: { title: "任务日志", icon: "table" },
        hidden: true
      }
    ]
  },

  {
    path: "/schedule",
    component: Layout,
    redirect: "/schedule/list",
    name: "schedule",
    meta: { title: "定时任务", icon: "schedule" },
    children: [
      {
        path: "list",
        name: "schedule-list",
        component: () => import("@/views/schedule/ScheduleIndex"),
        meta: { title: "定时任务", icon: "schedule" }
      },
    ]
  },

  {
    path: "/schedule-log",
    component: Layout,
    redirect: "/schedule-log/list",
    name: "schedule",
    meta: { title: "调度日志", icon: "schedule" },
    children: [
      {
        path: "list",
        name: "schedule-log-list",
        component: () => import("@/views/schedule-log/ScheduleLogIndex"),
        meta: { title: "调度日志", icon: "form" }
      },
    ]
  },


  
  
  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
