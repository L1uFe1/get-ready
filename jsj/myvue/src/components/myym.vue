<template>
  <div id="box">
    我的页面=----一个组件{{msg}}
    <h1>{{value}}</h1>

    <button @click="fn()">传值给父组件</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        a: "父组件的值"
    };
  },
  props: ["msg", "value"],
  methods: {
    fn() {
      this.$emit("send_data", this.a);
    }
    
  },
  components: {}
};
</script>

<style scoped>
#box {
  width: 300px;
  height: 300px;
  background: red;
}

</style>
