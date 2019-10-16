<template>
    <div class="main-container">
        <div class="banner-image">
            <img src="../../assets/banners/banner-top.svg" alt="sBannerPrincipalHome">
        </div>
        <p class="description-banner">
            Tem saída para
            todas as mulheres
            e suas famílias
        </p>
    </div>
</template>

<script>
  export default {
    name: 'BannerHome'
  }
</script>

<style scoped>
    .main-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
    }

    .banner-image img {
        max-width: 100%;
        max-height: 100%;
    }

    .description-banner {
        position: absolute;
        max-width: 450px;
        font-size: 3rem;
        font-weight: bold;
        line-height: 85px;
        margin-left: 117px;
        color: #fff;
    }
</style>