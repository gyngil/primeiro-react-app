import React, { Component } from 'react'
import ApiService from "../service/ApiService";

class ListUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.reloadUserList = this.reloadUserList.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    componentDidMount() {
        console.log(this.props.nome);
        this.reloadUserList();
    }

    reloadUserList() {

            ApiService.listarUsuarios()
                .then((res) => {
                    this.setState({users: res.data})
                })
                .catch(err => {
                    console.log('Não foi possível obter a lista de usuarios!', 'Erro!')
                    console.log(err);
                });

        // this.setState({users:
        //                             [
        //                                 {id:1, nome:'Joao',login:'jhon',idade:'25',perfil:'admin',sexo: 'M'},
        //                                 {id:2, nome:'Maria',login:'mar',idade:'20',perfil:'admin',sexo: 'F'},
        //                                 {id:3, nome:'Paulo',login:'pal',idade:'40',perfil:'super',sexo: 'M'}
        //                              ]
        //                     }
        //              )
    }

    addUser() {

        this.props.history.push('/add-material');

    }
    render() {
        return (
            <div>
                <h2>LIsta de Usuários</h2>
                <table border="1">
                    <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Login</th>
                        <th>Idade</th>
                        <th>Perfil</th>
                        <th>Sexo</th>
                        <th>Ações</th>
                    </tr>
                    {
                        this.state.users.map(
                            user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.nome}</td>
                                    <td>{user.login}</td>
                                    <td>{user.idade}</td>
                                    <td>{user.perfil}</td>
                                    <td>{user.sexo}</td>
                                    <td>
                                        <button onClick={() => this.addUser()}> + </button>
                                    </td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
                <br></br>
                <button onClick={() => this.reloadUserList()}> Recarregar </button>

            </div>
        );
    }

}

export default ListUserComponent;