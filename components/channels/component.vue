<template>
  <generalCarouselComponent :items="channels">
    <template v-slot:header>
      Canales
      <v-spacer></v-spacer>
      <v-btn :to="`/schedules`" text class="mx-2 white--text font-weight-bold" color="primary">
        Ver mas
      </v-btn>

    </template>
    <template v-slot:item="{item}">
      <v-card color="transparent flat">
        <v-card class="rounded-xl" color="white d-flex justify-center align-center">
          <v-img class="transparent" height="140px" width="auto" style="max-width:100%" contain
            :src="(`http://34.238.35.65/images/epg/`+item.logo)"></v-img>
        </v-card>
        <v-card-title class="body-2 font-weight-regular white--text pt-2 pb-0 pl-2 text-truncate">
          {{item.name}}
        </v-card-title>

      </v-card>
    </template>
  </generalCarouselComponent>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('channels/findAll')
    },
    computed: {
      channels() {
        return this.$store.getters['channels/getList'].map((e) => {
          e.picture = e.logo
          return e
        })
      }
    }
  }

</script>

<style scoped>

</style>
