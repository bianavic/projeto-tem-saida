<template>
    <div class="main-container">
        <form class="send-email-contact">
            <!--<label class="name-contact">
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
            </label>-->
            
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text ts_label" id="nome">Nome</span>
                </div>
                <Input class="input-value" @input="handleInput"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text ts_label" id="email">E-mail</span>
                </div>
                <Input class="input-value" @input="handleInput"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text ts_label" id="phone">Telefone</span>
                </div>
                <Input class="input-value" @input="handleInput"/>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text ts_label" id="message">Mensagem</span>
                </div>
                <TextArea class="input-value" @input="handleInput"/>
            </div>

            <Button @click="sendEmail">Enviar</Button>
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
    .text-area-value {
        width: 840px;
        height: 540px;
    }

    .ts_label{
        background-color:#595959;
        color: #FFF;
        border-color: #595959;
        margin-right:2px;
    }

</style>