export interface VideoData {
  id: string;
  title: string;
  author: string;
  preview: string;
  hdUrl: string;
  sdUrl: string;
}

export interface StatusMessageProps {
  type: 'success' | 'error' | 'loading';
  message: string;
  visible: boolean;
  onClose?: () => void;
}

export type FaqItem = {
  question: string;
  answer: string;
};
