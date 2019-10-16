<template>
    <div class="main-container">
        <div class="title">
            <p>
                Como Funciona
            </p>
        </div>
        <div class="content">
            <div class="register">
                <img src="../../assets/icons/Ellipse.png" alt="Registro Ministerio Publico">
                <p class="description"> Ao registrar uma denúncia contra o agressor no Ministério Público, Defensoria
                    Pública, Poder Judiciário
                    ou Delegacia, a mulher em situação de violência doméstica e familiar pode optar por participar do
                    Programa Tem Saída.</p>
            </div>
            <div class="register">
                <img src="../../assets/icons/Ellipse.png" alt="Registro Ministerio Publico">
                <p class="description"> Ao registrar uma denúncia contra o agressor no Ministério Público, Defensoria
                    Ela será então encaminhada aos Centros de Apoio ao Trabalho e Empreendedorismo (CATe), vinculados à
                    Secretaria Municipal de Desenvolvimento Econômico. */

                </p>
            </div>
            <div class="register">
                <img src="../../assets/icons/Ellipse.png" alt="Registro Ministerio Publico">
                <p class="description"> Ao registrar uma denúncia contra o agressor no Ministério Público, Defensoria
                    Receberá apoio e orientação qualificados para que seu ingresso no mercado de trabalho seja
                    viabilizado.</p>
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
    .main-container {
        background-color: #F4F4F4;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 86px;
        padding-bottom: 86px;
    }
    .title {
        text-transform: uppercase;
        font-weight: bold;
        color: #5A297B;
        font-size: 35px;
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
        max-width: 250px;
    }
</style>