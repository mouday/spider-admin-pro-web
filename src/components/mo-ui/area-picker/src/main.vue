<template>
  <div>
    <el-radio-group v-model="countryItem">
      <el-radio label="0">国内</el-radio>
      <el-radio label="1">国外</el-radio>
    </el-radio-group>

    <el-select v-model="provinceItem"
      :placeholder="countryItem==0? '省份': '国家地区'"
      size="mini">
      <el-option v-for="item in provinceList"
        :key="item.value"
        :label="item.label"
        :value="item"></el-option>
    </el-select>

    <!-- 1、国外不显示二级，2、一级不选二级禁用 -->
    <el-select v-if="countryItem==0"
      v-model="cityItem"
      placeholder="城市"
      size="mini"
      :disabled="!provinceItem">
      <el-option v-for="item in cityList"
        :key="item.value"
        :label="item.label"
        :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
/**
 * 国内外，省份，城市选择
 */
import { inProvinces, outProvinces } from "./city.js";

export default {
  name: "BaseAreaPicker",

  props: {
    country: {
      type: String,
      default: "0"
    },
    province: {
      type: String,
      default: ""
    },
    city: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      provinceList: [],
      cityList: []
    };
  },

  computed: {
    countryItem: {
      get() {
        let country = this.country || "0";
        this.getProvinceList(country);
        return country;
      },

      set(country) {
        this.provinceItem = "";
        this.$emit("update:country", country);
      }
    },

    provinceItem: {
      get() {
        this.getCityList(this.province);
        return this.province;
      },

      set(province) {
        this.cityItem = "";
        this.$emit("update:province", province.value);
      }
    },

    cityItem: {
      get() {
        return this.city;
      },

      set(city) {
        this.$emit("update:city", city.value);
      }
    }
  },

  methods: {
    getCityList(province) {
      for (let item of inProvinces) {
        if (item.value == province) {
          this.cityList = item.children;
        }
      }
    },

    getProvinceList(value) {
      // log(value);
      if (value == 0) {
        this.provinceList = inProvinces;
      } else {
        this.provinceList = outProvinces;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.el-input__inner {
  width: 120px;
}

::v-deep .el-radio__inner {
  width: 12px;
  height: 12px;
}

::v-deep .el-radio__label {
  font-size: 12px;
}

::v-deep .el-radio {
  margin-right: 20px;
}
::v-deep .el-select {
  margin-right: 5px;
}
</style>