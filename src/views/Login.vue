<template>
    <div id="login-view">
        <form class="login-form">
            <div class="wrapper-logo">
                <img src="@/assets/logo.svg" />
                <div>KRAKEN.FM</div>
            </div>
            <input id="input-email" placeholder="E-mail" v-model="email"/>
            <input id="input-password" placeholder="Password" v-model="password" />
            <button id="btn-submit" :disabled="!isDisabled" @click="auth.authenticate(email,password)">LOGIN</button>
        </form>
    </div>
</template>

<script>
import {auth} from "../stores/auth.js"

export default{
    
    data(){
        return{
            email: "",
            password: "",
            auth,
        }
        
    },
    computed: {
        isDisabled: function(){
            return this.email != "" && this.password.length > 5;  
            
        },
    }
}

</script>
