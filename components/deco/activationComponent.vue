<template>
  <div>
    <v-dialog :value="value" width="600">
      <GeneralCardComponent min-height="300">
        <v-row no-gutters>
          <v-col class="col-md-5">
            <v-img src="/modal-deco.svg" cover height="100%" aspect-ratio="1"></v-img>
          </v-col>
          <v-col class="col-md-7 pa-3">
            <h1 class="primary-gradient--text">Activa tu DECO</h1>
            <p class="white--text">De la forma más fácil, enviando tu número de abonado</p>
            <v-form class="d-flex justify-center flex-column">
              <v-row>
                <v-col class="col-12">
                  <FormsFieldsTextComponent label="N. Abonado" background-color="white" label-color="white--text" class="black--text" type="number" v-model="deco.abo_cod"></FormsFieldsTextComponent>

                </v-col>
                <v-col class="col-12">
                  <FormsFieldsSelectComponent label="N. Permisor" label-color="white--text" background-color="white"  v-model="deco.per_cod" :items="[10,60]">
              </FormsFieldsSelectComponent>
                </v-col>
              </v-row>
              <v-btn color="primary" class="mt-3" @click="activateDecoder()">Enviar</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </GeneralCardComponent>
    </v-dialog>
    <v-snackbar color="info" v-model="success">
      Tu deco se ha activado correctamente
    </v-snackbar>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        success: false,
        deco: {
          abo_cod: '',
          per_cod: 10
        }
      }
    },
    methods: {
      //send data to /api/webservices/activate_decoders using axios 
      activateDecoder() {
        this.$axios.post('https://api.puntacable.com.uy/deco/?a=refresh', this.deco)
          .then(() => {
            this.$emit('input', false)
            this.success = true
          })
      }
    }

  }

</script>
