<template>
    <div class="browser-ui">
        <div class="browser-ui__nav mr-2">
            <Button
                status="plain"
                class="p-0 mr-2"
                @click="back">
                <i class="fas fa-arrow-left" />
            </Button>
            <Button
                status="plain"
                class="p-0 ml-2"
                @click="forward">
                <i class="fas fa-arrow-right" />
            </Button>
        </div>
        <div class="browser-ui__search-bar">
            <Dropdown class="browser-ui__lock-dropdown">
                <template slot="title">
                    <span class="lock-dropdown__icon">
                        <i class="fa fa-lock" />
                    </span>
                </template>
                <div class="text-success h4 mb-3">
                    Your connection is secure
                </div>
                <p>
                    Vivamus vel eleifend erat, at posuere eros. Suspendisse pharetra elementum sollicitudin. Sed tempus
                    odio mi, at consequat ante laoreet quis.
                </p>
                <hr>
                <Button
                    status="plain"
                    icon="cookie-bite"
                    class="text-dark">
                    <span class="ml-3">
                        Cookies
                    </span>
                </Button>
                <Button
                    status="plain"
                    icon="cookie-bite"
                    class="text-dark">
                    <span class="ml-3">
                        Settings
                    </span>
                </Button>
            </Dropdown>

            <Input
                ref="searchInput"
                v-model="searchQuery"
                @focus="$event.target.select()" />

            <Button
                status="plain"
                class="p-0 ml-3">
                <i class="fas fa-cog" />
            </Button>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        'Button': () => import('../../').then(m => m.Button),
        'Dropdown': () => import('../../').then(m => m.Dropdown)
    },
    data() {
        return {
            searchQuery: document.location.href
        }
    },
    methods: {
        selectQuery() {
            // this.$refs.searchInput.select()
            console.log(this.$refs.searchInput)
        },
        back() {
            window.history.back()
        },
        forward() {
            window.history.forward()
        }
    }
}
</script>

<style lang="scss" scoped>
    .browser-ui {
        display: flex;
        width: 100%;
        padding: 5px;
        align-items: center;
        flex-wrap: nowrap;
    }

    .browser-ui__nav {
        display: flex;
    }

    .browser-ui__search-bar {
        display: flex;
        align-items: center;
        border-radius: 25px;
        background: rgba(0, 0, 0, .2);
        padding: 0 8px;
        width: 100%;
        input {
            background: transparent;
            border: unset;
            padding: 0;
            text-overflow: ellipsis;
        }
    }

    .browser-ui__lock-dropdown {
        margin: 0 10px 0 5px;
        padding-right: 10px;
        border-right: 1px solid rgba(255, 255, 255, .1);
        .lock-dropdown__icon {
            font-size: 12px;
            cursor: pointer;
            opacity: .6;
            &:hover {
                opacity: 1;
            }
        }
        ul {
            padding: 0;
            margin: 0;
            li {
                list-style: none;
            }
        }
    }
</style>
