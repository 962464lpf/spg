<template>
  <div class="tjfx">
    <el-row style="height: 100%;">
      <!-- <el-col :span="3">
        <el-tree
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          default-expand-all
          ref="tree"
        >
        </el-tree>
      </el-col> -->
      <el-col
        :span="24"
        style="padding-left: 5px; box-sizing:border-box; height: 100%;"
      >
        <el-tabs v-model="activeName">
          <el-tab-pane v-if="!tqStatus" label="基本信息" name="first" lazy style="height: 100%;">
            <Jbxx v-if="!tqStatus"></Jbxx>
          </el-tab-pane>
          <el-tab-pane
            label="工单统计"
            name="second"
            lazy
            style="height: 100%;"
          >
            <Gdtj></Gdtj>
          </el-tab-pane>
          <el-tab-pane v-if="tqStatus" label="台区统计" name="third" lazy style="height: 100%;">
            <Tqtj v-if="tqStatus"></Tqtj>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
    city (val) {
      val.length > 3 ? this.tqStatus = true: this.tqStatus = false
    }
  },
  computed: {
    ...mapState(['city']),
  },
  data() {
    return {
      activeName: 'first',
      filterText: '',
      tqStatus: false,
      data: [
        {
          id: 1,
          label: '陕西省',
          children: [
            {
              id: 4,
              label: '宝鸡市',
              children: [
                {
                  id: 9,
                  label: '眉县',
                },
                {
                  id: 10,
                  label: '岐山县',
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

<style lang="scss">
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
