<template>
  <el-dialog title="查看"
             :visible.sync="dialogVisible"
             width="65%"
             :before-close="handleClose">
    <el-form ref="form"
             label-width="120px">
      <el-form-item label="接单时间">
        <el-date-picker type="datetime"
                        placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="任务名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="任务内容">
        <el-input type="textarea"
                  v-model="form.content"></el-input>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="派工时间">
            <el-date-picker type="datetime"
                            placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="计划完成时间"
                        v-if="!values">
            <el-date-picker type="datetime"
                            v-model="form.jhTime"
                            placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="实际完成时间"
                        v-if="values">
            <el-date-picker type="datetime"
                            v-model="form.jhTime"
                            placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="工作类型">
        <p></p>
        <p>用电检查</p>
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="违规用电"
                       name="type"></el-checkbox>
          <el-checkbox label="窃电查处"
                       name="type1"></el-checkbox>
        </el-checkbox-group>
        <p>设备运维及事故处理</p>
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="运行维护"
                       name="type"></el-checkbox>
          <el-checkbox label="检修更换"
                       name="type1"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="出发地">
            <el-input v-model="form.cfd"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="目的地">
            <el-select v-model="form.mdd">
              <el-option label="区域一"
                         value="shanghai"></el-option>
              <el-option label="区域二"
                         value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="车牌号">
            <el-select v-model="form.cph">
              <el-option label="陕A123456"
                         value="shanghai"></el-option>
              <el-option label="陕A123457"
                         value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="工作负责人">
            <el-select v-model="form.gzfzr">
              <el-option label="小二"
                         value="shanghai"></el-option>
              <el-option label="小三"
                         value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="工作成员">
            <el-select v-model="form.gzcy">
              <el-option label="小二"
                         value="shanghai"></el-option>
              <el-option label="小三"
                         value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="其他人">
            <el-input v-model="form.qtr"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="两票一单">
            <el-radio-group v-model="form.resource">
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="工单号">
            <el-input v-model="form.gzph"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="注意事项"
                    v-if="!values">
        <el-input type="textarea"
                  v-model="form.zysx"></el-input>
        <el-button v-if="!values"
                   type="primary">选择</el-button>
      </el-form-item>

      <el-form-item label="签发人"
                    v-if="values">
        <el-row>
          <el-col :span="12">签发人： {{ form.qfr }}</el-col>
          <el-col :span="12">签发时间： {{ form.qfsj }}</el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="车况检查"
                    v-if="values">
        <el-row>
          <el-col :span="8">本次里程： {{ form.bclc }}</el-col>
          <el-col :span="8">本次油耗： {{ form.bcyh }}</el-col>
          <el-col :span="8">归还车辆：<el-checkbox v-model="form.ghcl">已归还</el-checkbox>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="工器具">
        <el-table :data="tableData"
                  border
                  style="width: 100%">
          <el-table-column prop="date"
                           label="已归还">
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.checked"></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column prop="bh"
                           label="编号"> </el-table-column>
          <el-table-column prop="lx"
                           label="类型"> </el-table-column>
          <el-table-column prop="gqjmc"
                           label="工器具名称"> </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item label="备品备件">
        <el-table :data="tableData1"
                  border
                  style="width: 100%">
          <el-table-column prop="date"
                           label="已归还">
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.checked"></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column prop="bh"
                           label="物料代码"> </el-table-column>
          <el-table-column prop="lx"
                           label="物料名称"> </el-table-column>
          <el-table-column prop="gqjmc"
                           label="归还数量"> </el-table-column>
          <el-table-column prop="gqjmc"
                           label="领用数量"></el-table-column>
          <el-table-column prop="gqjmc"
                           label="规格"></el-table-column>
          <el-table-column prop="gqjmc"
                           label="单位"></el-table-column>
        </el-table>
      </el-form-item>
    </el-form>
    <span slot="footer"
          class="dialog-footer">
      <el-button @click="handleClose"
                 type="primary">打印派工单</el-button>
      <el-button type="primary"
                 @click="handleClose">打印备品备件</el-button>
      <el-button type="primary"
                 @click="handleClose">打印工器具</el-button>
      <el-button type="primary"
                 @click="handleClose">关闭</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    values: {},
  },
  data() {
    return {
      dialogVisible: this.value,
      form: {
        name: '换表',
        content: '党岔供电所**客户，户名为**，地址为**，要求更换表记。',
        zxTime: '2020-11-13',
        jhTime: '',
        type: ['业扩报装'],
        cfd: '党岔供电所',
        mdd: '党岔供电所xxx',
        cph: 'shanghai',
        gzfzr: '张军',
        gzcy: '李军',
        qtr: '王军',
        resource: '是',
        gzph: '123456',
        zysx: '',
        gqj: '',
        bpbj: '',
        qfr: '王鹏',
        qfsj: '2020-11.22 14:34:45',
        bclc: '123Km',
        bcyh: '10升',
        ghcl: true,
      },
      tableData: [
        { checked: true, bh: '123', lx: '施工工器具', gqjmc: '梯子' },
        { checked: true, bh: '1234', lx: '施工工器具', gqjmc: '安全帽' },
      ],
      tableData1: [],
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
