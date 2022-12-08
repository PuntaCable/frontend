<template>
  <v-card-title v-bind="$attrs" class="font-weight-regular card-title">
    <slot></slot>
  </v-card-title>
</template>

<script>
  export default {
    name: 'cardTitle',
  }
</script>

<style scoped>
.card-title{
      border-top: 5px solid #ff8503!important;
}
</style>