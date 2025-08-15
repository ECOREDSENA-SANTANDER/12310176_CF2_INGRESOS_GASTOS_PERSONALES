<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 El presupuesto como herramienta clave para la gestión financiera personal
      
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.png')})`}")
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 Un #[b presupuesto] es una herramienta de planeación financiera que permite proyectar, de manera ordenada y en términos monetarios, los #[b ingresos y egresos esperados] durante un periodo determinado (mensual, trimestral o anual). Su propósito es #[b optimizar la toma de decisiones económicas], facilitar el cumplimiento de metas financieras y fomentar el uso responsable de los recursos disponibles.
          p.mb-0 La elaboración de un presupuesto no solo busca controlar o reducir gastos, también busca evaluar la eficiencia en la administración del dinero, anticipar necesidades futuras y prevenir el endeudamiento innecesario. Esta práctica proporciona una visión clara del flujo de efectivo y posibilita una gestión financiera más consciente y estratégica.


      .tarjeta.color-acento-contenido.p-3.p-lg-4.mb-0(data-aos='fade-right')
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t1/2.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Cómo hacer un presupuesto mensual fácil y efectivo (paso a paso)
                p.mb-0 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/rsSYRupzaLQ" target="_blank")
                  span Ir al sitio
                  i.fas.fa-link
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Características fundamentales de un buen presupuesto
      
      p.mb-5(data-aos='fade-right') Para que un presupuesto sea realmente efectivo, debe cumplir con los siguientes atributos:  
      .row.justify-content-center.cursor-pointer.mb-5(data-aos='fade-right')
        .col-xl-3.col-lg-3.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt(@mouseover="mostrarIndicador = false")
            .indicador--hover(v-if="mostrarIndicador")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/3.png", alt="")
            .crd_hover_txt--body.text-center
              h4.mb-3 Disciplina
              p.mb-0 La elaboración del presupuesto exige compromiso y constancia. No basta con diseñarlo; es indispensable seguirlo rigurosamente para que cumpla su función como guía de comportamiento financiero.
        .col-xl-3.col-lg-3.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .indicador--hover
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/4.png", alt="")
            .crd_hover_txt--body.text-center
              h4.mb-3 Compromiso
              p.mb-0 Implica un análisis honesto de la situación económica personal, identificando las fuentes de ingreso y las causas del gasto. El compromiso consiste en ceñirse a los límites establecidos y evitar gastos superfluos que desajusten las finanzas.
        .col-xl-3.col-lg-3.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/5.png", alt="")
            .crd_hover_txt--body.text-center
              h4.mb-3 Perseverancia
              p.mb-0 En el camino pueden surgir ingresos inesperados o gastos imprevistos. La clave está en mantener el rumbo trazado, hacer los ajustes pertinentes y no abandonar el plan presupuestal ante cualquier eventualidad.
        .col-xl-3.col-lg-3.col-md-6.col-11.mb-4.mb-xl-0
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/t1/6.png", alt="")
            .crd_hover_txt--body.text-center
              h4.mb-3 Organización
              p.mb-0 Un presupuesto bien estructurado refleja claridad de metas y prioridades. Aunque no se puede controlar cada situación de la vida, sí es posible establecer una hoja de ruta que oriente el uso del dinero hacia objetivos concretos.
  
  
  
  
  
  
  
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
