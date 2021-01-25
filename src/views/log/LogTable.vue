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
      label="文件名"
      align="center"
    >
      <template slot-scope="scope">
        <router-link
          :to="getRoute(scope.row.filename)"
          :target="type=='spider'?'_blank': '_self'"
        >{{scope.row.filename}}</router-link>
      </template>
    </el-table-column>

    <el-table-column
      label="文件大小"
      align="center"
    >
      <template slot-scope="scope">
        <mo-text :text="scope.row.size" />
      </template>
    </el-table-column>

    <el-table-column
      label="文件类型"
      align="center"
    >
      <template slot-scope="scope">
        <mo-text :text="scope.row.content_type" />
      </template>
    </el-table-column>

    <el-table-column
      label="文件编码"
      align="center"
    >
      <template slot-scope="scope">
        <mo-text :text="scope.row.content_encoding " />
      </template>
    </el-table-column>

  </mo-table>
</template>

<script>
// import JobCancel from './JobCancel.vue';

export default {
  name: '',

  props: {
    // logs/project/spider
    type: { type: String },
  },

  components: {},

  data() {
    return {
      project: '',
      spider: '',
      job: '',
    };
  },

  computed: {},

  methods: {
    async getData() {},

    getRoute(filename) {
      if (this.type == 'logs') {
        return {
          name: 'logs-project',
          params: {
            project: filename,
          },
        };
      } else if (this.type == 'project') {
        return {
          name: 'logs-project-spider',
          params: {
            project: this.project,
            spider: filename,
          },
        };
      } else if (this.type == 'spider') {
        return {
          name: 'logs-project-spider-job',
          params: {
            project: this.project,
            spider: this.spider,
            job: filename,
          },
        };
      }
    },
  },

  created() {
    this.project = this.$route.params.project;
    this.spider = this.$route.params.spider;
    this.job = this.$route.params.job;

    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>