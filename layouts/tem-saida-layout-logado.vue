<template>
    <div class="layout-container">
        <Header/>
        <nuxt/>
        <Footer/>
    </div>
</template>

<script>
  import HeaderLogado from '../components/Organisms/Logado'
  

  export default {
    components: {
      Logado
    }
  }
</script>

<style>
    html {
        font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 0;
    }

    .layout-container {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /*overflow: hidden;*/
    }

    Header, Footer {
        width: 100vw;
        height: 10vh;
    }

    Footer {
        bottom: 100vh;
    }
</style>
