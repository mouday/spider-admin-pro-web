<template>
  <el-button
    v-bind="$attrs"
    @click="handleSchedule"
    type="text"
    size="mini"
    icon="el-icon-video-play"
  ></el-button>
</template>

<script>
export default {
  name: '',

  props: {
    spider: { type: String },
    project: { type: String },
    scrapydServerId: { type: String },
  },

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {
    async handleSchedule() {
      const res = await this.$Http.scrapydSchedule({
        scrapydServerId: this.scrapydServerId,
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

  created() {},
};
</script>

<style lang="scss" scoped>
</style>