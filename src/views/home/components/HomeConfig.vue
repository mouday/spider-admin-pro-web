<template>
  <HomeCard
    desc="Config"
    title="配置信息"
  >
    <div class="home-config">
      <p>
        <i></i>
        <span>Scrapyd</span>
        <span style="margin-left:20px;">{{scrapyd.url}}</span>

        <template>
          <span style="margin-left:20px;">
            <span
              v-if="scrapyd.status== true"
              style="color:green;"
            >状态正常</span>
            <span
              v-else-if="scrapyd.status== false"
              style="color:red;"
            >状态异常</span>
          </span>
        </template>

      </p>

      <p>
        <i style="background-color:#36cbcb;"></i>
        <span>Spider Admin Version</span>
        <span style="margin-left:20px;">{{spider_admin.version || '-'}}</span>
      </p>
    </div>
  </HomeCard>

</template>

<script>
import HomeCard from './card.vue';
export default {
  name: '',

  props: [],

  components: {
    HomeCard,
  },

  data() {
    return {
      scrapyd: {},
      spider_admin: {},
    };
  },

  computed: {},

  methods: {
    async getData() {
      const res = await this.$Http.systemSystemConfig();
      this.scrapyd = res.data.scrapyd;
      this.spider_admin = res.data.spider_admin;
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.home-config {
  font-size: 16px;
  color: #595959;
  padding: 15px 28px;

  p {
    margin: 0;
    line-height: 2;

    i {
      display: inline-block;
      border-radius: 5px;
      width: 10px;
      height: 10px;
      // margin-right: 6px;
      background: #f66;
    }
  }
}
</style>