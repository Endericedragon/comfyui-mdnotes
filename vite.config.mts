import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueDevTools from "vite-plugin-vue-devtools"
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import pkg from "./package.json" with {type: "json"};

const vditorVersTemp = pkg.dependencies["vditor"].match(/\d+\.\d+\.\d/g);
const VDITOR_VERSION = vditorVersTemp ? vditorVersTemp[0] : "0.0.0";

const outputDirectory = "web";

export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        cssInjectedByJsPlugin()
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        },
    },
    build: {
        rollupOptions: {
            input: fileURLToPath(new URL("./src/main.ts", import.meta.url)),
            output: {
                dir: outputDirectory,
                assetFileNames: "assets/[name].[ext]",
                entryFileNames: "main.js",
            }
        },
        outDir: outputDirectory,
        sourcemap: false,
        assetsInlineLimit: 0,
        cssCodeSplit: false,
        emptyOutDir: true,
    },
    define: {
        "__VDITOR_VERSION__": JSON.stringify(VDITOR_VERSION)
    }
})