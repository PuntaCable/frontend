<template>
  <v-container>
    <v-row>
      <v-col class="col-12 col-md-7">

        <GeneralCardComponent outlined class="background-gradient">
          <GeneralCardTitleComponent>
            Informacion de contacto
          </GeneralCardTitleComponent>
          <v-divider class="primary"></v-divider>
          <v-card-text>
            <v-list dense color="transparent">
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="/icons/call.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular text-subtitle-1 mb-2">Llamanos</v-list-item-title>
              <v-divider></v-divider>
              <v-list-item-subtitle class="body-2 font-weight-regular white--text">
                WhatsApp +598 2904 9235
              </v-list-item-subtitle>

            </v-list-item-content>
          </v-list-item>
          <v-list-item class="my-6">
            <v-list-item-avatar>
              <v-img src="/icons/pin.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular text-subtitle-1 mb-2">Visitanos</v-list-item-title>
              <v-divider></v-divider>
              <v-list-item-subtitle class="body-2 font-weight-regular white--text">
                <b>Punta del Este: </b> San Francisco y Lunas de Oro <br> Lunes a viernes
                10 a 18 hs Sábados 10 a 14 hs <br> Domingo cerrado
              </v-list-item-subtitle>
              <v-list-item-subtitle class="body-2 font-weight-regular white--text mt-2">
                <b>Maldonado: </b>Rincón 615 casi 3 de Febrero <br> Lunes a Viernes
                de 9 a
                13 hs y de 14 a 18 hs. <br> Sábado de 9 a 13 hs. Domingo cerrado

              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="/icons/envelope.png"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-regular text-subtitle-1 mb-2">Escribenos</v-list-item-title>
              <v-divider></v-divider>
              <v-list-item-subtitle class="body-2 font-weight-regular white--text">comercial@puntacable.com</v-list-item-subtitle>

            </v-list-item-content>
          </v-list-item>

        </v-list>

          </v-card-text>
        </GeneralCardComponent>

      </v-col>


      <v-col class="col-md-5 col-12">
        <GeneralCardComponent color="background-gradient">
          <GeneralCardTitleComponent>Contactanos!</GeneralCardTitleComponent>
          <v-divider class="primary"></v-divider>
          <v-card-text>
            <v-form>
              <v-row>
                <v-col class="col-12">
                  <formsFieldsTextComponent background-color="white" label-color="white--text" v-model="name"
                    :rules="nameRules" label="Nombre" required>
                  </formsFieldsTextComponent>
                </v-col>
                <v-col class="col-12">
                  <formsFieldsTextComponent background-color="white" label-color="white--text" v-model="phone"
                    label="Teléfono" required></formsFieldsTextComponent>
                </v-col>
                <v-col class="col-12">
                  <formsFieldsTextComponent background-color="white" label-color="white--text" v-model="direction"
                    :rules="directionRules" :counter="150" label="Dirección" required></formsFieldsTextComponent>
                </v-col>
                <v-col class="col-12">
                  <formsFieldsTextComponent background-color="white" label-color="white--text" v-model="email"
                    :rules="emailRules" label="E-mail" required>
                  </formsFieldsTextComponent>
                </v-col>
                <v-col class="col-12">
                  <formsFieldsTextareaComponent background-color="white" label-color="white--text" outlined
                    label="Escribe tu consulta" v-model="message"></formsFieldsTextAreaComponent>

                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" class="font-weight-regular black--text" rounded block>Enviar</v-btn>
          </v-card-actions>
        </GeneralCardComponent>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      phone: '',
      direction: '',
      directionRules: [
        v => !!v || 'La dirección es requerida'
      ],
      message: '',
      nameRules: [
        v => !!v || 'Nombre requerido'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail requerido',
        v => /.+@.+/.test(v) || 'E-mail debe ser valido',
      ],
    }),
  }

</script>
