import React, { Component } from 'react'

class AddUserComponent extends Component{

    //definicao das props e state
    constructor(props){
        super(props);
        this.state ={
            id: '',
            nome: '',
            login: '',
            idade: '',
            perfil: ''
        }
        this.saveUser = this.saveUser.bind(this);

    }

    //montagem do componente
    componentDidMount() {
        //ao carregar a página mantem os valores da URL nos valores do state
        this.setState({id:this.getQueryParams('id')});
        this.setState({nome:this.getQueryParams('nome')});
        this.setState({login:this.getQueryParams('login')});
        this.setState({idade:this.getQueryParams('idade')});
        this.setState({perfil:this.getQueryParams('perfil')});
    }

    //funcao para extrair os valores da chave da URL
    getQueryParams(variable)
    {
        var query = window.location.search.substring(1);
        console.log(query) //"nome=joao&login=jjt&idade=16"
        var vars = query.split("&");
        console.log(vars) //[ 'nome=joao', 'login=jj', 'idade=16' ]
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            console.log(pair)//[ 'nome', 'joao' ][ 'login', 'jj' ][ 'idade', '16' ]
            if(pair[0] === variable){return pair[1];}
        }
        return(false);
    }

    //salva o usuario no backend
    saveUser = (e) => {
        //TODO: obtem os dados do state e envia para o backend salvar os dados
        alert('Usuário Salvo!');
        console.err(e);
     }

    //modifica o valor do state do campo alterado
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    //renderiza o componente
    render() {

        return(
            <div>
                <h2 className="text-center">Adicionar Usuário</h2>
                <form>
                    <div>
                        <label>Nome:</label>
                        <input type="text" name="nome" value={this.state.nome} onChange={this.onChange}/>
                    </div>

                    <div>
                        <label>Login:</label>
                        <input name="login" value={this.state.login} onChange={this.onChange}/>
                    </div>

                   <div>
                        <label>Idade:</label>
                        <input type="number" name="idade" value={this.state.idade} onChange={this.onChange}/>
                    </div>

                    <div>
                        <label>Perfil:</label>
                        <input name="perfil" value={this.state.perfil} onChange={this.onChange}/>
                    </div>

                    <br></br>

                    <button onClick={this.saveUser}>Salvar</button>
                </form>
            </div>
        );
    }
}

export default AddUserComponent;