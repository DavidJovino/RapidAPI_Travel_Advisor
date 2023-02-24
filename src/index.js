import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
//id is given as app

const root = createRoot(rootElement);
root.render(<App />);
