

<template>
    <Header v-show="auth.is_authenticated" ></Header>
    <div id="section-body">
    <NavigationComponent v-show="auth.is_authenticated"  ></NavigationComponent>
    
        <router-view class="section-router"></router-view>
    </div>
    <div id="section-player" v-show ="auth.is_authenticated">
        <AudioPlayer />
    </div>
</template>

<script>
import {auth} from './stores/auth.js'
import NavigationComponent from './components/NavigationComponent.vue'

export default{
    components:{NavigationComponent},
    data(){
        return{
            auth
        }
    }
}




</script>
