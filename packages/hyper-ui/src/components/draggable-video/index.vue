<template>
    <transition name="fade">
        <Draggable
            v-if="active"
            :w="width"
            :h="height"
            :x="20"
            :y="20"
            :resizable="false"
            :z="99999999">
            <div class="video-container">
                <div class="video-container__wrapper">
                    <div class="video-container__video">
                        <video
                            ref="video"
                            autoplay
                            @timeupdate=""
                            @loadeddata="setCurrentTime"
                            @playing=" isPlaying = true ">
                            <source
                                :src="isVideo.src"
                                type="video/mp4">
                            Your browser does not support HTML5 video.
                        </video>
                    </div>
                    <div class="video-control">
                        <Button
                            v-if="isPlaying"
                            status="none"
                            class="video-control__btn video-control__btn--expand"
                            @click="fullscreen">
                            <i class="fas fa-expand" />
                        </Button>
                        <Button
                            v-if="!isPlaying"
                            status="none"
                            class="video-control__btn video-control__btn--play"
                            @click="play">
                            <i class="fas fa-play" />
                        </Button>
                        <Button
                            v-if="isPlaying"
                            status="none"
                            class="video-control__btn video-control__btn--play"
                            @click="pause">
                            <i class="fas fa-pause" />
                        </Button>
                        <Button
                            status="none"
                            class="video-control__btn video-control__btn--times"
                            @click="destroy">
                            <i class="fas fa-times" />
                        </Button>
                    </div>
                </div>
            </div>
        </Draggable>
    </transition>
</template>

<script>
export default {
    components: {
        'Button': () => import('../../').then(m => m.Button),
        'Draggable': () => import('../../').then(m => m.Draggable)
    },
    props: {
        active: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            width: 285,
            height: 160,
            isPlaying: false
        }
    },
    computed: {
        isVideo() {
            return this.$store.state.application.video
        }
    },
    created() {
        if (!this.isVideo.src) {
            this.isVideo.showPopup = false
        }
    },
    methods: {
        destroy() {
            this.$emit('close')
            this.isVideo.showPopup = false
        },
        play() {
            this.$refs.video.play()
            this.isPlaying = true
        },
        pause() {
            this.$refs.video.pause()
            this.isPlaying = false
        },
        fullscreen() {
            this.$refs.video.requestFullscreen()
        },
        setCurrentTime() {
            this.$refs.video.currentTime = this.isVideo.currentTime
        }
    }
}
</script>

<style lang="scss" scoped>
    .video-container {
        width: 100%;
        height: 100%;
        display: flex;
        cursor: move;
    }
    .video-container__wrapper {
        background: rgba(0, 0, 0, .4);
        border-radius: 5px;
        overflow: hidden;
        z-index: 999999999999999999999999;
        position: relative;
        display: flex;
        width: 100%;
    }
    .video-container__video{
        display: flex;
        width: 100%;
        height: 100%;
        video{
            width: 100%;
            height: auto;
        }
    }

    .video-control {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10;
        font-size: 2rem;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        &:hover{
            opacity: 1;
        }
    }

    .video-control__btn {
        margin: 0 10px;
        opacity: .7;
        text-shadow: 0 0 5px #000, 0 0 5px #000;
        &:hover {
            opacity: 1;
            cursor: pointer;
        }
    }

    .video-control__btn--times {
        position: absolute;
        top: 10px;
        right: 10px;
        opacity: .5;
        margin: 0;
    }
</style>
