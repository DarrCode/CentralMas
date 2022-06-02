<template>
  <div class="card">
    <div class="card-body">
      <h6 class="fw-bold d-inline">Transacciones recientes </h6>
      <router-link to="/" class="text-central float-end text-decoration-none">Ver todo</router-link>
      <ul class="list-group list-group-flush mt-3">
        <li
          v-for="(transaction, index) in getTransactions" 
          :key="index"
          class="list-group-item d-flex justify-content-between align-items-start text-secondary"
        >
          <div class="rounded-circle content-icon" >
            <font-awesome-icon 
              :icon="transaction.icon" 
              :class="transaction.action_type? 'green' : 'red'"
              class="icon" 
            />
          </div>
          <div class="ms-2 me-auto">
            <div>{{transaction.action}}</div>
            <small>{{transaction.direction}}</small>
          </div>
          <div>
            <div class="float-end">{{transaction.amount}}</div>
            <br>
            <small>{{transaction.date}}</small>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  mounted () {
    this.$store.dispatch('getTransactions')
  },
  computed: {
    getTransactions(){
      return this.$store.state.user.transactions
    }
  }
}
</script>

<style scoped>
.list-group-flush>.list-group-item {
  border-width: 0 0 0px;
  padding: 0.5rem 0rem;
}

small {
  font-size: .775rem;
}

.content-icon {
  width: 40px;
  height: 40px;
  background-color: #fafafa;
}

.icon {
  width: 18px;
  height: 36px;
  margin: auto;
  display: flex;
}

.icon.green {
  color: var(--color-primary);
}
.icon.red {
  color: #cc3a33;
}

</style>