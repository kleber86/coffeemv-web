<template>
  <div id="app">
    <div>
      <!-- Navbar - Topo -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          <img
            src="./assets/brand_01.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          />
          CoffeeMV
        </a>
      </nav>
      <!-- Navbar - Topo -->
    </div>
    <div class="container">
      <h2>Cadastro</h2>
      <ul>
        <li v-for="(erro, index) of errors" :key="index">
          <div class="alert alert-danger" role="alert">
            Campo: <b>{{ erro.field }}</b> - {{ erro.defaultMessage }}
          </div>
        </li>
      </ul>
      <form @submit.prevent="salvar">
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="inputNome">Nome completo:</label>
              <input
                type="text"
                class="form-control"
                id="inputNome"
                placeholder="Digite seu nome"
                v-model="usuario.nome"
              />
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <label for="inputCpf">CPF:</label>
              <input
                type="text"
                class="form-control"
                id="inputCpf"
                placeholder="Digite seu CPF"
                v-model="usuario.cpf"
              />
            </div>
          </div>
        </div>

        <div class="alert alert-info" role="alert">Itens para o Café.</div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label for="inputItem">Item:</label>
              <input
                type="text"
                class="form-control"
                id="inputItem"
                placeholder="Digite seu item"
                v-model="usuario.item"
              />
            </div>
          </div>
        </div>

        <input type="submit" value="Cadastrar" class="btn btn-info mt-2" />
      </form>

      <hr />

      <h2 class="mt-4">Listagem</h2>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">CPF</th>
            <th scope="col">Itens</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario of usuarios" :key="usuario.id">
            <th scope="row">{{ usuario.id }}</th>
            <td>{{ usuario.nome }}</td>
            <td>{{ usuario.cpf }}</td>
            <td>{{ usuario.item }}</td>
            <td>
              <button
                @click="editar(usuario)"
                type="button"
                class="btn btn-info"
              >
                Editar
              </button>
              <button @click="remover(usuario)"
              type="button" class="btn btn-danger ml-3">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Usuario from "./services/usuarios";
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      usuario: {
        id: "",
        nome: "",
        cpf: "",
        item: "",
      },
      usuarios: [],
      errors: [],
    };
  },
  mounted() {
    this.listar();
  },

  methods: {
    listar() {
      Usuario.listar().then((resposta) => {
        this.usuarios = resposta.data;
      });
    },

    salvar() {
      if (!this.usuario.id) {
        Usuario.salvar(this.usuario).then((resposta) => {
            this.usuario = {};
            //alert("Cadastrado com sucesso!", resposta);
            Swal.fire('Cadastrado com sucesso!', resposta)
            this.listar();
            this.errors = {};
          })
          .catch(errors => {
            this.errors = errors.response.data.errors
            console.log(errors.response);
          });
      } else {
        Usuario.atualizar(this.usuario)
          .then((resposta) => {
            this.usuario = {};
            //alert("Atualizado com sucesso!", resposta);
            Swal.fire('Atualizado com sucesso!', resposta)
            this.listar();
            this.errors = {};
          })
          .catch(errors => {
            this.errors = errors.response.data.errors
            //console.table(e.response.data);
          });
      }
    },

    editar(usuario) {
      this.usuario = usuario;
    },

    remover(usuario){

      if(confirm("Deseja excluir o usuario?"))
        Usuario.deletar(usuario).then(resposta => {
        //alert("Excluido com sucesso!", resposta)  
        Swal.fire('Excluido com sucesso!', resposta)
        this.listar();
      }).catch(errors => {
         this.errors = errors.response.data.errors
        //console.table(e.response.data);
      })
    }
  }
};
</script>

<style>
li{
  list-style: none;
}
</style>
