<template>
    <transition name="fade">
        <div
            v-if="!settings.client.cookiePolicyAccepted"
            class="cookie-policy">
            <p class="p-0 m-0">
                By using this website, you agree to our
                <Button
                    status="plain"
                    class="p-0 m-0"
                    @click="showPopup">
                    cookie policy
                </Button>
            </p>
            <Button
                status="info"
                class="margin-left-20"
                iconHide
                @click="updateClientSettings()">
                Dismiss
            </Button>
            <Popup
                :activated="show"
                title="Cookie Policy"
                @close="closePopup">
                <p>
                    We use cookies to make interactions with our websites and services easy and meaningful,
                    to better understand how they are used and to tailor advertising.
                </p>
                <p>
                    You can <Button
                        status="plain"
                        href="#">
                        read more
                    </Button>
                    and <Button
                        status="plain"
                        href="#">
                        make you cookies choices here
                    </Button>.
                </p>
                <p>
                    By continuing to use this site you are giving
                    us your consent to do this.
                </p>
                <template slot="footer">
                    <div class="text-right w-100">
                        <Button
                            status="success"
                            iconHide
                            @click="updateClientSettings()">
                            Accept
                        </Button>
                    </div>
                </template>
            </Popup>
        </div>
    </transition>
</template>

<script>
export default {
    components: {
        'Popup': () => import('../../').then(m => m.Popup),
        'Button': () => import('../../').then(m => m.Button)
    },
    data() {
        return {
            show: false
        }
    },
    methods: {
        updateClientSettings() {
            this.$store.commit('application/updateClientSettings', { key: 'cookiePolicyAccepted' })
            this.show = false
        },
        showPopup() {
            this.show = true
        },
        closePopup() {
            this.show = false
        }
    },
    computed: {
        settings() {
            return this.$store.state.application.settings
        }
    }
}
</script>

<style lang="scss">
.cookie-policy{
    position: fixed;
    right: 55px;
    bottom: 20px;
    background: #1c1d30;
    color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .13);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    align-items: center;
    z-index: 999;
    justify-content: space-between;
    @media (max-width: 1400px) {
        right: 15px;
        bottom: 15px;
    }
    @media (max-width: 767px) {
        right: 0;
        left: 0;
        bottom: 0;
        border-radius: 0;
    }
}
</style>
