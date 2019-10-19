<template>
    <div class="main-container">
        <!--<input class="a-input" type="text" v-model="value" @input="$emit('input')" />-->
        <input type="text" class="form-control ls_input" id="basic-url" aria-describedby="basic-addon3">
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
  .ls_input{
    background-color:#F4F4F4;
    border: none;
    padding-left:10px;
  }
</style>