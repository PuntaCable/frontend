<template>
  <div>
    <v-carousel>
      <img src="/orange-logo.png" alt="">
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
  </div>
</template>

<script>
import Card from '../components/Card.vue';
export default {
    name: "IndexPage",
    components: { Card }
}
</script>
