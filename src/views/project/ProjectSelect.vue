<template>
  <el-select
    v-model="_value"
    placeholder="选择项目"
    v-bind="$attrs"
  >
    <el-option
      v-for="item in list"
      :label="item.project"
      :value="item.project"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  name: '',

  props: {
    value: { type: String },
  },

  components: {},

  data() {
    return {
      list: [],
    };
  },

  computed: {
    _value: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('update:value', val);
      },
    },
  },

  methods: {
    async getData() {
      const res = await this.$Http.scrapydListProjects();

      this.list = res.data;
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>