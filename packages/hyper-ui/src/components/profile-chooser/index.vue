<template>
    <div
        class="profile-chooser"
        :class="{ 'profile-chooser--dark-mode': darkMode, 'profile-chooser--light-mode': !darkMode }">
        <div
            class="profile-chooser__overlay"
            @click="closeProfileChooser" />
        <div class="profile-chooser__wrapper">
            <div class="profile-chooser__content">
                <HeadingBar
                    slot="title"
                    class="mb-0"
                    name="Choose Profile"
                    :showBackground="false" />
                <div class="profile-slider">
                    <Swiper :options="options">
                        <SwiperSlide
                            v-for="profile in profiles"
                            :key="profile.id">
                            <div
                                class="user-card__container-link"
                                @click="setDefault(profile)">
                                <UserCard
                                    :user="profile"
                                    :previewMode="!profile.edit"
                                    :class="{
                                        'default': activeProfile && profile.id == activeProfile.id
                                    }" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div
                        v-if="profiles.length > 3"
                        slot="button-prev"
                        class="swiper-button-prev" />
                    <div
                        v-if="profiles.length > 3"
                        slot="button-next"
                        class="swiper-button-next" />
                </div>
                <HeadingBar
                    slot="title"
                    class="mb-0"
                    name=""
                    :showBackground="false" />
                <div class="profile-chooser__actions">
                    <Button
                        class="profile-chooser__back-button Button--lg outline-white"
                        @click="closeProfileChooser">
                        Back
                    </Button>
                    <Button
                        class="profile-chooser__ok-button Button--lg outline-white"
                        @click="closeProfileChooser">
                        OK
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'Button': () => import('../../').then(m => m.Button),
        'UserCard': () => import('../../').then(m => m.UserCard)
    },
    props: {
        darkMode: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            options: {
                slidesPerView: 4,
                spaceBetween: 0,
                navigation: {
                    nextEl: '.profile-chooser__wrapper .swiper-button-next',
                    prevEl: '.profile-chooser__wrapper .swiper-button-prev'
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    }
                }
            }
        }
    },
    computed: {
        profiles() {
            return Object.values(this.$store.state.profiles.keyedById)
        },
        activeProfile() {
            return this.$store.state.application.activeProfile
        }
    },
    methods: {
        closeProfileChooser() {
            this.$store.commit('application/showProfileChooser', false)
        },
        setDefault(profile) {
            this.$store.commit(
                'update',
                ['application/activeProfile', profile]
            )

            this.$store.state.application.developerMode = profile.role === 'developer'
        }
    }
}
</script>

<style lang="scss" scoped>
    .profile-chooser {
    }

    .profile-chooser__overlay{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background: rgba(0, 0, 0, 0.2);
    }

    .profile-chooser__wrapper{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 130;
        display: flex;
        justify-content: center;
        padding: 20px 30px;

        .profile-chooser--light-mode & {
            background: rgba(0, 0, 0, 0.6);
        }

        .profile-chooser--dark-mode & {
            background: #30314c;
        }
    }

    .profile-chooser__content{
        width: 100%;
        .profile-slider{
            position: relative;
            padding: 0 40px;
            .swiper-slide{
                padding: 15px;
                .profile-block{
                    transition: transform .2s ease;
                    z-index: 8;
                    &.default{
                        width: calc( 100% - 22px );
                        float: right;
                    }
                    &:hover{
                        transform: scale(1.05);
                        cursor: pointer;
                        z-index: 9;
                    }
                }
            }
        }
    }

    .profile-chooser__actions {
        height: 50px;
        padding: 20px 0;
    }

    .profile-chooser__back-button {
        float: left;
    }

    .profile-chooser__ok-button {
        float: right;
    }

    .user-card__container-link{
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }

    .swiper-button-prev, .swiper-button-next {
        filter: brightness(10) grayscale(1);
    }
</style>
