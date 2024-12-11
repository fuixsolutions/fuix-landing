// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Servicios", url: "/services" },
  // { name: "Blog", url: "/blog" },
  { name: "Contacto", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Empresa",
    links: [
      // { name: "Preguntas frecuentes", url: "/#faqs" },
      { name: "Services", url: "/services" },
      { name: "Contacto", url: "/contact" },
    ],
  },
  {
    section: "Servicios",
    links: [
      { name: "Low Code / No Code", url: "/services/low-code-no-code" },
      { name: "DevOps", url: "/services/devops" },
      { name: "Productos Mínimos Viables", url: "/services/mvp" },
      // { name: "Blog", url: "/blog" },
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