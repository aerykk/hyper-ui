<template>
    <div>
        <div>
            <span>{{ name }}</span>
            <span>{{ productName }}</span>
        </div>
        <Img :src="image" />
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        productName: String,
        image: String,
    }
}
</script>

<style lang="scss" scoped>

</style>
