<template>
    <div id="album-view">
    <div class="wrapper-header">
        <h1>ALBUMS</h1>
        <div class="settings">
            <button id="btn-grid" :class="{active:gridView}" @click="makeGridView(true)"><IconGrid /></button>
                
            <button id="btn-list" :class="{active:!gridView}" @click="makeGridView(false)"><IconList /></button>
                
        </div>
    </div>
    <ul id="list-albums" :class="{grid:gridView}" v-for="song in songs">
        <li class="album">
            <img id="img-album" v-bind:src="song.album.images[0].url" />
            <div class="album-info">
                <h4 id="txt-album-name">{{song.album.name}}</h4>
                <p id="txt-album-artists">{{getArtists(song.album.artists)}}</p>
                <div class="album-year">
                    <p id="txt-album-year">{{song.album.release_date}}</p>
                    <p id="txt-album-tracks"></p>
                </div>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
import IconGrid from "../components/icons/IconGrid.vue"
import IconList from "../components/icons/IconList.vue"
import songList from "../data/songs.js"
export default {
    data(){
        return{
            gridView : false,
            songs : songList,
        }
    },
    components: {
        IconGrid,
        IconList,
    },
    methods: {
        makeGridView(val){
            if(val == true){
                this.gridView = true;
            } else if(val == false) {
                this.gridView = false;
            }
        },
        getArtists(artists) {
            var list = '';
            artists.forEach(element => {
                list = list.concat(element.name).concat(", ")
            })
            list = list.slice(0, -2)
            return list;
        },
    },
    computed:{
        albums() {
      let albums = [];
      this.songs.forEach((song) => {
        if(!albums.includes(song.album)){
            albums.push(song.album)
        }
        
      });
      return albums;
    }
}
}



</script>