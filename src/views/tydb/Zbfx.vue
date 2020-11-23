<template>
  <div class="zbfx">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="时间">
        <el-date-picker
          v-model="formInline.time"
          type="month"
          placeholder="选择时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="地市选择">
        <el-cascader
          v-model="formInline.city"
          :options="options"
          :props="{ checkStrictly: true }"
        ></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button type="primary">导出</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style scoped lang="scss"></style>
