<template>
  <div class="zhgl">
    <el-row>
      <el-col :span="4">
        <el-card shadow="hover">
          <span>436</span>
          <p>供电所数量(个)</p>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="hover">
          <span>57231</span>
          <p>台区数量(个)</p>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="hover">
          <p>
            <span class="fl">在岗 6802</span>
            <span class="fr">在职 7000</span>
          </p>
          <p>人员(人)</p>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="hover">
          <p>
            <span class="fl">自有 212</span>
            <span class="fr">外租 186</span>
          </p>
          <p>车辆(辆)</p>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="hover">
          <p>
            <span>日 331</span>
            <span>月 12002</span>
            <span>累计 14002</span>
          </p>
          <p>业务量(条)</p>
        </el-card>
      </el-col>
      <el-col :span="4">
        <el-card shadow="hover">
          <p>
            <span>日 210</span>
            <span>月 11752</span>
            <span>累计 13520</span>
          </p>
          <p>未完成 985</p>
          <p>派工单(单)</p>
        </el-card>
      </el-col>
    </el-row>
    <el-table :data="tableData" border style="width: 100%" class="mt10">
      <el-table-column
        prop="gdgs"
        label="县供电公司"
        align="center"
        width="240"
        fixed
      >
      </el-table-column>
      <el-table-column
        prop="gds"
        label="供电所数量"
        width="90"
        align="center"
        sortable
      >
      </el-table-column>
      <el-table-column
        prop="people"
        label="人员（人）"
        width="70"
        align="center"
        sortable
      >
      </el-table-column>
      <el-table-column
        prop="car"
        label="车辆（辆）"
        width="70"
        align="center"
        sortable
      >
      </el-table-column>
      <el-table-column
        prop="gqj"
        label="工器具（件）"
        width="70"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="bpbj"
        label="备品备件（个）"
        width="90"
        align="center"
        sortable
      >
      </el-table-column>
      <el-table-column
        prop="tqs"
        label="台区数（个）"
        width="70"
        align="center"
        sortable
      >
      </el-table-column>
      <el-table-column
        prop="hs"
        label="户数（户）"
        width="70"
        align="center"
        sortable
      >
      </el-table-column>
      <el-table-column label="业务数量（条）" align="center">
        <el-table-column
          prop="ywr"
          label="日"
          width="70"
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="ywy"
          label="月"
          width="70"
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="ywlj"
          label="累计"
          width="70"
          align="center"
          sortable
        >
        </el-table-column>
      </el-table-column>
      <el-table-column label="派工量（单）" align="center">
        <el-table-column
          prop="pgr"
          label="日"
          width="70"
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="pgy"
          label="月"
          width="70"
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="pglj"
          label="累计"
          width="70"
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="pgwqf"
          label="未签发"
          width="70"
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="pgwwj"
          label="未完结"
          width="70"
          align="center"
          sortable
        >
        </el-table-column>
        <el-table-column
          prop="pgwhd"
          label="未归档"
          width="70"
          align="center"
          sortable
        >
        </el-table-column>
      </el-table-column>
      <el-table-column label="进入" align="center" fixed="right">
        <template>
          <el-button type="primary" size="mini" @click="jump">进入</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          gdgs: '陕西省地方电力集团眉县供电分公司',
          gds: '93',
          people: '1643',
          car: '122',
          gqj: '9365',
          bpbj: '4525',
          tqs: '17852',
          hs: '2886554',
          ywr: '53',
          ywy: '2814',
          ywlj: '41498',
          pgr: '37',
          pgy: '2311',
          pglj: '25711',
          pgwqf: '3',
          pgwwj: '127',
          pgwhd: '129',
        },
        {
          gdgs: '陕西省地方电力集团岐山县供电分公司',
          gds: '93',
          people: '1643',
          car: '122',
          gqj: '9365',
          bpbj: '4525',
          tqs: '17852',
          hs: '2886554',
          ywr: '53',
          ywy: '2814',
          ywlj: '41498',
          pgr: '37',
          pgy: '2311',
          pglj: '25711',
          pgwqf: '3',
          pgwwj: '127',
          pgwhd: '129',
        },
      ],
    }
  },
  methods: {
    jump() {
      this.$router.push({ path: '/zhgl/xian', query: { city: 'yanta' } })
    },
  },
  mounted() {},
}
</script>

<style lang="scss">
.zhgl {
  .el-card__body {
    height: 50px;
    text-align: center;
    font-size: 12px;
  }
}
</style>
