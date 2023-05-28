import axios from "axios";

export default function session(self) {
    const DEFAULT_TITLE = "FuturaVision";
    const BASE_URL = "https://futura-vision-api.kabirou-alassane.com/";
    const API_URL = `${BASE_URL}api`;
    const STORAGE_URL = `${BASE_URL}storage/`;
    const AUTH_SESSION_NAME = "_DoNotTryOpening__FV++U76";
    const DEFAULT_USER_EMAIL = "fv2022@gmail.com";
    const DEFAULT_USER_PASSWORD = "password";
    const DEFAULT_USER_TOKEN = "324|Lyq0da5SzVjV6seNzGbS5HVu5YxlJNPtA5iDXrZi";

    const setUserSession = user => {
        return localStorage.setItem(AUTH_SESSION_NAME, JSON.stringify(user));
    }
    
    const getUserSession = () => {
        return localStorage.getItem(AUTH_SESSION_NAME);
    }

    const removeUserSession = () => {
        return localStorage.removeItem(AUTH_SESSION_NAME);
    }

    const getToken = () => {
        const auth = JSON.parse(getUserSession()) ?? { token: DEFAULT_USER_TOKEN };
        return {
            headers: {
                Authorization: `Bearer ${auth.token}`,
            },
        };
    };

    const http = axios.create({
        baseURL: API_URL,
    });

    const getCurrentUser = () => {
        let auth = JSON.parse(getUserSession()) ?? {};

        if (!auth.token) {
            http.post('login', {
                email: DEFAULT_USER_EMAIL,
                password: DEFAULT_USER_PASSWORD
            })
                .then(res => {
                    setUserSession(res.data.data);
                    auth = res.data.data;
                })
        } else if (auth.role !== 'get') {
            http.get('current-user', getToken())
                .then(res => {
                    setUserSession(res.data.data);
                    auth = res.data.data;
                })
                .catch(error => removeUserSession())
        }
        return auth.role !== 'get' ? auth : false;
    };

    const logout = () => {
        removeUserSession();
        getCurrentUser();
    };

    const sanitize = (text) => {
        return text.replace(/<[^>]*>/g, '').replace(/&(nbsp|#160|ensp|emsp|thinsp);/g, ' ');
    };

    /**
 * Convertit une chaîne de caractères en un format valide pour une URL.
 * 
 * @param {string} title - La chaîne de caractères à convertir.
 * @returns {string} La chaîne de caractères convertie.
 */
    const urlify = (title) => {
        const sanitizedTitle = typeof title === 'string' ? title : '';
        const urlifiedTitle = sanitizedTitle
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s]+/g, '-')
            .toLowerCase();

        return urlifiedTitle;
    };

    const reduceText = (data, length) => {
        const text = sanitize(data ?? '');
        return text.slice(0, length);
    };

    const reverseData = (data) => {
        return data;
    };

    const avoidUndefined = (object, key) => {
        try {
            return sanitize(object[key]) ?? ' ';
        } catch (error) {
            return ' ';
        }
    };

    const avoidUndefinedArray = (object, key) => {
        try {
            return object[key] ?? [];
        } catch (error) {
            return [];
        }
    };

    const loadImage = (link) => {
        return STORAGE_URL + (link || 'default.png');
    };

    const loadImageFV = (link) => {
        return STORAGE_URL + (link || 'logo.jpg');
    };

    self.$defaultTitle = DEFAULT_TITLE;
    self.$base_url = BASE_URL;
    self.$api_url = API_URL;
    self.$storage_url = STORAGE_URL;
    self.$authSessionName = AUTH_SESSION_NAME;
    self.$token = getToken;
    self.$http = http;
    self.$currentUser = getCurrentUser;
    self.$setUserSession = setUserSession;
    self.$removeUserSession = removeUserSession;
    self.$logout = logout;
    self.$url = urlify;
    self.$sanitaze = sanitize;
    self.$reduce = reduceText;
    self.$reverse = reverseData;
    self.$avoid = avoidUndefined;
    self.$avoidr = avoidUndefinedArray;
    self.$loadImage = loadImage;
    self.$loadImageFV = loadImageFV;
}
