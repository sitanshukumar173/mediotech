import { Home } from 'lucide-react';
import styles from './NotFound.module.css';

export function NotFound() {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          {/* 404 Large Text */}
          <div className="relative">
            <h1 className="text-[200px] leading-none text-blue-500/20 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Error Message */}
          <div className="mt-8 space-y-4">
            <h2 className="text-white text-4xl">
              Page Not Found
            </h2>
            <p className="text-blue-300/80 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </div>

          {/* Go Home Button */}
          <button
            onClick={handleGoHome}
            className="mt-12 inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30"
          >
            <Home className="w-5 h-5" />
            Go Back to Home
          </button>

          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full bg-blue-500/30 ${styles['animate-pulse-dot']} ${styles[`dot-${i}`]}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
}