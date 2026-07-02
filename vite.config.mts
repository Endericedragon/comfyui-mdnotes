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
        // lib: {
        //     entry: "./src/main.ts",
        //     formats: ["es"],
        //     fileName: "main"
        // },
        rollupOptions: {
            external: [
                // "../../../scripts/app.js",
                // "../../../scripts/api.js",
                // "../../../scripts/domWidget.js",
                // "../../../scripts/utils.js",
                // "vue",
                // "vue-i18n",
                // /^primevue\/?.*/,
                // /^@primevue\/themes\/?.*/
            ],
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
        chunkSizeWarningLimit: 1024,
        emptyOutDir: true,
    },
    define: {
        "__VDITOR_VERSION__": JSON.stringify(VDITOR_VERSION)
    }
})