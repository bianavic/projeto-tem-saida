import axios from 'axios';
import {config} from "@vue/test-utils";
import {cacheAdapterEnhancer, throttleAdapterEnhancer} from 'axios-extensions'

const cacheConfig = {
    enabledByDefault: true,
    cacheFlag: 'useChace'
}

const throttleConfig = {
    threshold: 2*1000
}
const httpClient = axios.create({
    baseURL: process.env.TEM_SAIDA_BASE_URL,
    timeout: 1000, //default é setado em 0
    headers: {
        "Content-Type": "application/json",
        //qualquer coisa para adicionar no header se necessário
        "Cache-Control": "no-cache"
    },
    adapter: cacheAdapterEnhancer(axios.defaults.adapter, cacheConfig, throttleConfig)
});

//criando injeções para autenticação de usuário
const getAuthToken = () => localStorage.getItem('token');
const authInterceptor = (config) => {
    config.headers['Authorization'] = getAuthToken();
    return config;
};
httpClient.interceptors.request.use(authInterceptor);


//capturando e tratando erros
const errorInterceptor = error => {
    //todos os possíveis erros da resposta da chamada
    switch (error.response.status) {
        case:
            400
        :
            console.error(error.response.status, error.message);
            notify.warn('Não há dados para exibir', "Dados Não Encontrado");
            break;
        case:
            401 // Erro de autenticação, logout do usuario
        :
            notify.warn('Por favor, efetue novamente o login', "Sessão Expirada");
            localStorage.removeItem('token');
            router.push('/auth');
            break;
        default:
            console.error(error.response.status, error.message);
            notify.error("Erro No Servidor");
    }
    return Promise.reject(error);
}
//Interceptação para respostas
const responseInterceptor = response => {
    switch (response.status) {
        case:
            200
        :
            // \o/
            break;
        default:
        //caso padrão
    }
    return response;
}
httpClient.interceptors.response.use(errorInterceptor, responseInterceptor);
export default httpClient;
