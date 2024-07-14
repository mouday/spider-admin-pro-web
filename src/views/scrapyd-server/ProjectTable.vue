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
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>

      <el-table-column
        label="服务名称"
        align="center"
        prop="server_name"
      >
        <template slot-scope="scope">
          {{ scope.row.server_name }}
        </template>
      </el-table-column>

      <el-table-column
        label="服务地址"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.server_url }}
        </template>
      </el-table-column>

      <el-table-column
        label="用户名"
        align="center"
        width="100px"
      >
        <template slot-scope="scope">
          {{ scope.row.username || '-' }}
        </template>
      </el-table-column>

      <el-table-column
        label="密码"
        align="center"
        width="100px"
      >
        <template slot-scope="scope">
          <span v-if="scope.row.password">***</span>
          <span v-else>-</span>
        </template>
      </el-table-column>

      <el-table-column
        label="查看项目"
        align="center"
        width="100px"
      >
        <template slot-scope="scope">
          <router-link
            :to="{
              path: '/project/list',
              query: { scrapydServerId: scope.row.id },
            }"
          >
            <i class="el-icon-tickets"></i> 项目
          </router-link>
        </template>
      </el-table-column>

      <el-table-column
        label="启用/禁用"
        align="center"
        width="100px"
      >
        <template slot-scope="scope">
          <mo-switch
            :active-value="1"
            :inactive-value="0"
            v-model="scope.row.status"
            @change="handleStatusChange(scope.row, $event)"
          ></mo-switch>
        </template>
      </el-table-column>

      <el-table-column
        label="编辑"
        align="center"
        width="80px"
      >
        <template slot-scope="scope">
          <ProjectAdd
            type="edit"
            :row="scope.row"
            @success="$emit('success')"
          />
        </template>
      </el-table-column>

      <el-table-column
        label="删除"
        align="center"
        width="80px"
      >
        <template slot-scope="scope">
          <ProjectDelete
            :row="scope.row"
            @success="$emit('success')"
          />
        </template>
      </el-table-column>
    </mo-table>
  </div>
</template>

<script>
import ProjectDelete from './ProjectDelete.vue'
import ProjectAdd from './ProjectAdd.vue'

export default {
  name: '',

  props: [],

  components: { ProjectDelete, ProjectAdd },

  data() {
    return {}
  },

  computed: {},

  methods: {
    async getData() {},

    async handleStatusChange(row, value) {
      let params = {
        scrapyd_server_id: row.id,
        status: value,
      }

      const res = await this.$Http.updateScrapydServerStatus(params)

      if (res.code == 0) {
        this.$message.success('更新成功')
        // this.$emit('success')
      } else {
        this.$message.error(res.msg)
      }
    },
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="scss" scoped></style>
