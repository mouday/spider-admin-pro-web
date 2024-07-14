<template>
  <div class="app-container">
    <div>
      <SelectScrapydServer
        :value.sync="scrapydServerId"
        @on-init="handleSelectScrapydServerInit"
        @change="handleScrapydServerChange"
      ></SelectScrapydServer>

      <ProjectSelect
        class="ml-sm"
        ref="ProjectSelect"
        v-if="hasScrapydServerIdInit"
        :scrapydServerId="scrapydServerId"
        :value.sync="project"
        @on-init="handleProjectSelectInit"
        @change="resetData"
      />
    </div>

    <div style="height: 20px"></div>

    <SpiderTable
      :data="list"
      :scrapydServerId="scrapydServerId"
      v-loading="loading"
      :project="project"
    />
  </div>
</template>

<script>
import SpiderTable from './SpiderTable'
// import SpiderTool from './SpiderTool.vue'
import ProjectSelect from '@/components/SelectProject.vue'
import SelectScrapydServer from '@/components/SelectScrapydServer.vue'

export default {
  name: '',

  props: [],

  components: { SpiderTable, ProjectSelect, SelectScrapydServer },

  data() {
    return {
      scrapydServerId: '',
      hasScrapydServerIdInit: false,
      project: '',
      list: [],
      loading: true,
    }
  },

  computed: {},

  methods: {
    resetData() {
      this.getData()
    },

    async getData() {
      if (this.scrapydServerId && this.project) {
        // pass
      } else {
        return
      }

      this.loading = true
      const res = await this.$Http.scrapydlistSpiders({
        scrapydServerId: this.scrapydServerId,
        project: this.project,
      })

      this.list = res.data

      this.loading = false
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

    handleScrapydServerChange() {
      this.project = null

      this.$nextTick(() => {
        if (this.$refs.ProjectSelect) {
          this.$refs.ProjectSelect.resetData()
        }
      })
    },

    handleSelectScrapydServerInit(data) {
      if (!this.scrapydServerId) {
        if (data.list && data.list.length > 0) {
          this.scrapydServerId = data.list[0].value
        }
      }

      this.hasScrapydServerIdInit = true
    },

    handleProjectSelectInit(data) {
      if (!this.project) {
        if (data && data.length > 0) {
          this.project = data[0].project
        }
      }

      this.resetData()
    },
  },

  created() {
    this.scrapydServerId = this.$route.query.scrapydServerId
    this.project = this.$route.query.project
  },
}
</script>

<style lang="scss" scoped></style>
