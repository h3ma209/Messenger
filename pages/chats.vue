<template>

    <v-row class="no-gutters">
        <v-col>
            <v-card max-width="900" max-height="700" width="500" class="mx-auto d-flex flex-column">
                <v-card-title>
                    Main Chat
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text class="flex-grow-1 overflow-y-auto">
                    <div v-for="(msg, i) in msgs" :key='i'>
                        <div :class="{ 'd-flex flex-row-reverse ': msg.socket_id == socket_id }">
                            <div>
                                <span class="d-block">-{{msg.username}}</span>

                                <v-chip :color="msg.socket_id == socket_id ? 'primary' : ''" dark style="height:auto;white-space: normal;" class="pa-4 mb-2 text-center">
                                    {{ msg.content }}
                                    <sub class="ml-2" style="font-size: 0.5rem;">{{ msg.created_at }}</sub>

                                </v-chip>

                            </div>
                        </div>
                    </div>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text>
                    <v-form ref="form" lazy-validation>
                        <div class="d-flex">
                            <v-text-field label="Write a message" v-model="formMessage" class="ma-2" required></v-text-field>
                            <v-btn class="ma-2 pa-2 text-center" @click="sendMsg()" icon>
                                <v-icon color="primary">mdi-send</v-icon>
                            </v-btn>
                        </div>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>

</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
    setup() {

    },
    data() {
        return {
            username: '',
            formMessage: '',
            socket_id: '',
            msgs: [
            ]
        }
    },
    created() {
        this.username = this.getUsername()
        this.description = this.getDescription()
    },
    mounted() {
        // console.log(this.$store.state)
        this.socket = this.$root.socket
        console.log(this.socket)
        this.socket.emit('sendCreds', { username: this.username, description: this.description })
        this.socket.on('getSocketId', (data) => {
            this.socket_id = data
        })
        this.socket.on('getMsgs', (data) => {
            console.log('msgssgsgs')
            this.msgs = data
        })
        this.socket.on('updateMsgs', (data) => {
            console.log('msgssgsgs')
            this.msgs = data
            
        })

    },
    methods: {
        sendMsg() {
            this.socket.emit('sendMsg', { socket_id: this.socket_id, content: this.formMessage, username: this.username })
            this.formMessage = ''
        },
        ...mapMutations(['setUsername', 'setDescription']),
        ...mapGetters(['getUsername', 'getDescription']),
    }
}
</script>