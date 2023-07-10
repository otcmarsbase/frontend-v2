import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';
import { StoresContext } from './stores';
import { RootStore } from './stores/rootStore';

async function runApp() {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

  const store = new RootStore({
    profile: { username: '0x00232323232', meta: { token: '#ee434n3j4b3' } },
  });

  root.render(
    <StrictMode>
      <StoresContext.Provider value={store}>
        <App />
      </StoresContext.Provider>
    </StrictMode>
  );
}

runApp();
