<template>
  <GeneralCardComponent flat color="background-gradient" class="rounded-md">
    <GeneralCardTitleComponent  class="white--text">
      <slot name="header"></slot>
    </GeneralCardTitleComponent>
    <v-divider class="cyan darken-1"></v-divider>
    <v-card-text>
      <v-row>
        <v-col class="col-12">
          <carousel :perPage="itemsPerPage" :loop="true" :paginationEnabled="false">
            <slide v-for="(item, index) in items" :key="index" style="width:30%" class=" px-2 transparent p-relative">
              <slot name="item" :item="item"></slot>
            </slide>
          </carousel>
        </v-col>
      </v-row>
    </v-card-text>
  </GeneralCardComponent>
</template>

<script>
  import {
    Carousel,
    Slide
  } from 'vue-carousel';

  export default {
    props: {
      itemsPerPage:{
        type: Number,
        default: 4
      },
      items: {
        type: Array,
        default: () => []
      }
    },
    components: {
      Carousel,
      Slide
    },
  }

</script>

<style scoped>

</style>
