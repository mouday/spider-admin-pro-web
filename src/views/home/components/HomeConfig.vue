<template>
  <HomeCard
    desc="Config"
    title="配置信息"
  >
    <div class="home-config">
      <p>
        <span>Scrapyd地址</span>
        <span style="margin-left:20px;">{{scrapyd.url}}</span>
        
        <template>
          <span style="margin-left:20px;">
            <span v-if="scrapyd.status== true" style="color:green;">状态正常</span>
            <span v-if="scrapyd.status== false" style="color:red;">状态异常</span>
          </span>
        </template>

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
    };
  },

  computed: {},

  methods: {
    async getData() {
      const res = await this.$Http.systemSystemConfig();
      this.scrapyd = res.data.scrapyd;
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

  p{
      margin: 0;
  }
}
</style>