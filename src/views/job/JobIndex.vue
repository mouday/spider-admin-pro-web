<template>
  <div class="app-container">
    
    <JobTool
      :statusInfo="statusInfo"
      :status.sync="status"
      :scrapydServerId.sync="scrapydServerId"
      :project.sync="project"
      @status-change="handleStatusChange"
      @project-change="handleProjcetChange"
      @success="getData"
      @on-init="handleSpiderToolInit"
    />

    <div style="height: 20px"></div>

    <JobTable
      v-loading="listLoading"
      :data="list"
      :scrapydServerId="scrapydServerId"
      :project="project"
      @success="getData"
    />
  </div>
</template>

<script>
import JobTable from './JobTable.vue'
import JobTool from './JobTool.vue'

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
      scrapydServerId: '',
      statusInfo: {
        total: 0,
        finished: 0,
        pending: 0,
        running: 0,
      },
    }
  },

  computed: {},

  methods: {
    async getData() {
      if (this.scrapydServerId && this.project) {
        // pass
      } else {
        return
      }

      this.listLoading = true

      const res = await this.$Http.scrapydlistJobsMerge({
        project: this.project,
        status: this.status,
        scrapydServerId: this.scrapydServerId,
      })

      if (res.code == 0) {
        this.list = res.data.list

        this.statusInfo.total = res.data.total
        this.statusInfo.pending = res.data.pending
        this.statusInfo.running = res.data.running
        this.statusInfo.finished = res.data.finished
      } else {
        this.$message.error(res.msg)
      }

      this.listLoading = false
    },

    handleStatusChange() {
      this.getData()
    },

    handleProjcetChange(val) {
      if (val) {
        this.project = val
        localStorage.setItem('project', val)
        this.getData()
      } else {
        // this.$message.error('请选择项目')
      }
    },

    handleSpiderToolInit(data) {
      console.log('handleSpiderToolInit', data);
      
      if (data && data.length > 0) {
        this.project = data[0].project
      }

      if (this.project) {
        this.getData()
      }
    },
  },

  created() {
    this.scrapydServerId = this.$route.query.scrapydServerId
    this.project = this.$route.query.project

    if (this.$route.query.status) {
      this.status = this.$route.query.status
    }
  },
}
</script>

<style lang="scss" scoped></style>
