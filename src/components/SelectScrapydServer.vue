<template>
  <el-select
    v-model="_value"
    v-bind="$attrs"
    v-on="$listeners"
    placeholder="选择服务"
  >
    <el-option
      v-for="item in list"
      :label="item.label"
      :value="item.value"
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
    }
  },

  computed: {
    _value: {
      get() {
        // console.log(this.value, typeof this.value);
        return this.value
      },
      set(val) {
        this.$emit('update:value', val)
      },
    },
  },

  methods: {
    async getData() {
      const res = await this.$Http.getScrapydServerPage()

      let list = res.data.list.map((item) => {
        return {
          label: item.server_name,
          value: item.id + '',
        }
      })

      this.list = list

      this.$emit('on-init', { list: list })
    },
  },

  created() {
    this.getData()
  },
}
</script>

<style lang="scss" scoped></style>
