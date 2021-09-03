<template>
  <div class="">
    <el-button
      v-bind="$attrs"
      @click="handleCancel"
      size="mini"
    >取消</el-button>
  </div>
</template>

<script>
export default {
  name: '',

  props: {
    job: { type: String },
    project: { type: String },
  },

  components: {},

  data() {
    return {
      // project: '',
    };
  },

  computed: {},

  methods: {
    async handleCancel() {
      const res = await this.$Http.scrapydCancel({
        project: this.project,
        job: this.job,
      });

      if (res.code == 0) {
        this.$message.success('取消成功');
      } else {
        this.$message.error(res.msg);
      }
    },
  },

  created() {
    // this.project = this.$route.params.project;
  },
};
</script>

<style lang="scss" scoped>
</style>
