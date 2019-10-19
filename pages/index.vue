<template>
    <div class="">
        <BannerHome/>
        <div class="ts-header">
        </div>
        <div class="about">
            <AboutText/>
        </div>
        <div class="how-to">
            <HowTo/>
        </div>
        <div class="how-to">
            <Partner/>
        </div>
        <div class="email-form">
            <FormEmail/>
        </div>

    </div>
</template>

<script>
  import BannerHome from '../components/Molecules/BannerHome'
  import AboutText from '../components/Atoms/AboutText'
  import HowTo from '../components/Atoms/HowTo'
  import Partner from '../components/Atoms/Partner'
  import FormEmail from '../components/Organisms/EmailForm'

  export default {
    layout: 'tem-saida-layout',
    components: {
      BannerHome,
      AboutText,
      HowTo,
      Partner,
      FormEmail
    }
  }
</script>

<style>

</style>
