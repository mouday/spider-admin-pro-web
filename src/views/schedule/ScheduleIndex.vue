<template>
  <div class="app-container">
    <ScheduleTool @success="getData" />

    <div style="height: 20px"></div>

    <ScheduleTable
      :data="list"
      @success="getData"
      @sort-change="handleSortChange"
    />
  </div>
</template>

<script>
import ScheduleTool from './ScheduleTool.vue'
import ScheduleTable from './ScheduleTable.vue'
import {
  ScheduleTypeOptions,
  ScheduleTypeEnum,
} from '@/enums/schedule-type-enum.js'

export default {
  name: '',

  props: [],

  components: {
    ScheduleTool,
    ScheduleTable,
  },

  data() {
    return {
      list: [],
      // 排序
      orderProp: '',
      orderType: '',
    }
  },

  computed: {},

  methods: {
    async getData() {
      const options = await this.getScrapydServerPage()

      const res = await this.$Http.scheduleGetJobs()

      if (res.code == 0) {
        this.list = res.data.map((item) => {
          //  服务名
          let scrapyd_server = options.find(
            (x) => x.vlaue == item.scrapyd_server_id
          )

          item.scrapyd_server_label = scrapyd_server ? scrapyd_server.label : ''

          // 调度方式
          if (item.kwargs.schedule_type == ScheduleTypeEnum.ONLY_ONE_SERVER) {
            item.schedule_type_label = item.scrapyd_server_label
          } else {
            let ScheduleTypeItem = ScheduleTypeOptions.find(
              (x) => item.kwargs.schedule_type == x.value
            )
            item.schedule_type_label = ScheduleTypeItem
              ? ScheduleTypeItem.label
              : ''
          }

          return item
        })
      }
    },

    handleSortChange({ column, prop, order }) {
      console.log(column, prop, order)

      this.orderType = order

      // 如果有排序方式再给排序字段
      if (this.orderType) {
        this.orderProp = prop
      } else {
        this.orderProp = null
      }

      // this.getData();
    },

    async getScrapydServerPage() {
      const res = await this.$Http.getScrapydServerPage()

      let list = res.data.list.map((item) => {
        return {
          label: item.server_name,
          value: item.id + '',
        }
      })

      return list
    },
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="scss" scoped></style>
