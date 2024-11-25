<template>
  <img
    :src="imgURL"
    class="image"
  >
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  image: {
    type: String,
    default: ''
  },
  quality: {
    type: String,
    default: 'normal'
  }
});

const imgURL = computed(() => {
  switch (props.quality) {
    case 'original':
      return `${import.meta.env.VITE_IMAGE_URL_ORIGINAL}/${props.image}`;
    case 'low': 
      return `${import.meta.env.VITE_IMAGE_URL_LOW}/${props.image}`;
    default:
      return `${import.meta.env.VITE_IMAGE_URL_NORMAL}/${props.image}`;
  }
});

</script>

<style lang="scss">
.image {
  border-radius: 10px !important;
}
</style>