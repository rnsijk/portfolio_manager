<template>
  <div class="portfolio-wrap col-12">
    <div class="banner col-12">
      <div class="detail-bar row m-0">
        <div class="duration col-12">{{info.name}}</div>
      </div>
    </div>
    <div class="portfolio-details col-12">
      <div class="data-row row">
        <div class="col-6 data-title">Volatility</div>
        <div class="col-6 data-value">{{info.volatility}}</div>
      </div>
      <div class="data-row row">
        <div class="col-6 data-title">Mean Return</div>
        <div class="col-6 data-value">{{info.mean_return}}</div>
      </div>
      <div class="row">
        <div class="col-12 p-0">
          <a class="button medium button--secondary col-12" v-bind:href="'/customize/'+info.id" >Explore Investment Idea</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bucket',
  props: ['info'],
};
</script>
