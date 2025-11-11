// Footer Component - Reusable footer for all pages
import { Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer 
      className="mt-auto py-4 sm:py-6 px-4" 
      style={{ 
        borderTop: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg)'
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
        <a
          href="#"
          className="transition-colors"
          style={{ color: 'var(--color-text-secondary)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
        >
          Privacy Policy
        </a>
        <span className="hidden sm:inline">•</span>
        <a
          href="https://github.com/Hardikgoesgit/CAPSTONE_PROJECT"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition-colors"
          style={{ color: 'var(--color-text-secondary)' }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
        >
          <Github size={16} />
          GitHub
        </a>
        <span className="hidden sm:inline">•</span>
        <span>© 2025 Sociant</span>
      </div>
    </footer>
  );
};