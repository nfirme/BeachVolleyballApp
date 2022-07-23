import { useState, useCallback } from 'react'

export const FALLBACK_IMG_URL = 'https://img.icons8.com/windows/96/000000/help.png';

export const generatePoints = () => {
  let data = [];

  for (let i = 0; i < 50; i++) {
    data[i] = {
      timestamp: '03:00',
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
    };
  }

  return data;
};

export const useComponentSize = () => {
  const [size, setSize] = useState<any>(null);

  const onLayout = useCallback((event) => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
    console.log('onLayout called');
  }, []);

  return [size, onLayout];
};