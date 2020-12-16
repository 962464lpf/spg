<template>
  <div>
    <div>
      <el-button type="primary"
                 @click="goBack">返回</el-button>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="备品备件库"
                   name="first">
        <el-form :inline="true">
          <el-form-item label="物料代码">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="物料名称">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">检索</el-button>
          </el-form-item>
        </el-form>

        <div class="fr clearfloat mt10">
          <el-button type="primary">新增</el-button>
          <el-button type="primary">批量导入</el-button>
          <el-button type="primary">导出</el-button>
        </div>
        <div class="clearfloat"></div>
        <el-table :data="tableData"
                  border
                  stripe
                  style="width: 100%"
                  class="mt10">
          <el-table-column type="selection"
                           width="55">
          </el-table-column>
          <el-table-column prop="bh"
                           label="编号"
                           width="55"> </el-table-column>
          <el-table-column prop="wldm"
                           label="物料代码"> </el-table-column>
          <el-table-column prop="lx"
                           label="物料类型"> </el-table-column>
          <el-table-column prop="mc"
                           label="物料名称"> </el-table-column>
          <el-table-column prop="sl"
                           label="物料数量"> </el-table-column>
          <el-table-column prop="yjsl"
                           label="预警数量"> </el-table-column>
          <el-table-column prop="dw"
                           label="单位"> </el-table-column>
          <el-table-column label="出入库"
                           width="150">
            <template>
              <el-button type="primary">入库</el-button>
              <el-button type="primary">出库</el-button>
            </template>
          </el-table-column>
          <!-- <el-table-column label="操作" width="220">
            <template>
              <el-button type="primary">出库</el-button>
              <el-button type="primary">修改</el-button>
              <el-button type="primary">删除</el-button>
            </template>
          </el-table-column> -->
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="出入库记录"
                   name="second">
        <el-form :inline="true">
          <el-form-item label="物料代码">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="物料名称">
            <el-input></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary">检索</el-button>
            <el-button type="primary">导出</el-button>
          </el-form-item>
        </el-form>
        <div class="clearfloat"></div>
        <el-table :data="tableData"
                  border
                  stripe
                  style="width: 100%"
                  class="mt10">
          <el-table-column prop="bh"
                           label="编号"> </el-table-column>
          <el-table-column prop="wldm"
                           label="物料代码"> </el-table-column>
          <el-table-column prop="lx"
                           label="物料类型"> </el-table-column>
          <el-table-column prop="mc"
                           label="物料名称"> </el-table-column>
          <el-table-column prop="gdh"
                           label="工单号"> </el-table-column>
          <el-table-column prop="czlx"
                           label="操作类型"> </el-table-column>
          <el-table-column prop="sl"
                           label="数量"> </el-table-column>
          <el-table-column prop="dw"
                           label="单位"> </el-table-column>
          <el-table-column prop="czsj"
                           label="操作时间"> </el-table-column>
          <el-table-column prop="czfzr"
                           label="管理负责人"> </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="库存盘点"
                   name="third">
        <el-table :data="tableData"
                  border
                  stripe
                  style="width: 100%"
                  class="mt10">
          <el-table-column prop="bh"
                           label="编号"
                           width="55"> </el-table-column>
          <el-table-column prop="wldm"
                           label="物料代码"> </el-table-column>
          <el-table-column prop="lx"
                           label="物料类型"> </el-table-column>
          <el-table-column prop="mc"
                           label="物料名称"> </el-table-column>
          <el-table-column prop="sl"
                           label="物料数量"> </el-table-column>
          <el-table-column prop="yjsl"
                           label="预警数量"> </el-table-column>
          <el-table-column prop="bcts"
                           label="补充提示"> </el-table-column>
          <el-table-column prop="gg"
                           label="库存补充确认">
            <template>
              <el-checkbox></el-checkbox>
            </template>
          </el-table-column>
        </el-table>
        <el-row>
          <el-button type="primary">导出库存</el-button>
          <el-button type="primary">重置勾选</el-button>
          <el-button type="primary">导出补充库存</el-button>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      tableData: [
        {
          bh: 1,
          mc: '急速导线（2*35）',
          gg: '米',
          syr: '小李',
          lx: '备件',
          sl: '34',
          dw: 'm',
          bz: 'xxx',
          czlx: '归还入库',
          czsj: '2020-12.1 12:23:34',
          jjsl: 100,
          bcts: '充足',
          wldm: '3-007',
          yjsl: 100,
          gdh: '2020110202',
          czfzr: '闫春莉'
        },
      ],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
