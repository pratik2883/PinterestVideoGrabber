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

  let bgColor = '';
  let icon = '';

  if (type === 'success') {
    bgColor = 'bg-[#4CAF50]';
    icon = 'fa-check-circle';
  } else if (type === 'error') {
    bgColor = 'bg-[#F44336]';
    icon = 'fa-exclamation-circle';
  } else if (type === 'loading') {
    bgColor = 'bg-gray-800';
    icon = 'fa-spinner fa-spin';
  }

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg z-50">
      <div className={`${bgColor} text-white px-4 py-3 rounded-lg flex items-center`}>
        <i className={`fas ${icon} mr-2`}></i>
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