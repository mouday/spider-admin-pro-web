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
      :scrapydServerId="scrapydServerId"
      :project="project"
      :spider="spider"
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
      scrapydServerId: '',
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
        scrapydServerId: this.scrapydServerId,
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
    this.scrapydServerId = this.$route.query.scrapydServerId;
    this.project = this.$route.query.project;
    this.spider = this.$route.query.spider;
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>