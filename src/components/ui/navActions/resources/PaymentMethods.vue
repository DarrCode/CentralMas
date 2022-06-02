<template>
  <form @submit.prevent="saveAccount">
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
      <div class="col-12 col-md-3 mb-2 mb-md-0">
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
      <div class="col-12 col-md-3 text-center">
        <button class="btn bg-central text-white fw-bold">Crear cuenta</button>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data () {
    return {
      accounts: [],
      form: {
        name: '',
        description: '',
        number: '',
        active: false
      }
    }
  },
  methods: {
    saveAccount() {
      
      this.accounts.push({
        id: Math.floor(Math.random() * 1000) + 1,
        name: this.form.name,
        description: this.form.description,
        number: this.form.number,
        active: this.form.active
      })
      
      localStorage.setItem("accounts", JSON.stringify(this.accounts))

      this.form = {}

      this.$store.dispatch('addAccount')

      setTimeout(() => {
        this.$store.state.add_account = false
      }, 1000)
    }
  }
}
</script>
<style scoped>
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

.btn {
   border-radius: 25px;
  padding: 0.5rem 1rem;
}
</style>