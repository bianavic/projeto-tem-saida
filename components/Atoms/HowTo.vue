<template>
    <div class="main">
    <div class="container">
        <div class="title">
            <h2>Como Funciona</h2>
        </div>
        <div class="row">
            <div class="col-sm register">
                <img src="../../assets/icons/Ellipse.png" alt="Registro Ministerio Publico">
                <p class="description"> Ao registrar uma denúncia contra o agressor no Ministério Público, Defensoria
                    Pública, Poder Judiciário
                    ou Delegacia, a mulher em situação de violência doméstica e familiar pode optar por participar do
                    Programa Tem Saída.</p>
            </div>
            <div class="col-sm register">
                <img src="../../assets/icons/Ellipse.png" alt="Registro Ministerio Publico">
                <p class="description"> Ao registrar uma denúncia contra o agressor no Ministério Público, Defensoria
                    Ela será então encaminhada aos Centros de Apoio ao Trabalho e Empreendedorismo (CATe), vinculados à
                    Secretaria Municipal de Desenvolvimento Econômico.

                </p>
            </div>
            <div class="col-sm register">
                <img src="../../assets/icons/Ellipse.png" alt="Registro Ministerio Publico">
                <p class="description"> Ao registrar uma denúncia contra o agressor no Ministério Público, Defensoria
                    Receberá apoio e orientação qualificados para que seu ingresso no mercado de trabalho seja
                    viabilizado.</p>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'HowTo'
  }
</script>

<style scoped>
    .main {
        background-color: #F4F4F4;
        align-items: center;
        padding-top: 86px;
        padding-bottom: 86px;
    }
    .title {
        text-transform: uppercase;
        color: #5A297B;
        text-align:center;
        padding-bottom:60px;
    }
    .content {
        min-width: 100%;
        padding-top: 73px;
        display: flex;
        justify-content: space-evenly;
    }

    .register {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .register img{
        max-width: 144px;
        max-height: 144px;
        padding-bottom: 42px;
    }

    .description {
        padding:0px 20px;
        text-align:center;
    }
</style>