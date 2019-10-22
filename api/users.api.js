import httpClient from "~/api/httpClient";

const END_POINT = '/users';

const getAllUsers = () => httpClient.get(END_POINT);

//pode passar argumentos para usar como parametro/dados da requisição
const getUser = (user_id) => httpClient.get(END_POINT, {user_id, useCache: true});

//mais que um
const createUser = (username, password) => httpClient.post(END_POINT, {username, password});

export {
    getAllUsers,
    getUser,
    createUser
}
