<template>
  <div>
    <v-dialog :value="value" width="600">
      <GeneralCardComponent height="300">
        <v-row no-gutters>
          <v-col class="col-md-5">
            <v-img src="/modal-deco.svg" cover height="300" aspect-ratio="1"></v-img>
          </v-col>
          <v-col class="col-md-7 pa-3">
            <h1 class="primary--text">Activa tu DECO</h1>
            <p class="white--text">De la forma más fácil, enviando tu número de abonado</p>
            <v-form class="d-flex justify-center flex-column">
              <FormsFieldsTextComponent placeholder="N. Abonado" v-model="deco.abonado"></FormsFieldsTextComponent>
              <FormsFieldsSelectComponent placeholder="N. Permisor" v-model="deco.permisor" :items="[10,60]">
              </FormsFieldsSelectComponent>
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
          abonado: '',
          permisor: ''
        }
      }
    },
    methods: {
      //send data to /api/webservices/activate_decoders using axios 
      activateDecoder() {
        this.$axios.post('/webservices/activate_decoders', {
            data: this.deco
          })
          .then(() => {
            this.$emit('input', false)
            this.success = true
          })
      }
    }

  }

</script>
