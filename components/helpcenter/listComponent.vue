<template>
  <v-expansion-panels accordion>
    <v-expansion-panel v-for="(preguntaFrecuente,index) in preguntasFrecuentes" :key="index">
      <v-expansion-panel-header>{{ preguntaFrecuente.title }}</v-expansion-panel-header>
      <v-expansion-panel-content>{{ preguntaFrecuente.desc}}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

</template>

<script>
  export default {
    data() {
      return {
        preguntasFrecuentes: [{
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
          }, {
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

      }
    }
  }

</script>

<style>

</style>
