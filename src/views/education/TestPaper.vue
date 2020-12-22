<template>
  <div class="test-paper">
    <el-row>
      <el-button type="primary" @click="xjsjStatus = true">新建试卷</el-button>
      <el-button type="primary" @click="sjgzszStatus = true"
        >试卷规则设置</el-button
      >
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="编号" width="50"> </el-table-column>
      <el-table-column prop="name" label="试卷名称"> </el-table-column>
      <el-table-column prop="time" label="考试时间"> </el-table-column>
      <el-table-column prop="status" label="考试状态"> </el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="">
          <b class="mr10">删除</b>
          <el-button type="primary" @click="sjmxStatus = true">明细</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="试卷明细"
      :visible.sync="sjmxStatus"
      width="60%"
      :before-close="() => (sjmxStatus = false)"
    >
      <el-table :data="sjmxTableData" border style="width: 100%">
        <el-table-column prop="dw" label="单位">
          <template slot-scope="scope">
            <b class="curp" style="color: #0b3a8a;" @click="change">{{
              scope.row.dw
            }}</b>
          </template>
        </el-table-column>
        <el-table-column prop="gdsgs" label="供电所个数"> </el-table-column>
        <el-table-column prop="ykrs" label="应考人数"> </el-table-column>
        <el-table-column prop="skrs" label="实考人数"> </el-table-column>
        <el-table-column prop="pjf" label="平均分"> </el-table-column>
        <el-table-column prop="zgf" label="最高分"> </el-table-column>
        <el-table-column prop="zdf" label="最低分"> </el-table-column>
        <el-table-column prop="pm" label="排名"> </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="sjmxStatus = false">取 消</el-button>
        <el-button type="primary" @click="sjmxStatus = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="试卷规则设置"
      :visible.sync="sjgzszStatus"
      width="60%"
      :before-close="() => (sjgzszStatus = false)"
    >
      <el-form label-position="right" label-width="110px" :model="gzForm">
        <el-form-item label="考试时长(小时)">
          <el-input-number
            v-model="gzForm.num"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="单选题">
          <el-row>
            <el-col :span="8">
              数量：
              <el-input-number
                v-model="gzForm.num1"
                :min="1"
                :max="100"
                label="描述文字"
              ></el-input-number
            ></el-col>
            <el-col :span="8"
              >单题分值：
              <el-input-number
                v-model="gzForm.num2"
                :min="1"
                :max="100"
                label="描述文字"
              ></el-input-number
            ></el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="多选题">
          <el-row>
            <el-col :span="8">
              数量：
              <el-input-number
                v-model="gzForm.num3"
                :min="1"
                :max="100"
                label="描述文字"
              ></el-input-number
            ></el-col>
            <el-col :span="8"
              >单题分值：
              <el-input-number
                v-model="gzForm.num4"
                :min="1"
                :max="100"
                label="描述文字"
              ></el-input-number
            ></el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="判断题">
          <el-row>
            <el-col :span="8">
              数量：
              <el-input-number
                v-model="gzForm.num5"
                :min="1"
                :max="100"
                label="描述文字"
              ></el-input-number
            ></el-col>
            <el-col :span="8"
              >单题分值：
              <el-input-number
                v-model="gzForm.num6"
                :min="1"
                :max="100"
                label="描述文字"
              ></el-input-number
            ></el-col>
          </el-row>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="sjgzszStatus = false">取 消</el-button>
        <el-button type="primary" @click="sjgzszStatus = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="新建试卷"
      :visible.sync="xjsjStatus"
      width="60%"
      :before-close="() => (xjsjStatus = false)"
    >
      <el-form ref="form" :model="newform" label-width="80px">
        <el-form-item label="题库">
          <el-select v-model="newform.region">
            <el-option label="题库一" value="shanghai"></el-option>
            <el-option label="题库二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="试卷名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-date-picker
            v-model="newform.time"
            type="datetime"
            placeholder="选择日期时间"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="xjsjStatus = false">取 消</el-button>
        <el-button type="primary" @click="xjsjStatus = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sjmxStatus: false,
      sjgzszStatus: false,
      xjsjStatus: false,
      gzForm: {},
      newform: {},
      tableData: [
        {
          name: '月中测试',
          time: '2020.12.1-2020.12.3',
          status: '已考试',
        },
      ],
      sjmxTableData: [{}],
      sjmxTableData1: [
        {
          dw: '宝鸡供电公司',
          gdsgs: 37,
          ykrs: 127,
          skrs: 127,
          pjf: 90,
          zgf: 100,
          zdf: 70,
          pm: 1,
        },
      ],
      sjmxTableData2: [
        {
          dw: '岐山供电公司',
          gdsgs: 7,
          ykrs: 45,
          skrs: 45,
          pjf: 95,
          zgf: 100,
          zdf: 80,
          pm: 1,
        },
      ],
    }
  },
  methods: {
    change() {
      this.sjmxTableData = this.sjmxTableData2
    },
  },
  mounted() {
    this.sjmxTableData = this.sjmxTableData1
  },
}
</script>

<style scoped lang="scss"></style>
