<template>
	<div>
		<NavActions />
    <Index />
	</div>
</template>

<script>
export default {
  name: 'Dashboard',
  components:{
    NavActions: () => import(/* webpackChunkName: "navactions" */ '@/components/ui/navActions/NavActions'),
    Index: () => import(/* webpackChunkName: "navactions" */ '@/components/paymentMethods/Index'),
  } 
}
</script>