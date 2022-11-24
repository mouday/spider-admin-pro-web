<template>
  <el-autocomplete
    v-model="_value"
    v-bind="$attrs"
    v-on="$listeners"
    :fetch-suggestions="querySearch"
    placeholder="搜索Spider名"
    clearable
    @select="handleSelect"
  >
    <template slot-scope="{ item }">
      <span>{{ item.spider }}</span>
    </template>
  </el-autocomplete>
</template>

<script>
export default {
  name: '',

  props: {
    value: { type: String },
    project: { type: String },
  },

  components: {},

  data() {
    return {
      list: [],
    };
  },

  watch: {
    project: {
      handler: function (val) {
        if (val) {
          this.getData();
        } else{
          this.list = []
        }
      },
      immediate: true,
    },
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
          item.spider.toLowerCase().indexOf(queryString.toLowerCase()) == 0
        );
      });
    },

    handleSelect(item) {
      this._value = item.spider;
      this.$emit('change', item.spider)
    },

    async getData() {
      this.list = [];
      const res = await this.$Http.scrapydlistSpiders({
        project: this.project,
      });
      this.list = res.data;
    },
  },

  created() {},
};
</script>

<style lang="scss" scoped>
</style>