<template>
  <div class="gds">
    <div class="mt10">
      <el-button type="primary" @click="jump('/zhgl/gds/gdgl')"
        >工单管理</el-button
      >
      <el-button type="primary" @click="jump('/zhgl/gds/gqj')"
        >工器具管理</el-button
      >
      <el-button type="primary" @click="jump('/zhgl/gds/bpbj')"
        >备品备件</el-button
      >
      <el-button type="primary" @click="jump('/zhgl/gds/clgl')"
        >车辆管理</el-button
      >
      <el-button type="primary" @click="jump('/zhgl/gds/tqgl')"
        >台区管理</el-button
      >
      <el-button type="primary" @click="jump('/zhgl/gds/rygl')"
        >人员管理</el-button
      >
      <el-button type="primary" @click="jump('/zhgl/gds/jxgl')"
        >绩效管理</el-button
      >
    </div>
    <el-row class="mt10">
      <el-col :span="16">
        <div class="gdstp">
          <img src="../../assets/img/gds1.jpg" alt="" />
          <div>
            <img src="../../assets/img/gds2.jpg" alt="" />
            <img src="../../assets/img/gds3.jpg" alt="" />
            <img src="../../assets/img/gds2.jpg" alt="" />
          </div>
          <p class="mt10">
            湾里区供电公司客户服务中心全天24小时受理客户电力故障报修服务。在接到客户的用电报修信息后，抢修人员须在下列时限内赶到现场处理：城区45分钟；农村90分钟；特殊边远地区2小时。
            对客户计划停电提前7天在报纸上刊登停电通知；临时检修停电：对重要客户根据客户要求提前24小时发布停电通知：对居民客户提前2小时发布停电预告。
            公司及各供电所的营业场所实行无周休日制度。
            居民客户提交申请用电后，7个工作日内装表送电。其他客户在受电装置验收合格后，7个工作日内装表送电。
            居民客户发生电能表烧损后，在办完交费手续后5个工作日内修复。
            在各营业厅公布并严格执行收费标准、办电程序和制度。工作人员挂牌上岗，文明用语，规范服务。客户在营业柜台办理用电业务、交费及查询，办理时间一般不超过15分钟。
            严格供电服务纪律，改进服务作风，不允许向客户“吃、拿、卡、要”，不以电谋私，一旦发生，严肃查处。
            以上承诺欢迎客户监督，如未兑现，可向湾里区供电公司客户服务中心投诉，查证属实的，我公司将从严处理，并将处理结果反馈给署名举报人。
            新装用电办理
          </p>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="zhibiao">
          <p>供电所综合业务监控平台应用率： 68%</p>
          <p>电费回收率：98%</p>
          <p>采集下发成功率：75%</p>
          <p>缴费APP占比率： 95%</p>
          <p>网上报装接电率： 65%</p>
          <p>线损率：26%</p>
          <p>采集覆盖率：35%</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    jump(path) {
      this.$router.push(path)
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
.gds {
  .gdstp {
    img {
      width: 60%;
      height: 300px;
    }
    div {
      float: right;
      width: 40%;
      img {
        width: 100%;
        height: 100px;
      }
    }
  }
  .zhibiao {
    padding: 20px;
    line-height: 40px;
  }
}
</style>
