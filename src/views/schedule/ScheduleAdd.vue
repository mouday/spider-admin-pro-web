<template>
  <span class="">
    <!-- 修改 -->
    <el-button
      v-if="job_id"
      size="mini"
      @click="handleDialogVisibleClick"
      icon="el-icon-edit-outline"
      v-bind="$attrs"
    ></el-button>

    <!-- 添加 -->
    <el-button
      v-else
      size="mini"
      @click="handleDialogVisibleClick"
      icon="el-icon-document-add"
      v-bind="$attrs"
    >添加</el-button>

    <el-dialog
      :title="btnText + '任务'"
      :visible.sync="dialogVisible"
      width="500px"
      center
    >
      <el-form
        :model="form"
        status-icon
        ref="form"
        label-width="100px"
        size="small"
        :rules="rules"
      >
        <el-form-item
          label="项目名称"
          prop="project"
          width="300px"
        >
          <ProjectSelect
            style="width:300px;"
            :value.sync="form.project"
            :disabled="project!=null || job_id!=null"
          />

        </el-form-item>

        <el-form-item
          label="Spider名称"
          prop="spider"
          width="300px"
        >
          <SpiderSearch
            style="width:300px;"
            :project="form.project"
            :value.sync="form.spider"
            :disabled="spider!=null || job_id!=null"
          />

        </el-form-item>

        <el-form-item
          label="cron表达式"
          prop="cron"
        >
          <el-input
            style="width:300px;"
            type="text"
            v-model="form.cron"
            placeholder="分 时 日 月 周"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="其他参数"
          prop="options"
        >
          <el-input
            style="width:300px;"
            type="textarea"
            rows="3"
            v-model="form.options"
            placeholder='any parameter is passed as spider args eg:{"setting": "DOWNLOAD_DELAY=2"}'
          ></el-input>
        </el-form-item>

      </el-form>

      <span slot="footer">
        <el-button
          size="small"
          @click="dialogVisible = false"
        >取 消</el-button>
        <el-button
          type="primary"
          size="small"
          @click="submit"
        >确 定</el-button>
      </span>

    </el-dialog>
  </span>
</template>

<script>
import ProjectSelect from '@/views/project/ProjectSelect.vue';
import SpiderSearch from '@/views/spider/SpiderSearch.vue';

export default {
  name: '',

  props: {
    job_id: { type: String, default: null },
    project: { type: String, default: null },
    spider: { type: String, default: null },
  },

  components: { ProjectSelect, SpiderSearch },

  data() {
    var validateCron = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('cron表达式不能为空'));
      }
      let list = value.split(' ').filter((item) => {
        return item.trim() != '';
      });

      if (list.length != 5) {
        return callback(new Error('cron表达式不正确'));
      }

      callback();
    };

    var validateOptions = (rule, value, callback) => {
      if (value) {
        try {
          JSON.parse(value);
        } catch (e) {
          return callback(new Error('参数不是json字符串'));
        }
      }
      callback();
    };

    return {
      dialogVisible: false,

      form: {
        project: '',
        spider: '',
        cron: '* * * * *',
        options: '',
      },

      rules: {
        project: {
          required: true,
          message: '项目名称必须填写',
          trigger: 'blur',
        },
        spider: {
          required: true,
          message: 'Spider名称必须填写',
          trigger: 'change',
        },
        cron: {
          required: true,
          validator: validateCron,
          trigger: 'blur',
        },
        options: {
          required: false,
          validator: validateOptions,
          trigger: 'blur',
        },
      },
    };
  },

  computed: {
    btnText() {
      if (this.job_id) {
        return '修改';
      } else {
        return '添加';
      }
    },

    icon() {
      if (this.job_id) {
        return 'el-icon-edit-outline';
      } else {
        return 'el-icon-document-add';
      }
    },
  },

  watch: {
    dialogVisible(val) {
      if (val) {
      }
    },
  },

  methods: {
    async getData() {
      const res = await this.$Http.scheduleJobDetail({
        job_id: this.job_id,
      });

      this.form = res.data.kwargs;
    },

    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.addVersion();
        }
      });
    },

    async addVersion() {
      const res = await this.$Http.scheduleAddJob({
        job_id: this.job_id,
        ...this.form,
      });

      if (res.code == 0) {
        this.$message.success('添加成功');
        this.$emit('success');
        this.$refs.form.resetFields();
        this.dialogVisible = false;
      } else {
        this.$message.error(res.msg);
      }
    },

    handleDialogVisibleClick() {
      this.dialogVisible = true;

      if (this.project) {
        this.form.project = this.project;
      }

      if (this.spider) {
        this.form.spider = this.spider;
      }

      if (this.job_id) {
        this.getData();
      }

      if (this.$refs.form) {
        this.$refs.form.clearValidate();
      }
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
</style>