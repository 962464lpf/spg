<template>
  <div>
    <el-dialog title="绩效模板定制"
               :visible.sync="dialogVisible"
               width="75%"
               :before-close="handleClose">
      <div>
        <span>工作类型：</span>
        <el-radio-group v-model="radio">
          <el-radio :label="1">全部</el-radio>
          <el-radio :label="2">计划工作</el-radio>
          <el-radio :label="3">综合管理</el-radio>
          <el-radio :label="4">加分</el-radio>
          <el-radio :label="5">指标情况</el-radio>
          <el-radio :label="6">减分</el-radio>
          <el-radio :label="7">临时工作</el-radio>
        </el-radio-group>
      </div>
      <el-table :data="tableData"
                class="mt10"
                border
                style="width: 100%"
                row-key="id"
                :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column prop="gzkhx"
                         label="工作考核项">
          <template slot="header">
            <span>工作考核项</span>
            <b class="el-icon-plus mr10 curp fr"
               @click="addMbStatus = true"></b>
          </template>
          <template slot-scope="scope">
            <span>{{ scope.row.gzkhx }}</span>
            <span class="fr">
              <i class="el-icon-plus mr10 curp"
                 v-if="scope.row.children"></i>
              <i class="el-icon-edit mr10 curp"></i>
              <i class="el-icon-delete curp"></i>
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="gzlx"
                         label="工作类型"
                         width="80"> </el-table-column>
        <el-table-column prop="khbz"
                         label="考核班组"
                         width="120"> </el-table-column>
        <el-table-column label="标准分"
                         width="150">
          <template slot-scope="scope">
            <el-input v-model="scope.row.score"
                      v-if="!scope.row.children"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="sjly"
                         label="数据来源"
                         width="80"> </el-table-column>
        <el-table-column prop="pxqz"
                         label="排序权重"
                         width="80"> </el-table-column>
      </el-table>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary"
                   @click="handleClose">确 定</el-button>
      </span>

      <el-dialog width="50%"
                 title="新增绩效模板"
                 :visible.sync="addMbStatus"
                 append-to-body>
        <el-form ref="form"
                 label-width="120px">
          <el-form-item label="工作项名称">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="工作类型">
            <el-select>
              <el-option label="计划工作"
                         value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="班组">
            <el-checkbox-group v-model="form.name">
              <el-checkbox label="综合班"></el-checkbox>
              <el-checkbox label="营配班"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="数据系统类型">
            <el-select>
              <el-option label="系统"
                         value="shanghai"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="排序权重">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer"
              class="dialog-footer">
          <el-button @click="addMbStatus = false">取 消</el-button>
          <el-button type="primary"
                     @click="addMbStatus = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-dialog>
  </div>

</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      addMbStatus: false,
      dialogVisible: this.value,
      radio: 1,
      form: { name: '' },
      tableData: [
        {
          id: 1,
          gzkhx: '电费催缴与缴费推广',
          gzlx: '计划工作',
          khbz: '营配班',
          score: 5,
          sjly: '系统',
          pxqz: 1,
          children: [
            {
              id: 2,
              gzkhx: '网上APP缴费推广',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
          ],
        },
        {
          id: 3,
          gzkhx: '值班管理',
          gzlx: '综合管理',
          khbz: '营配班，综合班',
          score: 2,
          sjly: '系统',
          pxqz: 1,
          children: [
            {
              id: 4,
              gzkhx: '正常值班',
              gzlx: '综合管理',
              khbz: '营配班，综合班',
              score: 2,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: 5,
              gzkhx: '借节日值班',
              gzlx: '综合管理',
              khbz: '营配班，综合班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
          ],
        },
      ],
    }
  },
  methods: {
    handleClose() {
      this.$emit('input', false)
    },
  },
  mounted() {},
}
</script>

<style lang="scss">
.checkbox-group {
  .el-checkbox {
    width: 80px;
  }
}
</style>
