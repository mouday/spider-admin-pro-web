<template>
  <div class="">
    <el-button
      v-bind="$attrs"
      @click="handleSchedule"
      size="mini"
      icon="el-icon-video-play"
    >运行</el-button>
  </div>
</template>

<script>
export default {
  name: '',

  props: {
    spider: { type: String },
    project: { type: String },
  },

  components: {},

  data() {
    return {
      
    };
  },

  computed: {},

  methods: {
    async handleSchedule() {
      const res = await this.$Http.scrapydSchedule({
        project: this.project,
        spider: this.spider,
      });

      if (res.code == 0) {
        this.$message.success('运行成功');
      } else {
        this.$message.error(res.msg);
      }
    },
  },

  created() {
    
  },
};
</script>

<style lang="scss" scoped>
</style>