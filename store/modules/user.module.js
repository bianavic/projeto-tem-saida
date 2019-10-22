//importando endpoints da api
import {getAllUsers} from '@/api/users.api'

const state = {
    users: []
}

const getters = {
    getUsers(state) {
        return state.users;
    }
}

const actions = {
   //fazendo a busca dos dados na requisição getAllUsers e entregando para o SET_USER a resposta dos dados encontrados
    fetchUsers({commit}) {
        return new Promise((resolve, reject) => {
            getAllUsers().then(response => {
                commit('SET_USERS', response.data);
                resolve();
            }).catch(error => {
                reject();
            });
        });
    }
}

const mutations = {
    //criando um apontamento dos dados no fetch(actions) recebidos para estado de [objeto]usuários
    SET_USERS(state, data) {
        state.users = data;
    }
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
