// vite.config.ts
import { defineConfig } from "file:///C:/Users/jhonn/Documents/StaloPay/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/jhonn/Documents/StaloPay/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///C:/Users/jhonn/Documents/StaloPay/node_modules/vite-plugin-svgr/dist/index.mjs";
import * as path from "path";
var __vite_injected_original_dirname = "C:\\Users\\jhonn\\Documents\\StaloPay";
var vite_config_default = defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 80
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./.test/setup.ts"],
    include: ["**/(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache"]
  },
  root: "./",
  build: {
    outDir: "./dist"
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "@components": path.resolve(__vite_injected_original_dirname, "./src/components"),
      "@context": path.resolve(__vite_injected_original_dirname, "./src/context"),
      "@models": path.resolve(__vite_injected_original_dirname, "./src/models"),
      "@pages": path.resolve(__vite_injected_original_dirname, "./src/pages"),
      "@styles": path.resolve(__vite_injected_original_dirname, "./src/styles"),
      "@assets": path.resolve(__vite_injected_original_dirname, "./src/assets"),
      "@routes": path.resolve(__vite_injected_original_dirname, "./src/routes"),
      "@utils": path.resolve(__vite_injected_original_dirname, "./src/utils"),
      "@mock": path.resolve(__vite_injected_original_dirname, "./src/mock"),
      "@config": path.resolve(__vite_injected_original_dirname, "./src/config")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqaG9ublxcXFxEb2N1bWVudHNcXFxcU3RhbG9QYXlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGpob25uXFxcXERvY3VtZW50c1xcXFxTdGFsb1BheVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvamhvbm4vRG9jdW1lbnRzL1N0YWxvUGF5L3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ2aXRlc3RcIiAvPlxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHN2Z3IgZnJvbSAndml0ZS1wbHVnaW4tc3Zncic7XHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtyZWFjdCgpLCBzdmdyKCldLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogODBcclxuICB9LFxyXG4gIHRlc3Q6IHtcclxuICAgIGdsb2JhbHM6IHRydWUsXHJcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcclxuICAgIHNldHVwRmlsZXM6IFsnLi8udGVzdC9zZXR1cC50cyddLFxyXG4gICAgaW5jbHVkZTogWycqKi8oKi4pP3t0ZXN0LHNwZWN9LntqcyxtanMsY2pzLHRzLG10cyxjdHMsanN4LHRzeH0nXSxcclxuICAgIGV4Y2x1ZGU6IFsnbm9kZV9tb2R1bGVzJywgJ2Rpc3QnLCAnLmlkZWEnLCAnLmdpdCcsICcuY2FjaGUnXSxcclxuICB9LFxyXG4gIHJvb3Q6ICcuLycsXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogJy4vZGlzdCcsXHJcbiAgfSxcclxuICByZXNvbHZlOntcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxyXG4gICAgICAnQGNvbXBvbmVudHMnIDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbXBvbmVudHMnKSxcclxuICAgICAgJ0Bjb250ZXh0JyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb250ZXh0JyksXHJcbiAgICAgICdAbW9kZWxzJyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9tb2RlbHMnKSxcclxuICAgICAgJ0BwYWdlcycgOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvcGFnZXMnKSxcclxuICAgICAgJ0BzdHlsZXMnIDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3N0eWxlcycpLFxyXG4gICAgICAnQGFzc2V0cycgOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvYXNzZXRzJyksXHJcbiAgICAgICdAcm91dGVzJyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9yb3V0ZXMnKSxcclxuICAgICAgJ0B1dGlscycgOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvdXRpbHMnKSxcclxuICAgICAgJ0Btb2NrJyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9tb2NrJyksXHJcbiAgICAgICdAY29uZmlnJyA6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9jb25maWcnKVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFlBQVksVUFBVTtBQUp0QixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUFBLEVBQ3pCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZLENBQUMsa0JBQWtCO0FBQUEsSUFDL0IsU0FBUyxDQUFDLHFEQUFxRDtBQUFBLElBQy9ELFNBQVMsQ0FBQyxnQkFBZ0IsUUFBUSxTQUFTLFFBQVEsUUFBUTtBQUFBLEVBQzdEO0FBQUEsRUFDQSxNQUFNO0FBQUEsRUFDTixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsRUFDVjtBQUFBLEVBQ0EsU0FBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsS0FBVyxhQUFRLGtDQUFXLE9BQU87QUFBQSxNQUNyQyxlQUFxQixhQUFRLGtDQUFXLGtCQUFrQjtBQUFBLE1BQzFELFlBQWtCLGFBQVEsa0NBQVcsZUFBZTtBQUFBLE1BQ3BELFdBQWlCLGFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2xELFVBQWdCLGFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQ2hELFdBQWlCLGFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2xELFdBQWlCLGFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2xELFdBQWlCLGFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2xELFVBQWdCLGFBQVEsa0NBQVcsYUFBYTtBQUFBLE1BQ2hELFNBQWUsYUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDOUMsV0FBaUIsYUFBUSxrQ0FBVyxjQUFjO0FBQUEsSUFDcEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
