import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorMessage from '../components/ErrorMessage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode> // Strict Mode does extra checks during development
//   <App /> // App is App.jsx - where all components are rendered
//   </React.StrictMode>,
//  ) // this syntax can vary between builder tools and apps but achieves the same purposeWill mutatue and update revlenat dom. In this case,, remove vite stuff.
//StrictMode-designed to help developers find common bugs in their components early in development.