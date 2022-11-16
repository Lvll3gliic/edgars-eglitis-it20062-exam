import { reactive } from 'vue'
import router from '../router';

export const auth = reactive({
    user:{
        name: "Edgars",
        surname: "Eglitis",
        code: "IT20062", 
        favorite_songs:[]

    },
    is_authenticated: localStorage.is_authenticated ?? false,

    setUserData(name, surname, code) {
        this.user.name = name;
        name = this.user.name; 
        this.user.surname = user.name; 
        this.user.code = code; 
        
    },
    
    authenticate(email, password) {
        if (email == "edgars.eglitis@va.lv" && password == "123456"){
            localStorage.is_authenticated = true;
            this.is_authenticated = true;
            router.push("/")
        }
        
    
    },
    
    logout() {
        
        localStorage.clear();
        this.is_authenticated = false; 
        router.push("/login")
    },
    
    toggleFavorite(songID) {
        if (this.favoriteSongs.includes(songID)) {
            this.favoriteSongs.splice(this.favoriteSongs.indexOf(songID), 1);
        } else {
            this.favoriteSongs.push(songID);
        }
    },
    
    getFavoriteSongs() {
        return this.favorite_songs; 
    }
}) 