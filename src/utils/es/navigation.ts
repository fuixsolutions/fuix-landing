// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Servicios", url: "/es/services" },
  { name: "Blog", url: "/es/blog" },
  { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Empresa",
    links: [
      { name: "Servicios", url: "/es/services" },
      { name: "Blog", url: "/es/blog" },
      { name: "Contacto", url: "/contact" },
    ],
  },
  {
    section: "Servicios",
    links: [
      { name: "Aceleración Digital Empresarial", url: "/es/services/aceleracion-digital-empresarial/" },
      { name: "Automatización y Mejoras en el Desarrollo", url: "/es/services/automatizacion-mejoras-desarrollo" },
      { name: "Desarrollo de Aplicaciones", url: "/es/services/desarrollo-aplicaciones" },
      { name: "Low Code / No Code", url: "/es/services/low-code-no-code" },
      { name: "Productos Mínimos Viables", url: "/es/services/mvp" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/fuixsolutions",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};