<template>
  <div class="app-container">

    <LogTable
      type="logs"
      v-loading="listLoading"
      :data="list"
    />
  </div>
</template>

<script>
import LogTable from './LogTable.vue';

export default {
  name: '',

  props: [],

  components: { LogTable },

  data() {
    return {
      project: '',
      list: [],
      listLoading: true,
    };
  },

  computed: {},

  methods: {
    async getData() {
      this.listLoading = true;

      const res = await this.$Http.scrapydLogs();

      if(res){
        this.list = res.data;
      }

      this.listLoading = false;
    },
  },

  created() {
    this.project = this.$route.params.project;
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
</style>