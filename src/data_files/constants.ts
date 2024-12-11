import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Fuix",
  tagline: "Fullstack Development, User Interface, User Experience and more",
  description: "Somos un emprendimiento experimentados que se apasionan por crear software de alta calidad que satisfaga las necesidades de nuestros clientes.",
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
    inLanguage: "es-ES",
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
  locale: "es_ES",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Soluciones y Productos Digitales`,
  description: "Somos un emprendimiento de desarrolladores experimentados que se apasionan por crear software de alta calidad que satisfaga las necesidades de nuestros clientes.",
  image: ogImageSrc,
};
