<template>

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
      label="版本号"
      align="center"
    >
      <template slot-scope="scope">
        {{scope.row.version}}
      </template>
    </el-table-column>

    <el-table-column
      label="上传时间"
      align="center"
    >
      <template slot-scope="scope">
        {{scope.row.format_version}}
      </template>
    </el-table-column>

    <el-table-column
      label="移除版本"
      align="center"
    >
      <template slot-scope="scope">
        <VersionDelete
          :version="scope.row.version"
          @success="$emit('success')"
        />
      </template>
    </el-table-column>

  </mo-table>
</template>

<script>
import VersionDelete from './VersionDelete.vue';

export default {
  name: '',

  props: [],

  components: { VersionDelete },

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