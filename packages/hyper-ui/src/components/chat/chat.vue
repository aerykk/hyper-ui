<template>
    <div
        id="chat"
        class="flex flex-column">
        <div class="col-12" style="height: 100%;">
            <ChatBase style="height: 100%" :channelInfo="channelIfo">
                <template slot="sidebar">
                    <ChatGroupSidebar :channels="channels" @onChannelChange="onChannelChange($event)" />
                </template>
                <ChatGroup :currentUser="user" :sendMessage="createMessage">
                    <template slot="messages">
                        <ChatMessage v-for="msg in messages" :key="msg.id" :text="msg.value" :time="msg.createdAt" :user="msg.owner" />
                    </template>
                    <template slot="users">
                        <ChatUser
                            v-for="user in channelUsers"
                            :key="user.id"
                            :isAdmin="user.admin"
                            :action="true"
                            :avatar="user.avatar"
                            :name="user.name"
                            :game="user.game"
                            :status="user.status" />
                    </template>
                </ChatGroup>
            </ChatBase>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'ChatBase': () => import('../../').then(m => m.ChatBase),
        'ChatMessage': () => import('../../').then(m => m.ChatMessage),
        'ChatUser': () => import('../../').then(m => m.ChatUser),
        'ChatGroupSidebar': () => import('../../').then(m => m.ChatGroupSidebar),
        'ChatGroup': () => import('../../').then(m => m.ChatGroup)
    },

    props: {
    },

    data: () => ({
        channels: [],
        channelIndex: 0,
        activeChannel: null,
        messagesData: [],
        channelUsers: [],
        channelIfo: {}
    }),

    computed: {
        user() {
            return this.$store.state.auth.user
        },

        messages() {
            return this.$store.getters['messages/list']
        }
    },


    async created() {
        await this.updateChannels()
        this.updateChannelInfo()
        this.updateChannelMessages()

        this.$api.service('messages').on('created', message => {
            console.log('Someone created a message', message)
        })
        // this.$feathers.service('messages').on('created', function(message) {debugger
        //     console.log('Someone created a message', message)
        // })
        // console.log(this.$feathers.service, this.$feathers.service('messages'), this.$feathers.io.io)
        // console.log(2)
        // this.$feathers.io.io.on('messages created', function(message) {debugger
        //     console.log('Someone created a message', message)
        // })
        // console.log(3)
        // this.$feathers.on('messages created', function(message) {debugger
        //     console.log('Someone created a message', message)
        // })
    },

    methods: {

        async onChannelChange(channelIndex) {
            this.channelIndex = channelIndex
            this.activeChannel = this.channels[this.channelIndex]
            this.updateChannelInfo()
            this.updateChannelMessages()
        },

        async createMessage(data) {
            const result = await this.$store.dispatch('messages/create', {
                value: data,
                discussionId: this.activeChannel.id,
                ownerId: this.$store.state.application.activeProfile.id
            })

            // this.messages.push(result)
            return result
        },

        async updateChannelMessages() {
            if (!this.activeChannel) {
                return
            }

            this.messagesData = (await this.$store.dispatch('messages/find', {
                query: {
                    'discussion.id': this.activeChannel.id,
                    $sort: {
                        createdAt: -1
                    },
                    $limit: 25
                }
            })).data.reverse()
        },

        async updateChannelInfo() {
            if (!this.activeChannel) {
                return
            }

            const { chat, ...channel } = await this.$store.dispatch('discussions/get', [
                this.activeChannel.id,
                {
                    query: {
                        $eager: '[chat]'
                    }
                }
            ])
            this.channelUsers = chat
            this.channelIfo = channel
        },

        async updateChannels() {
            this.channels = (await this.$store.dispatch('discussions/find', {
                query: {
                    type: { $in: ['chat', 'both'] }
                }
            })).data

            this.activeChannel = this.channels[this.channelIndex]
        }
    }
}
</script>

<style scoped>
#chat {
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: 10;
    top: 16px;
    left: 55px;
}

/* Header */
header.title-bar {
    padding: 10px 0;
    border-bottom: 1px solid #f1f1f1;
}

header.title-bar img.logo {
    width: 100%;
    max-width: 140px;
}

header.title-bar span.title {
    color: #969696;
    font-weight: 100;
    text-transform: uppercase;
    font-size: 1.2em;
    margin-left: 7px;
}
</style>
