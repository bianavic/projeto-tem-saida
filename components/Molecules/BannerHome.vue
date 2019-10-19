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
    <!--<div class="bd-example">
  <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../../assets/banners/carrossel_01.jpg" class="d-block w-100" alt="sBannerPrincipalHome">
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="../../assets/banners/carrossel_02.jpg" class="d-block w-100" alt="sBannerSecundarioHome">
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>-->
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

    .banner-image{
        overflow:hidden;
    }

    .banner-image img {
        max-width: 100%;
        max-height: 100%;
    }

    .description-banner {
        position: absolute;
        max-width: 550px;
        font-size: 4rem;
        font-weight: bold;
        margin-left: 117px;
        color: #fff;
        line-height:4rem;
    }

    img{
        width:100%;
    }
</style>