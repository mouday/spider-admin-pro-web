<template>
  <div class="app-container">

    <ScheduleTool @success="getData" />

    <div style="height:20px"></div>

    <ScheduleTable
      :data="list"
      @success="getData"
      @sort-change="handleSortChange"
    />
  </div>
</template>

<script>
import ScheduleTool from './ScheduleTool.vue';
import ScheduleTable from './ScheduleTable.vue';

export default {
  name: '',

  props: [],

  components: {
    ScheduleTool,
    ScheduleTable,
  },

  data() {
    return {
      list: [],
       // 排序
      orderProp: '',
      orderType: '',
    };
  },

  computed: {},

  methods: {
    async getData() {
      const res = await this.$Http.scheduleGetJobs();

      if (res.code == 0) {
        this.list = res.data;
      }
    },

    handleSortChange({ column, prop, order }) {
      console.log(column, prop, order);

      this.orderType = order;
      
      // 如果有排序方式再给排序字段
      if (this.orderType) {
        this.orderProp = prop;
      } else {
        this.orderProp = null;
      }

      // this.getData();
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>