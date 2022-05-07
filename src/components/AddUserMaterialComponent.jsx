import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ApiService from "../service/ApiService";

class AddUserMaterialComponent extends Component{

    //definicao das props e state
    constructor(props){
        super(props);
        this.state ={
            id: '',
            nome: '',
            login: '',
            idade: '',
            perfil: '',
            nomeVazio: false,
            loginVazio: false
        }
        this.saveUser = this.saveUser.bind(this);

    }

    //salva o usuario no backend
    saveUser = (e) => {
        //TODO: obtem os dados do state e envia para o backend salvar os dados

        this.setState({nomeVazio: (this.state.nome === "")});
        this.setState({loginVazio: (this.state.login === "")});

        if(this.state.nomeVazio === false && this.state.loginVazio === false){
            e.preventDefault();
            let usuario = {id: this.state.id, nome: this.state.nome, login: this.state.login, idade: this.state.idade, perfil: this.state.perfil};
            ApiService.salvarUsuario(usuario)
                .then(res => {
                    //this.props.history.push('/');
                    alert('Usuário salvo com sucesso!');
                    console.log(res.data);
                })
                .catch(err => {
                    alert('Não foi possível salvar o usuário!');
                    console.log(err);
                });
        }
     }

    //modifica o valor do state do campo alterado
    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    //renderiza o componente
    render() {

        return(

            <Container maxWidth="sm">
                <div>

                    <h2 className="text-center">Adicionar Usuário (via Material UI)</h2>
                    <form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        autoFocus
                                        fullWidth
                                        id="nome"
                                        name="nome"
                                        label="Nome"
                                        value={this.state.nome}
                                        onChange={this.onChange}
                                        helperText={this.state.nomeVazio ? "Preencha o campo" : null}
                                        error={this.state.nomeVazio}>
                                    </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="login"
                                        name="login"
                                        label="Login"
                                        value={this.state.login}
                                        onChange={this.onChange}
                                        helperText={this.state.loginVazio ? "Preencha o campo" : null}
                                        error={this.state.loginVazio}>
                                    </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        id="idade"
                                        type="react-number-format"
                                        name="idade"
                                        label="Idade"
                                        value={this.state.idade}
                                        onChange={this.onChange}>
                                    </TextField>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        id="perfil"
                                        name="perfil"
                                        label="Perfil"
                                        value={this.state.perfil}
                                        onChange={this.onChange}>
                                    </TextField>
                                </Grid>
                            </Grid>
                        <br></br>

                        <Button variant="contained" color="primary" disableElevation onClick={(e) => {
                            this.saveUser(e)
                        }}>
                            Salvar
                        </Button>

                    </form>
                </div>
            </Container>

        );
    }
}

export default AddUserMaterialComponent;