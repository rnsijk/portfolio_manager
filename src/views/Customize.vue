<template>
  <div class="row">
    <div class="customize-title col-12">
      <h1>Portfolio Constituents for {{bucket.name}} </h1>
      <div class="control-box">
        <button class="button button--primary medium" onClick={this.props.reset}>Reset</button>
        <button class="button button--primary medium" onClick={this.props.rebalance}>Rebalance</button>
        <button class="button button--primary medium">Save and Continue</button>
      </div>
    </div>
    <div class="customize-container col-12">
      <div class="list-title row">
        <div class="col-8">Cateogry/Stock</div>
        <div class="col-2">Model Weight (%)</div>
        <div class="col-2">Weight (100%)</div>
      </div>
      <ul>
        <li v-for="cat in categoryList" v-bind:key="cat.type">
          <Category v-bind:info="cat" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Category from '@/components/Category.vue';
import {getCategoryList} from '@/helpers/customize';

export default {
  name: 'Customize',
  components: {
    Category,
  },
  watch: {
    $route: 'fetchData',
  },

  created: function () {
    this.fetchData();
  },

  computed: {
    categoryList() {
      const constituents = this.$store.getters.constituentsList;
      if (constituents === null) return [];
      const categories = this.$store.state.categories;
      return getCategoryList(categories, constituents);
    },

    bucket() {
      return this.$store.getters.currentBucket
    }
  },

  methods: {
    fetchData() {
      this.$store.dispatch({ type: 'loadConstituents', id: parseInt(this.$route.params.id) });
    },
  },
};
</script>
