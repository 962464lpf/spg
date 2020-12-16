<template>
  <div class="sjpz">
    <div>
      <!-- <el-button type="primary"
                 @click="gdssypzStatus = true"
                 v-if="gdsDataStatus">供电所首页配置</el-button> -->
      <el-button type="primary"
                 @click="sjmbdzStatus = true"
                 v-if="!gdsDataStatus">数据模板定制</el-button>
      <el-button type="primary"
                 v-if="gdsDataStatus"
                 @click="sjtbStatus = true">数据填报</el-button>
      <el-form ref="form"
               inline
               class='mt10'
               label-width="80px">
        <el-form-item label="时间">
          <el-date-picker type="datetimerange"
                          range-separator="至"
                          start-placeholder="开始日期"
                          end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">检索</el-button>
          <el-button type="primary">导出</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-row class="mt10">
      <!-- <el-col :span="4">
        <el-tree
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree"
        >
        </el-tree
      ></el-col> -->
      <el-col :span="24">
        <el-table :data="tableData"
                  style="width: 100%"
                  class="mt10"
                  border>
          <el-table-column prop="gdsmc"
                           label="地市公司">
          </el-table-column>
          <el-table-column prop="gdsmc"
                           label="县公司">
          </el-table-column>
          <el-table-column prop="gdsmc"
                           label="供电所名称">
          </el-table-column>
          <el-table-column prop="zbdh"
                           label="供电所值班电话">
          </el-table-column>
          <el-table-column prop="gdsmc"
                           label="本所人数">
            <el-table-column prop="gdsmc"
                             label="男（人）">
            </el-table-column>
            <el-table-column prop="gdsmc"
                             label="女（人）">
            </el-table-column>
            <el-table-column prop="gdsmc"
                             label="管理岗人数">
            </el-table-column>
            <el-table-column prop="gdsmc"
                             label="营配业务人数">
            </el-table-column>
            <el-table-column prop="gdsmc"
                             label="综合业务人数">
            </el-table-column>
          </el-table-column>
          <el-table-column prop="gdsmc"
                           label="计算机配置">
            <el-table-column prop="gdsmc"
                             label="总数">
            </el-table-column>
            <el-table-column prop="gdsmc"
                             label="使用六年以上">
            </el-table-column>
            <el-table-column prop="gdsmc"
                             label="使用十年以上">
            </el-table-column>
          </el-table-column>
          <el-table-column prop="sjzt"
                           label="数据状态"> </el-table-column>
          <el-table-column label="操作"
                           width="180" fixed="right">
            <template>
              <el-button type="primary"
                         size="mini">审核</el-button>
              <el-button type="primary"
                         size="mini">数据锁定</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <div v-if="sjmbdzStatus">
      <Sjmbdz v-model="sjmbdzStatus"></Sjmbdz>
    </div>
    <div v-if="sjtbStatus">
      <Sjtb v-model="sjtbStatus"></Sjtb>
    </div>
    <div v-if="gdssypzStatus">
      <Gdssypz v-model="gdssypzStatus"></Gdssypz>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Sjmbdz from './Sjmbdz'
import Sjtb from './Sjtb'
import Gdssypz from './Gdssypz'
export default {
  components: {
    Sjmbdz,
    Sjtb,
    Gdssypz,
  },
  computed: {
    ...mapState(['city']),
  },
  watch: {
    city(val) {
      val.length > 3
        ? (this.gdsDataStatus = true)
        : (this.gdsDataStatus = false)
    },
  },
  data() {
    return {
      gdsDataStatus: false,
      sjmbdzStatus: false,
      sjtbStatus: false,
      gdssypzStatus: false,
      tableData: [
        // {
        //   gdsmc: '汤峪供电所',
        //   zbdh: '12345888',
        //   gdsdz: '汤峪',
        //   szxm: '张小虎',
        //   szdh: '13598725632',
        //   sjzt: '未审核',
        // },
      ],
    
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
