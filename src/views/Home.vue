<template>
  <div class="row">
    <div class="listing-title col-12">
      <h2 class="text-center">Here are few recommondation for you to choose from</h2>
    </div>
    <div class="listing-container container d-flex">
      <ul>
        <li v-for="item in bucketList" v-bind:key="item.id">
          <Bucket v-bind:info="item"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Bucket from '@/components/Bucket.vue';

export default {
  name: 'home',
  components: {
    Bucket,
  },
  computed: {
    bucketList() {
      return this.$store.getters.buckets;
    },
  },
};
</script>
