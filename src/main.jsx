import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import '@/styles/font.css';
import '@/styles/color.css';
import '@/styles/transition.css';
import '@/styles/spacing.css';
import '@/styles/typography.css';
import '@/styles/global.css';
import { CompareQueueProvider } from "@/contexts/compareQueueContext";
import { ToastProvider } from "@/contexts/toastContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
      <CompareQueueProvider>
          <App />
      </CompareQueueProvider>
    </ToastProvider>
  </StrictMode>
);