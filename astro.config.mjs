// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import * as dotenv from 'dotenv';

import react from '@astrojs/react';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
});