<template>
  <div class="app-container">
    <ScheduleLogTool
      :status.sync="status"
      :project.sync="project"
      :spider.sync="spider"
      :scrapydServerId.sync="scrapydServerId"
      :schedule_job_id="schedule_job_id"
      :statusInfo="statusInfo"
      @status-change="handleStatusChange"
      @project-change="handleProjectChange"
      @spider-change="handleSpiderChange"
      @success="handleSuccess"
    />

    <div style="height: 20px"></div>

    <ScheduleLogTable
      :data="list"
      v-loading="listLoading"
    />

    <mo-pagination
      :current-page.sync="page"
      :page-size="size"
      :total="count"
      @change="getData"
    />
  </div>
</template>

<script>
import ScheduleLogTable from './ScheduleLogTable.vue'
import ScheduleLogTool from './ScheduleLogTool.vue'

export default {
  name: '',

  props: [],

  components: {
    ScheduleLogTable,
    ScheduleLogTool,
  },

  data() {
    return {
      list: [],
      total: 0,

      page: 1,
      size: 20,
      listLoading: false,

      status: 'total',
      project: '',
      spider: '',
      schedule_job_id: '',
      scrapydServerId: '',
      statusInfo: {},
    }
  },

  computed: {
    count() {
      return this.statusInfo[this.status]
    },
  },

  methods: {
    async getData() {
      this.listLoading = true

      const res = await this.$Http.scheduleScheduleLogs({
        page: this.page,
        size: this.size,
        status: this.status,
        project: this.project,
        spider: this.spider,
        schedule_job_id: this.schedule_job_id,
        scrapydServerId: this.scrapydServerId,
      })

      if (res.code == 0) {
        this.list = res.data.list
        this.total = res.data.total

        this.statusInfo = {
          total: res.data.total,
          success: res.data.success,
          error: res.data.error,
        }
      }

      this.listLoading = false
    },

    handleStatusChange() {
      this.page = 1
      this.getData()
    },

    handleProjectChange() {
      this.page = 1
      this.getData()
    },
    handleSpiderChange() {
      this.page = 1
      this.getData()
    },

    handleSuccess() {
      this.page = 1
      this.getData()
    },
  },

  created() {
    this.schedule_job_id = this.$route.query.job
    this.project = this.$route.query.project
    this.spider = this.$route.query.spider

    this.getData()
  },
}
</script>

<style lang="scss" scoped></style>
