<template>
  <div class="app-container">
    <div class="flex items-center">
      <SelectScrapydServer
        :value.sync="scrapydServerId"
        @on-init="handleSelectScrapydServerInit"
        @change="resetData"
      ></SelectScrapydServer>

      <ProjectAdd
        class="ml-md"
        :scrapydServerId="scrapydServerId"
        @success="getData"
      />
    </div>

    <div style="height: 20px"></div>

    <ProjectTable
      :data="list"
      :scrapydServerId="scrapydServerId"
      v-loading="listLoading"
      @success="getData"
    />
  </div>
</template>

<script>
import ProjectTable from './ProjectTable.vue'
import ProjectAdd from './ProjectAdd.vue'

import SelectScrapydServer from '@/components/SelectScrapydServer.vue'

export default {
  components: { ProjectTable, ProjectAdd, SelectScrapydServer },

  data() {
    return {
      list: null,
      listLoading: true,
      scrapydServerId: null,
    }
  },

  created() {
    this.scrapydServerId = this.$route.query.scrapydServerId
    
    // 转为字符串
    if (this.scrapydServerId) {
      this.scrapydServerId = this.scrapydServerId + ''
    }
  },

  methods: {
    resetData() {
      this.getData()
    },

    async getData() {
      if (!this.scrapydServerId) {
        return
      }

      this.listLoading = true

      const res = await this.$Http.scrapydListProjects({
        scrapydServerId: this.scrapydServerId,
      })

      this.listLoading = false

      this.list = res.data
    },

    handleSelectScrapydServerInit({ list }) {
      console.log(list)

      if (!this.scrapydServerId) {
        if (list && list.length > 0) {
          this.scrapydServerId = list[0].value
        }
      }

      this.getData()
    },
  },
}
</script>

<style lang="scss" scoped></style>
