import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/funcs/index.ts', 'test/util/index.ts'],
  format: ['cjs', 'esm'],
  // splitting: true,
  // sourcemap: true,
  // clean: true,
})
