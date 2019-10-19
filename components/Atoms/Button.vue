<template>
    <div class="main-container">
        <button type="button" class="btn btn-primary" @click="$emit('click')">
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