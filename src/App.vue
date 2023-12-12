<template>
  <div>
    <Forms />
    <VisibilityComponentVue />
  </div>
</template>

<script>
import Forms from "./components/Forms.vue";
import VisibilityComponentVue from "./components/VisibilityComponent.vue";

export default {
  name: "App",
  components: {
    Forms,
    VisibilityComponentVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
