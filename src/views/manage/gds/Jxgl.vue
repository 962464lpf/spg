<template>
  <div>
    <div class="mt10">
      <el-button type="primary"
                 @click="goBack">返回</el-button>
    </div>
    <div class="mt10">
      <el-button type="primary"
                 @click="() => (mbdzStatus = true, jxjsStatus = false, jxhzStatus = false)">模板库</el-button>
      <el-button type="primary"
                 @click="() => (mbdzStatus = false, jxjsStatus = true, jxhzStatus = false)">绩效计算</el-button>
      <el-button type="primary"
                 @click="() => (mbdzStatus = false, jxjsStatus = false, jxhzStatus = true)">绩效汇总</el-button>
    </div>
    <!-- 模板定制 -->
    <div v-if="mbdzStatus && !jxjsStatus && !jxhzStatus">
      <el-form :inline="true"
               class="mt10">
        <el-form-item label="模板">
          <el-select placeholder="" v-model="selectmb">
            <el-option label="模板1"
                       value="shanghai1"></el-option>
            <el-option label="模板2"
                       value="beijing2"></el-option>
          </el-select>
        </el-form-item>
        <el-button type="primary">检索</el-button>

        <el-button type="primary"
                   @click="mbdzStatusDialog = true">定制模板</el-button>
      </el-form>
      <el-table :data="tableData"
                style="width: 100%"
                class="mt10"
                border>
        <el-table-column prop="name"
                         label="模板类型"> </el-table-column>
        <el-table-column prop="bz"
                         label="模板定制单位"> </el-table-column>
        <el-table-column prop="bz"
                         label="定制人员"> </el-table-column>
        <el-table-column prop=""
                         label="操作">
          <template>
            <el-button type="primary"
                       @click="mbdzStatusDialog = true">编辑</el-button>
            <el-button type="primary">删除</el-button>
            <el-button type="primary"
                       @click="selectVisible = true">选择</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 绩效计算 -->
    <div v-if="!mbdzStatus && jxjsStatus && !jxhzStatus">
      <el-form :inline="true">
        <el-form-item label="考核人">
          <el-select placeholder="" v-model="selectkhr">
            <el-option label="小李"
                       value="shanghai"></el-option>
            <el-option label="小王"
                       value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="考核时间">
          <el-date-picker type="month"
                          placeholder="选择月"> </el-date-picker>
        </el-form-item>
        <el-form-item label="岗位基础分">
          <el-input></el-input>
        </el-form-item>
        <el-button type="primary">执行计算</el-button>
      </el-form>
      <el-table :data="tableData"
                style="width: 100%"
                border
                :span-method="objectSpanMethod">
        <el-table-column prop="gzlx"
                         label="工作类型">
        </el-table-column>
        <el-table-column prop="ywlx"
                         label="业务类型">
        </el-table-column>
        <el-table-column prop="gzdx"
                         label="工作大项">
        </el-table-column>
        <el-table-column prop="gzxx"
                         label="工作小项">
        </el-table-column>
        <el-table-column prop="gzsl"
                         label="工作数量">
        </el-table-column>
        <el-table-column prop="bzf"
                         label="标准分">
        </el-table-column>
        <el-table-column prop="df"
                         label="得分">
          <template slot-scope="scope">
            <el-input v-model="scope.row.df"></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="bz"
                         label="备注">
        </el-table-column>
      </el-table>
    </div>

    <!-- 绩效汇总 -->
    <div v-if="!mbdzStatus && !jxjsStatus && jxhzStatus">
      <el-form :inline="true"
               class="mt10">
        <el-form-item label="考核人">
          <el-select placeholder="" v-model="selectkhr">
            <el-option label="小李"
                       value="shanghai"></el-option>
            <el-option label="小王"
                       value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="考核时间">
          <el-date-picker type="month"
                          placeholder="选择月"> </el-date-picker>
        </el-form-item>

        <el-button type="primary">检索</el-button>
      </el-form>
      <el-table :data="tableData"
                style="width: 100%"
                class="mt10"
                border>
        <el-table-column prop="name"
                         label="姓名"> </el-table-column>
        <el-table-column prop="bz"
                         label="班组"> </el-table-column>
        <el-table-column prop="jcgwf"
                         label="基础岗位分"> </el-table-column>
        <el-table-column prop="jhgz"
                         label="计划工作"> </el-table-column>
        <el-table-column prop="zhgl"
                         label="综合管理"> </el-table-column>
        <el-table-column prop="jf"
                         label="加分"> </el-table-column>
        <el-table-column prop="zbqk"
                         label="指标情况"> </el-table-column>
        <el-table-column prop="jf"
                         label="减分"> </el-table-column>
        <el-table-column prop="lsgz"
                         label="临时工作"> </el-table-column>
        <el-table-column prop="zdf"
                         label="总得分"> </el-table-column>
        <el-table-column prop="pm"
                         label="排名"> </el-table-column>
      </el-table>
    </div>

    <div v-if="mbdzStatusDialog">
      <Mbdz v-model="mbdzStatusDialog"></Mbdz>
    </div>
    <div v-if="jxjsStatusDialog">
      <Jxjs v-model="jxjsStatusDialog"></Jxjs>
    </div>

    <el-dialog title="供电所选择"
               :visible.sync="selectVisible"
               width="40%"
               :before-close="() => selectVisible = false">
      <el-row>
        单位选择：<el-cascader v-model="formInline.city"
                     :options="options"
                     :props="{ expandTrigger: 'hover',checkStrictly: true }"></el-cascader>
      </el-row>
      <el-row class="mt10">
        供电所选择：
        <el-select v-model="formInline.gds"
                   multiple
                   placeholder="请选择">
          <el-option v-for="item in gdsoptions"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-row>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="selectVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="selectVisible = false">执 行</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Mbdz from './Mbdz'
import Jxjs from './Jxjs'
export default {
  components: {
    Mbdz,
    Jxjs,
  },
  data() {
    return {
      mbdzStatus: true,
      jxjsStatus: false,
      jxhzStatus: false,
      mbdzStatusDialog: false,
      jxjsStatusDialog: false,
      selectVisible: false,
      selectmb: '',
      selectkhr: '',
      tableData: [{}],
      formInline: {
        time: '',
        city: ['宝鸡市'],
        gds: [],
      },
      options: [
        {
          label: '宝鸡市',
          value: '宝鸡市',
          children: [
            {
              value: '岐山县',
              label: '岐山县',
            },
            {
              value: 'meixian',
              label: '眉县',
            },
          ],
        },
      ],
      gdsoptions: [
        {
          value: '供电所1',
          label: '供电所1',
        },
        {
          value: '供电所2',
          label: '供电所2',
        },
      ],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return {
          rowspan: 3,
          colspan: 1,
        }
      }
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
