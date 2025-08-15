<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 ¿Por qué es necesario elaborar un presupuesto?
      p.mb-5(data-aos='fade-right') En muchas ocasiones, las personas carecen del hábito de planificar sus finanzas, a diferencia de las organizaciones que operan con presupuestos como parte de su gestión estratégica. Esta ausencia de cultura financiera puede derivar en desequilibrios económicos, sobreendeudamiento y estrés financiero.
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2  Elaborar un presupuesto permite

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/1.png', alt='')
        .col-sm-12.col-lg-6
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Controlar el gasto], alineándolo con los ingresos disponibles.
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Tener claridad sobre la capacidad de ahorro] e inversión.
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Reducir la dependencia de créditos o préstamos], evitando pagos innecesarios por intereses.
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Tomar decisiones informadas] y anticipar necesidades financieras futuras.
            li.d-flex.mb-0
              i.fas.fa-money-custom
              p.mb-0 #[b Cumplir con las obligaciones tributarias], como la declaración de renta, al tener un registro preciso del flujo de ingresos y patrimonio.
  
      .py-4.py-md-0.py-lg-2.mb-5(data-aos='fade-right')
        .tarjeta.bg-color-3.px-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-10.col-md-9
              p.p-3.p-lg-2.mb-0 Por tanto, el presupuesto es una herramienta esencial para asumir el control de la vida financiera personal o familiar y avanzar hacia la estabilidad económica.
            .col-lg-2.col-md-3.d-none.d-lg-block
              img.ml-cus-2.wcus-2(src='@/assets/curso/temas/t2/2.png', alt='')
  
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Gestión presupuestal efectiva 
  

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6
           LineaTiempoD.color-primario
            .row.justify-content-center.align-items-center.pcus-1(numero="1" titulo="Generar más ingresos y reducir gastos")
              .col-12
                p.mb-0 Este principio básico permite no solo mantener el equilibrio financiero, también busca disponer de excedentes que pueden destinarse al ahorro o la inversión.

            .row.justify-content-center.align-items-center.pcus-1(numero="2" titulo="Priorizar gastos y registrar movimientos financieros")
              .col-12
                p.mb-0 Un presupuesto facilita la evaluación de si los recursos se están utilizando con eficiencia, permitiendo detectar fugas de dinero y reajustar prioridades.

            .row.justify-content-center.align-items-center.pcus-1(numero="3" titulo="Evitar el endeudamiento innecesario")
              .col-12
                p.mb-0 Al tener un control claro del flujo de efectivo, es posible prevenir el pago de intereses financieros y otros costos asociados a obligaciones adquiridas por falta de planificación.

            .row.justify-content-center.align-items-center.pcus-1(numero="4" titulo="Cumplir con las obligaciones fiscales")
              .col-12
                p.mb-0 En Colombia, llevar un presupuesto permite anticiparse al cumplimiento de la declaración de renta, al conocer el nivel de ingresos o el valor del patrimonio que determina dicha obligación.

            .row.justify-content-center.align-items-center.pcus-1(numero="5" titulo="Consolidar metas financieras")
              .col-12
                p.mb-0 Establecer metas a corto plazo facilita la construcción progresiva de objetivos a mediano y largo plazo, promoviendo un enfoque sostenible del crecimiento económico personal.
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/3.png', alt='')
  

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7.mb-cus
          .bg-color-4.p-4.br-1
            .row.justify-content-center.mb-0.py-0
              .col-sm-12.col-lg-6.d-none.d-lg-block
                img(src='@/assets/curso/temas/t2/4.svg', alt='')
              .col-sm-12.col-lg-6
                  p.mb-4.text-white Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente #[i podcast]:
                  .tarjeta
                      TarjetaAudio.color-secundario.mb-0.p-4(
                      texto="Domina tus finanzas personales"
                      :audio="require('@/assets/actividad/audio/end-game-success.mp3')"
                  )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-sm-12.col-lg-5
          .bg-color-1.p-4.br-1
            p.mb-0.my-3 Asumir la responsabilidad del estado financiero propio es un acto de madurez y visión. Llevar un presupuesto detallado, complementado con herramientas como hojas de balance y estados financieros personales, permite mejorar la toma de decisiones, anticiparse a los retos económicos y proyectar un futuro con mayor estabilidad. 
            p.mb-0 La educación financiera y el uso consciente de los recursos son elementos esenciales para lograr independencia y bienestar económico.

  </template>

<script>
export default {
  name: 'Tema1',
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
