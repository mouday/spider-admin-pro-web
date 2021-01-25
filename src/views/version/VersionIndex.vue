<template>
  <div class="app-container">
    <VersionTool @success="getData"/>

    <div style="height:20px"></div>

    <VersionTable
      v-loading="listLoading"
      :data="list"
      @success="getData"
    />

  </div>
</template>

<script>
import VersionTable from './VersionTable.vue';
import VersionTool from './VersionTool.vue';

export default {
  components: { VersionTable, VersionTool },
  data() {
    return {
      project: '',
      list: null,
      listLoading: true,
    };
  },

  created() {
    this.project = this.$route.params.project;
    this.getData();
  },

  methods: {
    async getData() {
      this.listLoading = true;
      const res = await this.$Http.scrapydlistVersions({
        project: this.project,
      });
      this.listLoading = false;

      this.list = res.data;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
