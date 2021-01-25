<template>
  <div class="app-container">

    <ScheduleTool @success="getData" />

    <div style="height:20px"></div>

    <ScheduleTable
      :data="list"
      @success="getData"
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
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>