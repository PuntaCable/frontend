<template>
  <carousel :perPage="3" :loop="true" v-model="currentIndex" scrollPerPage>
    <slide v-for="(item, index) in items" :key="index" style="width:31vw" class="py-10 transparent p-relative">
      <!-- aquí va el contenido de cada slide -->
      <GeneralCardComponent :class="getSlideClass(index)">
        <v-img  height="250" class="transparent" cover :src="item.image">
          <div class="d-flex flex-column justify-center align-center">
          </div>
        </v-img>
      </GeneralCardComponent>
    </slide>
  </carousel>
</template>

<script>
  import {
    Carousel,
    Slide
  } from 'vue-carousel';

  export default {
    components: {
      Carousel,
      Slide
    },
    data() {
      return {
        currentIndex: 0,
        items: [{
            title: 'Título del slide 1',
            description: 'Descripción del slide 1',
            image: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/0b2b67a1de6a06d1ce65e4ccc64047e3_a9f7318e-c5c4-4d2a-aed2-890bbfad883c_500x749.jpg?v=1573590273'
          },
          {
            title: 'Título del slide 2',
            description: 'Descripción del slide 2',
            image: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e50345d7cfee907ad63bb835109b37b9_263eaa00-ac40-4a0e-b2d7-86bb4ac69c90_500x749.jpg?v=1573584652'
          },
          {
            title: 'Título del slide 3',
            description: 'Descripción del slide 2',
            image: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/b892c2f862023362da3e66ec2b92a699_90de31ac-e4ca-476e-8cc0-f634509f364b_500x749.jpg?v=1573585334'
          },
          {
            title: 'Título del slide 3',
            description: 'Descripción del slide 2',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQVMQjWfe_xcuDawmu7WyEb1kad_ZU7e-xbvgSnE&s'
          },
          {
            title: 'Título del slide 3',
            description: 'Descripción del slide 2',
            image: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/2dfa6f0fe4b4a397c338a8db995b5539_500x749.jpg?v=1573572643'
          },
          {
            title: 'Título del slide 1',
            description: 'Descripción del slide 1',
            image: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/0b2b67a1de6a06d1ce65e4ccc64047e3_a9f7318e-c5c4-4d2a-aed2-890bbfad883c_500x749.jpg?v=1573590273'
          },
          {
            title: 'Título del slide 2',
            description: 'Descripción del slide 2',
            image: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/e50345d7cfee907ad63bb835109b37b9_263eaa00-ac40-4a0e-b2d7-86bb4ac69c90_500x749.jpg?v=1573584652'
          },
          {
            title: 'Título del slide 3',
            description: 'Descripción del slide 2',
            image: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/b892c2f862023362da3e66ec2b92a699_90de31ac-e4ca-476e-8cc0-f634509f364b_500x749.jpg?v=1573585334'
          },
          {
            title: 'Título del slide 3',
            description: 'Descripción del slide 2',
            image: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/b892c2f862023362da3e66ec2b92a699_90de31ac-e4ca-476e-8cc0-f634509f364b_500x749.jpg?v=1573585334'
          },

        ]
      }
    },
    methods: {
      getSlideClass(index) {
        if(this.currentIndex == 0) {
            if(index == 1) {
                return 'middle';

            } else {
                return 'back'

            }
        } else if(1+this.currentIndex * 3 == index) {
            return 'middle';
        } else {
            return 'back'
        }
      },
      handleChange(newIndex) {
        console.log(newIndex);
      }
    }
  }

</script>

<style scoped>
  .middle {
    /* estilos para el slide del medio */
    transform: scale(1.2);    
    z-index: 10;
    position:absolute;
  }

  .back {
    /* estilos para los slides de atrás */
    background-color: rgba(0, 0, 0, 0.5);
  }

</style>
