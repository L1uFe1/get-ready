<template>
  <div>
    <p>hello world!</p>
    <input type="text" v-model="value">
    <Myym msg="wdadafafasf" v-bind:value="value" @send_data='get_data'></Myym>

    <p class="p2">{{getdata}}</p>

  </div>
</template>

<script>
import Myym from "./myym";


export default {
  data() {
    return {
      value: "..",
      getdata: ""
    };
  },
  methods: {
   get_data(val) {
      this.getdata = val;
    }
  },
  components: {
    Myym
  }
};
</script>

<style scoped>
.p2 {
  color: blue;
}
</style>
