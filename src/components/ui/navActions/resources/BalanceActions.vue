<template>
  <div class="row" >
    <div class="col-12 col-md-6">
      <h6 class="text-central d-inline">Balance Total</h6>
      <button class="btn" @click="hideBalance">
        <font-awesome-icon icon="fa-solid fa-eye-slash" />
      </button>
      <br class="d-none d-md-block">
      <div v-if="showBalance">
        <h4 class="d-inline amount-balance" >1,102.84 </h4>
        <h5 class="d-inline amount-balance" > = $ 230.00 </h5>
      </div>
      <div v-else class="text-danger">*** Balance oculto ***</div>
    </div>
    <div class="col-12 col-md-6">
      <div class="d-flex justify-content-around">
        <div>
          <div class="content-icon bg-central rounded-circle">
            <font-awesome-icon class="icon text-white" icon="fa-solid fa-money-bill-transfer" />
          </div>
          <div class="text-center text-action">
            Pagar
          </div>
        </div>
        <div>
          <div class="mx-auto content-icon bg-central rounded-circle">
            <font-awesome-icon class="icon text-white" icon="fa-solid fa-arrow-right-arrow-left" />
          </div>
          <div class="text-center text-action">
            Convertir
          </div>
        </div>
        <div>
          <div class="content-icon bg-central rounded-circle">
            <font-awesome-icon class="icon text-white" icon="fa-solid fa-download" />
          </div>
          <div class="text-center text-action">
            Retirar
          </div>
        </div>
        <div>
          <div class="mx-auto content-icon bg-central rounded-circle">
            <font-awesome-icon class="icon text-white" icon="fa-solid fa-upload" />
          </div>
          <div class="text-center text-action">
            Recargar
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showBalance: true
    }
  },
  methods: {
    hideBalance(){
      this.showBalance = !this.showBalance
    }
  }
}
</script>

<style>
.content-icon {
  width: 50px;
  height: 50px;
}

.icon {
  width: 21px;
  height: 50px;
  margin: auto;
  display: flex;
}

@media (max-width: 425px){
  .content-icon {
    width: 42px;
    height: 42px;
  }

  .icon {
    width: 18px;
    height: 41px;
    margin: auto;
    display: flex;
  }
  .text-action{
    font-size: 12px;
  }
  .amount-balance {
    font-size: 14px;
  }
}
</style>