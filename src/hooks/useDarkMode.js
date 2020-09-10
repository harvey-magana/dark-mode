import React from "react";
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {

    const [darkMode, setDarkMode] = useLocalStorage('darkmode');

    return [darkMode, setDarkMode];
}