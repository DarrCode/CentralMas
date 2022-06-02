<template>
  <div
    class="container-fluid my-3"
    id="app"
  >
    <div class="row mx-1 flex-nowrap">
      <div class="col-2 col-md-3 col-xl-2 px-0">
        <Sidebar />
      </div>
      <div class="col-10 col-md-7 col-xl-6">
        <router-view/>
      </div>
      <div class="d-none d-md-block col-md-4">  
        <Billboard />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components:{
    Sidebar: () => import(/* webpackChunkName: "sidebar" */ '@/components/ui/Sidebar'),
    Billboard: () => import(/* webpackChunkName: "index" */ '@/components/billboard/Index'),
  } 
}
</script>

<style>
:root {
  --color-primary: #5cb88c;
}

body {
  background-color: #fafafa!important;
}

.bg-central{
  background-color: var(--color-primary)!important;
}

.text-central{
  color: var(--color-primary)!important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #5d5d5d;
}

.card {
  border: none!important;
}
</style>
