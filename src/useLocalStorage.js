export const useLocalStorage = () => {
  const setData = (storeName, inputData) => {
    localStorage.setItem(storeName, JSON.stringify(inputData));
  };

  const getData = (storeName) => {
    return JSON.parse(localStorage.getItem(storeName)) || [];
  };

  return [setData, getData];
};
