<template>
  <el-select v-model="_value">
    <el-option
      v-for="item in list"
      :value="item.brand_id"
      :label="item.brand"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  name: '',

  props: {
    value: {
      type: Number | String,
    },
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
      const res = await this.$Http.DataAdmGetBrandList({
        page: 1,
        num: 100,
      });
      this.list = res.data.list;
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>