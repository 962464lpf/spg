<template>
  <div>
    <div>
      <el-button type="primary"
                 @click="goBack">返回</el-button>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="工器具台账"
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
          <el-table-column prop="bh"
                           label="编号"> </el-table-column>
          <el-table-column prop="mc"
                           label="名称"> </el-table-column>
          <el-table-column prop="gg"
                           label="规格"> </el-table-column>
          <el-table-column prop="lx"
                           label="类型"> </el-table-column>
          <el-table-column prop="syr"
                           label="使用人"> </el-table-column>
          <el-table-column prop="dw"
                           label="单位"> </el-table-column>
          <el-table-column prop="rksj"
                           label="入库时间"> </el-table-column>

          <el-table-column prop="bz"
                           label="备注"> </el-table-column>
          <el-table-column label="操作">
            <template>
              <el-button type="text">修改</el-button>
              <el-button type="text">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="领用记录"
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
          <el-table-column prop="gg"
                           label="规格"> </el-table-column>
          <el-table-column prop="lx"
                           label="类型"> </el-table-column>
          <el-table-column prop="syr"
                           label="领用时间"> </el-table-column>
          <el-table-column prop="rksj"
                           label="归还时间"> </el-table-column>
          <el-table-column prop="glfzr"
                           label="管理负责人"> </el-table-column>
          <el-table-column prop="bz"
                           label="备注"> </el-table-column>
          <el-table-column label="操作">
            <template>
              <el-button type="text">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="检查纪录"
                   name="third">
        <el-row>
          <el-button type="primary"
                     @click="dialogVisible = true">检查情况说明</el-button>
        </el-row>
        <el-table :data="tableData1"
                  border
                  stripe
                  style="width: 100%"
                  class="mt10">
          <el-table-column prop="jcsj"
                           label="检查时间"> </el-table-column>
          <el-table-column prop="jcr"
                           label="检查人"> </el-table-column>
          <el-table-column prop="jcqksm"
                           label="检查情况说明"> </el-table-column>

        </el-table>
        <el-dialog title="检查情况说明"
                   :visible.sync="dialogVisible"
                   width="45%"
                   :before-close="handleClose">
          <el-input type="textarea"
                    :rows="9"
                    placeholder="请输入内容"
                    v-model="textarea">
          </el-input>
            <span slot="footer"
                  class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary"
                         @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      dialogVisible: false,
      tableData: [
        {
          bh: 1,
          mc: '安全帽',
          gg: '',
          syr: '小李',
          lx: '安全工器具',
          dw: 'xxx供电所',
          bz: 'xxx',
          rksj: '2020-3.25',
          glfzr: '小王',
        },
        {
          bh: 2,
          mc: '砍刀',
          gg: '',
          syr: '小李',
          lx: '生产工器具',
          dw: 'xxx供电所',
          bz: 'xxx',
          rksj: '2020-3-25',
          glfzr: '小王',
        },
      ],
      tableData1: [
        {
          jcsj: '2020-12-1 12:34:34',
          jcr: '小王',
          jcqksm: '一切正常',
        },
      ],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    handleClose() {
      this.dialogVisible = false
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
