import { defineConfig } from "vitest/config";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },

  test: {
    globals: true, // describe, it, expect をimportなしで使える
    environment: "jsdom", // ブラウザ環境をシミュレート
    setupFiles: "./src/test/setup.ts", // テスト前に実行するセットアップファイル
  },
});
