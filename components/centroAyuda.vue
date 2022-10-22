<template>
  <div class="pb-8">
    <v-card class="bg mb-md-12 pl-2 ">
      <v-card-title class="text-h4">Centro de ayuda</v-card-title>
      <br>
      <v-card-subtitle class="text-h6">¿En qué podemos ayudarte hoy?</v-card-subtitle>
    </v-card>

    <v-row>
      <v-col class="d-flex flex-column ml-4 col-4">
        <v-card class="mx-auto" width="300">
          <v-list>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary" >mdi-book-open</v-icon>
              </v-list-item-icon>

              <v-list-item-title class="pl-4 text-button font-weight-regular">Instructivos y manuales
              </v-list-item-title>
            </v-list-item>


            <v-list-group :value="true" prepend-icon="mdi-help" color="primary" x-large>
              <template v-slot:activator>
                <v-list-item-title class="pl-4 text-button font-weight-regular">Preguntas frecuentes</v-list-item-title>
              </template>

              <v-list-group :value="true" no-action sub-group>
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Clientes</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
                  <v-list-item-title v-text="title"></v-list-item-title>

                  <v-list-item-icon>
                    <v-icon v-text="icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>

              

              <v-list-group no-action sub-group>
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Preguntas frecuentes</v-list-item-title>
                  </v-list-item-content>
                </template>
                

                <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
                  <v-list-item-title v-text="title"></v-list-item-title>

                  <v-list-item-icon>
                    <v-icon v-text="icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>
            </v-list-group>


            <v-list-item>
              <v-list-item-icon>
                <v-icon color="primary" >mdi-tools</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="pl-4 text-button font-weight-regular">Asistencia técnica</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col class="col-7">
                    <v-container>
                        <v-text class="text-subtitle-1">Aquí encontrarás respuestas a muchas de tus consultas, así como los manuales de los equipos instalados en tu hogar. <br> <br>
                                                        Si tu duda no se ve reflejada aquí, te recomendamos llamar al 4249 4242 y evacuarla con uno de nuestros operadores.
                        </v-text>
                    </v-container>

                    <v-container v-show="hide">
                        <v-text class="text-h5 font-weight-bold">Servicio Técnico <br><br></v-text>
                        <v-text>Antes de realizar cualquier consulta podés verificar si tu inconveniente técnico no está encuadrado dentro de los desperfectos frecuentes, así podes solucionarlo vos mismo consultando en esta página en el menú Clientes -> Preguntas <br> <br></v-text>
                        <v-text>Para tu seguridad, constata la acreditación del personal de Punta Cable que visita tu domicilio y recordá que ningún personal técnico de la empresa está autorizado a cobrar importe alguno ni a retirar de tu domicilio ningún equipo de tu propiedad. <br> <br></v-text>
                        <v-text>En caso de tormenta eléctrica desenchufá todos los aparatos. Punta Cable no se hace responsable por los desperfectos ocasionados por la tormenta. La red de cable no lleva electricidad, por lo tanto no puede ocasionarte inconvenientes de este tipo. <br> <br></v-text>
                        <v-text>Para realizar una consulta con nuestro servicio técnico, completá el formulario de consulta o comunicate a nuestro Centro de Atención al Cliente 4249 4242 o WhatsApp 091 360 981 </v-text>
                    </v-container>
                </v-col>
    </v-row>
  </div>
</template>

<style scoped>
  .bg {
    height: 400px;
    background: url('~/static/help-banner-bg.svg') no-repeat center center !important;
    background-size: cover;
  }

</style>

<script>
  export default {
    data: () => ({
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    }),
  }

</script>
