<template>
  <div>
    <h4 class="mb-5">Activos</h4>
    <h5 class="text-central">Monedas Nacionales</h5>
    <ul class="list-group list-group-flush">
      <li 
        v-for="(currency, index) of local_currencies"
        :key="index"
        class="list-group-item mb-2"
      >
        <img 
          :src="currency.img" 
          :alt="currency.name"
          class="w-img rounded-circle me-2"
        >
        {{currency.name}}
        <span class="float-end text-central">{{currency.amount}}</span>
      
      </li>
    </ul>
    <h5 class="text-central mt-3">CriptoMonedas</h5>
    <ul class="list-group list-group-flush">
      <li 
        v-for="(currency, index) of cryptocurrencies"
        :key="index"
        class="list-group-item mb-2"
      >
        <img 
          :src="currency.img" 
          :alt="currency.name"
          class="w-img rounded-circle me-2"
        >
        {{currency.name}}
        <span class="float-end text-central">{{currency.amount}}</span>
      
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      local_currencies: [
        {
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',
          name: 'Us Dollar',
          amount: '$ 983.00'
        },
        {
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1200px-Flag_of_Europe.svg.png',
          name: 'EURO',
          amount: '€ 2478.00'
        },
        {
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1200px-Flag_of_Venezuela.svg.png',
          name: 'Bolivar Digital',
          amount: '300.00 Bs'
        }
      ],
      cryptocurrencies: [
         {
          img: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=022',
          name: 'Thether',
          amount: '20 USDT'
        },
        {
          img: 'https://cryptologos.cc/logos/binance-usd-busd-logo.png?v=022',
          name: 'BUSD',
          amount: '2 BUSD'
        },
      ]
    }
  }
}
</script>
<style>
.list-group-flush>.list-group-item {
  border-width: 0 0 0px;
  padding: 0.5rem 0rem;
}
</style>