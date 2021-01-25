<template>
  <div class="app-container">
    <!-- <JobTool
      ref="jobTool"
      :status.sync="status"
      @status-change="handleStatusChange"
      @status-info-change="handleStatusChange"
    /> -->

    <div style="height:20px"></div>

    <LogTable
      type="spider"
      v-loading="listLoading"
      :data="list"
    />
  </div>
</template>

<script>
import LogTable from './LogTable.vue';
// import JobTool from './JobTool.vue';

export default {
  name: '',

  props: [],

  components: { LogTable },

  data() {
    return {
      status: '',
      project: '',
      spider: '',
      list: [],
      listLoading: true,
      timer: null,
    };
  },

  computed: {
    status_total() {
      return this.list.length;
    },
  },

  methods: {
    async getData() {
      this.listLoading = true;

      const res = await this.$Http.scrapydSpiderLogs({
        project: this.project,
        spider: this.spider,
      });

      this.list = res.data;

      this.listLoading = false;
    },

    handleStatusChange() {
      this.getData();
    },
  },

  created() {
    this.project = this.$route.params.project;
    this.spider = this.$route.params.spider;
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>