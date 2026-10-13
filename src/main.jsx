import { AuthProvider } from "@/contexts/authContext.jsx";
import { CompareQueueProvider } from "@/contexts/compareQueueContext";
import { ExamFreeProvider } from '@/contexts/examFreeContext.jsx';
import { ToastProvider } from "@/contexts/toastContext";
import '@/styles/color.css';
import '@/styles/font.css';
import '@/styles/global.css';
import '@/styles/spacing.css';
import '@/styles/transition.css';
import '@/styles/typography.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastProvider>
        <CompareQueueProvider>
          <ExamFreeProvider>
            <App />
          </ExamFreeProvider>
        </CompareQueueProvider>
      </ToastProvider>
    </AuthProvider>
  </StrictMode>
);