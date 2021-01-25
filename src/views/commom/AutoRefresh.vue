<template>
  <span>
    <el-button
      @click="changeAutoRefresh"
      size="small"
    >{{autoRefreshText}}</el-button> <span class="tips">{{countDownText}}</span>
  </span>
</template>

<script>
/**
 * 自动刷新
 * emit: refresh
 */
export default {
  name: '',

  props: {
    // 刷新频率，默认：3秒
    frequency: { type: Number, default: 3000 },
  },

  components: {},

  data() {
    return {
      // 定时器
      timer: null,

      // 倒计时
      countDown: 0,
    };
  },

  computed: {
    autoRefreshText() {
      if (this.timer == null) {
        return '开启自动刷新';
      } else {
        return '关闭自动刷新';
      }
    },

    countDownText() {
      if (this.timer == null) {
        return '';
      } else {
        console.log(this.countDown);
        return this.countDown + ' 秒后自动刷新';
      }
    },
  },

  methods: {
    autoRefresh() {
      console.log('refresh');
      this.$emit('refresh');
      this.resetCountDown();
    },

    countDownReduce() {
      this.countDown--;
    },

    resetCountDown() {
      this.countDown = Math.ceil(this.frequency * 0.001);
    },

    openAutoRefresh() {
      this.resetCountDown();

      // 启动读秒计时器
      this.countDownTimer = setInterval(() => {
        this.countDownReduce();
      }, 1000);

      // 启动自动刷新计时器
      this.timer = setInterval(() => {
        this.autoRefresh();
      }, this.frequency);

      console.log('启动自动刷新');
    },

    closeAutoRefresh() {
      clearInterval(this.timer);
      clearInterval(this.countDownTimer);

      console.log('关闭自动刷新');

      this.timer = null;
      this.countDownTimer = null;
    },

    changeAutoRefresh() {
      if (this.timer) {
        this.closeAutoRefresh();
      } else {
        this.openAutoRefresh();
      }
    },
  },

  beforeDestroy() {
    this.closeAutoRefresh();
  },

  created() {
    // 默认开启定时器
    // this.openAutoRefresh();
  },
};
</script>

<style lang="scss" scoped>
.tips {
  margin-left: 10px;
  color: #666666;
  font-size: 12px;
}
</style>