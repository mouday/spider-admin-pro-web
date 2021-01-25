<template>
  <div class="app-container">
    
    <ProjectTool @success="getData" />

    <div style="height:20px"></div>

    <ProjectTable
      :data="list"
      v-loading="listLoading"
      @success="getData"
    />

  </div>
</template>

<script>
import ProjectTable from './ProjectTable.vue';
import ProjectTool from './ProjectTool.vue';

export default {
  components: { ProjectTable, ProjectTool },

  data() {
    return {
      list: null,
      listLoading: true,
    };
  },

  created() {
    this.getData();
  },

  methods: {
    async getData() {
      this.listLoading = true;
      const res = await this.$Http.scrapydListProjects();
      this.listLoading = false;

      this.list = res.data;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
