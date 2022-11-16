<template>
    <div id="about-view">
    <div class="wrapper-header">
        <h1>ABOUT ME</h1>
        <div class="settings">
            <button id="btn-edit" :class="{active: editForm}" @click="editForm = !editForm">{{editForm?'Cancel':'EditForm'}}</button>
            <button id="btn-save" v-show="editForm" @click="saveForm()">Save Form</button>
        </div>
    </div>
    <form>
        <div class="wrapper-input">
            <label>NAME</label>
            <input id="input-name" v-model="this.name" v-show="editForm" />
            <p id="txt-name" v-show="!editForm" >{{this.name}}</p>
        </div>
        <div class="wrapper-input">
            <label>SURNAME</label>
            <input id="input-surname" v-model="this.surname" v-show="editForm" />
            <p id="txt-surname" v-show="!editForm"> {{this.surname}}</p>
        </div>
        <div class="wrapper-input">
            <label>STUDENT CODE</label>
            <input id="input-code" v-model="this.code" v-show="editForm" />
            <p id="txt-code" v-show="!editForm">{{this.code}}</p>
        </div>
        <div class="wrapper-songs">
            <label>FAVORITE SONGS</label>
            <ul>
                <li>
                    <img id="img-album" src="https://i.scdn.co/image/ab67616d00001e02980c9d288a180838cd12ad24" />
                    <div class="song-info">
                        <p id="txt-song" class="song-name">DEEP (feat. Nonô)</p>
                        <p id="txt-artist" class="song-artists">Example</p>
                    </div>
                </li>
            </ul>
            <div id="txt-empty" class="empty">NO SONGS FOUND</div>
        </div>
    </form>
    </div>
</template>

<script>
import { auth } from "../stores/auth.js"
export default {
    data(){
        return{
            editForm: false,
            name: auth.user.name,
            surname: auth.user.surname,
            code: auth.user.code
        }
    },
    methods:{
       
        saveForm(){
            this.editForm = false; 
            auth.setUserData(this.name, this.surname, this.code);
            
            
        }
    }
}

</script>