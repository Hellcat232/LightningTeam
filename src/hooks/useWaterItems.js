import { useState, useCallback } from 'react';

const useWaterItems = () => {
  const [waterItems, setWaterItems] = useState([]);

  const addWaterItem = useCallback((amount, time) => {
    setWaterItems(prevItems => [...prevItems, { amount, time }]);
  }, []);

  return { waterItems, addWaterItem };
};

export default useWaterItems;
