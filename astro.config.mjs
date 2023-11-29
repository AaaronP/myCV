import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  experimental: {
    i18n: {
      defaultLocale: "es",
      locales: ["es", "en", "fr"],
      routingStrategy: "prefix-always"
    }
  }

});