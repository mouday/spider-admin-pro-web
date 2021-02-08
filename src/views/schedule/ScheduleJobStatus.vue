<template>
  <el-switch
    v-bind="$attrs"
    v-on="$listeners"
    active-value="running"
    inactive-value="paused"
    @change="handleChange"
  >
  </el-switch>
</template>

<script>
export default {
  name: '',

  props: {
    job_id: { type: String },
    // running、paused
  },

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {
    async handleChange(val) {
      // console.log(val);

      let params = {
        job_id: this.job_id,
      };

      let res;
      if (val == 'running') {
        res = await this.$Http.scheduleResumeJob(params);
      } else if (val == 'paused') {
        res = await this.$Http.schedulePauseJob(params);
      } else {
        throw Error('value is invalid');
      }

      if (res.code == 0) {
        this.$msg.success('操作成功');
        // this.$emit('success');
      } else {
        this.$msg.error(res.msg);
      }
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
</style>