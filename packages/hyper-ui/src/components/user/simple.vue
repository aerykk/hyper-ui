<template>
    <div class="user-simple">
        <Img
            class="user-simple__img"
            :src="user.img" />
        {{ user.name }}
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.user-simple {
    display: flex;
    align-items: center;
    font-weight: bold;
    &__img {
        width: 24px;
        height: 24px;
        margin-right: 5px;
        border-radius: 100%;
    }
}
</style>


