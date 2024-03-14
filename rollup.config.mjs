import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import alias from 'rollup-plugin-alias';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { visualizer } from 'rollup-plugin-visualizer';

const isDev = process.env.NODE_ENV === 'development';

export default {
  input: './src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    exports: 'named',
    sourcemap: isDev,
  },

  plugins: [
    alias({
      entries: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    }),
    image(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      sourceMap: isDev,
    }),
    isDev ? null : terser(),
    isDev
      ? visualizer({
          filename: 'analysis.html',
          open: true,
        })
      : null,
  ],
};
