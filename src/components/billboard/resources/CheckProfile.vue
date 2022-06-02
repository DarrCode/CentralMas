<template>
    <div class="card bg-central">
      <div class="card-body text-center text-white">
        <h4 class="fw-bold">Bienvenido {{this.$store.state.user.name}}</h4>
        <p class="my-3">Completa tu verificacion de perfil para disfrutar de todas las funciones de Central +</p>
        <button 
          class="btn"
          @click="profileVerified"
        >
          Verificar Perfil
        </button>
      </div>
    </div>
</template>
<script>
export default {
  methods: {
    profileVerified (){
      this.$store.dispatch('profileVerified')
    }
  },
}
</script>
<style scoped>
.card .card-body{
  padding: 2.5rem 4.5rem;
  font-size: 15px;
}

button.btn{
  background-color: #fff;
  color: var(--color-primary);
  border-radius: 25px;
  padding: 0.5rem 1.75rem;
}
</style>