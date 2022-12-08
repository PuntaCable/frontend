<template>
  <v-container>
    <v-row>
      <v-col class="col-12">
        <GeneralCardComponent color="background-gradient mt-4">
          <v-row>
            <v-col class="col-md-3 col-12">
              <v-card-text>
                <v-card>
                  <v-img v-if="featured" cover :src="(`http://34.238.35.65/images/epg/`+featured.program.picture)">
                  </v-img>
                </v-card>
              </v-card-text>
            </v-col>
            <v-col class="col-md-9 col-12">
                <v-card-title>
                    {{program.original_title}}
                </v-card-title>
                <v-divider></v-divider>
              <v-card-subtitle class="d-flex my-2">
                <v-chip v-if="program.category" color="primary" small label
                  class="elevation-6 mr-2 font-weight-regular white--text">
                  {{(program.category.name)}}
                </v-chip>
                <v-chip v-if="program.genre" color="primary" small label class="elevation-6 mr-2 font-weight-regular">
                  {{(program.genre.name)}}
                </v-chip>
                <v-chip v-if="program.subgenre" small label color="primary font-weight-regular">
                  {{(program.subgenre.name)}}
                </v-chip>
              </v-card-subtitle>
              <v-divider></v-divider>
              <v-card-text class="white--text">
                <v-skeleton-loader type="article" class="transparent" dark :loading="program.long_argument === null">
                  {{program.long_argument}}
                </v-skeleton-loader>
              </v-card-text>
            </v-col>
          </v-row>
        </GeneralCardComponent>
      </v-col>
      <v-col class="col-12">
        <GeneralCardComponent color="background-gradient">
          <GeneralCardTitleComponent class="white--text">
            Horarios
          </GeneralCardTitleComponent>
          <v-divider></v-divider>
          <v-card-text class="py-0">
            <v-list dense color="transparent" class="py-0">
              <template v-for="(schedule, index) in schedulesAll.data">
                <v-list-item :key="index+'li'">
                  <v-list-item-avatar>
                    <img contain width="30px" src="/icons/clock.png">
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title class="white--text">
                      {{(getDay(schedule.gmt_start_date))}}
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action-text class="white--text">
                    &nbsp;&nbsp;
                    {{(getStartHour(schedule.gmt_start_date))}}
                    -
                    {{(getEndHour(schedule))}}

                  </v-list-item-action-text>
                </v-list-item>
                <v-divider :key="index+'d'"></v-divider>
              </template>
            </v-list>
          </v-card-text>
        </GeneralCardComponent>
      </v-col>


    </v-row>
  </v-container>

</template>

<script>
  import moment from 'moment'
  export default {
    data() {
      return {
        currentDate: moment(),
        loadingFavoriteButton: false
      }
    },

    methods: {
      getStartHour(value) {
        return moment(value).format('HH:mm')
      },
      getEndHour(value) {
        return moment(value.gmt_start_date).add(value.runtime, 'minutes').format('HH:mm')
      },
      getDay(value) {
        return moment(value).locale('es').format('dddd DD/MM')
      },
    },
    created() {
      this.$store.dispatch('programs/find', this.$route.params.id)
      this.$store.dispatch('schedules/findAll', {
        filters: {
          gmt_start_date: {
            $gte: this.currentDate.format('YYYY-MM-DD')
          },
          program: {
            id: this.$route.params.id
          }
        }
      })
    },
    computed: {
      program() {
        return this.$store.getters['programs/get']
      },
      schedulesAll() {
        return this.$store.getters['schedules/getAll']
      },
      favorite() {
        return this.$store.getters['programs/favorites/get']
      },
      featured() {
        let featured = this.$store.getters['schedules/getAll']
        if (featured.data.length > 0) {
          featured = featured.data[0]
          featured.program.picture = featured?.program?.image || featured?.channel?.logo
          return featured
        }
        return null
      },
    }
  }

</script>

<style>

</style>
