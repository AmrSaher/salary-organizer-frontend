<template>
  <NuxtLayout>
    <Loader v-if="loaderStore.isLoading" />
    <VitePwaManifest />
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useLoaderStore } from '~/stores/loaderStore'

const loaderStore = useLoaderStore()
</script>