// import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
// import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { visualizer } from 'rollup-plugin-visualizer';

const isDev = process.env.NODE_ENV === 'development';

export default {
  input: './src/index.tsx',
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    exports: 'named',
    sourcemap: isDev,
  },

  plugins: [
    peerDepsExternal(),
    // image(),
    svgr(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      sourceMap: isDev,
    }),
    // alias({
    //   entries: [{ find: '@', replacement: './src' }],
    // }),
    isDev ? null : terser(),
    isDev
      ? visualizer({
          filename: 'analysis.html',
          open: true,
        })
      : null,
  ],
};
