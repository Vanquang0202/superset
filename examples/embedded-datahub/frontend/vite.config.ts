import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  resolve: {
    alias: {
      '@superset-ui/embedded-sdk': resolve(
        process.cwd(),
        '../../../superset-embedded-sdk/src/index.ts',
      ),
    },
  },
});
