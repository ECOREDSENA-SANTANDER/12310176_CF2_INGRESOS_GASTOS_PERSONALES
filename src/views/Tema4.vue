<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 ¿Qué es el ahorro?
      
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
        .bloque-texto-g__img.d-none.d-lg-block(
          :style="{'background-image':`url(${require('@/assets/curso/temas/t4/1.png')})`}")
        .bloque-texto-g__texto.p-4.d-flex.flex-column
          p.mb-3 Ahorrar es una práctica responsable que implica pensar en el futuro y prepararse para imprevistos. Es una forma de autocuidado financiero, ya que permite evitar el consumo excesivo y crear un respaldo económico. 
          p.mb-3 En términos simples, #[b el ahorro es la parte del ingreso que no se gasta], sino que se reserva para cubrir necesidades futuras o alcanzar metas.
          p.mb-0 Ahorrar no es lo que sobra, sino lo que se #[b planifica guardar] antes de gastar. Esta costumbre puede convertirse en un verdadero salvavidas financiero ante situaciones inesperadas.

      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Fomentar la cultura del ahorro


      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          p.mb-4 Desarrollar hábitos financieros saludables permite tener mayor control sobre los recursos. A continuación, algunas recomendaciones clave:
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Evitar compras innecesarias:] priorizar lo esencial y evitar gastos por impulso.
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Comparar precios antes de comprar:] esto ayuda a elegir productos más económicos sin sacrificar calidad.
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Considerar productos de segunda mano:] una alternativa útil y económica en muchos casos.
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Comprar al por mayor o en almacenes mayoristas:] puede representar un ahorro significativo.
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Reducir gastos no prioritarios:] en especial aquellos que afectan negativamente el cumplimiento del presupuesto.
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Buscar planes de telefonía económica:] adecuados a sus necesidades reales de consumo.
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Ahorrar en servicios públicos:] desconectar dispositivos que no estén en uso y usar la lavadora solo con carga completa.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/2.png', alt='')

      Separador
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/3.png', alt='')
        .col-sm-12.col-lg-6
          .row.align-items-center.mb-5.titulo-icono-c
            .col
              h3.mb-0.titulo-icono-c-text.px-0.py-2 Ejercicio práctico
          h3.mb-4 Cultura del ahorro: una estrategia para el bienestar financiero
          h4.mb-4 Objetivo general del ejercicio:
          p.mb-0 Promover en los aprendices la comprensión y aplicación del concepto de ahorro como una práctica fundamental para el desarrollo de una vida financiera equilibrada, mediante el análisis de situaciones cotidianas, la planificación de gastos y la identificación de oportunidades de mejora en sus hábitos de consumo. 
      
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-12
          AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
            .row.justify-content-around(titulo="1)	Exploración inicial: pregunta orientadora")
              .col-12
                p.mb-3 ¿Qué acciones permitirían mantener la estabilidad económica ante una eventual disminución o pérdida de ingresos?
                p.mb-0 #[b Actividad:] se propone socializar respuestas posibles y reflexionar sobre los comportamientos financieros más comunes entre los aprendices.
      
            .row.justify-content-around(titulo="2)	Actividad práctica por cada aprendiz: diseño de presupuesto personal")
              .col-12
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-money-custom
                    p.mb-0 Identificar los ingresos mensuales (fijos o variables).
                  li.d-flex
                    i.fas.fa-money-custom
                    p.mb-0 Clasificar los gastos mensuales en: esenciales, prescindibles y discrecionales.
                  li.d-flex
                    i.fas.fa-money-custom
                    p.mb-0 Estimar el porcentaje de ahorro posible con base en la diferencia entre ingresos y gastos.
                  li.d-flex
                    i.fas.fa-money-custom
                    p.mb-0 Proponer al menos dos acciones concretas para reducir gastos innecesarios.
      
            .row.justify-content-around(titulo="3)	Ejercicio reflexivo")
              .col-12
                p.mb-0 Redactar de forma individual tres razones personales por las cuales sería conveniente implementar un plan de ahorro, y cuáles serían los principales retos para superar en ese proceso.
      
      
      .row.align-items-center.mb-5.titulo-icono-c(data-aos='fade-right')
        .col
          h3.mb-0.titulo-icono-c-text.px-0.py-2 Reflexión del ejercicio
      p.mb-5(data-aos='fade-right') “El ahorro no es una renuncia al presente, sino una inversión consciente en el bienestar del futuro.”
      .py-4.py-md-0.py-lg-2.mb-5(data-aos='fade-right')
        .tarjeta.bg-color-3.px-4.px-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-10.col-md-9
              p.p-3.p-lg-2.mb-0 #[b Nota:] invitación a los aprendices a compartir en plenaria cómo este ejercicio práctico les ayudó a replantear su visión sobre el manejo del dinero y qué hábitos desean modificar a partir de lo aprendido.
            .col-lg-2.col-md-3.d-none.d-lg-block
              img.ml-cus-2.wcus-2(src='@/assets/curso/temas/t2/2.png', alt='')
      
      
      Separador(data-aos='fade-right')
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.1 ¿Por qué y para qué ahorrar?
      p.mb-5(data-aos='fade-right') Ahorrar es una decisión estratégica que permite enfrentar contingencias, alcanzar metas y reducir la dependencia del crédito. Es un paso clave hacia la estabilidad y el crecimiento financiero.
      .tarjeta--container.row.mb-5(data-aos='fade-right')
        .col-md.tarjeta.bg-fondo-2.p-5
          .row.align-items-end.mb-4
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/6.svg', alt='')
            .col-sm-12.col-lg-7
              .titulo-color-1
                h3.mb-0 Tipos de ahorro
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Ahorro privado:] lo realizan las familias y empresas privadas. En las familias, proviene de los ingresos menos los gastos; en las empresas, de las utilidades menos los impuestos.
            li.d-flex.mb-0
              i.fas.fa-money-custom
              p.mb-0 #[b Ahorro público:] lo genera el Estado mediante impuestos, excedentes de empresas públicas y otras fuentes, con fines de inversión y gasto público. 
        .col-md.tarjeta.bg-fondo-3.p-5
          .row.align-items-end.mb-4
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/7.svg', alt='')
            .col-sm-12.col-lg-7
              .titulo-color-1
                h3.mb-0  Formas de ahorrar
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Depósitos programados o cuentas bancarias:] permiten reservar dinero con seguridad y generar rendimientos.
            li.d-flex
              i.fas.fa-money-custom
              p.mb-0 #[b Economía del gasto diario:] guardar lo que se deja de gastar conscientemente en pequeños consumos.
            li.d-flex.mb-0
              i.fas.fa-money-custom
              p.mb-0 #[b Inversión del ahorro:] convertir el dinero ahorrado en capital productivo, como bonos, acciones o negocios.


      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 ¿Para qué ahorrar?

      .bg-full-width.bg-fondo-4.mb-5(data-aos='fade-right')
        .p-full-width
          .row.justify-content-center.align-items-center
            .tarjeta.tarjeta--blanca.p-5
              SlyderA(tipo="b")
                .row.justify-content-center
                  .col-sm-12.col-lg-8
                    h4 Ahorrar permite estar preparado para situaciones como:
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-money-custom
                        p.mb-0 Problemas de salud inesperados.
                      li.d-flex
                        i.fas.fa-money-custom
                        p.mb-0 Pérdida del empleo.
                      li.d-flex
                        i.fas.fa-money-custom
                        p.mb-0 Eventos imprevistos que requieren solución inmediata.
                      li.d-flex
                        i.fas.fa-money-custom
                        p.mb-0 Cumplimiento de metas personales (viajes, estudios, vivienda).
                      li.d-flex
                        i.fas.fa-money-custom
                        p.mb-0 Disminuir la necesidad de endeudamiento.
                      li.d-flex
                        i.fas.fa-money-custom
                        p.mb-0 Pagar de contado y evitar intereses.
                  .col-sm-12.col-lg-4.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t4/8.png', alt='')

                .row.justify-content-center
                  .col-sm-12.col-lg-8
                    h4 Razones adicionales para ahorrar
                    ul.lista-ul--color.mb-0
                      li.d-flex
                        i.fas.fa-money-custom
                        p.mb-0 #[b Construcción de patrimonio:] adquirir activos (casa, vehículo, negocios) con menor dependencia del crédito.
                      li.d-flex
                        i.fas.fa-money-custom
                        p.mb-0 #[b Colchón financiero:] fondo de emergencia que protege ante crisis.
                      li.d-flex
                        i.fas.fa-money-custom
                        p.mb-0 #[b Satisfacción personal:] permite disfrutar sin afectar el presupuesto (lujos, vacaciones, etc.).
                      li.d-flex
                        i.fas.fa-money-custom
                        p.mb-0 #[b Contar con seguridad:] seguros o pólizas (salud, vida, hogar, vehículo), reduce riesgos y protege el capital.
                      li.d-flex
                        i.fas.fa-money-custom
                        p.mb-0 #[b Inversiones inteligentes:] transformar el ahorro en activos productivos fortalece la estabilidad a largo plazo.

                  
                  .col-sm-12.col-lg-4.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t4/9.png', alt='')

                




      p.mb-5(data-aos='fade-right') Cultivar la cultura del ahorro conlleva más beneficios que sacrificios y genera bienestar económico, emocional y familiar.
      Separador.mb-0.pb-0(data-aos='fade-right')
      .bg-full-width.bg-fondo-5.mb-5(data-aos='fade-right')
        .p-full-width
          
          #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
            h2 4.2 Planear para ahorrar y crecer
          p.mb-5 El presupuesto personal es una herramienta clave para organizar el dinero, evitar gastos innecesarios y alcanzar metas financieras. Aprender a presupuestar permite tomar decisiones conscientes, controlar el consumo y generar hábitos de ahorro que fortalecen el bienestar económico y emocional.
          .row.justify-content-center.align-items-center.mb-5
            .col-sm-12.col-lg-6
              ImagenInfografica.color-acento-botones.mb-5
                template(v-slot:imagen)
                    img(src='@/assets/curso/temas/t4/11.svg', alt='')
                .tarjeta.color-acento-contenido.p-3(x="50%" y="20%" numero="+")
                  p.mb-0 Presupuesto: como herramienta para organizar ingresos, gastos y ahorro durante un periodo determinado.
                .tarjeta.color-acento-contenido.p-3(x="10%" y="50%" numero="+")
                  p.mb-0 Viajes, compras a crédito e inversiones.

                .tarjeta.color-acento-contenido.p-3(x="90%" y="50%" numero="+")
                  p.mb-0 Educación, tecnología (celular, portátil, #[i tablet], etc.).

                .tarjeta.color-acento-contenido.p-3(x="85%" y="94%" numero="+")
                  p.mb-0 Ahorro, presupuesto, obligaciones financieras.

                .tarjeta.color-acento-contenido.p-3(x="15%" y="94%" numero="+")
                  p.mb-0 Alimentación, servicios, manutención, gastos fijos, etc.
          .row.justify-content-center.mb-5
            .col-sm-12.col-lg-1.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/12.svg', alt='')
            .col-sm-12.col-lg-8
                p.mb-0 Es fundamental reconocer que la planeación financiera personal no es un acto esporádico, sino una práctica constante que demanda conciencia, disciplina y compromiso. A lo largo de este espacio, el aprendiz ha desarrollado habilidades clave para identificar y clasificar ingresos y egresos, diseñar presupuestos realistas y adoptar estrategias sostenibles de ahorro; estas acciones no solo fortalecen la cultura financiera individual, sino que permiten tomar decisiones informadas, prevenir el endeudamiento innecesario y proyectar un futuro económico más estable.
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t4/13.png', alt='')    


      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos='fade-right')
              .bloque-texto-g__img.d-none.d-lg-block(
                :style="{'background-image':`url(${require('@/assets/curso/temas/t4/14.png')})`}")
              .bloque-texto-g__texto.p-4.d-flex.flex-column
                p.mb-0 Dentro de las recomendaciones en el componente encontrará en material complementario, el libro “El cuadrante del flujo de dinero” de Robert T. Kiyosaki, el cual ofrece una perspectiva transformadora sobre cómo las personas generan ingresos y cómo su mentalidad financiera determina su posición en el llamado “cuadrante del flujo de dinero”. Kiyosaki resalta que el verdadero camino hacia la libertad financiera se encuentra en el lado derecho del cuadrante (dueños de negocio e inversionistas), donde el dinero trabaja para la persona y no al revés. A través de enseñanzas prácticas y vivencias personales, el autor invita a cuestionar el modelo tradicional de seguridad laboral, promoviendo en cambio, la adquisición de inteligencia financiera, la creación de sistemas de ingresos pasivos y el desarrollo de una mentalidad emprendedora para lograr independencia económica.

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-11
            p.mb-0 En consecuencia, durante todo este material se ha cumplido con evidenciar la capacidad para manejar adecuadamente los recursos personales y planificar financieramente de forma estratégica. Asímismo, se invita al aprendiz a asumir la responsabilidad de su bienestar financiero como un ejercicio de autonomía, visualizar el ahorro como una herramienta de crecimiento personal, y aplicar lo aprendido para construir una vida económica más equilibrada, resiliente y orientada al logro de metas personales.
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/15.svg', alt='')
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
