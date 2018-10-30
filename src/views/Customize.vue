<template>
  <div class="row">
    <div class="customize-title col-12">
      <h1>Portfolio Constituents </h1>
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

export default {
  name: 'Customize',
  components: {
    Category,
  },
  computed: {
    categoryList() {
      let constituents = this.$store.getters.constituentsList(parseInt(this.$route.params.id));
      let categories = this.$store.state.categories;
      let categoryList = []
      categories.map((cat) => {
        const list = [];
        let totalWeight = 0;
        let totalEditWeight = 0;
        constituents.reduce((acc, item) => {
          if (item.instrument.type.toLowerCase() === cat) {
            if (item.editWeight === undefined) {
              item.editWeight = item.weight;
            }
            acc.push(item);
            totalWeight += item.weight;
            totalEditWeight = Math.round((totalEditWeight + item.editWeight) * 100) / 100;
          }
          return acc;
        }, list);
        categoryList.push({
          type: cat, list, totalWeight, totalEditWeight,
        });
        return null;
      });
      return categoryList
    }
  },
};
</script>
