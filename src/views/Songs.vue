<template>
    <div id="songs-view" @scroll="handleScroll">
        <div class="wrapper-header">
            <h1>SONGS</h1>
            <div class="wrapper-search">
                <input id="input-search" placeholder="Search by title..." v-model="searchInput" />
            </div>
            <div class="wrapper-settings">
                <button id="btn-show-favorites"  :class="{active: showFav}" @click="showFav = !showFav">Show Favorites</button>
            </div>
        </div>
        <div class="wrapper-songs">
            <table cellspacing="0" cellpadding="0">
                <tr ref="header">
                    <th id="th-id" >#</th>
                    <th id="th-title" :class="{active: titleSort}" @click="titleSort = !titleSort" >
                        Title
                        <IconCaretUp v-show="titleSort"/>
                    </th>
                    <th id="th-artist" >Artist</th>
                    <th id="th-album">Album</th>
                    <th id="th-duration" :class="{active: lenghtSort}" @click="lenghtSort = !lenghtSort">
                        Duration
                        <IconCaretUp v-show="lenghtSort" />
                    </th>
                </tr>
                <!-- Loop goes on this <tr> element -->
                <tr class="song" v-for="(song, index) in songs"   @dblclick="selectSong(song)" :class="{active : isPlaying(song)}">
                    <td id="td-index">
                        <IconPlay v-if="song.id == player.getNowPlayingSongId()" />
                        <span id="txt-index" v-text="index+1"></span>
                    </td>
                    <td id="td-title">
                        <img :src="song.album.images[0].url" />
                        {{song.name}}
                    </td>
                    <td id="td-artist">{{getArtists(song.artists)}}</td>
                    <td id="td-album">{{song.album.name}}</td>
                    <td id="td-duration">
                        {{getTime(song.duration_ms)}}
                        <IconHeart @click="auth.toggleFavorite(song.id)" />
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>


<script>
import songList from '../data/songs.js'
import IconHeart from '../components/icons/IconHeart.vue'
import IconPlay from '../components/icons/IconPlay.vue'
import IconCaretUp from '../components/icons/IconCaretUp.vue'
import { player } from "../stores/player.js"
import {auth} from "../stores/auth.js"
export default {

    methods: {
        handleScroll(event) {
            this.$refs.header.classList.value = event.target.scrollTop > 100 ? 'scrolled' : '';
        },
        getArtists(artists) {
            var list = '';
            artists.forEach(element => {
                list = list.concat(element.name).concat(", ")
            })
            list = list.slice(0, -2)
            return list;
        },
         getTime(mil){
            let min = Math.floor(mil / 60000);
            let sec = ((mil % 60000) / 1000).toFixed(0);
            return sec == 60 ? (min+1) + ":00" : min + ":" + (sec < 10 ? "0" : "") + sec;
        },
        selectSong(song){
            player.setNowPlaying(song);
        },
        isPlaying(song){
            return player.getNowPlaying() == song;
        }
        
        
    },
    data(){
        return{
            searchInput: "", 
            showFav: false,
            titleSort: false, 
            lenghtSort: false, 
            player,
            auth,
            songs : songList,  
        }
        
        
        
    },
    computed:{

    },
    components:{
        IconHeart,
        IconCaretUp,
        IconPlay
    }
   

}


</script>