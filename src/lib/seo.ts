export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Corporate Nexus",
    url: "https://www.corporatenexus.com",
    logo: "https://www.corporatenexus.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-555-0199",
      contactType: "customer service"
    },
    sameAs: [
      "https://www.linkedin.com/company/corporatenexus",
      "https://twitter.com/corporatenexus"
    ]
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.corporatenexus.com${item.url}`
    }))
  };
};

export const generateArticleSchema = (post: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    author: [{
      "@type": "Person",
      name: post.author
    }]
  };
};
