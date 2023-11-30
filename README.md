<p align="center"><img src="https://desk.otcmarsbase.io/static/media/logo.35a2adb7b56d3431201a.png" width="256" /></p>

<h1 align="center">Marsbase Desk Web</h1>

<div align="center">
  <a href='https://github.com/dydxprotocol/v4-web/blob/main/LICENSE'>
    <img src='https://img.shields.io/badge/License-AGPL_v3-blue.svg' alt='License' />
  </a>
</div>

## Prerequisites

- [Node.js](https://nodejs.org/en/download/current) version 18 and `yarn` installed on your system

## Part 1: Setting up your local environment

### 1. Clone the repo

Clone the repository and navigate to its directory:

```bash
git clone https://github.com/otcmarsbase/frontend-v2
cd frontend-v2
```

### 2. Install yarn and dependencies

Install yarn and the project dependencies:

```bash
npm i -g yarn
yarn
```

## Part 2: Running the project locally

Run the following command in the project directory to start the development server:

```bash
yarn start
```

The development server will be running at `http://localhost:3000` (or the port number displayed in the terminal) and will automatically open your default browser with the app.

To view UI component stories, run the following command:

```bash
yarn storybook
```

This will automatically open your default browser at `http://localhost:6006`.

## Part 3: Set Enviornment variables

Set environment variables via `.env`.

| Variable name                       | Requirement | Description                                                                                                                                 | Default Value                       |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `REACT_APP_BACKEND_API_GATEWAY_URL` | Required    | The URL of the [RPC](https://www.w3.org/History/1992/nfs_dxcern_mirror/rpc/doc/Introduction/WhatIs.html) backend endpoint.                  | https://dev-api.otcmarsbase.io/rpc/ |
| `GENERATE_SOURCEMAP`                | Optional    | When set to `false`, source maps are not generated for a production build. This solves out of memory (OOM) issues on some smaller machines. | true                                |
| `REACT_APP_DEBUG_MODE`              | Optional    | When set to `true`, the application runs in debug mode.                                                                                     | false                               |

# Linting, tests and typechecking
### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Deployments
