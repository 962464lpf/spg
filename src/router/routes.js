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
        path: '/zhgl/dishi',
        name: 'dishi',
        component: () => import('../views/manage/ZhglS.vue'),
        meta: {
          title: '',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/zhgl/xian',
        name: 'xian',
        component: () => import('../views/manage/ZhglXian.vue'),
        meta: {
          title: '',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/zhgl/gds',
        name: 'gds',
        component: () => import('../views/manage/Gongdiansuo.vue'),
        meta: {
          title: '',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/zhgl/gds/gdgl',
        name: 'gd',
        component: () => import('../views/manage/gds/Gdgl.vue'),
        meta: {
          title: '',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/zhgl/gds/ygd',
        name: 'ygd',
        component: () => import('../views/manage/gds/Ygd.vue'),
        meta: {
          title: '',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/zhgl/gds/gqj',
        name: 'gqj',
        component: () => import('../views/manage/gds/Gqjgl.vue'),
        meta: {
          title: '',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/zhgl/gds/bpbj',
        name: 'bpbj',
        component: () => import('../views/manage/gds/Bpbj.vue'),
        meta: {
          title: '',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/zhgl/gds/clgl',
        name: 'clgl',
        component: () => import('../views/manage/gds/Clgl.vue'),
        meta: {
          title: '',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/zhgl/gds/tqgl',
        name: 'tqgl',
        component: () => import('../views/manage/gds/Tqgl.vue'),
        meta: {
          title: '',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/zhgl/gds/rygl',
        name: 'rygl',
        component: () => import('../views/manage/gds/Rygl.vue'),
        meta: {
          title: '',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/zhgl/gds/jxgl',
        name: 'jxgl',
        component: () => import('../views/manage/gds/Jxgl.vue'),
        meta: {
          title: '',
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
        path: '/zhgl/tjfx',
        name: 'sjpz',
        component: () => import('../views/manage/Tjfx.vue'),
        meta: {
          title: '统计分析',
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
        path: '/tydb/zbfxS',
        name: 'zbfx',
        component: () => import('../views/tydb/ZbfxS.vue'),
        meta: {
          title: '',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/tydb/zbfxX',
        name: 'zbfx',
        component: () => import('../views/tydb/ZbfxX.vue'),
        meta: {
          title: '',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/tydb/zbfxGds',
        name: 'zbfx',
        component: () => import('../views/tydb/ZbfxGds.vue'),
        meta: {
          title: '',
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
    path: '/yxfx',
    name: 'yxfx',
    component: () => import('../components/layout/RouterView.vue'),
    meta: {
      title: '运行指标分析',
      icon: 'el-icon-document',
    },
    children: [
      {
        path: '/yxfx/zbfx',
        name: 'spm',
        component: () => import('../views/statistics/Zbfx.vue'),
        meta: {
          title: '指标监控',
          icon: 'el-icon-document',
        },
      },
      {
        path: '/yxfx/gzdu',
        name: 'spm',
        component: () => import('../views/statistics/Work.vue'),
        meta: {
          title: '工作督办',
          icon: 'el-icon-document',
        },
      },
    ],
  },
]

export default routes
