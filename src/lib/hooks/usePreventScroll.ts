import { useEffect } from 'react';

const usePreventScroll = (isOpen: boolean): void => {
  useEffect(() => {
    const disableScroll = (): void => {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    };

    const enableScroll = (): void => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };

    if (isOpen) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => {
      enableScroll(); // Cleanup on unmount or when isOpen changes
    };
  }, [isOpen]);
};

export default usePreventScroll;
