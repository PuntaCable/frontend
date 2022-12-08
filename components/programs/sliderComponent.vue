<template>
  <div>
    <div v-if="(program.program.picture == null)">
      <v-skeleton-loader type="image"></v-skeleton-loader>
      <v-row class="mt-4">
        <v-col class="col-12 d-flex justify-center">
          <v-skeleton-loader type="text" width="50%"></v-skeleton-loader>
        </v-col>
        <v-col class="col-12 d-flex justify-center">
          <v-skeleton-loader type="text" width="20%"></v-skeleton-loader>
        </v-col>
        <v-col class="col-12 d-flex justify-center">
          <v-skeleton-loader type="text" width="20%"></v-skeleton-loader>
        </v-col>
        <v-col class="col-12 d-flex justify-center">
          <v-skeleton-loader type="button"></v-skeleton-loader>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-img class="top-program" height="50vh" width="auto" style="max-width:100%" cover
        :src="(`https://appets.com.uy/files/?picture=`+program.program.picture)">
        <div class="d-flex align-end justify-center">
        </div>
      </v-img>
      <v-row no-gutters>
        <v-col class="col-12 text-center">
          <h3 class="white--text">{{program.program.original_title}}</h3>
        </v-col>
          <v-col class="col-12 text-center">
            <p class="white--text font-weight-semi-regular mb-1">{{(formatTime(program.runtime))}}</p>
            <p class="white--text font-weight-semi-regular">{{(program.program.category.name)}}</p>
          </v-col>
          <template v-if="!condensed">
          <v-col class="col-12 text-center">
            <v-btn small outlined color="white" :to="`/programs/${program.program.id}`">
              MAS INFO
            </v-btn>
          </v-col>
        </template>
      </v-row>
    </div>


  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    props: {
      condensed: {
        type: Boolean,
        default: false
      },
      program: {
        type: Object,
        required: true
      }
    },
    methods: {
      formatTime(value) {
        const hours = moment().hours(Math.floor(value / 60)).format('HH');
        const minutes = moment().minutes(value % 60).format('mm');

        return `${hours}h ${minutes}m` // Imprime "02:00"
      }
    }
  }

</script>

<style>

</style>
