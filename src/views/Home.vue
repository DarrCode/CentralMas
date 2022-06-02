<template>
	<div>
		<NavActions />
    <div class="card mt-3">
      <div class="card-body">
        <Charts />
        <Assets />
      </div>
    </div>
	</div>
</template>

<script>
export default {
  name: 'Dashboard',
  components:{
    NavActions: () => import(/* webpackChunkName: "navactions" */ '@/components/ui/navActions/NavActions'),
    Charts: () => import(/* webpackChunkName: "charts" */ '@/components/home/Charts'),
    Assets: () => import(/* webpackChunkName: "assets" */ '@/components/home/Assets'),
  } 
}
</script>
