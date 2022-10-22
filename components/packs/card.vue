<template>
  <v-card >
    <v-row no-gutters>
      <v-col class="col-12 col-md-6">
          <v-card-title>
            <h1 class="text-xl">{{pack.name}}</h1>
          </v-card-title>
          <v-card-text>{{pack.description}}</v-card-text>
          <v-list class="ml-7">
            <v-list-item v-for="(item,index) in pack.items" :key="index">
              <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{item.text}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
      </v-col>

      <v-col class="col-12 col-md-6">
        <div class="bg2 d-flex justify-end align-end flex-column pr-6">
          <div class="text-center d-flex flex-column">
            <v-text class="text-h5">A solo</v-text>
            <v-text class="text-h3 ">{{pack.price}}</v-text>
            <v-text class="text-h5 ">por mes</v-text>
          </div>
        </div>
      </v-col>
    </v-row>


  </v-card>
</template>

<script>
  export default {
    props: {
      pack: {
        type: Object,
        required: true,
        default: () => ({
          name: '',
          description: '',
          items: [],
          price: ''
        })
      }
    }
  }

</script>
