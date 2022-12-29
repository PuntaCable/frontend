<template>
  <div>

    <v-row class="justify-center">
      <v-col class="col-12">
        <GeneralCardComponent color="background-gradient" flat>
          <GeneralCardTitleComponent>
            ELEGI&nbsp;<span class="primary--text">PAQUETE</span>&nbsp;QUE MAS ENCAJE&nbsp;<span
              class="primary--text">CON VOS!</span>
          </GeneralCardTitleComponent>
        </GeneralCardComponent>
      </v-col>
      <v-col class="col-md-4  col-12" v-for="pk in packageList.data" :key="pk.id">
        <GeneralCardComponent color="background-gradient" class="d-flex justify-space-between flex-column"
          min-height="440">
          <div>
            <GeneralCardTitleComponent class="d-flex justify-center">
              <v-chip color="success" v-if="pk.featured" label small
                class="black--text font-weight-regular elevation-6 featured-chip">
                Destacado</v-chip>
              <div v-html="setTile(pk.title)"></div>
            </GeneralCardTitleComponent>
            <v-divider class="primary"></v-divider>
            <v-card-text>
              <v-list dense color="transparent">
                <template v-for="(features,index) in pk.features">
                  <v-list-item>
                    <v-list-item-avatar>
                      <img contain width="30px" src="/icons/check.png">
                    </v-list-item-avatar>
                    <v-list-item-title class="font-weight-light">{{features.feature}}</v-list-item-title>
                  </v-list-item>
                  <v-divider v-show="(index!=pk.features.length-1)"></v-divider>
                </template>
              </v-list>
            </v-card-text>
          </div>
          <div>
            <v-card-text>
              <h1 class="font-weight-regular text-center">
                <span class="text-subtitle-1 font-weight-bold mb-2" v-if="pk.price">$</span>
                {{pk.price}}
              </h1>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn block outlined rounded @click="setPackage(pk)">VER MAS</v-btn>
            </v-card-actions>
          </div>
        </GeneralCardComponent>
      </v-col>
      <v-col class="col-12 col-md-6" v-show="(showMorePlans == false)">
        <v-btn block outlined rounded @click="(showMorePlans = true)">VER TODOS LOS PLANES</v-btn>
      </v-col>
    </v-row>
    <v-expand-transition>
      <v-row class="justify-center" v-show="showMorePlans">
        <v-col class="col-md-4  col-12" v-for="pk in packageList.data" :key="pk.id">
          <GeneralCardComponent color="background-gradient">
            <GeneralCardTitleComponent class="d-flex justify-center">
              <v-chip color="success" label small class="black--text font-weight-regular elevation-6 featured-chip">
                Destacado</v-chip>
              <div v-html="setTile(pk.title)"></div>
            </GeneralCardTitleComponent>
            <v-divider class="primary"></v-divider>
            <v-card-text>
              <v-list dense color="transparent">
                <template v-for="(features,index) in pk.features">
                  <v-list-item>
                    <v-list-item-avatar>
                      <img contain width="30px" src="/icons/check.png">
                    </v-list-item-avatar>
                    <v-list-item-title class="font-weight-light">{{features.feature}}</v-list-item-title>
                  </v-list-item>
                  <v-divider v-show="(index!=pk.features.length-1)"></v-divider>
                </template>
              </v-list>
            </v-card-text>
            <v-card-text>
              <h1 class="font-weight-regular text-center">
                <span class="text-subtitle-1 font-weight-bold mb-2">$</span>
                {{pk.price}}
              </h1>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn block outlined rounded @click="setPackage(pk)">VER MAS</v-btn>
            </v-card-actions>
          </GeneralCardComponent>
        </v-col>
        <v-col class="col-12 col-md-12">
          <v-btn block outlined rounded>VER TODOS LOS PLANES</v-btn>
        </v-col>
      </v-row>
    </v-expand-transition>

    <v-dialog v-model="packagesModal" fullscreen max-width="700">
      <GeneralCardComponent color="background-gradient">
        <GeneralCardTitleComponent class="d-flex justify-center">
          <div v-html="setTile(seletedPackage.title)"></div>
          <v-spacer></v-spacer>
          <v-btn icon @click="(packagesModal = false)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </GeneralCardTitleComponent>
        <v-divider class="primary"></v-divider>
        <v-card-text>
          <v-list dense color="transparent">
            <template v-for="(features,index) in seletedPackage.features">
              <v-list-item>
                <v-list-item-avatar>
                  <img contain width="30px" src="/icons/check.png">
                </v-list-item-avatar>
                <v-list-item-title class="font-weight-light">{{features.feature}}</v-list-item-title>
              </v-list-item>
              <v-divider v-show="(index!=seletedPackage.features.length-1)"></v-divider>
            </template>
          </v-list>
        </v-card-text>
        <v-card-text>
          <h1 class="font-weight-regular text-center">
            <span class="text-subtitle-1 font-weight-bold mb-2">$</span>
            {{seletedPackage.price}}
          </h1>
        </v-card-text>
        <v-card-text v-for="(channelCategories,index) in channels" :key="index">
          <GeneralCardComponent outlined color="background-gradient">
            <GeneralCardTitleComponent class="primary--text">
              {{ index }}
            </GeneralCardTitleComponent>
            <v-divider class="primary"></v-divider>
            <v-card-text>
              <v-row>
                <v-col class="col-md-2 col-6" v-for="channel in channelCategories" :key="channel.id">
                  <v-card color="transparent" :elevation="0">
                    <v-card class="rounded-xl" color="white d-flex justify-center align-center">
                      <v-img class="transparent" height="140px" width="auto" style="max-width:100%" contain
                        :src="(`https://appets.com.uy/files/?picture=`+channel.logo)"></v-img>
                    </v-card>
                    <v-card-title class="body-2 font-weight-regular white--text pt-2 pb-0 pl-2 text-truncate">
                      {{channel.name}}
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </GeneralCardComponent>
        </v-card-text>
      </GeneralCardComponent>
    </v-dialog>
  </div>
</template>

<script>
  import _ from 'lodash'
  export default {
    data() {
      return {
        showMorePlans: false,
        seletedPackage: {
          title: ''
        },
        packagesModal: false
      }
    },
    created() {
      this.$store.dispatch('packages/findAll')
    },
    methods: {
      setTile(title) {
        title = title.split(' ')
        return `<span class='primary--text'>${title[0]}</span> ${title[1]} ${(title[2]) ? title[2] : ''}`
      },
      setPackage(pk) {
        this.seletedPackage = pk
        this.packagesModal = true
        this.$store.dispatch('packages/find', pk.id)
      }
    },
    computed: {
      packageList() {
        return this.$store.getters['packages/getList']
      },
      channels() {
        var channels = this.$store.getters['packages/get'].channels
        return _.groupBy(channels, (channel) => channel.channel_category.name);
      }


    }
  }

</script>

<style scoped>
  .featured-chip {
    position: absolute;
    top: -3%;

  }

</style>
