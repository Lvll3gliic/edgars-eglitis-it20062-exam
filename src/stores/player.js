import { reactive } from 'vue'

export const player = reactive({
    playlist   : [],
    now_playing: {}, // SONG OBJECT
    setPlaylist(songs) {
         this.playlist = songs.slice();
    },
    setNowPlaying(song) {
        this.now_playing = song; 
    },
    getNowPlayingSongId() {
       return this.now_playing?.id;
    },
    getNowPlaying() {
        return this.now_playing; 
    },
    getNowPlayingAlbumID() {
        return this.now_playing?.album?.id ?? null;
    },
    getNowPlayingSongName() {
        return this.now_playing?.name ?? '';
    },
    getNowPlayingSongImage() {
        return this.now_playing?.album?.images[1].url ?? '';
    },
    getNowPlayingArtists() {
        return this.now_playing?.artists?.map(artist => artist.name).join(', ');
    },
    getNowPlayingSongPreview() {
        return this.now_playing?.preview_url;
    },
    getNextSong(){
        this.playlist.forEach((song, index) => {
            if (song.id == this.now_playing.id) {
              return this.playlist[index + 1];
            }
          });
    },
    getPreviousSong() {
        var index;

        this.playlist.forEach((song, indexTemp) => {
          if (song?.id == this.now_playing?.id) {
            index = indexTemp;
          }
        });

        if (this.playlist.length < index - 1) {
            return false;
          } else {
            return this.playlist[index - 1];
          }
    },
    resetNowPlaying() {
        this.now_playing = {};
    }
})