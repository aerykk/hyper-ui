<template>
    <div class="flex flex-column col col-9">
        <main class="chat flex flex-column flex-1 clear">
            <SingleMessage
                v-for="message in messages"
                v-cloak
                :key="message.id"
                :message="message" />
        </main>
        <ComposeMessage :createMessage="createMessage" />
    </div>
</template>

<script>
import ComposeMessage from './composer.vue'
import SingleMessage from './message.vue'

export default {
    components: {
        'ComposeMessage': ComposeMessage,
        'SingleMessage': SingleMessage
    },
    props: {
        messages: {
            type: Array,
            default: () => []
        },
        createMessage: Function
    },
    data() {
        return {
        }
    },
    watch: {
        messages() {
            this.messages.length && this.scrollToBottom()
        }
    },
    methods: {
        scrollToBottom() {
            this.$nextTick(() => {
                const node = this.$el.getElementsByClassName('chat')[0]
                node.scrollTop = node.scrollHeight
            })
        }
    }
}
</script>

<style>
main.chat {
  padding: 10px;
  overflow-y: scroll;
}

main.chat img.avatar {
  border-radius: 100%;
  height: 45px;
  width: 45px;
  flex: none;
}

main.chat .message {
  flex: 0 0 auto;
}

main.chat .message img.avatar {
  margin-right: 10px;
}

main.chat .message p.message-header {
  margin: 0;
  font-size: 0.9em;
}

main.chat .message p.message-header span.sent-date {
  color: #969696;
}
</style>
