<template>
  <el-popconfirm
    title="确定删除？"
    @confirm="handleRemove"
  >
    <el-button
      slot="reference"
      v-bind="$attrs"
      icon="el-icon-delete"
      size="mini"
    ></el-button>
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
      const res = await this.$Http.scheduleRemoveJob({
        job_id: this.job_id,
      });

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