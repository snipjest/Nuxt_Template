<script setup lang="ts">
const error = useError()

const handleError = () => {
  clearError({
    redirect: '/',
  })
}
</script>

<template>
  <NuxtLayout>
    <div v-if="error" class="error-page">
      <div class="container">
        <div class="">
          <h1 class="">
            {{ error.statusCode }} <span class="">ошибка</span>
          </h1>
          <p v-if="error.statusMessage" class="">
            {{ error.statusMessage }}
          </p>
          <p v-if="error.message" class="">{{ error.message }}</p>
          <button class="btn" @click="handleError">
            Главная страница
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>

</style>
