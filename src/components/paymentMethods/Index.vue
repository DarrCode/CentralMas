<template>
  <div>
    <div class="card mt-3">
      <div class="card-body">
        <h4 class="text-central mb-4">Mis cuentas</h4>
        <div class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th 
                  v-for="(th, index) of ths" :key="index" 
                  :class="th.textend"
                >
                  {{th.name}}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="(account, index) of accounts"
                :key="index"
              >
                <td>
                  <span :class="account.active ? 'text-central' : ''">{{account.name}}</span>
                </td>
                <td>
                  <span v-if="account.active" class="text-central">
                    Activa
                  </span>
                  <span v-else>
                    Inactivo
                  </span>
                </td>
                <td class="text-end">
                  <button class="me-0 me-md-2 btn btn-actions btn-show" @click="showAccount(account)">
                    <font-awesome-icon icon="fa-solid fa-eye" class="text-primary"/>
                  </button>
                  
                  <button class="me-0 me-md-2 my-2 my-md-0 btn btn-actions btn-edit" @click="editAccount(account, index)">
                    <font-awesome-icon icon="fa-solid fa-pen-to-square" class="text-warning"/>
                  </button>
                  <button class="btn btn-actions btn-delete" @click="deleteAccount(index)">
                    <font-awesome-icon icon="fa-solid fa-trash-can" class="text-danger" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="modal fade"  ref="showAccount" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{titleModal}}</h5>
            <button type="button" class="btn-close" @click="closeModal(true)" aria-label="Close"></button>
          </div>
          <div class="modal-body" v-if="account">
            <h5>
              <b>Nombre de la cuenta:</b>
              {{account.name}}
            </h5>
            <br>
            <h5>
              <b>Descripcion de la cuenta:</b>
              {{account.name}}
            </h5>
            <br>
            <h5>
              <b>Numero de cuenta:</b>
              {{account.number}}
            </h5>
          </div>
          <div class="modal-body" v-if="modalEdit">
            <form>
              <div class="row">
                <div class="col-12 col-md-6 mb-2 mb-md-0">
                  <input 
                    v-model="form.name"
                    type="text" 
                    class="form-control" 
                    placeholder="Nombre de la cuenta"
                  >
                </div>
                <div class="col-12 col-md-6">
                  <input 
                    v-model="form.description"
                    type="text"
                    class="form-control" 
                    placeholder="Descripcion de la cuenta"
                  >
                </div>
              </div>
              <div class="row mt-2 mt-md-3">
                <div class="col-12 col-md-6 mb-2 mb-md-0">
                  <input
                    v-model="form.number"
                    type="text" 
                    class="form-control" 
                    placeholder="Numero de cuenta"
                  >
                </div>
                <div class="col-12 col-md-6">
                  <div class="form-check mt-1">
                    <input 
                      v-model="form.active" 
                      class="form-check-input" 
                      id="flexCheckIndeterminate"
                      type="checkbox" 
                      value="true"
                    >
                    <label class="form-check-label" for="flexCheckIndeterminate">
                      Activar cuenta
                    </label>
                  </div>
                </div>
                <div class="col-12 text-center mt-3">
                  <button @click.prevent="updateAccount(form)" class="btn btn-edit-account bg-central text-white fw-bold">Editar cuenta</button>
                </div>
              </div>
            </form>
          </div>         
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from 'bootstrap'
export default {
  data () {
    return {
      ths: [
        { name: 'Cuenta' },
        { name: 'Estado' },
        { name: 'Acciones', textend: 'text-end' }
      ],
      accounts: [],
      form:{},
      account: null,
      modalEdit: false,
      titleModal: '',
      closeModalEdit: false
    }
  },
  mounted () {
    this.getAccounts()
  },
  methods: {
    getAccounts () {
      let data = JSON.parse(localStorage.getItem("accounts"))
      if (data === null) {
        this.accounts = []
      } else {
        this.accounts = data
      }
    },
    showAccount(account) {
      this.modal = new Modal(this.$refs.showAccount)
      this.modal.show()

      this.titleModal = 'Mas detalle sobre la cuenta'
      this.account = account
    },
    editAccount(index) {
      this.account = null
      this.modalEdit = true

      this.titleModal = 'Editar cuenta'

      this.modal = new Modal(this.$refs.showAccount)      
      this.modal.show()

      this.form = {
        name: this.accounts[index].name,
        description: this.accounts[index].description,
        number: this.accounts[index].number,
        active: this.accounts[index].active
      }
     
    },
    closeModal(okClose){
      if (okClose) {
        this.modal.hide()
        this.form = {}
        this.modalEdit = false
      }
      
    },
    updateAccount(dataForm){
      this.accounts = Array(dataForm)
      localStorage.setItem('accounts', JSON.stringify(dataForm))
      this.modal.hide()
      this.modalEdit = false
    },
    deleteAccount(index) {

      this.$swal({
          title: 'Eliminar cuenta',
          text: 'No podras revertir esta accion',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: "#c62f3a",
          confirmButtonText: 'Eliminar',
          cancelButtonText: 'Cancelar',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {
            this.accounts.splice(index, 1)
            localStorage.setItem('accounts', JSON.stringify(this.accounts))
          }
        })
      
    }
  },
  watch: {
    '$store.state.add_account': function() {
      let added = this.$store.state.add_account
      if (added) {
        this.getAccounts()
      }
    }
  }
}
</script>

<style>
.btn.btn-actions{ 
  background-color: #fafafa;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.btn-edit-account{
  background-color: #fff;
  color: var(--color-primary);
  border-radius: 25px;
  padding: 0.5rem 1.75rem;
}

.btn-show:hover {
  box-shadow: 0px 15px 20px rgb(11, 110, 253, 0.3);
  transform: translateY(-4px);
}
.btn-edit:hover {
  box-shadow: 0px 15px 20px rgb(255, 193, 6, 0.3);
  transform: translateY(-4px);
}

.btn-delete:hover {
  box-shadow: 0px 15px 20px rgb(220, 53, 69, 0.3);
  transform: translateY(-4px);
}

.form-control {
  border-radius: 25px;
  border: none;
  background-color: rgb(248, 248, 248);
}

.form-check-input:focus{
  background-color: var(--color-primary);
}

.form-check-input:checked {
  background-color:  var(--color-primary);
  border-color:  var(--color-primary);
}

.form-control:focus,
.form-check-input:focus {   
  border-color: var(--color-primary);
  box-shadow: inset 0 0.1px 0.1px rgba(255, 255, 255, 0.075), 0 0 6px rgba(92, 184, 140, 0.6);
  outline: 0 none;
}

</style>