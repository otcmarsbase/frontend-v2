import react from '@vitejs/plugin-react'
const packageJson = require('./package.json')
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import git from 'git-rev-sync'
import rollupNodePolyfills from 'rollup-plugin-node-polyfills'

let commit = git.short()

const version = packageJson.version
console.log(`Building app v${version} (${commit})`)

export default defineConfig({
	base: '',
	define: {
		'process.env': JSON.stringify({
			VITE_APP_VERSION: version,
			VITE_GIT_COMMIT: commit,
		}),
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
	resolve: {
		alias: [
			...[/* "events", */ /* "path", */ /* "util", */ 'url', 'http'].map(
				(x) => ({
					find: x,
					replacement: `rollup-plugin-node-polyfills/polyfills/${x}`,
				})
			),
			// { find: 'child_process', replacement: 'rollup-plugin-node-polyfills' },
			{
				find: 'https',
				replacement: 'rollup-plugin-node-polyfills/polyfills/http',
			},
			{
				find: 'querystring',
				replacement: 'rollup-plugin-node-polyfills/polyfills/qs',
			},
			{ find: 'process', replacement: 'process/browser' },
			{ find: 'stream', replacement: 'stream-browserify' },
			{ find: 'zlib', replacement: 'browserify-zlib' },
			{ find: 'util', replacement: 'util/util' },
		],
	},
})
