<template>
  <div>
    <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>

    <v-container class="">
      <v-row class="justify-center">
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

    <v-container class="d-flex ">
      <v-row class="justify-space-around ml-md-16 mr-md-16 text-center">
        <v-card elevation="0" class="flex-column ">
          <v-btn color="primary" x-large fab><v-icon>mdi-book-open</v-icon></v-btn>
          <v-card-text>Instructivos y manuales</v-card-text>
        </v-card>
        
        <v-card elevation="0">
          <v-btn color="primary"  x-large fab><v-icon>mdi-help</v-icon></v-btn>
          <v-card-text>Preguntas frecuentes</v-card-text>
        </v-card>

        <v-card elevation="0">
          <v-btn color="primary"  x-large fab><v-icon>mdi-tools</v-icon></v-btn>
          <v-card-text>Asistencia Técnica</v-card-text>
        </v-card>
      </v-row>
      
    </v-container>
    

    <v-container class="d-flex flex-column">
      <v-img src="https://puntacable.com.uy/assets/img/dispositivos-play.png"></v-img>
      <div class="d-flex">
        <v-text class="mt-md-16 text-h3 half-width text-center">Cambiate a la nueva forma de ver TV</v-text>
        <v-img src="./puntacable-play-icon.svg"></v-img>
      </div>
    </v-container>
    


    <v-container>
      <v-row class="justify-space-around text-center mt-12 d-flex">
        <div class="flex-column d-flex ">
          <v-btn outlined height="50" width="200" color="primary rounded-pill align-center">Contactanos</v-btn>
          <v-text class="mt-12 text-h5">Seguinos en las redes</v-text>

          <div class="d-flex md-mt-4">
            <v-img contain height="40" width="40" src="./facebook-logo-3-1.png"></v-img>
            <v-img contain height="40" width="40" src="./youtube.svg"></v-img>
            <v-img contain height="40" width="40" src="./ig.png"></v-img>
            <v-img contain height="40" width="40" src="./twitter.svg"></v-img>
          </div>
        </div>
      </v-row>

    <img contain height="80" src="../static/light-logo.svg">

    <v-row class=" mt-md-4 d-flex flex-column">
      <v-row>
        <v-icon class="ml-md-6 ">mdi-map-marker</v-icon>
        <v-text>Punta del Este: San Francisco y Lunas de Oro</v-text>
      </v-row>

      <v-row class="mt-md-8">
        <v-icon class="ml-md-6 ">mdi-map-marker</v-icon>
        <v-text>Maldoando: Rincón 615 casi 3 de Febrero</v-text>
      </v-row>

      <v-row class="mt-md-8">
        <v-icon class="ml-md-6 ">mdi-phone</v-icon>
        <v-text>+598 4249 4242</v-text>
        <v-icon class="ml-md-6 ">mdi-whatsapp</v-icon>
        <v-text>+598 2904 9235</v-text>
      </v-row>
    </v-row>
  </v-container>

  <v-container class="d-flex">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Productos</v-list-item-title>
        <v-list-item-subtitle>Pack MANSA</v-list-item-subtitle>
        <v-list-item-subtitle>Pack BRAVA</v-list-item-subtitle>
        <v-list-item-subtitle>Pack LA BARRA</v-list-item-subtitle>
        <v-list-item-subtitle>Pack JOSÉ IGNACIO</v-list-item-subtitle>
        <v-list-item-subtitle>Pack HBO Premium</v-list-item-subtitle>
        <v-list-item-subtitle>Prepago</v-list-item-subtitle>
        <v-list-item-subtitle>Pack Adultos</v-list-item-subtitle>
        <v-list-item-subtitle>Nuevo Pack VTV PLUS</v-list-item-subtitle>
        <v-list-item-subtitle>Universal Plus</v-list-item-subtitle>
        <v-list-item-subtitle>Prepago</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item class="d-flex flex-column">
      <v-list-item-content>
        <v-list-item-title>Contratá Puntacable</v-list-item-title>
        <v-list-item-subtitle>Ver Ofertas</v-list-item-subtitle>
        <v-list-item-subtitle>Ver Planes</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-content>
        <v-list-item-title>Programacion</v-list-item-title>
        <v-list-item-subtitle>Grilla</v-list-item-subtitle>
        <v-list-item-subtitle>Buscador de Programación</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-item-content>
          <v-list-item-title>Atención al cliente</v-list-item-title>
          <v-list-item-subtitle>Centro deayuda</v-list-item-subtitle>
          <v-list-item-subtitle>Asistencia Técnica</v-list-item-subtitle>
          <v-list-item-subtitle>Cómo contrato Puntacable</v-list-item-subtitle>
          <v-list-item-subtitle>Cortes zonales</v-list-item-subtitle>
          <v-list-item-subtitle>Contactanos</v-list-item-subtitle>
        </v-list-item-content>
    </v-list-item>

    <v-list-item>
      <v-list-content>
        <v-list-item-title>Mi Puntacable</v-list-item-title>
          <v-list-item-subtitle>Ingresar</v-list-item-subtitle>
          <v-list-item-subtitle>Panel</v-list-item-subtitle>
          <v-list-item-subtitle>Facturación</v-list-item-subtitle>
          <v-list-item-subtitle>Mis Productos</v-list-item-subtitle>
          <v-list-item-subtitle>Mi perfil</v-list-item-subtitle>
      </v-list-content>
    </v-list-item>
  </v-container>

  <v-footer color="primary">
    <v-row>
      <v-text class="font-weight-light text-caption">2020 Puntacable. Todos los derechos reservados.</v-text>
    </v-row>
  </v-footer>

  </div>
</template>

<script>
export default {
  data () {
      return {
        items: [
          {
            src: './1.jpg',
          },
          {
            src: './2.jpeg',
          },
          {
            src: './3.jpeg',
          },
          {
            src: './4.jpg',
          },
          {
            src: './5.jpg',
          },
          {
            src: './6.jpg',
          },
        ],
      }
    },
    name: "IndexPage",

}
</script>
