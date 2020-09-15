import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {

    const [darkMode, setDarkMode] = useLocalStorage('dark', false);

    darkMode ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");

    return [darkMode, setDarkMode];
}