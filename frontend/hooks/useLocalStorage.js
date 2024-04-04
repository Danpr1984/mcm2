import { useEffect, useState } from "react";

function useLocationStorage(key) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") {
      return [];
    }
    return JSON.parse(localStorage.getItem(key) || "[]");
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export default useLocationStorage;
