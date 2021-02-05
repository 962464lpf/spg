<template>
  <div>
    <div class="mt10">
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
    <el-form :inline="true" class="mt10">
      <el-form-item label="姓名">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">检索</el-button>
      </el-form-item>
    </el-form>
    <!-- <div class="fl clearfloat ">
      <el-button type="primary">出入记录</el-button>
    </div> -->

    <div class="clearfloat"></div>
    <el-table :data="tableData" border stripe style="width: 100%" class="mt10">
      <el-table-column prop="dlm" label="登录名"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="xb" label="性别"> </el-table-column>
      <el-table-column prop="xl" label="学历"> </el-table-column>
      <el-table-column prop="sfzg" label="在岗情况"> </el-table-column>
      <el-table-column prop="zc" label="职称"> </el-table-column>
      <el-table-column prop="zz" label="组织"> </el-table-column>
      <el-table-column prop="bz" label="班组"> </el-table-column>

      <el-table-column label="操作" width="240">
        <template>
          <el-button type="primary">查看</el-button>
          <el-button @click="editdialogVisible = true" type="primary"
            >编辑</el-button
          >
          <el-button @click="dialogVisible = true" type="primary"
            >分配角色</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="分配角色"
      :visible.sync="dialogVisible"
      width="45%"
      :before-close="handleClose"
    >
      <el-table
        ref="multipleTable"
        :data="tableData1"
        tooltip-effect="dark"
        style="width: 100%"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="角色名称" prop="jsmc"> </el-table-column>
        <el-table-column prop="jsms" label="角色描述" width="120">
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog
      title="修改人员信息"
      :visible.sync="editdialogVisible"
      width="45%"
    >
      <el-form :inline="true" class="demo-form-inline">
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="年龄">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别">
              <el-select placeholder="请选择">
                <el-option label="男" value="男"> </el-option>
                <el-option label="女" value="女"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="岗位">
              <el-select placeholder="请选择">
                <el-option label="所长" value="1"> </el-option>
                <el-option label="党支部书记" value="2"> </el-option>
                <el-option label="副所长" value="3"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="学历">
              <el-select placeholder="请选择">
                <el-option label="初中及以下" value="1"> </el-option>
                <el-option label="高中" value="2"> </el-option>
                <el-option label="专科" value="3"> </el-option>
                <el-option label="本科" value="4"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="职称">
              <el-select placeholder="请选择">
                <el-option label="初级工" value="1"> </el-option>
                <el-option label="中级工" value="2"> </el-option>
                <el-option label="高级工" value="3"> </el-option>
                <el-option label="技师" value="4"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="班组">
              <el-select placeholder="请选择">
                <el-option label="营配班" value="1"> </el-option>
                <el-option label="综合班" value="2"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="在岗情况">
              <el-select placeholder="请选择">
                <el-option label="在岗" value="1"> </el-option>
                <el-option label="值班" value="2"> </el-option>
                <el-option label="外出" value="3"> </el-option>
                <el-option label="请假" value="4"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="专业">
              <el-select placeholder="请选择">
                <el-option label="工程师" value="1"> </el-option>
                <el-option label="助理工程师" value="2"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="用工方式">
              <el-select placeholder="请选择">
                <el-option label="劳务派遣" value="1"> </el-option>
                <el-option label="农电工" value="2"> </el-option>
                <el-option label="长期职工" value="3"> </el-option>
                <el-option label="其他用工方式" value="4"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="政治面貌">
              <el-select placeholder="请选择">
                <el-option label="党员" value="1"> </el-option>
                <el-option label="共青团员" value="2"> </el-option>
                <el-option label="群众" value="3"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="13">
            <el-form-item label="职业资格名称">
              <el-select placeholder="请选择">
                <el-option label="电气试验工" value="1"> </el-option>
                <el-option label="农网配电营业工" value="2"> </el-option>
                <el-option label="维修电工" value="3"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="参加工作时间">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="13">
            <el-form-item label="员工照片">
              <img src="../../../assets/img/work.jpg" alt="" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editdialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editdialogVisible = false"
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
      tableData: [
        {
          name: '王永涛',
          age: '26',
          xb: '男',
          xl: '大专',
          sfzg: '在岗',
          zc: '初级工',
          dlm: '03011827',
          zz: '党岔供电所',
          bz: '营配班',
        },
      ],
      dialogVisible: false,
      editdialogVisible: false,
      tableData1: [
        {
          jsmc: '所长',
        },
        {
          jsmc: '综合班长',
        },
        {
          jsmc: '营配班长',
        },
        {
          jsmc: '台区经理',
        },
        {
          jsmc: '库管员',
        },
        {
          jsmc: '综合柜员',
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
