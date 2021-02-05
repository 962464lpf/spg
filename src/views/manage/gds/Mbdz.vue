<template>
  <div class="mbdz">
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
                         align="left"
                         width="80"> </el-table-column>
        <el-table-column prop="khbz"
                         align="center"
                         label="考核班组"
                         width="120"> </el-table-column>
        <el-table-column label="标准分"
                         align="center"
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
      radio: 2,
      form: { name: '' },
      tableData: [
        {
          id: 1,
          gzkhx: '电能表的现场抄录',
          gzlx: '计划工作',
          khbz: '营配班',
          score: 5,
          sjly: '系统',
          pxqz: 1,
          children: [
            {
              id: '1-1',
              gzkhx: '电费电量结转审核',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '1-2',
              gzkhx: '电费电量补抄',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
          ],
        },
        {
          id: 2,
          gzkhx: '电费催缴与缴费方式推广',
          gzlx: '计划工作',
          khbz: '营配班',
          score: 5,
          sjly: '系统',
          pxqz: 1,
          children: [
            {
              id: '2-1',
              gzkhx: '电费催缴',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '2-2',
              gzkhx: '电费单送达',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '2-3',
              gzkhx: '远程费控推广',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '2-4',
              gzkhx: '电子化缴费方式推广',
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
          gzkhx: '电能计量装置安装、检查、更换、迁移',
          gzlx: '计划工作',
          khbz: '营配班',
          score: 5,
          sjly: '系统',
          pxqz: 1,
          children: [
            {
              id: '3-1',
              gzkhx: '单项电能计量装置的安装、迁移',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '3-2',
              gzkhx: '直接接入式三相四线滴啊能计量装置的安装、迁移',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '3-3',
              gzkhx: '经TA介入室三相四线滴啊能计量装置的安装、迁移',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '3-4',
              gzkhx: '直接式、间接式电能表的更换',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
          ],
        },
        {
          id: 4,
          gzkhx: '用电信息采集装置运行维护',
          gzlx: '计划工作',
          khbz: '营配班',
          score: 5,
          sjly: '系统',
          pxqz: 1,
          children: [
            {
              id: '4-1',
              gzkhx: '集中器、负控的安装',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '4-2',
              gzkhx: '现场设备调试',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '4-3',
              gzkhx: '故障处理和排查',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
          ],
        },
        {
          id: 5,
          gzkhx: '违约用电和窃电查处',
          gzlx: '计划工作',
          khbz: '营配班',
          score: 5,
          sjly: '系统',
          pxqz: 1,
          children: [
            {
              id: '5-1',
              gzkhx: '窃电及违约用电查处',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '5-2',
              gzkhx: '窃电及违约用电处理',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
          ],
        },
        {
          id: 6,
          gzkhx: '线损管理',
          gzlx: '计划工作',
          khbz: '营配班',
          score: 5,
          sjly: '系统',
          pxqz: 1,
          children: [
            {
              id: '6-1',
              gzkhx: '台区线损排查',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '6-2',
              gzkhx: '10kv线路线损排查',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
          ],
        },
        {
          id: 7,
          gzkhx: '用电检查',
          gzlx: '计划工作',
          khbz: '营配班',
          score: 5,
          sjly: '系统',
          pxqz: 1,
          children: [
            {
              id: '7-1',
              gzkhx: '定比定量检查',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '7-2',
              gzkhx: '方案勘察，工程验收',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '7-3',
              gzkhx: '营业普查',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
          ],
        },
        {
          id: 8,
          gzkhx: '配电设备运行维护及事故处理',
          gzlx: '计划工作',
          khbz: '营配班',
          score: 5,
          sjly: '系统',
          pxqz: 1,
          children: [
            {
              id: '8-1',
              gzkhx: '配电设备的巡视检查',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '8-2',
              gzkhx: '配电设备运行维护及故障处理',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '8-3',
              gzkhx: '配电设备缺陷处理',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '8-4',
              gzkhx: '配电设备事故抢修',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '8-5',
              gzkhx: '客户故障报修处理',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '8-6',
              gzkhx: '接地电阻的测试',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '8-7',
              gzkhx: '红外线测温',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '8-7',
              gzkhx: '剩余电流动作保护器测试',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
          ],
        },
        {
          id: 9,
          gzkhx: '安全用电',
          gzlx: '计划工作',
          khbz: '营配班',
          score: 5,
          sjly: '系统',
          pxqz: 1,
          children: [
            {
              id: '9-1',
              gzkhx: '电力设施保护知识宣传',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '9-2',
              gzkhx: '客户安全用电检查',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
          ],
        },
        {
          id: 10,
          gzkhx: '新兴业务',
          gzlx: '计划工作',
          khbz: '营配班',
          score: 5,
          sjly: '系统',
          pxqz: 1,
          children: [
            {
              id: '10-1',
              gzkhx: '光伏发电设备的运维',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '10-2',
              gzkhx: '电动汽车充换设施的运维',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '10-3',
              gzkhx: '电能替代推广',
              gzlx: '计划工作',
              khbz: '营配班',
              score: 5,
              sjly: '系统',
              pxqz: 2,
            },
            {
              id: '10-4',
              gzkhx: '互动平台推广',
              gzlx: '计划工作',
              khbz: '营配班',
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
.mbdz {
  .el-table tbody {
    tr {
      td:nth-child(1) {
        text-align: left !important;
      }
    }
  }
}
.checkbox-group {
  .el-checkbox {
    width: 80px;
  }
}
</style>
