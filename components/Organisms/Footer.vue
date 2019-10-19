<template>
  <div class="">
    <div class="logo-prefeitura">
      <logo-prefeitura/>
    </div>
    <div class="copy-right">
      <copy-right/>
    </div>
  </div>
</template>

<script>
    import LogoPrefeitura from '../Atoms/LogoPrefeitura'
    import CopyRight from '../Atoms/CopyRight'

    export default {
        name: "Footer",
        components: {
            LogoPrefeitura,
            CopyRight
        }
    }
</script>

<style scoped>
  .container {
    height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #EEE4F4;
  }

  .copy-right {

  }
</style>
