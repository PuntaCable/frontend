<template>
  <div>
    <v-col class="col-12 d-inline-flex px-0" v-for="index in 10" :key="index">
      <v-col class="pa-0 pr-2 white--text" :style="generateStyleToSetWithOfProgram()" v-for="i in 10" :key="i+'c'">
        <v-card v-ripple elevation="6" height="95px" color="#5e636ebf"
            class="pa-2">
            <v-card-subtitle class="white--text text-subtitle-1 pb-0 pt-0">
              <v-skeleton-loader type="chip"></v-skeleton-loader>
            </v-card-subtitle>
            <v-card-title class="py-2">
              <v-skeleton-loader type="text"></v-skeleton-loader>
            </v-card-title>
            <v-card-text>
              <v-progress-linear rounded color="orange" class="elevation-6">
              </v-progress-linear>
            </v-card-text>
          </v-card>

      </v-col>
    </v-col>
  </div>
</template>

<script>
  export default {
    methods: {
      generateStyleToSetWithOfProgram(runtime) {
        let maxWidth = 60 * 4
        return `min-width: ${maxWidth}px;flex: 0 0 ${maxWidth}px;padding-right:2px!important`
      },
    }
  }

</script>

<style>

</style>
