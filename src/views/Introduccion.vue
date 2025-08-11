<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade") En el entorno económico actual, caracterizado por la incertidumbre, la inflación y el acceso creciente a productos financieros, la capacidad para gestionar adecuadamente los ingresos y los gastos personales se convierte en una competencia esencial para la sostenibilidad financiera individual y familiar. Comprender cómo se distribuyen los recursos económicos, establecer presupuestos realistas y proyectar inversiones a corto, mediano y largo plazo, son prácticas fundamentales que permiten tomar decisiones informadas, evitar el sobreendeudamiento y fomentar una cultura de ahorro consciente.
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade")
      .col-sm-12.col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-sm-12.col-lg-7
        .bg-color-1.p-4.mb-4
          p.mb-0 Este material de formación tiene como propósito brindar al aprendiz las nociones fundamentales para identificar, clasificar y planificar sus ingresos y egresos, promoviendo el desarrollo de habilidades financieras básicas, pero decisivas, para una vida económica equilibrada. A través del estudio de conceptos clave como presupuesto, ahorro, control de gastos y proyección financiera, se busca que el aprendiz reconozca la importancia de construir una visión a futuro sustentada en la planificación, la disciplina financiera y la toma de decisiones estratégicas.
        p.mb-0 Ahorrar, si bien es una práctica ancestral asociada a la prevención de escenarios económicos adversos, sigue siendo una conducta poco adoptada por muchas personas debido a la presión social del consumo y la facilidad de acceso al crédito. Este componente propone un enfoque reflexivo sobre la necesidad de transformar los hábitos de consumo y asumir el ahorro no solo como una estrategia de contingencia, sino como una herramienta para alcanzar metas personales y abrir la posibilidad a inversiones futuras que generen nuevas fuentes de ingreso.
    .bg-color-2.p-4.mb-3(data-aos="fade")
      p.mb-0 Por tanto, se orienta al aprendiz en la construcción de una cultura financiera basada en el equilibrio entre ingresos y gastos, el diseño de presupuestos eficientes y la comprensión del ahorro como punto de partida para la estabilidad y el crecimiento económico personal.
    
    .bg-full-width.bg-fondo-1.mb-0
        .p-full-width
          .row.align-items-center
            .col-lg-12.col-12.px-lg-4
                .row.justify-content-center.align-items-center        
                  .col-lg-12
                    figure
                      .video
                        iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
                    figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
