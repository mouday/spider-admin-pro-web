<template>
  <el-select
    v-model="_value"
    placeholder="选择项目"
    v-bind="$attrs"
    v-on="$listeners"
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
    scrapydServerId: { type: String },
    value: { type: String },
  },

  components: {},

  data() {
    return {
      list: [],
    }
  },

  computed: {
    _value: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('update:value', val)
      },
    },
  },

  methods: {
    resetData() {
      this.getData()
    },

    async getData() {
      if (!this.scrapydServerId) {
        return
      }

      const res = await this.$Http.scrapydListProjects({
        scrapydServerId: this.scrapydServerId,
      })

      this.list = res.data
      this.$emit('on-init', res.data)
    },
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="scss" scoped></style>
