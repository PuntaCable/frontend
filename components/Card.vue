<template>
    <v-card flat height="440" class="mb-xs-6">
        <v-toolbar color="primary" elevation="0" dense>
          <v-toolbar-title>
            <slot></slot>
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <slot name="description"></slot>
        </v-card-text>
        <v-card-actions>
            <v-btn outlined block color="primary" class="rounded-pill align-center">Ver más</v-btn>
        </v-card-actions>
    </v-card>
</template>