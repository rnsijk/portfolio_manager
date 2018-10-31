<template>
  <div class="spinner">
    <div class="spinner-controls d-flex">
      <span class="rnd-btn" v-on:click="decrement">-</span>
      <input
        class="spinner-value flex-fill"
        v-bind:value="inputValue"
      />
      <span class="rnd-btn" v-on:click="increment">+</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
  props: ['onChange', 'value', 'step', 'min', 'max'],
  data: function() {
    return {
      isPristine: true,
      inputValue: null
    }
  },
  created() {
    this.inputValue = this.$props.value;
  },
  methods: {
    increment(){
      if(this.$props.max !== undefined && this.$props.max === this.inputValue)
        return;
      let step = this.$props.step ? this.$props.step : 1;
      this.inputValue = this.inputValue + step;
      if(this.$props.onChange)
        this.$props.onChange(Math.round(this.inputValue*100) / 100);
    },

    decrement(){
      if(this.$props.min !== undefined && this.$props.min === this.inputValue)
        return;
      let step = this.$props.step ? this.$props.step : 1;
      this.inputValue = this.inputValue - step;
      if(this.$props.onChange)
        this.$props.onChange(Math.round(this.inputValue*100) / 100);
    }
  },
  computed: {
    inputVal: function() {
      if(this.isPristine) return 
    }
  }
}
</script>

