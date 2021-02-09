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
        {{ scope.$index + 1}}
      </template>
    </el-table-column>

    <el-table-column
      label="Spider"
      align="center"
    >
      <template slot-scope="scope">
        {{scope.row.spider }}
      </template>
    </el-table-column>

    <el-table-column
      label="状态"
      align="center"
      width="80"
    >
      <template slot-scope="scope">
        {{scope.row.status }}
      </template>
    </el-table-column>

    <el-table-column
      label="持续时间"
      align="center"
      width="80"
    >
      <template slot-scope="scope">
        <mo-text :text="scope.row.duration_str " />
      </template>
    </el-table-column>

    <el-table-column
      label="开始时间"
      align="center"
      width="170px"
    >
      <template slot-scope="scope">
        <mo-text :text="scope.row.start_time " />
      </template>
    </el-table-column>

    <el-table-column
      label="结束时间"
      align="center"
      width="170px"
    >
      <template slot-scope="scope">
        <mo-text :text="scope.row.end_time " />
      </template>
    </el-table-column>

    <el-table-column
      label="PID"
      align="center"
      width="80px"
    >
      <template slot-scope="scope">
        <mo-text :text="scope.row.pid + ''" />
      </template>
    </el-table-column>

    <el-table-column
      label="查看日志"
      align="center"
      width="80px"
    >
      <template slot-scope="scope">
        <router-link
          :to="{'name': 'logs-project-spider-job', params: {project: project, spider: scope.row.spider, job: scope.row.id}}"
          target="_blank"
        ><i class="el-icon-document"></i> 查看</router-link>
      </template>
    </el-table-column>

    <el-table-column
      label="取消运行"
      align="center"
      width="80px"
    >
      <template slot-scope="scope">
        <JobCancel
          :job="scope.row.id"
          :disabled="scope.row.status=='finished'"
        />
      </template>
    </el-table-column>

  </mo-table>
</template>

<script>
import JobCancel from './JobCancel.vue';

export default {
  name: '',

  props: {
    project: { type: String, default: '' },
  },

  components: { JobCancel },

  data() {
    return {
      
    };
  },

  computed: {},

  methods: {
    async getData() {},
  },

  created() {
    
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>