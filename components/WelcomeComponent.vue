<script setup lang="ts">
import { storeLayout } from '~/stores/storeLayout'

const { navigations } = storeLayout()

// const test = null
// console.log('hello log')
</script>

<template>
	<div class="welcome">{{ navigations }}</div>
</template>

<style lang="scss" scoped>
.welcome {
}
</style>
