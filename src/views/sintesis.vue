<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p La síntesis que se presenta a continuación permite integrar los principales conceptos abordados en el componente formativo “Diseño de presupuesto y estrategias de ahorro personal”. A través de una estructura lógica y jerárquica, se articulan los elementos clave que permiten comprender el presupuesto y el ahorro como herramientas fundamentales para la planeación financiera personal y familiar.
    .row.justify-content-center
      .col-lg-11.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis organiza el contenido en torno a cuatro ejes centrales: la definición y características del presupuesto, la necesidad de su elaboración, la gestión efectiva de los recursos y la ejecución presupuestal. Se destacan atributos como disciplina, compromiso, perseverancia y organización; así como acciones claves para controlar el gasto, reducir el endeudamiento y fomentar el ahorro. Finalmente, se reconoce que la planeación financiera, a través del presupuesto y el ahorro, es una estrategia esencial para alcanzar estabilidad económica y bienestar personal.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
