<template>
  <span>
    <el-button
      v-bind="$attrs"
      @click="changeStartShutdown"
      size="mini"
      :icon="startShutdown.icon"
    >{{startShutdown.text}}</el-button>
    <el-button
      v-bind="$attrs"
      :icon="pauseResume.icon"
      size="mini"
      :disabled="state=='stopped'"
      @click="changePauseResume"
    >{{pauseResume.text}}</el-button>

  </span>
</template>

<script>
export default {
  name: '',

  props: {
    job_id: { type: String },
  },

  components: {},

  data() {
    return {
      // stopped、running、paused
      state: '',
    };
  },

  computed: {
    startShutdown() {
      if (this.state == 'stopped') {
        return {
          text: '启动调度器',
          icon: 'el-icon-open',
        };
      } else {
        return {
          text: '关闭调度器',
          icon: 'el-icon-turn-off',
        };
      }
    },

    pauseResume() {
      if (this.state == 'paused') {
        return {
          text: '继续调度器',
          icon: 'el-icon-video-play',
        };
      } else {
        return {
          text: '暂停调度器',
          icon: 'el-icon-video-pause',
        };
      }
    },
  },

  methods: {
    async getData() {
      const res = await this.$Http.scheduleState();
      this.state = res.data.state;
    },

    async changeStartShutdown() {
      let res;

      if (this.state == 'stopped') {
        res = await this.$Http.scheduleStart();
      } else {
        res = await this.$Http.scheduleShutdown();
      }

      if (res.code == 0) {
        this.$message.success('操作成功');
        this.$emit('success');
        this.getData();
      } else {
        this.$message.error(res.msg);
      }
    },

    async changePauseResume() {
      let res;

      if (this.state == 'paused') {
        res = await this.$Http.scheduleResume();
      } else {
        res = await this.$Http.schedulePause();
      }

      if (res.code == 0) {
        this.$message.success('操作成功');
        this.$emit('success');
        this.getData();
      } else {
        this.$message.error(res.msg);
      }
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>