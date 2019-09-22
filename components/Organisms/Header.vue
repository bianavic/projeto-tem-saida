<template>
    <div class="container">
        <div class="logo">
            <LogoLink/>
        </div>
        <div class="menu-options">
            <div class="menu">
                <nuxt-link to="#">O Programa</nuxt-link>
                <nuxt-link to="#">Como funciona</nuxt-link>
                <nuxt-link to="#">Parceiros</nuxt-link>
                <nuxt-link to="#">Contato</nuxt-link>
            </div>
            <div class="button-logIn">
                <button @click="fazerLogin()" class="button-acccess">Acesso Restrito</button>
            </div>
        </div>
    </div>

</template>

<script>
  import LogoLink from '../Molecules/LogoLink'

  export default {
    name: 'Header',
    components: {
      LogoLink
    },
    methods:{
      fazerLogin: function(){
        alert('Fazendo LogIn')
      }
    }
  }
</script>

<style scoped>
    .container {
        height: 10vh;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .menu-options {
        display: flex;
        align-items: center;
        width: 100%;
    }

    .menu {
        width: 80%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }

    .menu a {
        color: #000;
        margin-left: 5%;

    }

    button.button-acccess {
        padding: 2vh;
        color: #931fad;
        width: 100%;
        background-color: transparent;
        border: solid 1px #931fad;
        border-radius: 5px;
        margin: 30%;
    }
</style>
