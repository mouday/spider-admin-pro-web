<template>
  <el-popconfirm
    title="确定删除？"
    @confirm="handleRemove"
  >
    <el-button
      slot="reference"
      v-bind="$attrs"
      icon="el-icon-delete-solid"
      size="mini"
    >移除所有任务</el-button>
  </el-popconfirm>
</template>

<script>
export default {
  name: '',

  props: {
    job_id: { type: String },
  },

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {
    async handleRemove() {
      const res = await this.$Http.scheduleRemoveAllJobs();

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