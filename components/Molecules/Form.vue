<template>
    <div class="main-container">
        <form class="send-email-contact">
            <label class="name-contact">
                <p>Nome</p>
                <Input class="input-value" @input="handleInput"/>
            </label>
            <label class="email-contact">
                <p>E-mail</p>
                <Input class="input-value" @input="handleInput"/>
            </label>
            <label class="phone-contact">
                <p>Telefone</p>
                <Input class="input-value" @input="handleInput"/>
            </label>
            <label class="message-contact">
                <p>Message</p>
                <TextArea class="text-area-value" @input="handleInput"/>
            </label>
            <Button @click="sendEmail">Search</Button>
        </form>
    </div>
</template>

<script>
  import Input from '../Atoms/Input'
  import TextArea from '../Atoms/TextArea'

  export default {
    name: 'Form',
    components: {
      Input,
      TextArea
    }
  }
</script>

<style scoped>

    .send-email-contact label {
        display: flex;
        flex-direction: row;
    }

    .input-value{
        width: 840px;
        background: #F4F4F4;
        border-radius: 3px;
    }

</style>