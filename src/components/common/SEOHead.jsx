import React, { useEffect } from 'react';

export default function SEOHead({
  title = "Habeeb Hussain | Digital Marketing Specialist | Meta Ads & Google Ads",
  description = "Habeeb Hussain is a Digital Marketing Specialist specializing in Performance Marketing, Meta Ads, Google Ads, Lead Generation, SEO and Data-Driven Campaign Optimization.",
}) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:locale', 'en_US', true);
  }, [title, description]);

  return null;
}
