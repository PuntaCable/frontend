<template>
    <v-card class="text-center">
        <v-card-tittle>
            {{channels.tittle}}
        </v-card-tittle>
        <v-card-text class="d-flex">
            <v-img contain v-for="img in image" :key="img" src="/cuatro.jpeg" width="50" height="50"></v-img>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        channels: {
            type: Object,
            required: true,
            default: () => ({
                tittle: '',
                image:[]
            })
        }
    }
}
</script>