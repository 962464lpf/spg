<template>
  <div class="zbfx">
    <div>
      <h5 style="line-height: 50px;">
        供电所同业对标按县/区公司综合得分排名
        <el-date-picker
          class="fr"
          type="month"
          v-model="value"
          placeholder="选择月"
        >
        </el-date-picker>
      </h5>
    </div>
    <ul>
      <li>
        <h2>2</h2>
        <p class="mt10">县/区公司数量</p>
      </li>
      <li>
        <h2>23</h2>
        <p class="mt10">对标供电所数量</p>
      </li>
      <li>
        <p class="mt10">县/区综合得分排名</p>
      </li>
    </ul>
    <el-row>
      <el-col :span="16">
        <h4 class="mt10 mb10">陕西省地方电力 ( 集团 ) 有限公司宝鸡供电公司</h4>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column type="index" label="序号" width="50">
          </el-table-column>
          <el-table-column
            prop="date"
            label="对标月份"
            width="150"
          ></el-table-column>
          <el-table-column prop="mc" label="单位名称">
            <template slot-scope="scope">
              <b class="curp" style="color: #0b3a8a;" @click="jumpTo">{{ scope.row.mc }}</b>
            </template>
          </el-table-column>
          <el-table-column prop="gdssl" label="供电所数量" width="80">
          </el-table-column>
          <el-table-column prop="hzfs" label="汇总分数" width="80">
          </el-table-column>
          <el-table-column prop="zhdf" label="综合得分" width="80">
          </el-table-column>
          <el-table-column prop="pm" width="80" label="排名"> </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="8">
        <ve-bar
          :data="chartData"
          height="240px"
          :colors="colors"
          :extend="extend"
        ></ve-bar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      colors: [
        '#0b3a8a',
        '#1767ac',
        '#5480bd',
        '#88a0ce',
        '#b7c5e2',
        '#e7e9f5',
      ],
      tableData: [
        {
          date: '2020-10',
          mc: '宝鸡市岐山县供电公司',
          gdssl: 53,
          hzfs: 3223,
          zhdf: 98.2,
          pm: 1,
        },
        {
          date: '2020-10',
          mc: '宝鸡市眉县供电公司',
          gdssl: 153,
          hzfs: 13223,
          zhdf: 96.2,
          pm: 2,
        },
      ],
      chartData: {
        columns: ['日期', '综合得分'],
        rows: [
          {
            日期: '宝鸡市眉县供电公司',
            综合得分: 96.2,
          },
          {
            日期: '宝鸡市岐山县供电公司',
            综合得分: 98.2,
          },
        ],
      },
      extend: {
        series(v) {
          v.forEach((i) => {
            i.barWidth = 30
          })
          return v
        },
      },
    }
  },
  methods: {
    jumpTo() {
      this.$router.push('/tydb/zbfxX')
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
.zbfx {
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      height: 100px;
      background: #eee;
      width: 32%;
      padding: 10px;
      box-sizing: border-box;
    }
  }
}
</style>
