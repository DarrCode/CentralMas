<template>
  <div class="card">
    <div class="card-body">
     
      <BalanceActions v-if="this.$route.name == 'Home'"/>
      
      <div class="row" >
        <PaymentMethods v-if="this.$route.name == 'paymentMethods'"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    BalanceActions: () => import(/* webpackChunkName: "balanceactions" */ './resources/BalanceActions'),
    PaymentMethods: () => import(/* webpackChunkName: "Paymentmethods" */ './resources/PaymentMethods'),
  }
}
</script>