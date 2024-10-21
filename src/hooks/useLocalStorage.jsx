import { useState, useEffect } from "react";
function useLocalStorage(key, incomingValue) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem('key');
    return savedValue ? JSON.parse(savedValue) : incomingValue;
  });

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
