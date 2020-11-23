<template>
  <div class="sjpz">
    <div>
      <el-button type="primary" @click="sjmbdzStatus = true"
        >数据模板定制</el-button
      >
      <el-button type="primary" @click="sjtbStatus = true">数据填报</el-button>
      <el-button type="primary">导出</el-button>
    </div>
    <el-row class="mt10">
      <el-col :span="4">
        <el-input placeholder="输入关键字进行过滤" v-model="filterText">
        </el-input>
        <el-tree
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
          ref="tree"
        >
        </el-tree
      ></el-col>
      <el-col :span="20">
        <el-table :data="tableData" style="width: 100%" class="mt10">
          <el-table-column prop="gdsmc" label="供电所名称" width="180">
          </el-table-column>
          <el-table-column prop="zbdh" label="值班电话" width="180">
          </el-table-column>
          <el-table-column prop="gdsdz" label="供电所地址"> </el-table-column>
          <el-table-column prop="szxm" label="所长姓名"> </el-table-column>
          <el-table-column prop="szdh" label="所长电话"> </el-table-column>
          <el-table-column prop="sjzt" label="数据状态"> </el-table-column>
          <el-table-column label="操作" width="180">
            <template>
              <el-button size="mini">审核</el-button>
              <el-button size="mini">数据锁定</el-button>
            </template>
          </el-table-column>
        </el-table></el-col
      >
    </el-row>

    <div v-if="sjmbdzStatus">
      <Sjmbdz v-model="sjmbdzStatus"></Sjmbdz>
    </div>
    <div v-if="sjtbStatus">
      <Sjtb v-model="sjtbStatus"></Sjtb>
    </div>
  </div>
</template>

<script>
import Sjmbdz from './Sjmbdz'
import Sjtb from './Sjtb'
export default {
  components: {
    Sjmbdz,
    Sjtb,
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    },
  },
  data() {
    return {
      sjmbdzStatus: false,
      sjtbStatus: false,
      tableData: [
        {
          gdsmc: '丈八北路供电所',
          zbdh: '12345888',
          gdsdz: '丈八北路',
          szxm: '张小虎',
          szdh: '13598725632',
          sjzt: '未审核',
        },
      ],
      data: [
        {
          id: 1,
          label: '陕西省',
          children: [
            {
              id: 4,
              label: '西安市',
              children: [
                {
                  id: 9,
                  label: '雁塔区',
                },
                {
                  id: 10,
                  label: '碑林区',
                },
              ],
            },
            {
              id: 5,
              label: '渭南市',
              children: [
                {
                  id: 6,
                  label: '潼关县',
                },
                {
                  id: 7,
                  label: '蒲城县',
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
