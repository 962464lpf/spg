<template>
  <div class="header">
    <el-row>
      <el-col :span="6"
              class="imgbox">
        <img src="../../assets/logo.png"
             alt="" />
        <span>陕西省地方电力 ( 集团 ) 有限公司</span>
      </el-col>
      <el-col :span="12">
        <b style="font-size: 22px;">供电所综合信息管理系统</b>
      </el-col>
      <el-col :span="6"
              class="right-box">
        <el-cascader v-model="formInline.city"
                     :options="options"
                     :props="{ expandTrigger: 'hover',checkStrictly: true }"></el-cascader>
        <span class="ml10">李淳罡</span>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          label: '陕西省',
          children: [
            {
              id: 4,
              label: '宝鸡市',
              children: [
                {
                  id: 9,
                  label: '眉县',
                },
                {
                  id: 10,
                  label: '岐山县',
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
      formInline: {
        time: '',
        city: ['陕西省'],
      },
      options: [
        {
          label: '陕西省',
          value: '陕西省',
          children: [
            {
              label: '宝鸡市',
              value: '宝鸡',
              children: [
                {
                  value: '岐山县',
                  label: '岐山县',
                  children: [
                    {
                      value: '凤鸣供电所',
                      label: '凤鸣供电所',
                    },
                  ],
                },
                {
                  value: 'meixian',
                  label: '眉县',
                },
              ],
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

<style lang="scss">
.header {
  background: $base-color;
  line-height: 55px;
  text-align: center;
  color: white;
  width: 100%;
  .imgbox {
    height: 100%;
    display: flex;
    align-items: center;
    color: white;
    img {
      height: 55px;
    }
    span {
      font-family: '方正兰亭中黑';
      font-weight: 600;
    }
  }
  .right-box {
    // width: 100px;
    height: 55px;
    .el-tree {
      position: fixed;
      z-index: 9999;
      border: 1px solid $base-color;
    }
  }
}
</style>
