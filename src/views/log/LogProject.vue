<template>
  <div class="app-container">
    <!-- <JobTool
      ref="jobTool"
      :status.sync="status"
      @status-change="handleStatusChange"
      @status-info-change="handleStatusChange"
    /> -->

    <div style="height: 20px"></div>

    <LogTable
      type="project"
      v-loading="listLoading"
      :scrapydServerId="scrapydServerId"
      :project="project"
      :data="list"
    />
  </div>
</template>

<script>
import LogTable from './LogTable.vue'
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
      list: [],
      listLoading: true,
      timer: null,
    }
  },

  computed: {
    status_total() {
      return this.list.length
    },
  },

  methods: {
    async getData() {
      this.listLoading = true

      const res = await this.$Http.scrapydProjectLogs({
        project: this.project,
        scrapydServerId: this.scrapydServerId,
      })

      this.list = res.data

      this.listLoading = false
    },

    handleStatusChange() {
      this.getData()
    },
  },

  created() {
    this.project = this.$route.query.project
    this.scrapydServerId = this.$route.query.scrapydServerId
    this.getData()
  },
}
</script>

<style lang="scss" scoped></style>
