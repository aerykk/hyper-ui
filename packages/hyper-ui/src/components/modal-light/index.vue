<template>
    <div
        class="modal-light"
        @click.self="$emit('close')">
        <button
            class="modal-light__btn"
            @click="$emit('close')">
            &times;
        </button>
        <div class="modal-light__content">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .modal-light {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1000;
        width: 100%;
        height: 100%;
        background-color: rgba(1,1,1,.9);
        animation: opacity .5s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .modal-light__btn {
        position: absolute;
        right: 30px;
        top: 30px;
        font-size: 30px;
        border-radius: 50%;
        border: 1px solid rgba(255,255,255,.8);
        width: 50px;
        height: 50px;
        color: #fff;
        font-weight: normal;
        background-color: transparent;
        outline: none;
        transition: background-color .2s ease;
        &:hover {
            cursor: pointer;
            border-color: transparent;
            background-color: #ff4757;
        }
    }

    .modal-light__content {
        animation: slide-in .8s ease;
    }

    @keyframes opacity {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slide-in {
        0% {
            transform: translateY(100vh) scale(0.8);
        }
        60% {
            transform: translateY(-5vh);
        }
        100% {
            transform: translateY(0) scale(1);
        }
    }
</style>

