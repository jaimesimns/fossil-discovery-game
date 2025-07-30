import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './globals.css';

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Fossil Discovery App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center p-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-md text-center border-2 border-white/50 shadow-lg">
            <div className="text-6xl mb-4">🦴</div>
            <h1 className="text-xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h1>
            <p className="text-gray-600 mb-4">
              It looks like we hit a snag while excavating fossils. Please refresh the page to continue your paleontological journey!
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              🔄 Restart Excavation
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Render the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);