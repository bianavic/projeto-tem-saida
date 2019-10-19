<template>
    <div class="main-container">
        <input class="a-input" type="text" v-model="value" @input="$emit('input')" />
    </div>
</template>

<script>
  export default {
    name: 'Input',
    props: {
        value: {
        type: String | Number,
        required: false,

        }
    }
  }
</script>

<style scoped>

</style>