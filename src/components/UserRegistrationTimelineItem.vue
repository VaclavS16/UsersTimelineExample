<template>
  <div class="timeline-item">
    <div class="timeline-item-content">
      <p class="timeline-item-time">{{ item.registered | formatDateTime }}</p>
      <p class="timeline-item-name" v-if="fullName">
        {{ fullName }}
      </p>
      <p class="timeline-item-about" v-if="item.about">{{ item.about }}</p>
    </div>
    <div class="timeline-item-line"></div>
  </div>
</template>

<script>
import filters from "../filters/index.js";

export default {
  name: "UserRegistrationTimelineItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    fullName() {
      return this.item.name
        ? `${this.item.name.first} ${this.item.name.last}`
        : "";
    },
  },
  filters: filters,
};
</script>
