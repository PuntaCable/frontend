<template>
  <v-container class="mt-16">
    <GeneralCardComponent color="background-gradient">
      <GeneralCardTitleComponent class="d-flex justify-center">
        Programacion
      </GeneralCardTitleComponent>
      <v-divider class="cyan darken-1"></v-divider>
      <v-card-text>
        <v-row no-gutters>
      <v-col class="col-12">
        <iframe src="https://www.reportv.com.ar/finder/index/3226/" width="100%" height="800"></iframe>
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
