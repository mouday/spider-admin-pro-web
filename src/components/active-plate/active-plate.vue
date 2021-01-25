<template>
  <div class="active-plate-main">
    <ul class="active-list">
      <li
        class="item"
        v-for="item, index in infoList"
        :key="index"
      >
        <p
          class="num"
          :style="{color: colors[index]}"
        >
          <CountTo :end="item.count">{{item.count}}</CountTo>
        </p>
        <p class="desc">{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import CountTo from '_c/count-to';

export default {
  name: 'activePlate',
  components: {
    CountTo,
  },
  props: {
    // 需要展示的数据集合
    infoList: {
      type: Array,
      require: true,
    },
  },

  data() {
    return {
      colors: [
        '#11A0F8',
        '#FFBB44',
        '#7ACE4C',
        '#11A0F8',
        '#91AFC8',
        '#91AFC8',
      ],
    };
  },
};
</script>

<style lang="scss">
.active-plate-main {
  width: 100%;
  height: 80px;
  

  ul{margin: 0;}

  .active-list {
    display: flex;
    list-style: none;
    // padding-top:15px;
    .item {
      position: relative;
      flex: 1;
      text-align: center;

      p {
        margin: 0;
      }
      .num {
        font-size: 42px;
        font-weight: bold;
        font-family: sans-serif;
      }
      .desc {
        font-size: 16px;
      }
      &::after {
        position: absolute;
        top: 18px;
        right: 0;
        content: '';
        display: block;
        width: 1px;
        height: 56px;
        background: #e7eef0;
      }
      &:nth-last-of-type(1) {
        &::after {
          background: none;
        }
      }
    }
  }
}
</style>
