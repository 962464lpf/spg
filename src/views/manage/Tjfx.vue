<template>
  <div class="tjfx">
    <el-row style="height: 100%;">
      <el-col :span="3">
        <el-input placeholder="输入关键字进行过滤"
                  v-model="filterText">
        </el-input>
        <el-tree class="filter-tree"
                 :data="data"
                 :props="defaultProps"
                 default-expand-all
                 ref="tree">
        </el-tree>
      </el-col>
      <el-col :span="21"
              style="padding-left: 5px; box-sizing:border-box; height: 100%;">
        <el-tabs v-model="activeName">
          <el-tab-pane label="基本信息"
                       name="first"
                       lazy
                       style="height: 100%;">
            <Jbxx></Jbxx>
          </el-tab-pane>
          <el-tab-pane label="工单统计"
                       name="second"
                       lazy
                       style="height: 100%;">
            <Gdtj></Gdtj>
          </el-tab-pane>
          <el-tab-pane label="台区统计"
                       name="third"
                       lazy
                       style="height: 100%;">
            <Tqtj></Tqtj>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import Jbxx from './tjfx/Jbxx'
import Gdtj from './tjfx/Gdtj'
import Tqtj from './tjfx/Tqtj'
export default {
  components: {
    Jbxx,
    Gdtj,
    Tqtj,
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    },
  },
  data() {
    return {
      activeName: 'first',
      filterText: '',
      data: [
        {
          id: 1,
          label: '陕西省',
          children: [
            {
              id: 4,
              label: '西安市',
              children: [
                {
                  id: 9,
                  label: '雁塔区',
                },
                {
                  id: 10,
                  label: '碑林区',
                },
              ],
            },
            {
              id: 5,
              label: '渭南市',
              children: [
                {
                  id: 6,
                  label: '潼关县',
                },
                {
                  id: 7,
                  label: '蒲城县',
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style  lang="scss">
.tjfx {
  height: 100%;
  overflow: hidden;
  .el-tabs {
    height: 100% !important;
    .el-tabs__content {
      height: 100%;
      overflow: auto;
    }
  }
}
</style>
