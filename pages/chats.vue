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
                        <div :class="{ 'd-flex flex-row-reverse ': msg.me }">
                            <div>
                                <span class="d-block">-{{msg.username}}</span>

                                <v-chip :color="msg.me ? 'primary' : ''" dark style="height:auto;white-space: normal;" class="pa-4 mb-2 text-center">
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
export default {
    setup() {

    },
    data() {
        return {

            formMessage: '',
            msgs: [
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'hema', content: 'hey this is test', me: true, },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'john', content: 'hey this is test' },
                { username: 'hema', content: 'hey this is test', me: true, },

            ]
        }
    },
    mounted() {
        this.socket = this.$nuxtSocket({
            name:'chat',
            channel:'/',
            reconnection:false,
        })

    },
    methods: {
        sendMsg() {
            this.socket.emit('test', {data:'hey'})
        }
    }
}
</script>