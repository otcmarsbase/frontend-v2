import react from '@vitejs/plugin-react'
const packageJson = require('./package.json')
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

export default defineConfig({
    base: '',
    define: {
        VITE_PACKAGE_VERSION: JSON.stringify(packageJson.version),
        VITE_PACKAGE_NAME: JSON.stringify(packageJson.name),
    },
    build: {
        assetsDir: '',
    },
    plugins: [
        react({ fastRefresh: false }),
        checker({
            typescript: true,
        }),
    ],
})
