<template>
  <div class="zbfx">
    <el-form :inline="true"
             :model="formInline"
             class="demo-form-inline">
      <el-form-item label="时间">
        <el-date-picker v-model="formInline.time"
                        type="month"
                        placeholder="选择时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="地市选择">
        <el-cascader v-model="formInline.city"
                     :options="options"
                     :props="{ checkStrictly: true }"></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button type="primary">导出</el-button>
      </el-form-item>
    </el-form>
    <el-row class="content">
      <el-col :span="6">
        <p>监控平台应用率</p>
        <ve-histogram :data="chartData"
                      :settings="chartSettings" :colors="colors"></ve-histogram>
      </el-col>
      <el-col :span="6">
        <p>电费回收率</p>
        <ve-histogram :data="chartData"
                      :settings="chartSettings" :colors="colors"></ve-histogram>
      </el-col>
      <el-col :span="6">
        <p>采集下发成功率</p>
        <ve-histogram :data="chartData"
                      :settings="chartSettings" :colors="colors"></ve-histogram>
      </el-col>
      <el-col :span="6">
        <p>缴费APP占比率</p>
        <ve-histogram :data="chartData"
                      :settings="chartSettings" :colors="colors"></ve-histogram>
      </el-col>
      <el-col :span="6">
        <p>网上报装接电率</p>
        <ve-histogram :data="chartData"
                      :settings="chartSettings" :colors="colors"></ve-histogram>
      </el-col>
      <el-col :span="6">
        <p>线损率</p>
        <ve-histogram :data="chartData"
                      :settings="chartSettings" :colors="colors"></ve-histogram>
      </el-col>
      <el-col :span="6">
        <p>采集覆盖率</p>
        <ve-histogram :data="chartData"
                      :settings="chartSettings" :colors="colors"></ve-histogram>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        '#4271a2',
        '#5783b1',
        '#4a6888',
        '#11263c',
        '#6487ab',
        '#0c2b4a',
        '#04192d',
      ],
      formInline: {
        time: '',
        city: '',
      },
      options: [
        {
          label: '西安',
          value: 'xian',
          children: [
            {
              value: 'yanta',
              label: '雁塔区',
            },
            {
              value: '长安',
              label: '长安区',
            },
            {
              value: 'beilin',
              label: '碑林区',
            },
          ],
        },
        {
          label: '咸阳',
          value: 'xiyang',
          children: [
            {
              value: 'liquan',
              label: '礼泉县',
            },
            {
              value: 'qianxian',
              label: '乾县',
            },
          ],
        },
        {
          label: '宝鸡',
          value: 'baoji',
          children: [
            {
              value: 'fufeng',
              label: '扶风县',
            },
            {
              value: 'meixian',
              label: '眉县',
            },
          ],
        },
        {
          label: '渭南',
          value: 'weinan',
          children: [
            {
              value: 'dali',
              label: '大荔县',
            },
            {
              value: '蒲城',
              label: '蒲城县',
            },
          ],
        },
      ],
      chartData: {
        columns: ['区域', '应用率'],
        rows: [
          { 区域: '西安', 应用率: 0.32 },
          { 区域: '宝鸡', 应用率: 0.26 },
          { 区域: '渭南', 应用率: 0.76 },
          { 区域: '咸阳', 应用率: 0.49 },
          { 区域: '汉中', 应用率: 0.323 },
        ],
      },
      chartSettings: {
        yAxisType: ['percent'],
      },
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss">
.zbfx {
  .content {
    text-align: center;
  }
}
</style>
