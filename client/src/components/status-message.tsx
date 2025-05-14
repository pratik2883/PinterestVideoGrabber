import { useEffect } from "react";
import { StatusMessageProps } from "@/types";

export default function StatusMessage({ type, message, visible, onClose }: StatusMessageProps) {
  useEffect(() => {
    // Add escape key handler to close the message
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!visible) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <i className="fas fa-check-circle mr-2"></i>;
      case 'error':
        return <i className="fas fa-exclamation-circle mr-2"></i>;
      case 'loading':
        return <i className="fas fa-spinner fa-spin mr-2"></i>;
      default:
        return null;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-[#4CAF50]';
      case 'error':
        return 'bg-[#F44336]';
      case 'loading':
        return 'bg-gray-800';
      default:
        return 'bg-gray-800';
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg z-50">
      <div className={`${getBackgroundColor()} text-white px-4 py-3 rounded-lg flex items-center`}>
        {getIcon()}
        <span>{message}</span>
        {onClose && type !== 'loading' && (
          <button 
            onClick={onClose}
            className="ml-3 text-white opacity-70 hover:opacity-100"
          >
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
}
