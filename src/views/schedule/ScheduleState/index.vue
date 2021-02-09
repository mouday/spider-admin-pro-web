<template>
  <div class="schedule-state">
    <span style="font-size:14px;color: #303133;">调度器控制：</span>

    <StartShutdown
      v-model="startShutdownState"
      @success="handleSuccess"
    />

    <PauseResume
      style="margin-left:20px;"
      :disabled="startShutdownState=='stopped'"
      v-model="pauseResumeState"
      @success="handleSuccess"
    />

  </div>
</template>

<script>
import PauseResume from './PauseResume.vue';
import StartShutdown from './StartShutdown.vue';

// 用到的常量
const STOPPED = 'stopped';
const RUNNING = 'running';
const PAUSED = 'paused';

export default {
  name: '',

  props: {},

  components: { PauseResume, StartShutdown },

  data() {
    return {
      // stopped、running、paused
      state: '',

      // 启动运行
      startShutdownState: 'stopped', // stopped、running
      // 暂停继续
      pauseResumeState: 'paused', // running、paused
    };
  },

  methods: {
    async getData() {
      const res = await this.$Http.scheduleState();

      // stopped、[running、paused]
      if (res.data.state == STOPPED) {
        this.startShutdownState = STOPPED;
        this.pauseResumeState = PAUSED;
      } else if (res.data.state == RUNNING) {
        this.startShutdownState = RUNNING;
        this.pauseResumeState = RUNNING;
      } else if (res.data.state == PAUSED) {
        this.startShutdownState = RUNNING;
        this.pauseResumeState = PAUSED;
      }
    },

    handleSuccess() {
      this.getData();
      this.$emit('success');
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.schedule-state {
  display: flex;
  align-items: center;
}
</style>