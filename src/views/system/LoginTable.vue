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
        label="用户名"
        align="center"
        width="100px"
      >
        <template slot-scope="scope">
          {{scope.row.username || '-'}}
        </template>
      </el-table-column>

      <el-table-column
        label="IP地址"
        align="center"
        width="120px"
      >
        <template slot-scope="scope">
          {{scope.row.ip}}
        </template>
      </el-table-column>

      <el-table-column
        label="登录地址"
        align="center"
      >
        <template slot-scope="scope">
          <mo-text :text="scope.row.address"></mo-text>
        </template>
      </el-table-column>

      <el-table-column
        label="操作系统"
        align="center"
        width="120px"
      >
        <template slot-scope="scope">
          <mo-text :text="scope.row.system"></mo-text>
        </template>
      </el-table-column>

      <el-table-column
        label="浏览器"
        align="center"
        width="120px"
      >
        <template slot-scope="scope">
          <mo-text :text="scope.row.browser"></mo-text>
        </template>
      </el-table-column>

      <el-table-column
        label="浏览器版本"
        align="center"
        width="100px"
      >
        <template slot-scope="scope">
          <mo-text :text="scope.row.version"></mo-text>
        </template>
      </el-table-column>

      <el-table-column
        label="登录结果"
        align="center"
        width="80px"
      >
        <template slot-scope="scope">
          <mo-status :value="scope.row.result" />
        </template>
      </el-table-column>

      <el-table-column
        label="登录时间"
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