<template>
    <v-container>   
        <v-row class="d-flex justify-center flex-wrap">
            <v-col class="d-flex flex-column col-8 col-xs-4">
                <v-row class="align-center mb-2">
                    <v-icon>mdi-phone</v-icon>
                    <v-text class="pl-2 font-weight-medium text-h6">Llamanos</v-text>
                </v-row>
                <v-text>Punta del Este: +598 42494242</v-text>
                <v-text>WhatsApp +598 2904 9235</v-text>
                
                <v-divider class="mt-2 mb-2"></v-divider>

                <v-row class="align-center mb-2">
                    <v-icon>mdi-home</v-icon>
                    <v-text class="pl-2 font-weight-medium text-h6">Visitanos</v-text>
                </v-row>
                <v-text><v-text class="font-weight-bold">Punta del Este: </v-text> San Francisco y Lunas de Oro <br> Lunes a viernes 10 a 18 hs Sábados 10 a 14 hs <br> Domingo cerrado</v-text>
                <v-text><v-text class="font-weight-bold">Maldonado: </v-text>Rincón 615 casi 3 de Febrero <br> Lunes a Viernes de 9 a 13 hs y de 14 a 18 hs. <br> Sábado de 9 a 13 hs. Domingo cerrado</v-text>
            
                <v-divider class="mb-2 mt-2 "></v-divider>
            
                <v-row class="align-center">
                    <v-icon>mdi-send</v-icon>
                    <v-text class="pl-2 font-weight-medium text-h6 mb-2">Escríbenos</v-text>
                </v-row>
                <v-text>comercial@puntacable.com</v-text>
            </v-col>

            
            <v-col class="col-md-4 col-8">
                <v-card height="650">
                    <v-toolbar color="primary" dense elevation="0">
                        <v-toolbar-tittle>Formulario de contacto</v-toolbar-tittle>
                    </v-toolbar>
                    <v-form v-model="valid">
                        <v-container class="d-flex flex-column">
                            <v-row>
                                <v-col
                                class="d-flex"
                                cols="12"
                                md="12">
                                <v-icon class="pr-2">mdi-account</v-icon>
                                <v-text-field
                                    v-model="name"
                                    :rules="nameRules"
                                    label="Nombre"
                                    required>
                                </v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                class="d-flex"
                                cols="12"
                                md="12"
                                >
                                    <v-icon class="pr-2">mdi-phone</v-icon>
                                    <v-text-field
                                        v-model="phone"
                                        label="Teléfono"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                class="d-flex"
                                cols="12"
                                md="12"
                                >
                                    <v-icon class="pr-2">mdi-home</v-icon>
                                    <v-text-field
                                        v-model="direction"
                                        :rules="directionRules"
                                        :counter="150"
                                        label="Dirección"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                class="d-flex"
                                cols="12"
                                md="12"
                                >
                                    <v-icon class="pr-2">mdi-send</v-icon>
                                    <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="E-mail"
                                    required
                                    ></v-text-field>
                                    </v-col>
                            </v-row>
                            <v-textarea 
                            outlined 
                            label="Escribe tu consulta"
                            v-model="message"
                            >
                            </v-textarea>
                        </v-container>


                    </v-form>
                    <div class="justify-center d-flex">
                        <v-btn color="primary rounded-pill">Enviar</v-btn>
                    </div>
                </v-card>
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
      directionRules:[
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