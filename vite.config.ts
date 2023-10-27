import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@components', replacement: path.resolve(__dirname, 'src', 'components') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src', 'assets') },
      { find: '@constants', replacement: path.resolve(__dirname, 'src', 'constants') },
      { find: '@services', replacement: path.resolve(__dirname, 'src', 'services') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src', 'styles') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src', 'utils') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src', 'hooks') },
      { find: '@store', replacement: path.resolve(__dirname, 'src', 'store') },
      { find: '@reducers', replacement: path.resolve(__dirname, 'src', 'store', 'reducers') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src', 'pages') },
      { find: '@appTypes', replacement: path.resolve(__dirname, 'src', 'types') },
      { find: '@config', replacement: path.resolve(__dirname, 'config') },
    ],
  },
});
