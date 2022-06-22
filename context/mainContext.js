import { useState, useEffect, createContext } from 'react';
import { set } from 'react-hook-form';

export const MainContext = createContext({
  lang: null,
  getLanguage: () => {},
  changeLang: () => {},
});

const { Provider } = MainContext;

export const MainProvider = ({ children }) => {
  const [lang, setLang] = useState(true);
  const [data, setData] = useState(null);

  const getLanguage = () => {
    if (window.navigator.language === 'es-ES') setLang(false);
  };

  const getData = (result) => {
    setData(result);
  };

  useEffect(() => {
    getLanguage();
  }, []);

  const changeLang = () => {
    setLang(!lang);
  };

  return (
    <Provider value={{ lang, changeLang, getData, data }}>{children}</Provider>
  );
};
