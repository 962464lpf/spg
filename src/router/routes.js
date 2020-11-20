const routes = [
  {
    path: '/zhgl',
    name: 'zhgl',
    component: () => import('../components/layout/RouterView.vue'),
    meta: {
      title: '综合管理',
      icon: 'el-icon-document',
    },
    children: [
      {
        path: '/zhgl/index',
        name: 'index',
        component: () => import('../views/manage/Zhgl.vue'),
        meta: {
          title: '综合管理首页',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/zhgl/sjpz',
        name: 'sjpz',
        component: () => import('../views/manage/Sjpz.vue'),
        meta: {
          title: '数据配置',
          icon: 'el-icon-document',
        },
      },

      {
        path: '/zhgl/jsgl',
        name: 'jsgl',
        component: () => import('../views/manage/Jsgl.vue'),
        meta: {
          title: '角色管理',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/zhgl/zygl',
        name: 'zygl',
        component: () => import('../views/manage/Zygl.vue'),
        meta: {
          title: '资源管理',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/index/work',
        name: 'index',
        component: () => import('../views/target/Work.vue'),
        meta: {
          title: '工作督办',
          icon: 'el-icon-document',
        },
      },
    ],
  },
  {
    path: '/tydb',
    name: 'tydb',
    component: () => import('../components/layout/RouterView.vue'),
    meta: {
      title: '同业对标',
      icon: 'el-icon-document',
    },
    children: [
      {
        path: '/tydb/spm',
        name: 'spm',
        component: () => import('../views/tydb/Spm.vue'),
        meta: {
          title: '市公司排名',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/tydb/xpm',
        name: 'xpm',
        component: () => import('../views/tydb/Xpm.vue'),
        meta: {
          title: '县公司排名',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/tydb/gdspm',
        name: 'gdspm',
        component: () => import('../views/tydb/Gdspm.vue'),
        meta: {
          title: '供电所排名',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/tydb/zbfx',
        name: 'zbfx',
        component: () => import('../views/tydb/Zbfx.vue'),
        meta: {
          title: '指标分析',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/tydb/zbdy',
        name: 'zbdy',
        component: () => import('../views/tydb/Zbdy.vue'),
        meta: {
          title: '指标定义',
          icon: 'el-icon-document',
        },
      },
    ],
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../components/layout/RouterView.vue'),
    meta: {
      title: '统计分析',
      icon: 'el-icon-document',
    },
    children: [
      {
        path: '/index/analysis',
        name: 'index',
        component: () => import('../views/target/Analysis.vue'),
        meta: {
          title: '工单统计',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/index/analysis',
        name: 'index',
        component: () => import('../views/target/Analysis.vue'),
        meta: {
          title: '基础信息统计',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/index/analysis',
        name: 'index',
        component: () => import('../views/target/Analysis.vue'),
        meta: {
          title: '综合监控',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/index/analysis',
        name: 'index',
        component: () => import('../views/target/Analysis.vue'),
        meta: {
          title: '指标分析',
          icon: 'el-icon-document',
        },
      },
    ],
  },
  {
    path: '/sys',
    name: 'sys',
    component: () => import('../components/layout/RouterView.vue'),
    meta: {
      title: '系统配置',
      icon: 'el-icon-document',
    },
  },
]

export default routes
