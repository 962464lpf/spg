<template>
  <div class="question-bank-detail">
    <el-row>
      <el-button type="primary" @click="jump">返回</el-button>
    </el-row>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="试题类型">
        <el-select v-model="formInline.type">
          <el-option label="单选题" value="单选"></el-option>
          <el-option label="多选题" value="多选"></el-option>
          <el-option label="判断题" value="判断"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="试题题目">
        <el-input v-model="formInline.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button type="primary">批量删除</el-button>
        <el-button type="primary" @click="newQuestionStatus = true"
          >新建试题</el-button
        >
        <el-button type="primary" @click="daoruQuestionStatus = true"
          >导入试题</el-button
        >
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column type="index" label="编号" width="50"> </el-table-column>

      <el-table-column prop="name" label="题目"> </el-table-column>
      <el-table-column prop="type" label="类型" width="80"> </el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="">
          <el-button type="primary">编辑</el-button>
          <el-button type="primary">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="新建试题"
      :visible.sync="newQuestionStatus"
      width="40%"
      :before-close="() => (newQuestionStatus = false)"
    >
      <el-form
        label-position="right"
        label-width="80px"
        :model="newQuestionform"
      >
        <el-form-item label="试题题目">
          <el-input type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="试题类型">
          <el-radio-group v-model="newQuestionform.type">
            <el-radio :label="3">单选</el-radio>
            <el-radio :label="6">多选</el-radio>
            <el-radio :label="9">判断</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="难易程度">
          <el-radio-group v-model="newQuestionform.type">
            <el-radio :label="3">简单</el-radio>
            <el-radio :label="6">一般</el-radio>
            <el-radio :label="9">难</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="选项">
          <p>A: xxxx <el-checkbox class="ml10">设为正确答案</el-checkbox></p>
          <p>B: xxxx <el-checkbox class="ml10">设为正确答案</el-checkbox></p>
          <p>C: xxxx <el-checkbox class="ml10">设为正确答案</el-checkbox></p>
          <p>D: xxxx <el-checkbox class="ml10">设为正确答案</el-checkbox></p>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="newQuestionStatus = false">取 消</el-button>
        <el-button type="primary" @click="newQuestionStatus = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="导入试题"
      :visible.sync="daoruQuestionStatus"
      width="40%"
      :before-close="() => (daoruQuestionStatus = false)"
    >
      <el-form
        label-position="right"
        label-width="80px"
        :model="newQuestionform"
      >
        <el-form-item label="模板文件:">
          <b class="curp" style="color: #0b3a8a;">下载模板</b>
        </el-form-item>
        <el-form-item label="选择文件:">
          <input type="file" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="daoruQuestionStatus = false">取 消</el-button>
        <el-button type="primary" @click="daoruQuestionStatus = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newQuestionStatus: false,
      daoruQuestionStatus: false,
      formInline: {},
      newQuestionform: {},
      tableData: [
        {
          name: '变压器的电源电压不超过额定值得±10%',
          type: '判断',
        },
      ],
    }
  },
  methods: {
    jump() {
      this.$router.push('/tkgl')
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
