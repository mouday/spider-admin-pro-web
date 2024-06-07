<template>
  <div class="">
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
          {{ scope.$index + 1}}
        </template>
      </el-table-column>

      <el-table-column
        label="项目名"
        align="center"
        width="150px"
      >
        <template slot-scope="scope">
          {{scope.row.project}}
        </template>
      </el-table-column>

      <el-table-column
        label="Spider"
        align="center"
      >
        <template slot-scope="scope">

          {{scope.row.spider}}

        </template>
      </el-table-column>

      <!-- <el-table-column
        label="运行参数"
        align="center"
      >
        <template slot-scope="scope">
          <mo-text :text="scope.row.options"></mo-text>
        </template>
      </el-table-column> -->

      <el-table-column
        label="调度模式"
        align="center"
        width="80"
      >
        <template slot-scope="scope">
          {{scope.row.schedule_mode}}
        </template>
      </el-table-column>

      <el-table-column
        label="调度状态"
        align="center"
        width="80px"
      >
        <template slot-scope="scope">
          <mo-status :value="scope.row.status" />
        </template>
      </el-table-column>

      <el-table-column
        label="错误消息"
        align="center"
        width="120"
        show-overflow-tooltip
      >
        <template slot-scope="scope">

          <mo-text :text="scope.row.message"></mo-text>
        </template>
      </el-table-column>

      <el-table-column
        label="运行状态"
        align="center"
        width="80px"
      >
        <template slot-scope="scope">
          {{scope.row.run_status || '-'}}
        </template>
      </el-table-column>

      <el-table-column
        label="item"
        align="center"
        width="60"
      >
        <template slot-scope="scope">
          {{scope.row.item_count || '-'}}
        </template>
      </el-table-column>

      <el-table-column
        label="error"
        align="center"
        width="60"
      >
        <template slot-scope="scope">
          {{scope.row.log_error_count || '-'}}
        </template>
      </el-table-column>

      <el-table-column
        label="持续时间"
        align="right"
        width="80px"
      >
        <template slot-scope="scope">
          {{scope.row.duration_str || '-'}}
        </template>
      </el-table-column>

      <el-table-column
        label="运行日志"
        align="center"
        width="80px"
      >
        <template slot-scope="scope">
          <router-link
            v-if="scope.row.spider_job_id"
            :to="{'name': 'logs-project-spider-job', params: {project: scope.row.project, spider: scope.row.spider, job :scope.row.spider_job_id}}"
            target="_blank"
          ><i class="el-icon-document"></i> 日志</router-link>
          <span v-else>-</span>
        </template>
      </el-table-column>

      <el-table-column
        label="调度时间"
        align="center"
        width="170px"
      >
        <template slot-scope="scope">
          {{scope.row.create_time}}
        </template>
      </el-table-column>

    </mo-table>
  </div>
</template>

<script>
export default {
  name: '',
};
</script>

<style lang="scss" scoped>
</style>