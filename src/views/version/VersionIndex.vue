<template>
  <div class="app-container">
    <ProjectAdd
      @success="getData"
      :project="project"
      :scrapydServerId="scrapydServerId"
    />

    <div style="height: 20px"></div>

    <VersionTable
      v-loading="listLoading"
      :data="list"
      :project="project"
      :scrapydServerId="scrapydServerId"
      @success="getData"
    />
  </div>
</template>

<script>
import VersionTable from './VersionTable.vue'
import ProjectAdd from '@/views/project/ProjectAdd.vue'

export default {
  components: { VersionTable, ProjectAdd },

  data() {
    return {
      scrapydServerId: null,
      project: '',
      list: null,
      listLoading: true,
    }
  },

  created() {
    this.project = this.$route.query.project
    this.scrapydServerId = this.$route.query.scrapydServerId
    this.getData()
  },

  methods: {
    async getData() {
      this.listLoading = true
      const res = await this.$Http.scrapydlistVersions({
        project: this.project,
        scrapydServerId: this.scrapydServerId,
      })
      this.listLoading = false

      this.list = res.data
    },
  },
}
</script>

<style lang="scss" scoped></style>
