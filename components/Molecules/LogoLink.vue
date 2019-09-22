<template>
    <div class="container-header">
        <div class="logo-link">
            <nuxt-link to="/">
                <Logo/>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
    import Logo from '../Atoms/Logo'
  export default {
    name: 'LogoLink',
    components: {
      Logo
    }
  }
</script>

<style scoped>

</style>
