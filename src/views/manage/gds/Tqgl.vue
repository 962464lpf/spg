<template>
  <div class="tqgl">
    <div>
      <el-button type="primary" @click="goBack">返回</el-button>
    </div>
    <div class="mt10 fr">
      <el-button type="primary">新增</el-button>
      <el-button type="primary">批量导入</el-button>
    </div>
    <div class="clearfloat"></div>
    <div class="mt10">
      <el-amap
        ref="map"
        vid="amapDemo"
        :center="center"
        :zoom="zoom"
        :events="events"
        class="amap-demo"
      >
        <el-amap-marker
          v-for="(marker, index) in markers"
          :key="index + 'mar'"
          :position="marker.position"
          :events="marker.events"
          :visible="marker.visible"
          :draggable="marker.draggable"
          :vid="index"
        ></el-amap-marker>
        <el-amap-text
          v-for="text in texts"
          :key="text"
          :text="text.text"
          :offset="text.offset"
          :position="text.position"
          :events="text.events"
        ></el-amap-text>

        <el-amap-polygon
          v-for="(polygon, index) in polygons"
          :key="index + 'poly'"
          :vid="index"
          :ref="`polygon_${index}`"
          :fillColor="polygon.fillColor"
          :strokeColor="polygon.strokeColor"
          :path="polygon.path"
          :draggable="polygon.draggable"
          :events="polygon.events"
        ></el-amap-polygon>
      </el-amap>
    </div>
    <el-table :data="tableData" border style="width: 100%" class="mt10">
      <el-table-column prop="tqmc" label="台区名称"> </el-table-column>
      <el-table-column prop="tqfzr" label="台区负责人"> </el-table-column>
      <el-table-column prop="pbrl" label="配变容量"> </el-table-column>
      <el-table-column prop="10kv" label="10KV接杆"> </el-table-column>
      <el-table-column prop="dxhs" label="单相户数"> </el-table-column>
      <el-table-column prop="sxhs" label="三相户数"> </el-table-column>
      <!-- <el-table-column prop="wz" label="位置"> </el-table-column> -->
      <el-table-column label="操作" width="80">
        <template>
          <el-button type="primary" @click="tqxqStatus = true">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="tqxqStatus">
      <Tqxq v-model="tqxqStatus"></Tqxq>
    </div>
  </div>
</template>

<script>
import Tqxq from './Tqxq'
export default {
  components: {
    Tqxq,
  },
  data() {
    return {
      zoom: 13,
      center: [107.604813, 34.461009],
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
      texts: [
        {
          position: [107.594127, 34.470633],
          text: '台区一',
          offset: [0, 15],
          textAlign: 'center',
        },
        {
          position: [107.640132, 34.468227],
          text: '台区二',
          offset: [0, 15],
          textAlign: 'center',
        },
      ],

      polygons: [
        {
          editable: true,
          draggable: false,
          // 多边形填充色
          fillColor: '#d9ecff',
          // 线条颜色
          strokeColor: '#53a8ff',
          path: [
            [107.579537, 34.476527],
            [107.582798, 34.479711],
            [107.588206, 34.481975],
            [107.594986, 34.48247],
            [107.601166, 34.481338],
            [107.605028, 34.47872],
            [107.606573, 34.473767],
            [107.606488, 34.46846],
            [107.604428, 34.464144],
            [107.597733, 34.46195],
            [107.589665, 34.463011],
            [107.58297, 34.466337],
          ],
        },
        {
          draggable: false,
          // 多边形填充色
          fillColor: '#e8ba75',
          // 线条颜色
          strokeColor: '#e6a23c',
          path: [
            [107.624426, 34.455156],
            [107.62168, 34.46563],
            [107.621508, 34.475253],
            [107.625113, 34.481338],
            [107.638159, 34.481621],
            [107.649832, 34.479781],
            [107.659445, 34.472989],
            [107.66099, 34.464497],
            [107.657213, 34.45742],
            [107.650347, 34.452608],
            [107.640391, 34.451334],
            [107.630434, 34.453457],
          ],
        },
      ],
      tqxqStatus: false,
      tableData: [
        { tqmc: '一台区', tqfzr: '小王', pbrl: '', wz: 'xx街道以西' },
        { tqmc: '二台区', tqfzr: '小王', pbrl: '' , wz: '' },
        { tqmc: '三台区', tqfzr: '小王', pbrl: '' , wz: '' },
        { tqmc: '四台区', tqfzr: '小王', pbrl: '' , wz: '' },
        { tqmc: '五台区', tqfzr: '小王', pbrl: '' , wz: '' },
      ],
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
.tqgl {
  .amap-demo {
    height: 400px;
  }
}
img {
  width: 100%;
}
</style>
