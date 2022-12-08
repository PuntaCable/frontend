<template>
  <GeneralCardComponent :color="color" v-bind="$props" :to="`/programs/${program.id}`">
    <v-card class="rounded-xl" color="white d-flex justify-center align-center">
      <v-img class="transparent" height="140px" width="auto" style="max-width:100%" cover
        :src="(`http://34.238.35.65/images/epg/`+program.picture)"></v-img>
    </v-card>
    <v-card-title class="body-2 font-weight-regular white--text pt-2 pb-0 pl-2 text-truncate">
        {{program.title}}
    </v-card-title>
    <v-divider class="white my-2"></v-divider>
    <v-card-actions class="pt-0 pb-2">
        <v-chip small color="primary" class="white--text" v-if="program.runtime">
        {{program.lang}}
      </v-chip>
      <v-spacer></v-spacer>
      <v-chip small color="primary" class="white--text" close-icon="mdi-clock" v-if="program.runtime">
        {{formatTime(program.runtime)}}
      </v-chip>
    </v-card-actions>
  </GeneralCardComponent>
</template>

<script>
    import moment from 'moment'
  export default {
    props: {
        color:{
            type: String,
            default: 'background-gradient'
        },
      program: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      formatTime(value) {

        // Convertimos las horas y minutos a una cadena en formato HH:mm
        const hours = moment().hours(Math.floor(value / 60)).format('HH');
        const minutes = moment().minutes(value % 60).format('mm');

        return `${hours}h ${minutes}m` // Imprime "02:00"
      },

    }
  }

</script>

<style>

</style>
