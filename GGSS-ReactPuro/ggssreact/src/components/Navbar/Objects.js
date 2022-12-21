
export const urls = {
  urlParentescos : "http://54.243.192.82/api/Parentescos",
  urlEstados : "http://54.243.192.82/api/Estados",
  urlFormasPago : "http://54.243.192.82/api/FormasdePagos"
}

// -----  OBJECTS TABLA PARA EMPLEADOS -----


// TEXT AREA GENERAL PARA TODOS LOS MODALES CON TEXTAREA QUE USEN "OBS" DE NOMBRE
export const textAreaObject = [
  {
    "label": "Observaciones",
    "idInput": "obs",
    "nameInput": "obs"
  }
]


// ----------------------------------------

export const objectEstadosCiviles = [
	{
		"label": "Masculino",
		"placeholder": "Casado",
    "idInput" : "masculino",
    "nameInput" : "masculino",
    "sexo" : "M"
	},
	{
		"label": "Femenino",
		"placeholder": "Casada",
    "idInput" : "femenino",
    "nameInput" : "femenino",
    "sexo" : "F"
	}
]

export const objectEstudios = [
	{
		"label": "Nivel de Estudios",
		"placeholder": "Universitario",
    "idInput": "estudiosNivel",
    "nameInput": "estudiosNivel"
	}
]

export const objectTipoDocumento = [
  {
    "label": "Tipo de Documento",
    "placeholder": "DNI",
    "idInput": "tipoDocumento",
    "nameInput": "tipoDocumento"
  }
]



// parentescos
export const objectParentescos = [
  {
    "label": "Parentesco",
    "placeholder": "Abuelo",
    "idInput": "nombreParentesco",
    "nameInput": "nombreParentesco"
  }
]

export const checkboxParentescos = [
  {
    "label": "Genera asignación",
    "idInput": "generaAsignacion",
    "nameInput": "generaAsignacion"
  }
]

export const checkboxNumParentescos = [
  {
    "label": "Deduce ganancias",
    "labelNum": "Importe",
    "idInput": "deduceGanancias",
    "nameInput": "deduceGanancias",
    "idInputNum": "importeDeduce",
    "nameInputNum": "importeDeduce"
  }
]


// Formas de pago
export const objectFormasDePago = [
  {
    "label": "Forma de Pago",
    "placeholder": "Débito",
    "idInput": "nombreFormadePago",
    "nameInput": "nombreFormadePago"
  }
]

// cargos
export const objectCargos = [
  {
    "label": "Cargos",
    "placeholder": "Administrativo",
    "idInput": "nombreCargo",
    "nameInput": "nombreCargo"
  }
]
export const textAreaCargos = [
  {
    "label": "Observaciones",
    "idInput": "observacion",
    "nameInput": "observacion"
  }
]

// tareas desempeñadas
export const objectTareas = [
  {
    "label": "Tarea",
    "placeholder": "Tarea 1",
    "idInput": "tareaDesempeñada",
    "nameInput": "tareaDesempeñada"
  }
]


// -------------

export const objectEstado = [
  {
    "label": "Estado",
    "placeholder": "Estado1",
    "idInput": "nombreEstado",
    "nameInput": "nombreEstado"
  }
]


export const objectMotivosEgreso = [
  {
    "label": "Motivo de egreso",
    "placeholder": "Renuncia"
  }
]

export const objectCalles = [
  {
    "label": "Calle",
    "placeholder": "Calle falsa 123"
  }
]

export const objectPaises = [
  {
    "label": "País",
    "placeholder": "Argentina"
  },
  {
    "label": "Nacionalidad Masc.",
    "placeholder": "Argentino"
  },
  {
    "label": "Nacionalidad Fem.",
    "placeholder": "Argentina"
  }

]


export const objectModosContratacion = [
  {
    "label": "Modo de contratación",
    "placeholder": "Contratado"
  }
]

export const objectModosLiquidacion = [
  {
    "label": "Modo de liquidación",
    "placeholder": "Diario"
  }
]

export const objectProvincias = [
  {
    "label": "Provincia",
    "placeholder": "Córdoba"
  }
]

export const objectDeptos = [
  {
    "label": "Provincia",
    "placeholder": "Córdoba"
  },
  {
    "label": "Departamento",
    "placeholder": "Santa María"
  }
]

export const objectLocalidades = [
  {
    "label": "Departamento",
    "placeholder": "Santa María"
  },
  {
    "label": "Localidad",
    "placeholder": "Alta Gracia"
  }
]

export const objectBarrios = [
  {
    "label": "Localidad",
    "placeholder": "Alta Gracia"
  },
  {
    "label": "Barrio",
    "placeholder": "Norte"
  }
]

export const objectAlicuotas = [
  {
    "label": "Detalle",
    "placeholder": "Detalle 1234"
  }
]


// ----- OBJECTS TABLA PARA LIQUIDACION -----

export const objectBancos = [
  {
    "label": "Banco",
    "placeholder": "Macro"
  }
]

export const objectEmpresasTelefonia = [
	{
		"label": "Empresa",
		"placeholder": "Claro"
	},
	{
		"label": "Protocolo",
		"placeholder": "pt2cti"
	}
]

export const objectSindicatos = [
  {
		"label": "Sindicato",
		"placeholder": "Luz y Fuerza"
	},
	{
		"label": "Abreviatura",
		"placeholder": "LyFIV"
	}
]

export const objectObrasSociales = [
  {
		"label": "Obra social",
		"placeholder": "ACARA"
	},
	{
		"label": "Abreviatura",
		"placeholder": "ACAA"
	}
]

export const objectAFJP = [
  {
    "label": "AFJP",
    "placeholder": "Caja Previsión Social"
  }
]

export const objectCentrosCosto = [
  {
    "label": "Centro de costo",
    "placeholder": "AAFF Gobierno"
  }
]

export const objectSectoresDptos = [
  {
    "label": "Sector/Dpto",
    "placeholder": "01"
  }
]

export const objectDirecciones = [
  {
    "label": "Dirección",
    "placeholder": "Direccion falsa"
  }
]

export const objectLugaresPago = [
  {
    label: "Lugar de pago",
    placeholder: "INFT S.A"
  }
]

export const objectDocumentacion = [
  {
    label: "Documentación del Empleado",
    placeholder: "Carta de presentación"
  }
]


// ----- ESCALA DE GANANCIAS

export const inputDateDataEscala = [
  { label: "Desde" },
  { label: "Hasta" } 
]

export const inputNumDataEscala = [
  { label: "De más de" },
  { label: "a" },
  { label: "Pagarán $" },
  { label: "Más el %" },
  { label: "Sobre exced." } 
]

// ----- DEDUCCIONES DE GANANCIAS

export const inputDateDataDeducciones = [
  { label: "Desde" },
  { label: "Hasta" } 
]

export const inputNumDataDeducciones = [
  { label: "Ganancia no Imponible" },
  { label: "Deduccion Especial C" },
  { label: "Deduccion Especial D" },
]

// ----- VALORES PERMANENCIA CATEGORÍA

export const inputNumDataValores = [
  { label: "Desde" },
  { label: "Hasta" },
  { label: "Porcentaje" } 
]

// ------- CONVENIOS CATEGORIAS BASICOS ANTIGÜEDAD

export const objectConvenios = [
  {
    label: "Convenio",
    placeholder: "Comercio"
  }
]

export const inputsNumConvenios = [
  { label: "Desde" },
  { label: "a" }
]

export const objectCategorias = [
  {
    label: "Convenio",
    placeholder: "Comercio"
  },
  {
    label: "Categoría",
    placeholder: "Administrativo 'A'"
  }
]

export const inputsNumCategorias = [
  { label: "Importe Básico" },
  { label: "Nivel" },
  { label: "Otro Básico" },
  { label: "Cant. Horas Mes" }

]

export const inputsNumLicencias = [
  { label: "De" },
  { label: "a" },
  { label: "años" }
]


// --------------- DYNAMIC TABLES 

export const tableReduccionHeadings = [
  { heading: "Desde" },
  { heading: "Hasta" },
  { heading: "% Reduce" }
]

export const tableValoresHeadings = [
  { heading: "Categoría" },
  { heading: "Desde" },
  { heading: "Hasta" },
  { heading: "Porcentaje"}
]

export const tableConvenios = [
  { heading: "Desde" },
  { heading: "Hasta" },
  { heading: "Valor" },
  { heading: "Tipo" }
]

// ----- JERARQUIA DE LAS CATEGORIAS
export const tableJerarquia = [
  { heading: "" },
  { heading: "Orden" },
  { heading: "Categoria" }
]

// ----- LICENCIAS POR ANTIGÜEDAD
export const tableLicencias = [
  { heading: "Desde" },
  { heading: "Hasta" },
  { heading: "Días de Licencia" }
]