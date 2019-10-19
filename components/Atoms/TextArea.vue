<template>
    <div class="main-container">
        <textarea v-model="value" placeholder="Mensagem"></textarea>
            <p>{{ value }}</p>
    </div>
</template>

<script>
  export default {
    name: 'TextArea',
    props: [{
      value: {
        type: String,
        required: true
      }
    }]
  }
</script>

<style scoped>

</style>