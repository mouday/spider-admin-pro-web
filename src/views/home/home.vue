<template>
  <div class="app-container home-container">
    <SelectScrapydServer
      :value.sync="scrapydServerId"
      @on-init="handleSelectScrapydServerInit"
      @change="resetData"
    ></SelectScrapydServer>

    <div class="mt-md">
      <HomeDataInfo
        :key="scrapydServerId"
        :scrapydServerId="scrapydServerId"
      />

      <HomeSystemInfo />

      <HomeConfig />

      <!-- <HomeCard
      desc="User from"
      title="用户来源"
    >
      <ChartPie :value="pieData" />
    </HomeCard> -->

      <!-- <HomeCard
      desc="User active"
      title="每周用户活跃量"
    >
      <ChartLine :value="lineData" />
    </HomeCard>

    <HomeCard
      desc="User from"
      title="柱状图"
    >
      <ChartBar :value="lineData" />
    </HomeCard> -->

      <!-- <HomeCard
      desc="progress"
      title="进度条"
    >
      <HomeProgress :value="pieData" />
    </HomeCard> -->

      <!-- <HomeCard
      desc="progress"
      title="目标完成度"
    >
      <Home-circle />
    </HomeCard> -->

      <!-- <HomeCard
      desc="progress"
      title="漏斗图"
    >
      <ChartFunnel :value="pieData" />
    </HomeCard> -->
    </div>
  </div>
</template>

<script>
// import ChartPie from './components/chart-pie';
// import ChartLine from './components/chart-line';
// import ChartGauge from './components/ChartGauge';
// import ChartBar from './components/chart-bar';
// import HomeCircle from './components/home-circle';
// import HomeProgress from './components/home-progress';
// import ChartFunnel from './components/chart-funnel';
import HomeSystemInfo from './components/HomeSystemInfo.vue'
import HomeDataInfo from './components/HomeDataInfo.vue'
import HomeConfig from './components/HomeConfig.vue'
import HomeCard from './components/card.vue'
import SelectScrapydServer from '@/components/SelectScrapydServer.vue'

export default {
  name: 'Home',
  components: {
    HomeCard,
    HomeConfig,
    // ActivePlate,
    // ChartPie,
    // ChartFunnel,
    // ChartLine,
    // HomeCircle,
    // ChartGauge,
    // ChartBar,
    // HomeProgress,
    HomeSystemInfo,
    HomeDataInfo,
    SelectScrapydServer,
  },

  props: {},

  data() {
    return {
      scrapydServerId: '',
      // 内存
      virtual_memory: {},
      // 磁盘
      disk_usage: {},

      adModal: true,
      infoCardData: [
        {
          title: '新增用户',
          icon: 'md-person-add',
          count: 803,
          color: '#11A0F8',
        },
        { title: '累计点击', icon: 'md-locate', count: 232, color: '#FFBB44 ' },
        {
          title: '新增问答',
          icon: 'md-help-circle',
          count: 142,
          color: '#7ACE4C',
        },
        { title: '分享统计', icon: 'md-share', count: 657, color: '#11A0F8' },
        {
          title: '新增互动',
          icon: 'md-chatbubbles',
          count: 12,
          color: '#91AFC8',
        },
        { title: '新增页面', icon: 'md-map', count: 14, color: '#91AFC8' },
      ],
      pieData: [
        { value: 335, name: '直接访问', color: '#3AA1FF' },
        { value: 310, name: '邮件营销', color: '#36CBCB' },
        { value: 234, name: '联盟广告', color: '#4ECB73' },
        { value: 135, name: '视频广告', color: '#F47F92' },
        { value: 1548, name: '搜索引擎', color: '#FBD437' },
      ],
      lineData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324,
      },
    }
  },
  computed: {},
  watch: {},
  filters: {},

  methods: {
    resetData() {},
    getData() {},
    handleSelectScrapydServerInit({ list }) {
      console.log(list)

      if (!this.scrapydServerId) {
        if (list && list.length > 0) {
          this.scrapydServerId = list[0].value
        }
      }

      this.getData()
    },
  },
}
</script>

<style lang="less">
.home-container {
}
.count-style {
  font-size: 50px;
}
</style>
