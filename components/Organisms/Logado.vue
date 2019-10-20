<template>
    <div class="container">
        <div class="logo">
            <LogoLink/>
        </div>
        <div class="menu-options">
            <div class="menu">
                
               <input type="text" pattern="Pesquisar Oficio">
               <input type="text" placeholder="Pesquisar">
            </div>
           
        </div>
    </div>

</template>

<script>
  import LogoLink from '../Molecules/LogoLink'

  export default {
    name: 'Logado',
    components: {
      LogoLink
    },
   
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
