<template>
  <div class="billboard">
    <CheckProfile 
      :class="ProfileVerified ? 'hide_check_profile' : ''"
      class="check_profile mb-3"
    />
    <div 
      :class="ProfileVerified ? 'hide_check_profile' : ''"
      class="transactions"
    >
      <Transactions />
    </div>
    
  </div>
</template>
<script>
export default {
  components: {
    CheckProfile: () => import(/* webpackChunkName: "checkprofile" */ './resources/CheckProfile'),
    Transactions: () => import(/* webpackChunkName: "transactions" */ './resources/Transactions'),
  },
  
  computed: {
    ProfileVerified(){
      return this.$store.state.user.profile_verified
    }
  }
}
</script>

<style>
.billboard {
  height: calc(827px - 227px);
}
.card {
  border-radius: 12px;
}

.check_profile {
  transition: transform 0.5s ease-out;
}
.hide_check_profile{
  transform: translateY(-245px);
}

.transactions {
  transition: transform 0.5s ease-out;
}
@media (max-width: 1024px) {
  .hide_check_profile{
    transform: translateY(-316px);
  }
}
</style>