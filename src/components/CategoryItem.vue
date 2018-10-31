<template>
  <div class="item col-12 d-flex">
    <div class="col-4"><strong>
      <a href="#" >
        <i class="icon ion-md-trash color-danger"></i>
      </a>&nbsp;
      {{info.instrument.name}}
    </strong></div>
    <div class="col-4"><a href="" >
      lock
    </a></div>
    <div class="col-2 text-center">{{info.weight}}</div>
    <div class="col-2">
      <Spinner v-bind:value="info.editWeight" v-bind:onChange="onChange"/>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'CategoryItem',
  props: ['info'],
  components: {
    Spinner,
  },
  methods: {
    onChange(val) {
      this.$store.dispatch({
        type: 'weightChanged',
        instrument: this.$props.info.instrument,
        weight: val
      });
    }
  }
};
</script>

