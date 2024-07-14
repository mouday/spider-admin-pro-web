<template>
  <el-autocomplete
    v-model="_value"
    :fetch-suggestions="querySearch"
    @select="handleSelect"
    v-bind="$attrs"
  >
    <template slot-scope="{ item }">
      <span>{{ item.project }}</span>
    </template>
  </el-autocomplete>
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
    querySearch(queryString, cb) {
      const results = queryString ? this.filterItem(queryString) : this.list;

      cb(results);
    },

    filterItem(queryString) {
      return this.list.filter((item) => {
        return (
          item.project.toLowerCase().indexOf(queryString.toLowerCase()) == 0
        );
      });
    },

    handleSelect(item) {
      this._value = item.project;
    },

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