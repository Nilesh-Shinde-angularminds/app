<template>
  <div>
    <p>Value in this tab: {{ sharedValue }}</p>
    <p>
      Change this value: <input v-model="newValue" @input="updateSharedValue" />
    </p>
    <button @click="openNewTab">Open new tab</button>
    <button @click="closeTab">Close tab</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sharedValue: "",
      newValue: "",
    };
  },
  mounted() {
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  },

  methods: {
    handleVisibilityChange() {
      if (!document.hidden) {
        console.log("visible");
      } else {
        console.log("hidden");
      }
    },
    openNewTab() {
      window.open("http://localhost:8080/");
    },
    closeTab() {
      //   window.close("http://localhost:8080/");
      window.history.back();
    },
  },
};
</script>
