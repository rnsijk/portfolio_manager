<template>
  <div class="category-list row">
    <div class="category-title col-12 d-flex">
      <div class="col-4"><strong class="text-uppercase">{{info.type}}</strong></div>
      <div class="col-4"><a href="#"><i class="icon ion-md-add"></i> Add Bond</a></div>
      <div class="col-2 text-center">{{info.totalEditWeight}}%</div>
      <div class="col-2 text-center">{{info.totalEditWeight}}%</div>
    </div>
    <ul>
      <li v-for="item in info.list" v-bind:key="item.id">
        <CategoryItem v-bind:info="item" />
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import CategoryItem from '@/components/CategoryItem.vue';

export default {
  name: 'Category',
  props: ['info'],
  components: {
    CategoryItem,
  },
};
</script>
