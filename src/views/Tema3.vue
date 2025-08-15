<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Ejecución del presupuesto personal
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image':`url(${require('@/assets/curso/temas/t3/1.png')})`}")
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 La ejecución efectiva del presupuesto es una fase crítica en la gestión financiera personal, ya que permite transformar la planeación en acción concreta. Seguir disciplinadamente el presupuesto elaborado no solo contribuye a una administración más eficiente del dinero, sino que también garantiza un flujo de efectivo saludable, reduciendo el riesgo de sobreendeudamiento y promoviendo la estabilidad económica a largo plazo.
      
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Ventajas de ejecutar un presupuesto
      p.mb-3(data-aos='fade-right') Implementar un presupuesto con rigor y constancia ofrece múltiples beneficios, tanto a nivel personal como familiar; permite tener un mayor control sobre los ingresos y egresos, facilitando la toma de decisiones financieras informadas. Un presupuesto bien estructurado ayuda a priorizar gastos, identificar fugas de dinero, planificar el ahorro y reducir el endeudamiento innecesario.
      p.mb-5(data-aos='fade-right') Ejecutar un presupuesto mejora la salud financiera y brinda los siguientes beneficios:
      

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6
           LineaTiempoD.color-primario
            .row(numero="1" titulo="Control y trazabilidad de los recursos")
              .col-12
                p.mb-0 Permite identificar con claridad de dónde provienen los ingresos y en qué se están gastando, facilitando la toma de decisiones informadas.

            .row(numero="2" titulo="Reducción del estrés financiero")
              .col-12
                p.mb-0 Al evitar gastos imprevistos y manejar las finanzas de manera ordenada, se reduce la ansiedad relacionada con el dinero.

            .row(numero="3" titulo="Incremento de la capacidad de ahorro")
              .col-12
                p.mb-0 Una correcta ejecución ayuda a destinar parte de los ingresos al ahorro, lo cual es clave para afrontar emergencias o cumplir metas personales.

            .row(numero="4" titulo="Mayor libertad financiera")
              .col-12
                p.mb-0 Controlar los gastos y evitar el endeudamiento innecesario fortalece la autonomía financiera y favorece la inversión inteligente.

            .row(numero="5" titulo="Alcance de objetivos personales")
              .col-12
                p.mb-0 Al asignar recursos de forma estratégica, se logran metas concretas como estudios, vivienda, vacaciones o emprendimientos.
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/2.png', alt='')
  


      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Estado de ganancias y pérdidas
      p.mb-5(data-aos='fade-right') Una herramienta fundamental para evaluar el éxito en la ejecución del presupuesto es el estado de resultados personales, también conocido como estado de ganancias y pérdidas. Este documento financiero permite analizar la relación entre los ingresos generados y los egresos ejecutados en un periodo determinado. Su correcta elaboración incluye:
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/3.png', alt='')
        .col-sm-12.col-lg-6
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Identificación de ingresos netos], que es la sumatoria de todos los ingresos:
            li.d-flex
              p.mb-0.ml-cus-1 • Recurrentes (salarios, rentas, dividendos).
            li.d-flex
              p.mb-0.ml-cus-1 • Extraordinarios (bonificaciones, ventas ocasionales).
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Clasificación de gastos], los cuales se dividen en:
            li.d-flex
              p.mb-0.ml-cus-1 • Gastos fijos (arriendo, servicios, alimentación básica).
            li.d-flex
              p.mb-0.ml-cus-1 • Gastos variables (entretenimiento, compras no esenciales).
            li.d-flex.mb-0
              i.fas.fa-money-custom
              p.mb-0 #[b Determinación de utilidad o déficit:] al restar los egresos de los ingresos se obtiene el resultado neto, que debe ser positivo para considerar que existe capacidad de ahorro o inversión.
      .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 1.] Resultado e interpretación   
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-6
          
          .tabla-a.color-acento-contenido.mb-0
            table(alt="Presenta el significado del resultado obtenido al restar los egresos de los ingresos en un estado financiero personal. Señala que un resultado positivo indica capacidad de ahorro o inversión, mientras que un resultado negativo refleja un déficit que requiere revisar y ajustar las finanzas.")
              thead
                tr
                  th.w-25 Elemento
                  th.w-50 Descripción
              tbody
                tr
                  td.fw-bold Resultado
                  td Utilidad o déficit = ingresos - egresos
                tr
                  td.fw-bold Interpretación
                  td.text-left.py-5
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-money-custom
                        p.mb-0 Resultado positivo: indica ahorro o inversión posible.
                      li.d-flex.mb-0
                        i.fas.fa-money-custom
                        p.mb-0 Resultado negativo: déficit, revisar finanzas.
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/4.png', alt='')


      p.mb-5(data-aos='fade-right') Cuando el estado de resultados personales refleja un saldo negativo, es fundamental tomar medidas correctivas que permitan recuperar el equilibrio financiero. A continuación, se presentan algunas recomendaciones prácticas para enfrentar esta situación de manera responsable y proactiva:
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Tabla 2.] Recomendación resultado negativo
          .tabla-a.color-acento-contenido.mb-0
            table(alt="Presenta una serie de recomendaciones prácticas para enfrentar un resultado negativo en el estado financiero personal. Entre ellas se incluyen reducir gastos, priorizar necesidades básicas, evitar nuevas deudas, buscar ingresos adicionales, reorganizar el presupuesto y realizar un monitoreo periódico de las finanzas.")
             
              thead
                tr
                  th.text-left  Recomendación para resultados negativos
                  th.text-left  Descripción breve
              tbody
                tr
                  td.text-left.fw-bold Reducir gastos
                  td.text-left  Eliminar o disminuir gastos no esenciales.
                tr
                  td.text-left.fw-bold Priorizar necesidades
                  td.text-left  Enfocar los recursos en gastos básicos y urgentes.
                tr
                  td.text-left.fw-bold  Evitar nuevas deudas
                  td.text-left  No asumir créditos adicionales mientras haya déficit.
                tr
                  td.text-left.fw-bold  Aumentar ingresos
                  td.text-left  Buscar ingresos extra: trabajos temporales o ventas.
                tr
                  td.text-left.fw-bold  Elaborar un nuevo presupuesto
                  td.text-left  Reorganizar finanzas con metas realistas y sostenibles.
                tr
                  td.text-left.fw-bold  Monitorear mensualmente
                  td.text-left  Revisar periódicamente ingresos y egresos para ajustar.

      p.mb-5(data-aos='fade-right') Además de las acciones correctivas ante un resultado negativo, es importante adoptar hábitos financieros sostenibles que permitan una ejecución exitosa del presupuesto, independientemente del saldo. Algunas recomendaciones clave son:
      .row.align-items-center.mb-5.titulo-icono-b(data-aos='fade-right')
        .col-sm-12.col-lg-3.titulo-icono-b-img.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/5.png', alt='')
        .col-sm-12.col-lg-9
          .mb-0.titulo-icono-b-text.px-0.py-4
            ol.lista-ol--cuadro.mb-0
              li.d-flex
                .lista-ol--cuadro__vineta
                  span a
                p.mb-0 Monitoreo constante: revisar semanal o mensualmente la ejecución del presupuesto y ajustarlo según cambios en los ingresos o egresos.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span b
                p.mb-0 Disciplina financiera: evitar gastos por impulso y mantener los límites establecidos para cada categoría.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span c
                p.mb-0 Priorizar gastos esenciales: dar prioridad a los compromisos básicos antes de incurrir en consumos discrecionales.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span d
                p.mb-0 Evitar el sobreendeudamiento: utilizar crédito solo en caso de necesidad justificada y con capacidad comprobada de pago.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span e
                p.mb-0 Usar herramientas tecnológicas: emplear aplicaciones u hojas de cálculo para registrar y evaluar el cumplimiento del presupuesto.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span f
                p.mb-0 Celebrar logros financieros: reconocer los avances alcanzados como parte del refuerzo positivo para mantener la motivación.

      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Una utilidad sostenida en el tiempo permite

      .row.mb-5.justify-content-center(data-aos='fade-right')
        .col-sm-12.col-lg-7.bg-color-5.mx-0.px-0
          ul.lista-ul--color.mb-0.p-5.mt-2
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0  #[b Reducir pasivos y deudas:] destinando parte del superávit a la amortización de obligaciones financieras.
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0  #[b Invertir en activos productivos:] como educación, emprendimientos o instrumentos financieros que generen rentabilidad.
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Construir un fondo de emergencia:] idealmente equivalente a 3 - 6 meses de gastos fijos.
        .col-sm-12.col-lg-5.m-0.px-0.bg-color-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/6.png', alt='')
          
      p.mb-5(data-aos='fade-right') La ejecución disciplinada del presupuesto es una acción económica, con una práctica de autocuidado y responsabilidad personal. Al tener el control de los ingresos y gastos, se alcanza una mayor tranquilidad financiera, lo cual influye directamente en la calidad de vida y la toma de decisiones conscientes.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image':`url(${require('@/assets/curso/temas/t3/7.png')})`}")
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3.py-5 Cumplir con el presupuesto es cumplir con uno mismo, porque refleja compromiso, responsabilidad y disciplina con las metas personales y financieras. Es una forma de honrar los planes y construir el futuro que desea cada individuo.











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
