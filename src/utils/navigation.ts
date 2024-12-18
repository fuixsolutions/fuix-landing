// An array of links for the navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "/contact" },
];
// An array of links for the footer
const footerLinks = [
  {
    section: "Company",
    links: [
      { name: "Services", url: "/services" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    section: "Services",
    links: [
      { name: "Low Code / No Code", url: "/services/low-code-no-code" },
      { name: "DevOps", url: "/services/devops" },
      { name: "Minimum Viable Products", url: "/services/mvp" },
      { name: "Blog", url: "/blog" },
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
