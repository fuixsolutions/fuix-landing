// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/es/" },
  { name: "Servicios", url: "/es/services" },
  // { name: "Blog", url: "/es/blog" },
  { name: "Contacto", url: "/es/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Empresa",
    links: [
      { name: "Services", url: "/es/services" },
      { name: "Contacto", url: "/es/contact" },
    ],
  },
  {
    section: "Servicios",
    links: [
      { name: "Low Code / No Code", url: "/es/services/low-code-no-code" },
      { name: "DevOps", url: "/es/services/devops" },
      { name: "Productos Mínimos Viables", url: "/es/services/mvp" },
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