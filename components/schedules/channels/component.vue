<template>
    <div>
      <v-col class="col-12 d-inline-flex pa-0" style="max-width:4000px" v-for="(schedules,index) in schedulesList" :key="index">
        <v-col class="px-0 white--text" :style="generateStyleToSetWithOfProgram(schedule.runtime)"
          v-for="schedule in schedules" :key="schedule.id">
          <v-card v-ripple elevation="6" :to="`/programs/${schedule.program.id}`" height="95px" color="#5e636ebf"
            class="pa-2">
            <v-card-subtitle class="white--text text-subtitle-1 pb-0 pt-0">
              <v-chip v-if="schedule.program.category" color="primary" label small
                class="elevation-6 font-weight-regular">
                {{(schedule.program.category.name)}}
              </v-chip>
            </v-card-subtitle>
            <v-card-title class="text-truncate white--text text-subtitle-1 font-weight-regular mt-2 pb-0 pt-0 mr-3">
              {{schedule.program.original_title}}
            </v-card-title>
            <v-card-text>
              <v-progress-linear rounded color="orange" class="elevation-6" :value="schedule.porcentruntime">
              </v-progress-linear>
            </v-card-text>
          </v-card>
        </v-col>
      </v-col>
    </div>
  </template>
  
  <script>
    export default {
      props:{
          schedulesList:{
              type:Object,
              default:()=>{}
          }
      },
      methods: {
        generateStyleToSetWithOfProgram(runtime) {
          let maxWidth = runtime * 7
          return `min-width: ${maxWidth}px;flex: 0 0 ${maxWidth}px;padding-right:2px!important`
  
        },
      }
    }
  
  </script>
  
  <style>
  
  </style>
  