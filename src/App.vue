<template>
  <div id="app">
    <UserRegistrationTimeline
      :items="timelineData"
      :sortByRegisteredDateAsc="true"
    />
  </div>
</template>

<script>
import UserRegistrationTimeline from "./components/UserRegistrationTimeline.vue";
import timelineData from "./assets/timeline.json";

export default {
  name: "App",
  components: {
    UserRegistrationTimeline,
  },
  data() {
    return {
      timelineData: timelineData,
    };
  },
};
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
