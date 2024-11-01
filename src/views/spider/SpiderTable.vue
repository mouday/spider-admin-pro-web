<template>
  <mo-table
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-table-column
      align="center"
      label="序号"
      width="60"
    >
      <template slot-scope="scope">
        {{ scope.$index + 1 }}
      </template>
    </el-table-column>

    <el-table-column
      label="Spider名称"
      align="center"
    >
      <template slot-scope="scope">
        {{ scope.row.spider }}
      </template>
    </el-table-column>

    <el-table-column
      label="调度日志"
      align="center"
      width="80px"
    >
      <template slot-scope="scope">
        <router-link
          :to="{
            name: 'schedule-log-list',
            query: {
              scrapydServerId: scrapydServerId,
              project: project,
              spider: scope.row.spider,
            },
          }"
          target="_blank"
          ><i class="el-icon-document"></i> 日志</router-link
        >
      </template>
    </el-table-column>

    <el-table-column
      label="运行统计"
      align="center"
      width="80px"
    >
      <template slot-scope="scope">
        <router-link
          :to="{
            name: 'stats-list',
            query: {
              scrapydServerId: scrapydServerId,
              project: project,
              spider: scope.row.spider,
            },
          }"
          target="_blank"
          ><i class="el-icon-document"></i> 统计</router-link
        >
      </template>
    </el-table-column>

    <el-table-column
      label="运行日志"
      align="center"
      width="80px"
    >
      <template slot-scope="scope">
        <router-link
          :to="{
            name: 'logs-project-spider',
            query: {
              scrapydServerId: scrapydServerId,
              project: project,
              spider: scope.row.spider,
            },
          }"
          target="_blank"
          ><i class="el-icon-document"></i> 日志</router-link
        >
      </template>
    </el-table-column>

    <el-table-column
      label="添加任务"
      align="center"
      width="100px"
    >
      <template slot-scope="scope">
        <ScheduleAdd
          type="table-add"
          :spider="scope.row.spider"
          :project="project"
          :scrapydServerId="scrapydServerId"
        />
      </template>
    </el-table-column>

    <el-table-column
      label="运行"
      align="center"
      width="60px"
    >
      <template slot-scope="scope">
        <SpiderExecute
          :spider="scope.row.spider"
          :project="project"
          :scrapydServerId="scrapydServerId"
          @on-success="$emit('success')"
        />
      </template>
    </el-table-column>
  </mo-table>
</template>

<script>
import SpiderExecute from '@/views/spider/SpiderExecute.vue'
import ScheduleAdd from '@/views/schedule/ScheduleAdd.vue'

export default {
  name: '',

  props: {
    project: { type: String, default: '' },
    scrapydServerId: { type: String, default: '' },
  },

  components: { ScheduleAdd, SpiderExecute },

  data() {
    return {}
  },

  computed: {},

  methods: {
    async getData() {},
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="scss" scoped></style>
