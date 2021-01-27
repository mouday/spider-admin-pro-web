<template>
  <el-popconfirm
    title="确定删除？"
    @confirm="handleDelete"
  >

    <el-button
      slot="reference"
      v-bind="$attrs"
      size="small"
      icon="el-icon-delete"
    >删除列表</el-button>
  </el-popconfirm>

</template>

<script>
export default {
  name: '',

  props: {
    project: { type: String, default: '' },
    spider: { type: String, default: '' },
  },

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {
    async getData() {},

    async handleDelete() {
      const res = await this.$Http.statsCollectionDelete({
        project: this.project,
        spider: this.spider,
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
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>