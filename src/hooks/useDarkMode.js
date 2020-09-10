import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {

    const [darkMode, setDarkMode] = useLocalStorage('dark');

    return [darkMode, setDarkMode];
}