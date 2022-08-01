<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-xl navbar-light bg-white boks">
        <div class="container">
            <router-link :to="{name : 'Home'}"><img src="@/assets/images/logo.png"></router-link>
            <a class="navbar-toggler" style="cursor: default;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
        </a>

            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav me-auto mb-2 mt-3 ms-5 text-center">
                    <li class="nav-item">
                        <router-link to="/howtobuy" class="nav-link">Как покупать</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/notfound" class="nav-link">Распродажи</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/notfound" class="nav-link">Цены</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/notfound" class="nav-link">Помощь</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/notfound" class="nav-link">Бонусы</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/notfound" class="nav-link">Блог</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/notfound" class="nav-link">Магазины</router-link>
                    </li>
                </ul>
                <form class="text-center ps-5">
                    <span class="mt-3 me-3 regis"><a href=""><img src="@/assets/images/User.png"> <span style="color: black !important;">Вход</span></a></span>
                    <btn :name="'Связаться с нами'" />
                </form>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
// import '@/assets/b-js/bundle.min.js'
import btn from './elements/AppButton.vue'
export default {
    components: {
        btn
    }
}
</script>

<style>

</style>