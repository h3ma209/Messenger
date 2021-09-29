<template>
    <div class="login d-flex justify-center align-center fill-height">
        <v-parallax class="fill-height" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            <v-layout align-center justify-center class="form">
                <v-flex xs10 sm6 md5 lg4>

                    <v-form ref="form" v-model="valid" lazy-validation class="pa-6 rounded elevation-2">
                        <h1 class="black--text text-center ma-5">Welcome</h1>
                        <v-text-field class="ma-2" v-model="username" label="Username" required></v-text-field>
                        <v-text-field class="ma-2" v-model="description" label="Describe yourself" required></v-text-field>
                        <v-btn class="ma-2" @click="enterUser()">Enter</v-btn>
                    </v-form>
                </v-flex>
            </v-layout>

        </v-parallax>

    </div>

</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {

    data() {
        return {
            username: '',
            description: '',
            valid: false,
        }
    },
    created() {
        this.username = this.getUsername()
        this.description = this.getDescription()

    },
    setup() {
    },
    methods: {
        ...mapMutations(['setUsername', 'setDescription']),
        ...mapGetters(['getUsername', 'getDescription']),
        enterUser() {
            this.$root.socket  = this.$nuxtSocket({
                name: 'chat',
                channel: '/',
                reconnection: false,
                persist: true // to be saved in vuex
            })
            
            this.setUsername(this.username)
            this.setDescription(this.description)
            this.$router.push({ path: '/chats' })
        }
    }

}
</script>

<style scoped>
.login {
    width: 100%;
}
.v-parallax {
    height: 100%;
    width: 100%;
}
.v-form {
    background: white;
}
</style>