<template>
  <div class="">
    <el-button
      v-bind="$attrs"
      @click="handleDelete"
      :icon="icon"
      size="mini"
    >{{btnText}}</el-button>
  </div>
</template>

<script>
export default {
  name: '',

  props: {
    job_id: { type: String },

    // running、paused
    status: { type: String },
  },

  components: {},

  data() {
    return {};
  },

  computed: {
    btnText() {
      if (this.status == 'paused') {
        return '继续';
      } else {
        return '暂停';
      }
    },

     icon() {
      if (this.status == 'paused') {
        return 'el-icon-video-play';
      } else {
        return 'el-icon-video-pause';
      }
    },

    
  },

  methods: {
    async handleDelete() {
      let params = {
        job_id: this.job_id,
      };

      let res;
      if (this.status == 'paused') {
        res = await this.$Http.scheduleResumeJob(params);
      } else {
        res = await this.$Http.schedulePauseJob(params);
      }

      if (res.code == 0) {
        this.$message.success('操作成功');
        this.$emit('success');
      } else {
        this.$message.error(res.msg);
      }
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
</style>