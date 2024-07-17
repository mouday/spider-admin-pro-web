<template>
  <div class="app-container">
    <SelectScrapydServer
      :value.sync="scrapydServerId"
      @on-init="handleSelectScrapydServerInit"
      @change="handleScrapydServerChange"
    ></SelectScrapydServer>

    <LogTable
      class="mt-md"
      type="logs"
      :scrapydServerId="scrapydServerId"
      v-loading="listLoading"
      :data="list"
    />
  </div>
</template>

<script>
import LogTable from './LogTable.vue'
import SelectScrapydServer from '@/components/SelectScrapydServer.vue'

export default {
  name: '',

  props: [],

  components: { LogTable, SelectScrapydServer },

  data() {
    return {
      scrapydServerId: '',
      project: '',
      list: [],
      listLoading: true,
    }
  },

  computed: {},

  methods: {
    async getData() {
      this.listLoading = true

      const res = await this.$Http.scrapydLogs({
        scrapydServerId: this.scrapydServerId,
      })

      if (res) {
        this.list = res.data
      }

      this.listLoading = false
    },

    handleScrapydServerChange() {
      this.getData()
    },

    handleSelectScrapydServerInit(data) {
      if (!this.scrapydServerId) {
        if (data.list && data.list.length > 0) {
          this.scrapydServerId = data.list[0].value
        }
      }

      this.getData()
    },
  },

  created() {
    // this.project = this.$route.query.project
    this.scrapydServerId = this.$route.query.scrapydServerId
    // this.getData()
  },
}
</script>

<style lang="scss" scoped></style>
