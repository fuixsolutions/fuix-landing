import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Fuix",
  tagline: "Fullstack Development, User Interface, User Experience and more",
  description: "Somos un equipo de desarrolladores experimentados que se apasionan por crear software de alta calidad que satisfaga las necesidades de nuestros clientes.",
  description_short: "Fuix es un emprendimiento de desarrollo de software, enfocado en la creación de soluciones digitales.",
  url: "https://fuix.cl",
  author: "Sabino Velásquez",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Hardware Tools & Construction Services`,
  description: "Equip your projects with ScrewFast's top-quality hardware tools and expert construction services. Trusted by industry leaders, ScrewFast offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge tools. Start exploring now!",
  image: ogImageSrc,
  // default: Fuix Digital Solutions
    // template: '%s — Fuix'
    // description: "\U0001F680 Fuix (Fullstack · UI · UX) is a software development company that specializes in creating custom software solutions. We are a team of experienced developers who are passionate about creating high-quality software that meets the needs of our clients.
};
