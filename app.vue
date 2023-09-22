<template>
  <NuxtLayout>
    <VitePwaManifest />
    <Loader v-if="loaderStore.isLoading" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useLoaderStore } from '~/stores/loaderStore'

const loaderStore = useLoaderStore()
</script>