<template>
  <div class="bg-central sidebar">
    <div class="d-flex flex-column align-items-start pt-2  min-vh-100">
      <a href="/" class="d-flex align-items-center py-3 mb-md-0 mx-auto text-white text-decoration-none">
        <h3 class="d-none d-sm-block fw-bold">CENTRAL+</h3>
        <font-awesome-icon style="height: 22px" class="d-block d-sm-none" icon="fa-solid fa-plus" />
      </a>
      <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start mt-4">
        <li>
          <router-link to="/" class="nav-link align-middle px-0" >
            <font-awesome-icon icon="fa-solid fa-house" /> 
            <span class="ms-2 d-none d-sm-inline home">Home</span>
          </router-link>
        </li>
        <li>
           <router-link to="/payment-methods" class="nav-link align-middle px-0" >
            <font-awesome-icon icon="fa-solid fa-comment-dollar" />
            <span class="ms-2 d-none d-sm-inline home">Metodos de pago</span>
          </router-link>
        </li>
      </ul>
      <div class="footer-sidebar w-100">
        <router-link to="/logout" class="nav-link d-none d-md-block">Cerrar sesion</router-link>
        <center>
          <font-awesome-icon 
            icon="fa-solid fa-arrow-right-from-bracket" 
            class="d-block d-md-none text-center text-white mt-5 mb-3" 
          />
          <img 
            :src="this.$store.state.user.img_profile" 
            :alt="this.$store.state.user.name" 
            class="rounded-circle mb-3 d-block d-md-none w-img"
          >
        </center>
        <div class="card mx-2 mb-2 d-none d-md-block">
          <div class="card-body">
            <div class="row">
              <div class="col-3 align-self-center">
                <img 
                  :src="this.$store.state.user.img_profile" 
                  :alt="this.$store.state.user.name" 
                  class="rounded-circle w-img"
                >
              </div>
              <div class="col-9">
                <span class="d-none d-sm-inline mx-1">{{this.$store.state.user.name}} {{this.$store.state.user.last_name}}</span>
                <br>
                <small class="text-secondary">diego@gmail.com</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.w-img{
  width: 40px;
  height: 40px;
}

.min-vh-100 {
  min-height: calc(100vh - 2rem)!important;
}

.sidebar {
  border-radius: 12px;
}

.nav-link {
  margin-left: 23px;
  color: #95d4ba;
}

.nav-link:hover {
  color: #cfeede;
}

.nav-link.route-active {
  color: #fff;
}

.nav-link.route-active::before {
  content: '';
  margin: 0px 12px -8px -23px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 28px;
  width: 10px;
  background-color: #fff;
  display: inline-block;
}

.footer-sidebar .card {
  border-radius: 10px;
}

.footer-sidebar .card .card-body {
  padding: 0.5rem;
}
</style>