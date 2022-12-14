<template>
  <div>

    <v-row class="justify-center">
      <v-col class="col-12">
        <GeneralCardComponent color="background-gradient" flat>
          <GeneralCardTitleComponent>
            ELEGI&nbsp;<span class="primary--text">PAQUETE</span>&nbsp;QUE MAS ENCAJE&nbsp;<span class="primary--text">CON VOS!</span>
          </GeneralCardTitleComponent>
</GeneralCardComponent>
      </v-col>
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
        <v-col class="col-12 col-md-6">
          <v-btn block outlined rounded>VER TODOS LOS PLANES</v-btn>
        </v-col>
      </v-row>
    </v-expand-transition>

    <v-dialog v-model="packagesModal" max-width="700">
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
        <v-divider></v-divider>
      </GeneralCardComponent>

    </v-dialog>


  </div>
</template>

<script>
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
        return `<span class='primary--text'>${title[0]}</span> ${title[1]}`
      },
      setPackage(pk) {
        this.seletedPackage = pk
        this.packagesModal = true
      }
    },
    computed: {
      packageList() {
        return this.$store.getters['packages/getList']
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
