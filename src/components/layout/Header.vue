<template>
  <div class="header">
    <p class="imgbox"><img src="../../assets/logo.png"
           alt="" />
      <span>陕西省地方电力 ( 集团 ) 有限公司</span>
    </p>

    <p>
      <b style="font-size: 22px;">供电所综合信息管理系统</b>
    </p>
    <p class="right-box">
      <el-cascader v-model="formInline.city"
                   @change="cityChange"
                   :options="options"
                   :props="{ expandTrigger: 'hover',checkStrictly: true }"></el-cascader>
      <span class="ml10">李淳罡</span>
    </p>

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
  methods: {
    cityChange() {
      this.$store.commit('cityChange', this.formInline.city)
    },
  },
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
  display: flex;
  justify-content: space-between;
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
