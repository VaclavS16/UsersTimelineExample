<template>
  <div class="timeline">
    <template v-if="items && items.length > 0">
      <div class="timeline-column odd-column">
        <UserRegistrationTimelineItem
          class="timeline-item"
          v-for="item in oddItems"
          :key="'timeline-item' + item._id"
          :item="item"
        />
      </div>
      <div class="timeline-column even-column">
        <UserRegistrationTimelineItem
          class="timeline-item"
          v-for="item in evenItems"
          :key="'timeline-item' + item._id"
          :item="item"
        />
      </div>
    </template>
    <p v-else>There are no users</p>
  </div>
</template>

<script>
import UserRegistrationTimelineItem from "./UserRegistrationTimelineItem";

export default {
  name: "UserRegistrationTimeline",
  components: {
    UserRegistrationTimelineItem,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    sortByRegisteredDateAsc: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    sortedItems() {
      return this.items.slice().sort((itemA, itemB) => {
        return this.sortByRegisteredDateAsc
          ? this.compareRegisteredDate(itemA, itemB)
          : this.compareRegisteredDate(itemB, itemA);
      });
    },
    oddItems() {
      return this.sortedItems.filter((item, index) => {
        return index % 2 === 0;
      });
    },
    evenItems() {
      return this.sortedItems.filter((item, index) => {
        return index % 2 !== 0;
      });
    },
  },
  methods: {
    compareRegisteredDate(itemA, itemB) {
      return (
        new Date(itemA.registered).getTime() -
        new Date(itemB.registered).getTime()
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
$timeline-color: #0B5184
$timeline-content-color: #000
$timeline-item-height: 90px
$timeline-item-margin: 12px
$timeline-lines-border-width: 4px

.timeline
  color: $timeline-content-color
  flex-direction: row
  box-sizing: border-box
  display: flex
  place-content: stretch flex-start
  align-items: stretch
  padding: 24px

  .timeline-column
    position: relative
    flex-direction: column
    box-sizing: border-box
    display: flex
    place-content: stretch flex-start
    align-items: stretch

    &.odd-column
      padding-right: 180px
      border-right: $timeline-lines-border-width / 2 solid $timeline-color

      &::after
        position: absolute
        top: -12px
        right: -14px
        content: ""
        width: 24px
        height: 24px
        border-radius: 12px
        background-color: $timeline-color

      /deep/ .timeline-item-line
        right: -194px

        &::after
          position: absolute
          bottom: -10px
          left: -12px
          content: ""
          width: 24px
          height: 24px
          border-radius: 12px
          background-color: $timeline-color

        &::before
          position: absolute
          bottom: -10px
          right: -12px
          content: ""
          width: 16px
          height: 16px
          border-radius: 12px
          background-color: #fff
          border: $timeline-lines-border-width solid $timeline-color
          z-index: 9


    &.even-column
      padding-left: 180px
      padding-top: 12px + $timeline-item-height / 2
      border-left: $timeline-lines-border-width / 2 solid $timeline-color

      &::after
        position: absolute
        bottom: -12px
        left: -14px
        content: ""
        width: 24px
        height: 24px
        border-radius: 12px
        background-color: $timeline-color

      /deep/ .timeline-item-line
        left: -194px

        &::after
          position: absolute
          bottom: -10px
          left: -12px
          content: ""
          width: 16px
          height: 16px
          border-radius: 12px
          background-color: #fff
          border: $timeline-lines-border-width solid $timeline-color

        &::before
          position: absolute
          bottom: -10px
          right: -12px
          content: ""
          width: 24px
          height: 24px
          border-radius: 12px
          background-color: $timeline-color

    /deep/ .timeline-item
      position: relative
      max-width: 180px
      max-height: $timeline-item-height
      margin: $timeline-item-margin

      .timeline-item-line
        position: absolute
        height: 4px
        width: 100px
        background-color: $timeline-color
        top: calc( 50% - 2px )

      .timeline-item-content
        overflow: hidden
        max-height: $timeline-item-height

        .timeline-item-time
          font-size: 18px
          font-weight: 600
          color: $timeline-color
          margin: 0

        .timeline-item-name
          font-size: 16px
          font-weight: 500
          color: $timeline-content-color
          margin: 0

        .timeline-item-about
          font-size: 16px
          color: $timeline-content-color
          margin: 0
          max-height: 100%
          display: -webkit-box
          -webkit-line-clamp: 2
          -webkit-box-orient: vertical
</style>
