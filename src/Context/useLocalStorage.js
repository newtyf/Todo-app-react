import {useState, useEffect} from "react"

function useLocalStorage(keyName) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(keyName);
        let parsedItem = [];

        if (!localStorageItem) {
          localStorage.setItem(keyName, JSON.stringify([{text: "a", completed: false}]));
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(true)
      }
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveItem = (newItem) => {
    const stringNewItem = JSON.stringify(newItem);
    localStorage.setItem(keyName, stringNewItem);
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export {useLocalStorage};