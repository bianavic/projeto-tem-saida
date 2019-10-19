<template>
    <div class="main-container">
        <button class="a-button" @click="$emit('click')">
            <slot></slot>
        </button>
    </div>
</template>

<script>
  export default {
    name: 'Button'
  }
</script>

<style scoped>

</style>