<template>
  <div class="">
    <el-button
      v-bind="$attrs"
      @click="handleDelete"
      size="mini"
    >删除</el-button>
  </div>
</template>

<script>
export default {
  name: '',

  props: {
    version: { type: String },
  },

  components: {},

  data() {
    return {
      project: '',
    };
  },

  computed: {},

  methods: {
    async handleDelete() {
      const res = await this.$Http.scrapydDeleteVersion({
        project: this.project,
        version: this.version,
      });

      if (res.code == 0) {
        this.$message.success('删除成功');
        this.$emit('success');
      } else {
        this.$message.error(res.msg);
      }
    },
  },

  created() {
    this.project = this.$route.params.project;
  },
};
</script>

<style lang="scss" scoped>
</style>