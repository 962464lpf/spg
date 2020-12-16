<template>
  <div class="tqtj">
    <el-amap ref="map"
             vid="amapDemo"
             :center="center"
             :zoom="zoom"
             :events="events"
             class="amap-demo">
      <el-amap-marker v-for="(marker, index) in markers"
                      :key="index + 'mar'"
                      :position="marker.position"
                      :events="marker.events"
                      :visible="marker.visible"
                      :draggable="marker.draggable"
                      :vid="index"></el-amap-marker>
      <el-amap-text v-for="text in texts"
                    :key="text.text + 'text'"
                    :text="text.text"
                    :offset="text.offset"
                    :position="text.position"
                    :events="text.events"></el-amap-text>

      <el-amap-info-window :position="windows.position"
                           :content="windows.content"
                           :visible="windows.visible"
                           :offset='[0,-35]'
                           :closeWhenClickMap='true'>
      </el-amap-info-window>

    </el-amap>
    <div class="content">
      <el-row>
        <el-input placeholder="请输入姓名或工号查询"
                  prefix-icon="el-icon-search">
        </el-input>
      </el-row>
      <div class="list">
        <!-- <p class="fl">王小二</p>
        <p class="fr">134092892830</p>
        <p class="clearfloat"></p>
        <p>工号：12345</p>
        <p>组织：营配班</p>
        <p>岗位：营配班组员</p>
        <p>当前位置：陕西省宝鸡市岐山县</p> -->
        <!-- <div class="list">
              <p>申请编号：12345</p>
              <p>接收时间：2020-12-1</p>
              <p>业务类型：业扩报装</p>
              <p>流程节点：装表接电</p>
              <p>处理人：王小二</p>
            </div> -->
        <el-tabs v-model="activeName">
          <el-tab-pane label="待办"
                       name="first">
            <div class="list">
              <p>申请编号：120103</p>
              <p>接收时间：2020-12-1</p>
              <p>业务类型：业扩报装</p>
              <p>流程节点：装表接电</p>
              <p>处理人：王永涛</p>
            </div>
            <el-divider></el-divider>
            <div class="list">
              <p>申请编号：120104</p>
              <p>接收时间：2020-12-1</p>
              <p>业务类型：业扩报装</p>
              <p>流程节点：装表接电</p>
              <p>处理人：刘胜强</p>
            </div>
          </el-tab-pane>
          <!-- <el-tab-pane label="已办"
                       name="second">
            <div class="list">
              <p>申请编号：12345</p>
              <p>接收时间：2020-12-1</p>
              <p>业务类型：业扩报装</p>
              <p>流程节点：装表接电</p>
              <p>处理人：王小二</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="指标"
                       name="third">
            <div class="list">
              <p>申请编号：12345</p>
              <p>接收时间：2020-12-1</p>
              <p>业务类型：业扩报装</p>
              <p>流程节点：装表接电</p>
              <p>处理人：王小二</p>
            </div>
            <el-divider></el-divider>
            <div class="list">
              <p>申请编号：12345</p>
              <p>接收时间：2020-12-1</p>
              <p>业务类型：业扩报装</p>
              <p>流程节点：装表接电</p>
              <p>处理人：王小二</p>
            </div>
          </el-tab-pane> -->
        </el-tabs>
      </div>
    </div>
  </div>
</template>
 
<script>
const exampleComponents = {
  props: ['text'],
  template: `<div>text from  parent: {{text}}</div>`,
}
export default {
  name: 'vueName',
  data() {
    return {
      activeName: 'first',
      // amapManager,
      zoom: 13,
      center: [107.61703, 34.46939],
      events: {
        click: (e) => {
          console.log('............')
          console.log(e.lnglat.lat)
          console.log(e.lnglat.lng)
        },
      },
      markers: [
        {
          position: [107.594127, 34.470633],
          visible: true,
          draggable: false,
        },
        {
          position: [107.640132, 34.468227],
          visible: true,
          draggable: false,
        },
      ],
      windows: {
        position: [107.594127, 34.470633],
        content: `<div class="list">
        <p> 王永涛</p>
        <p>工号：12345</p>
        <p>当前业务：业扩报装</p>
        <p>附近的人：王小三</p>`,
        visible: true,
      },
      texts: [
        {
          position: [107.640132, 34.468227],
          text: '刘胜强 工号：123456',
          offset: [10, -53],
        },
      ],
    }
  },
  methods: {},
  mounted() {},
}
</script>
 
<style  lang = "scss">
.tqtj {
  height: 100%;
  position: relative;
  .amap-demo {
    height: 100%;
  }
  .content {
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 200px;
    border: 1px solid #eee;
    background: white;
    overflow: auto;
    opacity: 0.9;
    .list {
      padding: 0 10px;
      p {
        font-size: 12px;
        line-height: 24px;
      }
    }
  }
}
</style>