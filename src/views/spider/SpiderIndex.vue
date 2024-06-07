<template>
  <div class="app-container">
    <SpiderTool
      :project.sync="project"
      @project-change="handleProjcetChange"
      @on-init="handleSpiderToolInit"
    />

    <div style="height: 20px"></div>

    <SpiderTable
      :data="list"
      :project="project"
    />
  </div>
</template>

<script>
import SpiderTable from './SpiderTable'
import SpiderTool from './SpiderTool.vue'

export default {
  name: '',

  props: [],

  components: { SpiderTable, SpiderTool },

  data() {
    return {
      project: '',
      list: [],
    }
  },

  computed: {},

  methods: {
    async getData() {
      const res = await this.$Http.scrapydlistSpiders({
        project: this.project,
      })
      this.list = res.data
    },

    handleProjcetChange(val) {
      if (val) {
        this.project = val
        localStorage.setItem('project', val)
        this.getData()
      } else {
        // this.$message.error('请选择项目');
      }
    },

    handleSpiderToolInit(data) {
      if (!this.project) {
        this.project = localStorage.getItem('project')
      }

      if (!this.project) {
        if (data && data.length > 0) this.project = data[0].project
      }

      if (this.project) {
        this.getData()
      }
    },
  },

  created() {
    this.project = this.$route.query.project
  },
}
</script>

<style lang="scss" scoped></style>
