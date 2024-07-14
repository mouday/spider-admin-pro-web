<template>
  <el-popconfirm
    title="确定删除？"
    @confirm="handleDelete"
  >

    <el-button
      slot="reference"
      v-bind="$attrs"
      size="mini"
      type="text"
      class="color--danger"
      icon="el-icon-delete"
    >删除</el-button>
  </el-popconfirm>

</template>

<script>
export default {
  name: '',

  props: {
    row: { type: Object },
  },

  components: {},

  data() {
    return {};
  },

  computed: {},

  methods: {
    async handleDelete() {
      const res = await this.$Http.deleteScrapydServer({
        scrapyd_server_id: this.row.id,
      });

      if (res.ok) {
        this.$message.success('删除成功');
        this.$emit('success');
      }
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
</style>