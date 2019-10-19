<template>
    <div class="main-container">
        <div class="form-title">
            contato
        </div>
        <div class="form-content">
            <Form/>
        </div>

    </div>
</template>

<script>
  import Form from '../Molecules/Form'

  export default {
    name: 'EmailForm',
    components: {
      Form
    }
  }
</script>

<style scoped>
    .main-container {
        background-color: yellowgreen;
        height: 710px;
    }

    .form-title {
        text-align: center;
        padding-top: 80px;
        padding-bottom: 80px;
        color: #5A297B;
        text-transform: uppercase;
        font-size: 35px;
    }

    .form-content {
        display: flex;
        justify-content: center;

    }

</style>