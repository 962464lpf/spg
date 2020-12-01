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
          <el-form-item label="编号">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select>
              <el-option label="类型1"
                         value="shanghai"></el-option>
              <el-option label="类型1"
                         value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
        </el-form>

        <div class="fr clearfloat mt10">
          <el-button type="primary">补充入库</el-button>
          <el-button type="primary">批量导入</el-button>
          <el-button type="primary">导出</el-button>
        </div>
        <div class="clearfloat"></div>
        <el-table :data="tableData"
                  border
                  stripe
                  style="width: 100%"
                  class="mt10">
          <el-table-column prop="bh"
                           label="编号"> </el-table-column>
          <el-table-column prop="mc"
                           label="名称"> </el-table-column>
          <el-table-column prop="sl"
                           label="数量"> </el-table-column>
          <el-table-column prop="gg"
                           label="规格"> </el-table-column>
          <el-table-column prop="lx"
                           label="类型"> </el-table-column>
          <el-table-column prop="dw"
                           label="单位"> </el-table-column>
          <el-table-column label="出入库"
                           width="280">
            <template>
              <el-button>补充入库</el-button>
              <el-button>出库</el-button>
              <el-button>归还入库</el-button>
            </template>
          </el-table-column>
          <el-table-column label="操作"
                           width="220">
            <template>
              <el-button>出库</el-button>
              <el-button>修改</el-button>
              <el-button>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="出入库记录"
                   name="second">
        <el-form :inline="true">
          <el-form-item label="编号">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select>
              <el-option label="类型1"
                         value="shanghai"></el-option>
              <el-option label="类型1"
                         value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
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
          <el-table-column prop="mc"
                           label="名称"> </el-table-column>
          <el-table-column prop="czlx"
                           label="操作类型"> </el-table-column>
          <el-table-column prop="sl"
                           label="数量"> </el-table-column>
          <el-table-column prop="gg"
                           label="规格"> </el-table-column>
          <el-table-column prop="czsj"
                           label="操作时间"> </el-table-column>

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
                           label="编号"> </el-table-column>
          <el-table-column prop="lx"
                           label="类型"> </el-table-column>
          <el-table-column prop="mc"
                           label="名称"> </el-table-column>
          <el-table-column prop="sl"
                           label="库存数量"> </el-table-column>
          <el-table-column prop="gg"
                           label="单位"> </el-table-column>
          <el-table-column prop="jjsl"
                           label="警戒数量"> </el-table-column>
          <el-table-column prop="bcts"
                           label="补充提示"> </el-table-column>
          <el-table-column prop="gg"
                           label="确认补充">
            <template>
              <el-checkbox></el-checkbox>
            </template>
          </el-table-column>
        </el-table>
        <el-row>
          <el-button type="primary">盘点打印</el-button>
          <el-button type="primary">重置勾选</el-button>
          <el-button type="primary">保存确认</el-button>
          <el-button type="primary">补充导出</el-button>
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
          mc: '电线',
          gg: '米',
          syr: '小李',
          lx: '线缆',
          sl: '1000',
          dw: 'xxx供电所',
          bz: 'xxx',
          czlx: '归还入库',
          czsj: '2020-12.1 12:23:34',
          jjsl: 100,
          bcts: '充足',
        },
        {
          bh: 2,
          mc: '蝴蝶瓶',
          gg: '个',
          syr: '小李',
          lx: '备件',
          sl: 500,
          dw: 'xxx供电所',
          bz: 'xxx',
          czlx: '出库',
          czsj: '2020-12.1 8:23:34',
          jjsl: 100,
          bcts: '充足',
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
