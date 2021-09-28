<template>
    <div class="login d-flex justify-center align-center fill-height">
        <v-parallax class="fill-height" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            <v-layout align-center justify-center class="form">
                <v-flex xs10 sm6 md5 lg4>

                    <v-form ref="form" v-model="valid" lazy-validation class="pa-6 rounded elevation-2">
                        <h1 class="black--text text-center ma-5">Welcome</h1>
                        <v-text-field class="ma-2" v-model="name" label="Username" required></v-text-field>
                        <v-text-field class="ma-2" v-model="description" label="Describe yourself" required></v-text-field>
                        <v-btn class="ma-2" @click="enterUser()">Enter</v-btn>
                    </v-form>
                </v-flex>
            </v-layout>

        </v-parallax>

    </div>

</template>

<script>
export default {
    data() {
        return {
            name: '',
            description: '',
            valid: false,
        }
    },
    setup() {

    },
    mounted() {
        this.socket = this.$nuxtSocket({
            channel: '/index'
        })
        this.socket
            .on('someEvent', (msg, cb) => {
                window.alert('event')
            })
    },
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