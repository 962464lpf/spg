<template>
  <div class="header">
    <img src="../../assets/logo.png" alt="" />
    <span>陕西省地方电力 ( 集团 ) 有限公司</span>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="scss">
.header {
  background: $base-color;
  display: flex;
  align-items: center;
  color: white;
  img {
    height: 100%;
  }
  span {
    font-family: '方正兰亭中黑';
    font-weight: 600;
  }
}
</style>
