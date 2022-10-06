<template>
  <div>
    <v-carousel height="auto">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>

    <v-container class="d-flex flex-wrap">
      <v-row class="justify-center">
        <v-col class="col-md-4 ">
          <Card>
            Pack brava
            <template v-slot:description>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <v-divider></v-divider>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <v-divider></v-divider>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </template>
          </Card>
        </v-col>
        <v-col class="col-md-4"> 
          <Card>
            Pack brava
            <template v-slot:description>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <v-divider></v-divider>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <v-divider></v-divider>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </template>
          </Card>
        </v-col>
        <v-col class="col-md-4"> 
          <Card>
            Pack brava
            <template v-slot:description>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <v-divider></v-divider>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <v-divider></v-divider>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </template>
          </Card>
        </v-col> 

        <v-col class="col-md-4">
          <Card>
            Pack brava
            <template v-slot:description>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <v-divider></v-divider>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <v-divider></v-divider>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </template>
          </Card>
        </v-col>
        <v-col class="col-md-4"> 
          <Card>
            Pack brava
            <template v-slot:description>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <v-divider></v-divider>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <v-divider></v-divider>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </template>
          </Card>
        </v-col>
        <v-col class="col-md-4"> 
          <Card>
            Pack brava
            <template v-slot:description>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <v-divider></v-divider>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <v-divider></v-divider>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </template>
          </Card>
        </v-col> 

        <v-col class="col-md-4 col-12">
          <Card>
            Pack brava
            <template v-slot:description>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <v-divider></v-divider>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <v-divider></v-divider>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </template>
          </Card>
        </v-col>
      </v-row>
    </v-container>
    
    <v-img src="https://puntacable.com.uy/assets/img/prepago-banner.svg"></v-img>

    <CentroAyuda></CentroAyuda>

    <v-container v-if="isMobile == false" class="d-flex ">
      <v-row class="justify-space-around ml-md-16 mr-md-16 text-center ">
        <v-card elevation="0" class="flex-column pt-md-6">
          <v-btn color="primary" x-large fab><v-icon>mdi-book-open</v-icon></v-btn>
          <v-card-text>Instructivos y manuales</v-card-text>
        </v-card>
        
        <v-card elevation="0" class="pt-md-6">
          <v-btn color="primary"  x-large fab><v-icon>mdi-help</v-icon></v-btn>
          <v-card-text>Preguntas frecuentes</v-card-text>
        </v-card>

        <v-card elevation="0" class="pt-md-6">
          <v-btn color="primary"  x-large fab><v-icon>mdi-tools</v-icon></v-btn>
          <v-card-text>Asistencia Técnica</v-card-text>
        </v-card>
      </v-row>
      
    </v-container>

    <v-container v-else class="d-flex ">
      <v-row class="justify-space-around ml-md-16 mr-md-16 text-center flex-column ">
        <v-card elevation="0" class="flex-column pt-md-6">
          <v-btn color="primary" x-large fab><v-icon>mdi-book-open</v-icon></v-btn>
          <v-card-text>Instructivos y manuales</v-card-text>
        </v-card>
        
        <v-card elevation="0" class="pt-md-6">
          <v-btn color="primary"  x-large fab><v-icon>mdi-help</v-icon></v-btn>
          <v-card-text>Preguntas frecuentes</v-card-text>
        </v-card>

        <v-card elevation="0" class="pt-md-6">
          <v-btn color="primary"  x-large fab><v-icon>mdi-tools</v-icon></v-btn>
          <v-card-text>Asistencia Técnica</v-card-text>
        </v-card>
      </v-row>
    </v-container>
    


    <v-container class="d-flex flex-column align-center">
      <v-img src="https://puntacable.com.uy/assets/img/dispositivos-play.png"></v-img>
      <div class="d-flex align-center flex-wrap">
        <v-text class=" text-h3 text-center">Cambiate a la nueva forma de ver TV</v-text>
        <v-img src="./puntacable-play-icon.svg"></v-img>
      </div>
    </v-container>

    <generalFooter></generalFooter>
    
  </div>
</template>

<script>
  import generalFooter from "~/components/general/Footer.vue"
export default {
    data() {
        return {
            items: [
                {
                    src: "./1.jpg",
                },
                {
                    src: "./2.jpeg",
                },
                {
                    src: "./3.jpeg",
                },
                {
                    src: "./4.jpg",
                },
                {
                    src: "./5.jpg",
                },
                {
                    src: "./6.jpg",
                },
            ],
        };
    },
    name: "IndexPage",
    components: {generalFooter},
    computed: {
    isMobile() {
      return this.$vuetify.breakpoint.smAndDown
    }}
}
</script>
