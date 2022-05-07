import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080';

class ApiService {

    /**
     * Busca os usuarios
     * @returns
     */
    listarUsuarios() {
        return axios.get(USER_API_BASE_URL + '/listar-usuarios');
    }

    /**
     * Consulta um usuario por Id
     * @param usuarioId
     * @returns
     */
    consultarUsuarioById(usuarioId) {
        return axios.get(USER_API_BASE_URL + '/consultar-usuario/' + usuarioId);
    }

    /**
     * Salva um usuario
     * @param usuario
     * @returns
     */
    salvarUsuario(usuario) {
        return axios.post(USER_API_BASE_URL + '/salvar-usuario', usuario);
    }

    /**
     * Exclui um usuario por Id
     * @param usuarioId
     * @returns
     */
    excluirUsuarioById(usuarioId) {
        return axios.delete(USER_API_BASE_URL + '/excluir-usuario/' + usuarioId);
    }
}

export default new ApiService();