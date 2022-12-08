<template>
  <v-container>
    <GeneralCardComponent color="background-gradient">
      <GeneralCardTitleComponent class="d-flex justify-center">
        Programacion
      </GeneralCardTitleComponent>
      <v-divider class="primary"></v-divider>
      <v-card-text>
        <v-row no-gutters>
      <v-col class="col-4 col-md-1 col-sm-3">
        <v-col>
          <v-card elevation="6" height="50px" color="#5e636ebf"
            class="white--text d-flex text-center justify-center align-center">
            <Span class="font-weight-regular">{{currentDay}}</Span>
          </v-card>
        </v-col>
        <template v-if="(Object.keys(schedulesList).length>0)">
          <v-col v-for="(schedules,index) in schedulesList" :key="index">
            <v-card elevation="6" color="white" height="95px" width="100%" class="d-flex align-center white--text">
              <v-img contain height="95px" width="100%"
                :src="`http://34.238.35.65/images/epg/`+schedules[0].channel.logo"></v-img>
            </v-card>
          </v-col>

        </template>
        <template v-else>
          <v-col v-for="index in 6" :key="index">
            <v-skeleton-loader type="image" height="95px"></v-skeleton-loader>
          </v-col>
        </template>

      </v-col>
      <v-col class="col-8 col-md-11 col-sm-10">
        <v-row no-gutters class="overflow-auto" @scroll="scrollHandler" style="max-width:4944px">
          <v-col class="col-12 d-inline-flex">
            <v-col class="pl-0 pr-1 hourgrid white--text" v-for="hour in dailyHours" :key="hour">
              <v-card elevation="6" height="50px" color="#5e636ebf" class="d-flex justify-center align-center">
                <img contain height="30" width="30" src="/icons/clock.png"><span
                  class="font-weight-regular white--text ">{{hour}}</span>
              </v-card>
            </v-col>
          </v-col>
          <schedulesChannelsComponent v-if="(Object.keys(schedulesList).length>0)" :schedulesList="schedulesList">
          </schedulesChannelsComponent>
          <schedulesChannelsLoadingComponent v-else></schedulesChannelsLoadingComponent>
        </v-row>
      </v-col>
    </v-row>


      </v-card-text>
    </GeneralCardComponent>
  </v-container>
</template>

<script>
  import moment from 'moment'
  import _ from 'lodash'
  export default {
    data() {
      return {
        currentDate: moment(),
        currentHour: null,
        currentDay: moment().locale('es').format('dddd'),
        hours: 0,
      }
    },
    created() {
      this.currentHour = moment(this.currentDate).minutes(Math.floor(this.currentDate.minutes() / 30) * 30)
      this.getSchedules()
    },
    methods: {
      getSchedules() {
        this.$store.dispatch('schedules/findAllChannels')
          .then((data) => {
            console.log(data)
            this.$store.dispatch('schedules/findList', {
              filters: {
                gmt_start_date: {
                  $gte: moment().subtract(12, 'hours').toISOString(true),
                  $lte: moment().add(12, 'hours').toISOString(true)
                },
                channel: {
                  id: {
                    $in: data
                  }
                }
              },
              pagination: {
                start: 0,
                limit: 1000
              },
            })
          })
      },
      scrollHandler(e) {
        console.log(e)
      },
    },
    computed: {
      schedulesList() {
        let schedules = this.$store.getters['schedules/getList']
        return _.groupBy(schedules, program => program.channel.name);

      },
      dailyHours() {
        let hours = []
        let hour = moment(this.currentHour, 'HH:mm')
        for (let i = 0; i < 24; i++) {
          hours.push(hour.format('HH:mm'))
          hour.add(30, 'minutes')
        }
        return hours
      }
    }
  }

</script>

<style lang="scss">
  th {
    padding: 10px;
    font-family: "Montserrat" !important;
  }

  .hourgrid {
    flex: 0 0 210px;
    min-width: 210px;
  }

</style>
