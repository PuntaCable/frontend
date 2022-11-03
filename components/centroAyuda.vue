<template>
  <div class="pb-8">
    <v-card class="bg mb-md-12 pl-2 ">
      <v-card-title class="text-h4">Centro de ayuda</v-card-title>
      <br>
      <v-card-subtitle class="text-h6">¿En qué podemos ayudarte hoy?</v-card-subtitle>
    </v-card>

    <v-row no-gutters>
      <v-col class="d-flex flex-column ml-4 col-md-4">
        <v-card class="mx-auto" width="300">
          <v-list>
            <v-list-item @click="option=1">
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

              <v-list-item @click="option=2">
                <v-icon color="primary" size="15">mdi-circle</v-icon>

              <v-list-item-title class="pl-4 text-button font-weight-regular">Clientes
              </v-list-item-title>
            </v-list-item>

              

            <v-list-item @click="option=3">
                <v-icon color="primary" size="15">mdi-circle</v-icon>

              <v-list-item-title class="pl-4 text-button font-weight-regular">Preguntas Frecuentes
              </v-list-item-title>
            </v-list-item>
            </v-list-group>


            <v-list-item  @click="option=4">
              <v-list-item-icon>
                <v-icon color="primary" >mdi-tools</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="pl-4 text-button font-weight-regular">Asistencia técnica</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col class="col-md-7">
        <div v-if="option === 1" class="">
          <v-container>
            <v-text class="text-subtitle-1">Aquí encontrarás respuestas a muchas de tus consultas, así como los manuales de los equipos instalados en tu hogar. <br> <br>
                                            Si tu duda no se ve reflejada aquí, te recomendamos llamar al 4249 4242 y evacuarla con uno de nuestros operadores.
            </v-text> 
          </v-container>
        </div>

        <div v-if="option === 2">
          <v-row justify="center">
            <v-expansion-panels accordion>
              <v-expansion-panel
              v-for="cliente in clientes"
              :key="cliente"
              >
            <v-expansion-panel-header>{{ cliente.title }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ cliente.desc}}
            </v-expansion-panel-content>
            </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </div>
        <div v-else-if="option === 3">
          <v-row justify="center" class="pb-2">
            <v-expansion-panels accordion>
              <v-expansion-panel
              v-for="(preguntaFrecuente,index) in preguntasFrecuentes"
              :key="index"
              >
            <v-expansion-panel-header>{{ preguntaFrecuente.title }}</v-expansion-panel-header>
            <v-expansion-panel-content>{{ preguntaFrecuente.desc}}
            </v-expansion-panel-content>
            </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </div>

        <div v-else-if="option === 4">
          <v-container >
                        <v-text class="text-h5 font-weight-bold">Servicio Técnico <br><br></v-text>
                        <v-text>Antes de realizar cualquier consulta podés verificar si tu inconveniente técnico no está encuadrado dentro de los desperfectos frecuentes, así podes solucionarlo vos mismo consultando en esta página en el menú Clientes -> Preguntas <br> <br></v-text>
                        <v-text>Para tu seguridad, constata la acreditación del personal de Punta Cable que visita tu domicilio y recordá que ningún personal técnico de la empresa está autorizado a cobrar importe alguno ni a retirar de tu domicilio ningún equipo de tu propiedad. <br> <br></v-text>
                        <v-text>En caso de tormenta eléctrica desenchufá todos los aparatos. Punta Cable no se hace responsable por los desperfectos ocasionados por la tormenta. La red de cable no lleva electricidad, por lo tanto no puede ocasionarte inconvenientes de este tipo. <br> <br></v-text>
                        <v-text>Para realizar una consulta con nuestro servicio técnico, completá el formulario de consulta o comunicate a nuestro Centro de Atención al Cliente 4249 4242 o WhatsApp 091 360 981 </v-text>
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
          </v-container>
        </div>


                    
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
      clientes: [
        {
          title: 'Trámites',
          desc: 'Cualquier trámite que desees realizar ante Punta Cable podés hacerlo a través de nuestro Centro de Atención al Cliente 42 49 42 42 o al WhatsApp 2904 9235, también e mail: comercial@puntacable.com.uy y con nuestra App Móvil. Recordá tener a mano tu número de cliente. El mismo se encuentra en el margen superior derecho de la factura. Los trámites deberán ser realizados por personas mayores de 18 años.'
        },
        {
          title: 'Facturas',
          desc: ' Para recibir tus facturas es necesario que nos envíes un mail a comercial@puntacable.com.uy o registrarte con tu número de cliente en la página Web de Punta Cable. Podrás abonarla en los centros de pago habilitados con el número de cédula que figura en tu contrato. También por teléfono o por oficinas (únicamente con tarjetas). Te recordamos que en nuestra oficinas no manejamos dinero en efectivo. COMO CONSEGUIR MIS DATOS: Los puedes conseguir a través del Whats App 091 360 981 o por teléfono al 42 49 42 42'
        },
        {
          title: 'Cambio de domicilio o mudanza',
          desc: ' Podrás realizarlo a través de nuestro Centro de Atención al Cliente 4249 4242, o Whats App 091 360 981, a cualquier parte a dónde llegue la cobertura de nuestro servicio. Para solicitarlo tendrás que estar conectado al servicio. Cumplido el primer año de contrato, el primer cambio de domicilio o mudanza que realices será sin cargo. En caso de realizar más de un cambio de domicilio o mudanza durante el mismo año, tendrás que abonar la tarifa vigente. '
        },
        {
          title: 'Pago fuera de Término',
          desc: ' Para pagar tu factura fuera de término tendrás que acercarte a nuestras oficinas comerciales o realizar el pago telefónico comunicándote con nuestro Centro de Atención al Cliente 4249 4242, con las tarjetas adheridas: OCA, VISA ,MASTER, AMERICAN EXPRESS AMEX Y CREDITOS DIRECTOS, también puedes gestionar Whats App 091 360 981 . No te olvides: todo pago posterior a la fecha de vencimiento genera un gasto de gestión de cobranza. -La falta de pago podrá dar lugar al corte del servicio, a la baja del decodificador y servicios adicionales. La baja de cualquiera de los servicios por parte de Punta Cable, no implica para el cliente el cese de su obligación de cancelar los documentos impagos'
        },
        {
          title: 'Canales Premium',
          desc: ' Punta Cable cuenta con tres paquetes de Canales Premium y a su vez cada uno los siguientes canales: PACK FOX: Fox Comedy, Movies, Family, Action, Classic, Cinema y Fox HD: Series, Comedy, Actio0n, Movies PACK HBO HD: Max Up, Prime, Signature, Max, Plus, HBO 2 y Family PACK CABLE TOTAL: con los siguientes paquetes, Súper Combo Digital (SCD) + Pack HD + Packs Premium HBO y FOX '
        },
        {
          title: 'Baja de servicio',
          desc: ' Podrás solicitar la baja del servicio una vez transcurrido el primer año de prestación antes del fin de cada mes, personalmente y de forma exclusiva en nuestras oficinas de Punta del Este. '
        }
      ],
      preguntasFrecuentes:[
      {
          title: '¿Cómo es el servicio?',
          desc: 'Punta Cable te permite acceder a una completa programación para todas las edades y todos los públicos. Lleva a tu casa tecnología de punta, a la altura de los mejores cables del país y un servicio técnico calificado, logrando una ecuación excelente entre entretenimiento y actualización para que tu servicio de cable se transforme en un integrante más de la familia.'
        },
        {
          title: '¿Cómo es la instalación del servicio?',
          desc: 'Punta Cable instala un cableado que une la red con tu casa. Es un cableado de última generación que nuestro personal especializado realiza con materiales a cargo de la empresa en tu domicilio, bajo tu supervisión. Vos elegís el lugar de tu casa en donde se instalará el servicio y las bocas adicionales, si así lo acordas previamente'
        },
        {
          title: 'Cómo puedo abonar mi factura',
          desc: 'Punta Cable pone a tu alcance varias opciones de pago para que vos optes por aquella que te resulte más cómoda y conveniente. Elegí tu opción comunicándote a nuestro Centro de Atención al Cliente 42 49 42 42'
        },
        {
          title: 'Opciones',
          desc: 'Redes de Cobranza: Abitab y Red Pagos Débitos Automáticos con las siguientes tarjetas de crédito: OCA, VISA, MASTERCARD Y CREDITOS DIRECTOS. Pagos en sucursales de Punta Cable solo con: cheques, tarjetas de créditos y débitos: OCA, VISA, MASTERCARD, CREDITOS DIRECTOS y AMERICAN EXPRESS AMEX. Elegí tu opción comunicándote a nuestro Centro de Atención al Cliente 42 49 42 42 o Whats App 091 360 981'
        },{
          title: 'Cúal es la diferencia con el servicio digital',
          desc: 'El servicio de televisión por cable que brinda Punta Cable ofrece ventajas muy concretas con respecto al sistema satelital: Con Punta Cable tenés menos inconveniente los días de lluvia, el sistema satelital presenta serias dificultades ante lluvias y tormentas. Con Punta Cable, ante cualquier inconveniente, contás con un servicio técnico que te garantiza una respuesta efectiva en un lapso de tiempo mínimo. Sólo Punta Cable te garantiza la mejor atención al cliente, poniendo a tu disposición sucursales en Maldonado y Punta del Este, ofreciéndote todo el conocimiento de una empresa local y hablando el idioma que conocés. '
        },
        {
          title: '¿Qué debo hacer si no tengo señal?',
          desc: 'En caso de que no recibas señal o recibas señal distorsionada de Punta Cable, verificá: Si posees Decodificador, asegura que el Tv esté en la opción video o conversor y que esté en canal 70. Si los canales que no ves son del canal 14 en adelante, en ese caso deberás corroborar la conexión de cable al televisor. También podes consultar en esta página el menú Consultas Técnicas. Si el inconveniente técnico persiste, comunícate al Centro de Atención al Cliente 42 49 42 42 o al Whats App 091 360 981 '
        },
        {
          title: 'Si no tienes en el señal decodificador',
          desc: 'Estas son algunas opciones de los mensajes en la pantalla y su posible solución: E 48 – Verificar que el cable coaxil de entrada al decodificador esté conectado correctamente y bien ajustado. Si persiste el mensaje, verificar si el error está en todos los canales. En caso afirmativo, comunicarse con la empresa e informar del error. E16 o E18 – Este mensaje aparece en las señales que el abonado no tiene contratadas. En caso de aparecer en canales que sí tiene contratados, comunicarse con el 4249 4242 opción 2 (desde el teléfono registrado en el contrato) para que el sistema envíe un reinicio a la tarjeta del decodificaror del abonado. Este servicio se pude utilizar las 24 horas y es automático. E 04-4 – En este caso debes verificar que la tarjeta esté correctamente colocada. Pantalla en negro o azul – Verificar que el televisor tenga seleccionado el modo de entrada correcto (HDMI- AV). Para acceder a los distintos modos del Tv,  presionar en el control remoto la tecla Source / Input / Tv/Av '
        },
        {
          title: 'Si el decodificador no enciende',
          desc: 'Presioná la tecla "Power". Verificá el estado de las pilas. Chequeá que todas las conexiones estén correctamente instaladas. Verificá que esté correctamente enchufado a la red eléctrica'
        },
        {
          title: '¿Qué es la televisión digital?',
          desc: 'La televisión digital es una nueva tecnología que Punta Cable lleva a tu casa a través de su producto supercombo. A diferencia de la televisión tradicional, no envía su señal de manera analógica, sino que codifica la señal de modo binario, generando una mejor calidad de audio y video '
        },
        {
          title: '¿Qué necesito para acceder a la televisión digital?',
          desc: ' Un televisor y el decodificador digital que te provee Punta Cable es el único equipamiento necesario para disfrutar las ventajas de la tecnología digital. Además, vos mismo podes instalar tu decodificador de manera muy fácil y sencilla'
        },
        {
          title: '¿Es necesario realizar un nuevo cableado en mi casa?',
          desc: ' No se necesita ningún cableado extra.'
        },
        {
          title: '¿Qué mejoras obtengo con la television digital?',
          desc: 'Lo fundamental es que toda tu programación tendrá una mejor calidad de imagen y sonido, logrando colores más vivos y una impresión de mayor realidad en tu imagen. Además, gracias a su producto Super Comobo y pack HD, Punta Cable te ofrece la posibilidad de ampliar tus opciones de programación accediendo a señales exclusivas '
        },
        {
          title: '¿Puedo instalar yo solo el decodificador digital?',
          desc: 'Sí. Es una instalación sencilla, nada demasiado diferente a instalar un reproductor de DVD. De todas maneras, podes pedir ayuda a nuestro Centro de atención al cliente llamando al 4249 4242 o por WhatsApp 091 360 981.'
        }
      ],
      option: 1,
    }),
  }

</script>
