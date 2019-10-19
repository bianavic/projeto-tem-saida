<template>
    <div class="main container">
        <div class="title">
            <h2>contato</h2>
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
    .main {
        padding-bottom:100px;
    }

    .title {
        text-align: center;
        padding-top: 80px;
        padding-bottom: 80px;
        color: #5A297B;
        text-transform: uppercase;
    }

    .form-content {
        display: flex;
        justify-content: center;

    }

</style>