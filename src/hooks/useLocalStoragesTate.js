import { useEffect, useState, useCallback } from "react";

export default function useLocalStorageState(key, initialState) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } catch (error) {
      console.error("خطا در خواندن از localStorage:", error);
      return initialState;
    }
  });

  const setStoredValue = useCallback((newValue) => {
    try {
      setValue(newValue);
    } catch (error) {
      console.error("خطا در ذخیره در localStorage:", error);
    }
  }, []);

  useEffect(() => {
    try {
      if (value === null || value === undefined) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error("خطا در ذخیره در localStorage:", error);
    }
  }, [value, key]);

  return [value, setStoredValue];
} 