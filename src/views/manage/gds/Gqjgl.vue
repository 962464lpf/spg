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
          <el-form-item label="名称">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="编号">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">检索</el-button>
          </el-form-item>
        </el-form>

        <div class="fr clearfloat mt10">
          <el-button type="primary"
                     @click="gqjxzStatus = true">新增</el-button>
          <el-button type="primary" @click="pldrStatus = true">批量导入</el-button>
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
                           label="工器具名称"> </el-table-column>
          <el-table-column prop="lx"
                           label="类型"> </el-table-column>

          <el-table-column prop="dw"
                           label="单位"> </el-table-column>
          <el-table-column prop="rksj"
                           label="入库时间"> </el-table-column>

          <el-table-column label="操作"
                           width="150">
            <template>
              <el-button type="primary">修改</el-button>
              <el-button type="danger">删除</el-button>
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
            <el-button type="primary">检索</el-button>
          </el-form-item>
        </el-form>
        <div class="clearfloat"></div>
        <el-table :data="tableData2"
                  style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-table :data="props.row.list"
                        style="width: 100%">
                <el-table-column prop="bh"
                                 label="编号"> </el-table-column>
                <el-table-column prop="lx"
                                 label="类型"> </el-table-column>
                <el-table-column prop="lymc"
                                 label="工器具名称"> </el-table-column>
                <el-table-column prop="lyr"
                                 label="领用人"> </el-table-column>
                <el-table-column prop="lysj"
                                 label="领用时间"> </el-table-column>
                <el-table-column prop="ghsj"
                                 label="归还时间"> </el-table-column>
                <el-table-column prop="fzr"
                                 label="管理负责人"> </el-table-column>
              </el-table>

            </template>
          </el-table-column>
          <el-table-column prop="pgdh"
                           label="工单号"> </el-table-column>
          <el-table-column prop="pgsj"
                           label="签发时间"> </el-table-column>
          <el-table-column prop="rwmc"
                           label="任务名称"> </el-table-column>
          <el-table-column prop="zylx"
                           label="作业类型"> </el-table-column>
          <el-table-column prop="gzzrr"
                           label="工作负责人"> </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <el-dialog title="新增工器具"
               :visible.sync="gqjxzStatus"
               width="30%"
               :before-close="()=> gqjxzStatus = false">
      <el-form :inline="true" label-position="rihgt"
               class="demo-form-inline" label-width="120px">
        <el-form-item label="编号">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="工器具名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="单位">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="gqjxzStatus = false">取 消</el-button>
        <el-button type="primary"
                   @click="gqjxzStatus = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="批量导入工器具"
               :visible.sync="pldrStatus"
               width="40%"
               :before-close="()=> pldrStatus = false">
      <el-form :inline="true" label-position="rihgt"
               class="demo-form-inline" label-width="120px">
        <el-form-item label=''>
          <input type="file">
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="pldrStatus = false">取 消</el-button>
        <el-button type="primary"
                   @click="pldrStatus = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
      gqjxzStatus: false,
      pldrStatus: false,
      tableData: [
        {
          bh: '1-01',
          mc: '验电笔',
          gg: '',
          syr: '小李',
          lx: '安全工器具',
          dw: '党岔供电所',
          bz: 'xxx',
          rksj: '2020-11-02 10：48',
          glfzr: '小王',
          gdh: 123456,
          pgsh: '2020-3.25',
          sl: '10个',
        },
      ],
      tableData1: [
        {
          jcsj: '2020-12-1 12:34:34',
          jcr: '小王',
          jcqksm: '一切正常',
        },
      ],
      tableData2: [
        {
          pgsj: '2020-11-23 12:23:34',
          pgdh: '2020112301',
          rwmc: '巡线',
          zylx: '用电检查',
          gzzrr: '王小虎',
          gdly: '96789',
          zdr: '张小虎',
          qfr: 's',
          zt: '已接单',
          status: 1,
          lymc: '安全帽',
          lx: '安全工器具',
          lysl: '3',
          lysj: '2020-11-23 14:23:34',
          ghsj: '2020-11-23 16:23:34',
          fzr: '小王',
          list: [
            {
              bh: '1-22-02',
              lymc: '梯子',
              lx: '安全工器具',
              lysl: '3',
              lysj: '2020-11-23 14:23:34',
              ghsj: '2020-11-23 16:23:34',
              fzr: '闫春莉',
              lyr: '王永涛',
            },
          ],
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
