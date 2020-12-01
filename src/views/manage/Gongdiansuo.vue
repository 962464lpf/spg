<template>
  <div class="gds">
    <div class="mt10">
      <el-button type="primary"
                 @click="jump('/zhgl/gds/gdgl')">工单管理</el-button>
      <el-button type="primary"
                 @click="jump('/zhgl/gds/gqj')">工器具管理</el-button>
      <el-button type="primary"
                 @click="jump('/zhgl/gds/bpbj')">备品备件</el-button>
      <el-button type="primary"
                 @click="jump('/zhgl/gds/clgl')">车辆管理</el-button>
      <el-button type="primary"
                 @click="jump('/zhgl/gds/tqgl')">台区管理</el-button>
      <el-button type="primary"
                 @click="jump('/zhgl/gds/rygl')">员工管理</el-button>
      <el-button type="primary"
                 @click="jump('/zhgl/gds/jxgl')">绩效管理</el-button>
    </div>
    <el-row class="mt10">
      <el-col class="js"
              :span='12'>
        <p class="mt10">
          湾里区供电公司客户服务中心全天24小时受理客户电力故障报修服务。在接到客户的用电报修信息后，抢修人员须在下列时限内赶到现场处理：城区45分钟；农村90分钟；特殊边远地区2小时。
          对客户计划停电提前7天在报纸上刊登停电通知；临时检修停电：对重要客户根据客户要求提前24小时发布停电通知：对居民客户提前2小时发布停电预告。
          公司及各供电所的营业场所实行无周休日制度。

        </p>
        <p>
          营业厅地址：xxxxxx
        </p>
        <p>
          值班电话：xxxxxx
        </p>
        <p>
          所长姓名：xxx
        </p>
        <p>
          所长电话：xxx
        </p>
        <div  class="jbqk">

        <p class="text-center mt10">基本情况</p>
        <el-row>
          <el-col :span="12">
            <p>服务台区数：122 个</p>
          </el-col>
          <el-col :span="12">
            <p>客户数：122 22 人</p>
          </el-col>
          <el-col :span="12">
            <p>台区经理：12 人</p>
          </el-col>
          <el-col :span="12">
            <p>在岗人数：13 人</p>
          </el-col>
          <el-col :span="12">
            <p>综合柜员: 11 人</p>
          </el-col>
          <el-col :span="12">
            <p>在职人员：25 人</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12"><p>本月 业务受理： 2489单</p></el-col>
          <el-col :span="12"><p>派工单量： 1489单</p></el-col>
        </el-row>
        
        </div>
        
      </el-col>
      <el-col :span="12">
        <el-tabs v-model="activeName">
          <el-tab-pane label="默认"
                       name="first">
            <el-col :span="24">
              <div class="gdstp">
                <img src="../../assets/img/gds1.jpg"
                     alt="" />
              </div>
            </el-col>
            <el-col :span="24">
              <div class="zhibiao">
                <el-row>
                  <el-col span="24">
                    <p>供电所综合业务监控平台应用率： 68%</p>
                  </el-col>
                  <el-col span="12">
                    <p>电费回收率：98%</p>
                  </el-col>
                  <el-col span="12">
                    <p>采集下发成功率：75%</p>
                  </el-col>
                  <el-col span="12">
                    <p>缴费APP占比率： 95%</p>
                  </el-col>
                  <el-col span="12">
                    <p>网上报装接电率： 65%</p>
                  </el-col>
                  <el-col span="12">
                    <p>线损率：26%</p>
                  </el-col>
                  <el-col span="12">
                    <p>采集覆盖率：35%</p>
                  </el-col>
                </el-row>

              </div>
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="全部"
                       name="second">
            <div class="gdstp">
              <img src="../../assets/img/gds2.jpg"
                   alt="" />
            </div>
          </el-tab-pane>
          <el-tab-pane label="主楼平面图"
                       name="third">
            <div class="gdstp">
              <img src="../../assets/img/gds3.jpg"
                   alt="" />
            </div>
          </el-tab-pane>
        </el-tabs>

      </el-col>

    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'first',
    }
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
    padding-left: 20px;
    box-sizing: border-box;
    img {
      width: 80%;
      height: 350px;
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
  .js {
    p {
      line-height: 36px;
      text-indent: 2rem;
    }
  }

  .zhibiao {
    padding: 20px;
    line-height: 40px;
  }
  .jbqk{
    border: 1px solid #ee3;
  }
}
</style>
