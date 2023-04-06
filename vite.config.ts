import react from "@vitejs/plugin-react"
const packageJson = require("./package.json")
import { defineConfig } from "vite"
import checker from "vite-plugin-checker"
import git from "git-rev-sync"
import rollupNodePolyfills from "rollup-plugin-node-polyfills"
import path from "path"
import svgr from "vite-plugin-svgr"

let commit = git.short()

const version = packageJson.version
console.log(`Building app v${version} (${commit})`)

export default defineConfig({
	base: "",
	define: {
		VITE_APP_VERSION: JSON.stringify(version),
		VITE_GIT_COMMIT: JSON.stringify(commit),
		VITE_ALCHEMY_API_KEY: JSON.stringify("key"),
	},
	build: {
		assetsDir: "",
	},
	plugins: [
		react({ fastRefresh: false }),
		svgr(),

		checker({
			typescript: true,
		}),
	],
	resolve: {
		alias: [
			...[/* "events", */ /* "path", */ /* "util", */ "url", "http"].map(
				(x) => ({
					find: x,
					replacement: `rollup-plugin-node-polyfills/polyfills/${x}`,
				})
			),
			// { find: 'child_process', replacement: 'rollup-plugin-node-polyfills' },
			{
				find: "https",
				replacement: "rollup-plugin-node-polyfills/polyfills/http",
			},
			{
				find: "querystring",
				replacement: "rollup-plugin-node-polyfills/polyfills/qs",
			},
			{ find: "process", replacement: "process/browser" },
			{ find: "stream", replacement: "stream-browserify" },
			{ find: "zlib", replacement: "browserify-zlib" },
			{ find: "util", replacement: "util/util" },
			{ find: "@", replacement: path.resolve(__dirname, "src") },
		],
	},
})
