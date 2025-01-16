export interface Country {
    name: string;
    code: string; // Código ISO 3166-1 alpha-2
    dialCode: string; // Código de teléfono
  }
  
  export const countriesWithPhoneCodes: Country[] = [
    { name: "Argentina", code: "AR", dialCode: "+54" },
    { name: "Brazil", code: "BR", dialCode: "+55" },
    { name: "Canada", code: "CA", dialCode: "+1" },
    { name: "China", code: "CN", dialCode: "+86" },
    { name: "France", code: "FR", dialCode: "+33" },
    { name: "Germany", code: "DE", dialCode: "+49" },
    { name: "India", code: "IN", dialCode: "+91" },
    { name: "Italy", code: "IT", dialCode: "+39" },
    { name: "Japan", code: "JP", dialCode: "+81" },
    { name: "Mexico", code: "MX", dialCode: "+52" },
    { name: "Russia", code: "RU", dialCode: "+7" },
    { name: "South Africa", code: "ZA", dialCode: "+27" },
    { name: "Spain", code: "ES", dialCode: "+34" },
    { name: "United Kingdom", code: "GB", dialCode: "+44" },
    { name: "United States", code: "US", dialCode: "+1" },
  ];

  export const businessTypes: string[] = [
    "Consultoría",
    "Salón de belleza",
    "Limpieza",
    "Reparación de electrodomésticos",
    "Asesoramiento legal",
    "Tienda de ropa",
    "Supermercado",
    "Librería",
    "Tienda de electrónicos",
    "Ferretería",
    "Fábrica de muebles",
    "Automotriz",
    "Producción de alimentos",
    "Textil",
    "Fabricación de productos químicos",
    "Desarrollo de software",
    "Desarrollo de aplicaciones móviles",
    "Consultoría tecnológica",
    "Venta de hardware",
    "Ciberseguridad",
    "Tienda en línea",
    "Dropshipping",
    "Marketplace",
    "Venta de cursos en línea",
    "Servicios de suscripción",
    "Comida rápida",
    "Cafeterías",
    "Centros de fitness",
    "Lavado de autos",
    "Tiendas de conveniencia",
  ];
  