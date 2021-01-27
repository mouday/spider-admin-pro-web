<template>
  <div class="">
    <mo-table
      v-bind="$attrs"
      v-on="$listeners"
    >
      <el-table-column
        align="center"
        label="ID"
        width="60"
      >
        <template slot-scope="scope">
          {{ scope.$index + 1}}
        </template>
      </el-table-column>

      <el-table-column
        label="项目名"
        align="center"
      >
        <template slot-scope="scope">
          {{scope.row.project}}
        </template>
      </el-table-column>

      <el-table-column
        label="查看版本"
        align="center"
      >
        <template slot-scope="scope">
          <router-link :to="{'name': 'project-version', params: {project: scope.row.project }}">
            <i class="el-icon-folder-opened"></i> 版本
          </router-link>
        </template>
      </el-table-column>

      <el-table-column
        label="查看Spider"
        align="center"
      >
        <template slot-scope="scope">
          <router-link :to="{'name': 'spider-list', query: {project: scope.row.project }}">
            <i class="el-icon-tickets"></i> Spider
          </router-link>
        </template>
      </el-table-column>

      <el-table-column
        label="查看任务"
        align="center"
      >
        <template slot-scope="scope">
          <router-link :to="{name: 'job-list', query: {project: scope.row.project }}">
            <i class="el-icon-date"></i> 任务
          </router-link>
        </template>
      </el-table-column>

      <el-table-column
        label="查看日志"
        align="center"
      >
        <template slot-scope="scope">
          <router-link :to="{'name': 'logs-project', params: {project: scope.row.project }}">
            <i class="el-icon-document"></i> 日志
          </router-link>
        </template>
      </el-table-column>

      <el-table-column
        label="更新版本"
        align="center"
        width="100px"
      >
        <template slot-scope="scope">
          <ProjectAdd
            :project="scope.row.project"
            type="version"
          />
        </template>
      </el-table-column>

      <el-table-column
        label="删除项目"
        align="center"
        width="100px"
      >
        <template slot-scope="scope">
          <ProjectDelete
            :project="scope.row.project"
            @success="$emit('success')"
          />
        </template>
      </el-table-column>
    </mo-table>
  </div>
</template>

<script>
import ProjectDelete from './ProjectDelete.vue';
import ProjectAdd from './ProjectAdd.vue';

export default {
  name: '',

  props: [],

  components: { ProjectDelete, ProjectAdd },

  data() {
    return {};
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