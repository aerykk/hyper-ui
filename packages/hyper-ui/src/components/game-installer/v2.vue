<template>
    <div class="game-installer">
        <div class="game-installer__product-preview">
            <Img
                class="game-installer__image"
                :src="productImagesMediumTile" />
            <div class="game-installer__description">
                <h3>{{ productName }}</h3>
                <p v-html="description" />
                <Icon
                    v-for="(reqs, index) in productSystemRequirements"
                    :key="index"
                    cat="fab"
                    :name="getSysName(reqs.os)" />
            </div>
        </div>

        <div class="game-installer__opt-wrapper">
            <span class="game-installer__opt-title">
                Location:
            </span>
            <div class="game-installer__input-wrapper">
                <Icon name="folder-open" />
                <input
                    v-model="path"
                    class="game-installer__input"
                    list="saved-paths">
                <datalist id="saved-paths">
                    <option
                        v-for="(path, index) in savedPaths"
                        :key="index">
                        {{ path }}
                    </option>
                </datalist>
            </div>
        </div>


        <div class="game-installer__space-info">
            <p>
                Disk space required
                <span class="game-installer__size">512 MiB</span>
            </p>
            <p>
                Disk space available
                <span class="game-installer__size">53 GiB</span>
            </p>
        </div>


        <div class="game-installer__buttons-wrapper">
            <button
                type="button"
                class="game-installer__button"
                @click="$emit('cancel')">
                Cancel
            </button>
            <button
                type="button"
                class="game-installer__button--install"
                :class="{ 'disabled': !path }">
                <Icon name="hdd" />
                <span>Install</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GameInstaller',
    components: {
        'Dropdown': () => import('../../').then(m => m.Dropdown),
        'List': () => import('../../').then(m => m.List)
    },
    props: {
        productImagesMediumTile: {
            type: String,
            default: null
        },
        productName: {
            type: String,
            default: null
        },
        productSystemRequirements: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            path: ''
        }
    },
    computed: {
        description() {
            // return this.product.content.substring(0, 150) + '...';
        },
        savedPaths() {
            // return this.$store.state.application.account.savedPaths;
        }
    },
    methods: {
        getSysName(os) {
            switch (os) {
            case 'win':
                return 'windows'
            case 'mac':
                return 'apple'
            case 'linux':
                return 'linux'
            default: return ''
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .game-installer__product-preview {
        background: rgba(255,255,255,.025);
        display: flex;
        border: 1px solid rgba(255,255,255,.08);
        margin-bottom: 20px;
        .fab {
            margin-right: 10px;
        }
    }
    .game-installer__image {
        width: 160px;
        max-height: 160px;
        object-fit: cover;
        background-position: 0 0;
    }
    .game-installer__description {
        padding: 20px;
    }

    .game-installer__input-wrapper {
        display: flex;
        align-items: center;
        background-color: #28283B;
        padding: 4px 10px;
        justify-content: space-between;
        border: 1px solid rgba(255,255,255,.2);
        width: 100%;
        .fas {
            font-size: 16px;
        }
        .game-installer__input {
            width: 100%;
            background: #28283B;
            padding: 5px;
            margin-left: 10px;
            border: none;
        }
    }

    .game-installer__opt-wrapper {
        display: flex;
        align-items: center;
        .game-installer__opt-title {
            margin-right: 30px;
        }
    }

    .game-installer__space-info {
        margin: 35px 0;
        .game-installer__size {
            color: #fff;
            margin-left: 4px;
        }
    }

    .game-installer__buttons-wrapper {
        display: flex;
        justify-content: space-between;
        .game-installer__button {
            padding: 7px 20px;
            border-radius: 4px;
            border: 1px solid #8c92ff;
            border-top-width: 2px;
            background: linear-gradient(-115deg,#30336b, #130f40);
            color: #fff;
            cursor: pointer;
            text-shadow: 2px 2px 0px rgba(1,1,1,.4);
        }
        .game-installer__button--install {
            @extend .game-installer__button;
            box-shadow: 0 0 30px 0 rgba(140, 146, 255, .45);
            .fas {
                margin-right: 5px;
            }
        }
        .disabled {
            pointer-events: none;
            filter: grayscale(100%);
            box-shadow: none;
        }
    }
</style>

