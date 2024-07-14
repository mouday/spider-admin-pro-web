<template>
  <div class="">
    <el-button
      v-if="type == 'edit'"
      size="mini"
      @click="dialogVisible = true"
      icon="el-icon-edit"
      type="text"
      >编辑</el-button
    >

    <el-button
      v-else
      size="mini"
      @click="dialogVisible = true"
      icon="el-icon-document-add"
      type="primary"
      >添加</el-button
    >

    <el-dialog
      :title="(type == 'edit' ? '编辑' : '添加') + 'Scrapyd服务'"
      :visible.sync="dialogVisible"
      width="500px"
      center
      @open="handleOpen"
    >
      <el-form
        :model="form"
        ref="form"
        :rules="rules"
        status-icon
        label-width="80px"
        size="small"
      >
        <el-form-item
          label="服务名称"
          prop="server_name"
        >
          <el-input v-model="form.server_name"></el-input>
        </el-form-item>

        <el-form-item
          label="服务地址"
          prop="server_url"
        >
          <el-input v-model="form.server_url"></el-input>
        </el-form-item>

        <el-form-item
          label="用户名"
          prop="username"
        >
          <el-input v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item
          label="启用/禁用"
          prop="status"
        >
          <mo-switch
            :active-value="1"
            :inactive-value="0"
            v-model="form.status"
          ></mo-switch>
        </el-form-item>
      </el-form>

      <span slot="footer">
        <el-button
          size="small"
          @click="dialogVisible = false"
          >取 消</el-button
        >
        <el-button
          type="primary"
          size="small"
          @click="submit"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ProjectSearch from './ProjectSearch.vue'

export default {
  name: '',

  props: {
    type: { type: String, default: 'add' },

    project: { type: String, default: null },

    row: { type: Object, default: null },
  },

  components: { ProjectSearch },

  data() {
    return {
      dialogVisible: false,

      form: {
        server_name: '',
        server_url: '',
        username: '',
        password: '',
        status: 1,
      },

      rules: {
        server_name: [
          { required: true, message: '请输入服务名称', trigger: 'blur' },
        ],
        server_url: [
          { required: true, message: '请输入服务地址', trigger: 'blur' },
        ],
      },
    }
  },

  computed: {},

  watch: {
    // dialogVisible(val) {
    //   if (val) {
    //     this.form.project = this.project
    //   }
    // },
  },

  methods: {
    handleOpen() {
      this.getData()
    },

    async getData() {
      if (this.row && this.row.id) {
        for (let key in this.form) {
          this.form[key] = this.row[key]
        }
      }
    },

    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.handleSubmit()
        }
      })
    },

    async handleSubmit() {
      let params = {
        server_name: this.form.server_name,
        server_url: this.form.server_url,
        username: this.form.username,
        password: this.form.password,
        status: this.form.status,
      }

      if (this.row && this.row.id) {
        this.updateScrapydServer({
          ...params,
          scrapyd_server_id: this.row.id,
        })
      } else {
        this.addScrapydServer(params)
      }
    },

    async addScrapydServer(params) {
      const res = await this.$Http.addScrapydServer(params)

      if (res.ok) {
        this.$message.success('添加成功')
        this.$emit('success')
        this.dialogVisible = false
      }
    },

    async updateScrapydServer(params) {
      const res = await this.$Http.updateScrapydServer(params)

      if (res.ok) {
        this.$message.success('更新成功')
        this.$emit('success')
        this.dialogVisible = false
      }
    },
  },

  created() {},
}
</script>

<style lang="scss" scoped></style>
