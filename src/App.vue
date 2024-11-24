<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import { get } from './services/movieService';

const getData = async () => {
  const data = await get(0, 'movie', 'popular');
  console.log(data);
}

getData();

</script>
