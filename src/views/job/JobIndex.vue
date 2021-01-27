<template>
  <div class="app-container">
    <JobTool
      :statusInfo="statusInfo"
      :status.sync="status"
      :project.sync="project"
      @status-change="handleStatusChange"
      @project-change="handleProjcetChange"
      @success="getData"
    />

    <div style="height:20px"></div>

    <JobTable
      v-loading="listLoading"
      :data="list"
      :project="project"
    />
  </div>
</template>

<script>
import JobTable from './JobTable.vue';
import JobTool from './JobTool.vue';

export default {
  name: '',

  props: [],

  components: { JobTable, JobTool },

  data() {
    return {
      status: '',
      project: '',
      list: [],
      listLoading: true,

      statusInfo: {
        total: 0,
        finished: 0,
        pending: 0,
        running: 0,
      },
    };
  },

  computed: {},

  methods: {
    async getData() {
      this.listLoading = true;

      const res = await this.$Http.scrapydlistJobsMerge({
        project: this.project,
        status: this.status,
      });

      if (res.code == 0) {
        this.list = res.data.list;

        this.statusInfo.total = res.data.total;
        this.statusInfo.pending = res.data.pending;
        this.statusInfo.running = res.data.running;
        this.statusInfo.finished = res.data.finished;
      } else {
        this.$message.error(res.msg);
      }

      this.listLoading = false;
    },

    handleStatusChange() {
      this.getData();
    },

    handleProjcetChange(val) {
      if (val) {
        this.project = val;
        localStorage.setItem('project', val);
        this.getData();
      } else {
        this.$message.error('请选择项目');
      }
    },
  },

  created() {
    let project = this.$route.query.project;
    
    if(!project){
      project = localStorage.getItem('project');
    }

    this.handleProjcetChange(project)
  },
};
</script>

<style lang="scss" scoped>
</style>