<template>
    <div class="main-container">
        <textarea class="ls_input" v-model="value" placeholder="Mensagem"></textarea>
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
  .ls_input{
    background-color:#F4F4F4;
    border: none;
    padding-left:10px;
    width:100%;
    height:100%;
  }
</style>