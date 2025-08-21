export default {
  global: {
    Name: 'Diseño de presupuesto y estrategias de ahorro personal',
    Description:
      'En este espacio se aborda la importancia de establecer un presupuesto personal como herramienta para planificar los ingresos y controlar los gastos. Asimismo, promueve la adopción de hábitos de ahorro, fortaleciendo una cultura financiera responsable que permite proyectarse a futuro, evitar el endeudamiento innecesario y abrir posibilidades para la inversión y la estabilidad económica personal.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['circulo'],
        imagen: require('@/assets/curso/portada/circ.png'),
      },
      {
        clases: ['img-fija'],
        imagen: require('@/assets/curso/portada/img-fija.png'),
      },
      {
        clases: ['banner-principal-decorativo-1'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'El presupuesto como herramienta clave para la gestión financiera personal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características fundamentales de un buen presupuesto',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '¿Por qué es necesario elaborar un presupuesto?',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Ejecución del presupuesto personal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estado de ganancias y pérdidas',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '¿Qué es el ahorro?',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: '¿Por qué y para qué ahorrar?',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Planear para ahorrar y crecer',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'El presupuesto como herramienta clave para la gestión financiera personal',
      referencia:
        'Kiyosaki, R. T. (2000). El cuadrante del flujo de dinero: Guía del padre rico hacia la libertad financiera. Aguilar.',
      tipo: 'Libro',
      descarga: '/downloads/El_cuadrante_del_flujo_de_dinero.pdf',
    },
    {
      tema:
        'El presupuesto como herramienta clave para la gestión financiera personal',
      referencia: 'Kiyosaki, R. T. (s.f.). Guía para invertir.',
      tipo: 'Libro - apuntes',
      descarga: '/downloads/Guia_para_invertir.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Ahorro',
      significado:
        'práctica financiera que consiste en reservar una parte del ingreso para cubrir necesidades futuras o alcanzar metas personales.',
    },
    {
      termino: 'Compromiso',
      significado:
        'disposición personal para ceñirse al presupuesto y evitar gastos innecesarios que afecten la estabilidad financiera.',
    },
    {
      termino: 'Consumo',
      significado:
        'uso o gasto de bienes y servicios; puede ser esencial o superfluo, y debe ser controlado para favorecer el ahorro.',
    },
    {
      termino: 'Cultura financiera',
      significado:
        'conjunto de conocimientos, habilidades y actitudes que permiten tomar decisiones acertadas sobre el manejo del dinero.',
    },
    {
      termino: 'Disciplina',
      significado:
        'constancia para seguir el presupuesto establecido, evitando desviaciones que comprometan las metas financieras.',
    },
    {
      termino: 'Egresos',
      significado:
        'salidas de dinero derivadas de gastos fijos, variables o discrecionales en la economía personal o familiar.',
    },
    {
      termino: 'Equilibrio financiero',
      significado:
        'situación en la que los ingresos igualan o superan los egresos, evitando déficits y promoviendo estabilidad.',
    },
    {
      termino: 'Estado de resultados',
      significado:
        'herramienta financiera que muestra la relación entre ingresos y egresos en un periodo determinado.',
    },
    {
      termino: 'Gasto discrecional',
      significado:
        'tipo de egreso no esencial que puede ser eliminado o reducido sin afectar la calidad de vida básica.',
    },
    {
      termino: 'Ingresos',
      significado:
        'entradas de dinero derivadas de diversas fuentes como salarios, honorarios, rentas o actividades económicas.',
    },
    {
      termino: 'Inversión',
      significado:
        'uso del dinero ahorrado para generar rentabilidad futura, a través de activos financieros o emprendimientos.',
    },
    {
      termino: 'Metas financieras',
      significado:
        'objetivos económicos definidos a corto, mediano o largo plazo que orientan el uso responsable del dinero.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'herramienta de planificación que organiza los ingresos y egresos durante un periodo para alcanzar objetivos financieros.',
    },
    {
      termino: 'Sobreendeudamiento',
      significado:
        'situación en la que las deudas superan la capacidad de pago, generando inestabilidad económica.',
    },
    {
      termino: 'Trazabilidad financiera',
      significado:
        'capacidad para hacer seguimiento detallado al origen y destino de los recursos económicos personales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Burbano, J. (2005) Presupuestos: enfoque moderno de planeación y control de recursos. Mc Graw Hill Bogotá. Tercera Edición.',
      link: '',
    },
    {
      referencia:
        'Banco de la República de Colombia. (2022). Educación económica y financiera: Guías para el aprendizaje y la toma de decisiones financieras.',
      link: '',
    },
    {
      referencia:
        'Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (CONDUSEF). (2021). Presupuesto familiar: Guía práctica para organizar tus finanzas.',
      link: '',
    },
    {
      referencia:
        'Organización para la Cooperación y el Desarrollo Económicos (OCDE). (2020). Recomendaciones sobre competencias financieras para jóvenes y adultos.',
      link: '',
    },
    {
      referencia:
        'Superintendencia Financiera de Colombia. (2023). ABC de la educación financiera.',
      link: '',
    },
    {
      referencia:
        'Fundación BBVA. (2019). La importancia del ahorro en la estabilidad económica de los hogares.',
      link: '',
    },
    {
      referencia:
        'Sepúlveda, Ponce. (2006). Guía práctica para la elaboración de presupuestos. Universidad Austral de Chile. Facultad de Ciencias de Ingeniería. Escuela de construcción civil.',
      link: '',
    },
    {
      referencia:
        'Kiyosaki, R., Letcher, S. (2012). Padre rico, padre pobre. Nueva edición actualizada. Bogotá, Colombia: Santillana Ediciones.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Daniela Aurelia Rueda Guanaro',
          cargo: 'Experta temática',
          centro:
            'Centro Agropecuario y de Comercio y Servicios - Regional Risaralda',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Terán Carvajal',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Evaluadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
