<template>
    <BasicPopup
        :activated="activated"
        :width="width">
        <div
            slot="body"
            class="game-installer">
            <div class="game-installer__header">
                <div class="game-installer__game-img">
                    <Img :src="img" />
                </div>
                <div class="game-installer__game-description">
                    <div class="h5 mb-0 pb-0 font-weight-bold">
                        {{ name }}
                    </div>
                    <p>
                        <slot />
                    </p>
                    <div class="game-operations-support">
                        Systems
                        <i
                            v-if="mac"
                            class="fab fa-apple" />
                        <i
                            v-if="linux"
                            class="fab fa-linux" />
                        <i
                            v-if="win"
                            class="fab fa-windows" />
                    </div>
                </div>
            </div>
            <div class="game-installer__body">
                <div class="game-installer__select-row">
                    <label>
                        Install
                    </label>
                    <div class="dropdown">
                        <a
                            class="btn dropdown-toggle"
                            href="#"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            <i class="fas fa-gamepad" />
                            {{ file }}
                        </a>
                        <div class="dropdown-menu">
                            <ul class="list-unstyled mb-0 p-0">
                                <li
                                    v-for="(file, index) in filesList"
                                    :key="index"
                                    @click="choosenGame(file)">
                                    {{ name }} ({{ makeCapitalize(file.platform) }}, {{ file.size | numeralFormat('0.0') }})
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="game-installer__select-row">
                    <label>
                        To location
                    </label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <i class="fas fa-folder-open" />
                        </div>
                        <select class="custom-select">
                            <option selected>
                                Choose...
                            </option>
                            <option value="1">
                                One
                            </option>
                            <option value="2">
                                Two
                            </option>
                            <option value="3">
                                Three
                            </option>
                        </select>
                    </div>
                </div>
                <div class="game-installer__space">
                    <div>
                        Disk space required <strong>251</strong> MiB
                    </div>
                    <div>
                        Disk space available <strong>25</strong> GiB
                        <i
                            class="fas fa-check-circle"
                            style="color: #43C981" />
                    </div>
                </div>
                <div class="game-installer__footer">
                    <a
                        href="#"
                        class="button btn-cancel">
                        Cancel
                    </a>
                    <a
                        href="#"
                        class="button btn-download">
                        <i class="fas fa-download" /> Install
                    </a>
                </div>
            </div>
        </div>
    </BasicPopup>
</template>

<script>
export default {
    components: {
        'BasicPopup': () => import('../../').then(m => m.BasicPopup),
        'Dropdown': () => import('../../').then(m => m.Dropdown)
    },
    props: {
        activated: {
            type: Boolean,
            default: false
        },
        width: {
            type: String,
            default: '500'
        },
        name: {
            type: String,
            default: null
        },
        mac: {
            type: Boolean,
            default: true
        },
        win: {
            type: Boolean,
            default: true
        },
        linux: {
            type: Boolean,
            default: true
        },
        img: {
            type: String,
            default: null
        },
        filesList: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            file: 'Choose the game'
        }
    },
    methods: {
        choosenGame() {
        },
        makeCapitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    }
}
</script>

<style lang="scss" scoped>
    .game-installer__header{
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-wrap: nowrap;
        margin-bottom: 10px;
    }
    .game-installer__body{
        display: flex;
        flex-direction: column;
    }
    .game-installer__game-img{
        width: 30%;
        img{
            width: 100%;
            height: auto;
        }
    }
    .game-installer__game-description{
        width: 70%;
        padding: 5px 0 5px 15px;
        flex-direction: column;
        display: flex;
        p{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
        .game-operations-support{
            margin-top: auto;
            opacity: .7;
            i{
                margin-left: 3px;
                &:first-child{
                    margin-left: 10px;
                }
            }
        }
    }
    .game-installer__select-row{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        label{
            width: 130px;
            margin: 0;
        }
        .input-group{
            display: flex;
            align-items: center;
            width: calc( 100% - 100px );
            margin: 0;
            border: 1px solid rgba(255, 255, 255, .1);
            select{
                padding: 5px;
                background: rgba(0, 0, 0, .3);
                color: #fff;
                border: none;
                outline: none;
                user-select: none;
                box-shadow: none;
            }
            .input-group-prepend{
                padding: 0 10px;
                background: rgba(0, 0, 0, .3);
                font-size: 14px;
                line-height: 30px;
                display: inline-block;
            }
        }
        .dropdown{
            display: flex;
            width: calc( 100% - 100px );
            border: 1px solid rgba(255, 255, 255, .1);
            background: rgba(0, 0, 0, .3);
            position: relative;
            .btn{
                display: flex;
                align-items: center;
                color: #fff;
                padding: 0 10px;
                width: 100%;
                line-height: 30px;
                font-size: 13px;
                user-select: none;
                box-shadow: none;
                i{
                    margin-right: 10px;
                    font-size: 14px;
                }
                &:after{
                    margin-left: auto;
                }
            }
            .dropdown-menu{
                right: 0;
                border: 1px solid rgba(255, 255, 255, .1);
                background: rgba(0, 0, 0, .85);
                border-radius: 0 0 5px 5px;
                margin: 0;
                color: #fff;
                padding: 0px;
                transform: translate3d(0, 30px, 0)!important;
                li{
                    line-height: 28px;
                    padding: 0 10px;
                    cursor: pointer;
                    &:hover{
                        background: rgba(255, 255, 255, .15);
                    }
                }
            }
        }
    }
    .game-installer__space{
        margin: 20px 0 10px;
        display: flex;
        flex-direction: column;
    }
    .game-installer__footer{
        display: flex;
        padding-top: 20px;
        margin-top: 10px;
        border-top: 1px solid rgba(255, 255, 255, .1);
        justify-content: space-between;
        align-items: center;
        .button{
            padding: 2px 20px;
            border-radius: 3px;
            color: #fff;
            text-shadow: 0 0 3px rgba(0, 0, 0, .5);
            border-top-width: 2px!important;
            &.btn-cancel{
                border: 1px solid #a3424b;
                /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#67272c+0,551e23+100 */
                background: rgb(103,39,44); /* Old browsers */
                background: linear-gradient(to bottom, rgba(103,39,44,1) 0%,rgba(85,30,35,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                &:hover{
                    background: #a3424b;
                    text-decoration: none;
                }
            }
            &.btn-download{
                border: 1px solid #c0525d;
                /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ae343f+0,8d2a33+100 */
                background: rgb(174,52,63); /* Old browsers */
                background: linear-gradient(to bottom, rgba(174,52,63,1) 0%,rgba(141,42,51,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
                &:hover{
                    background: #c0525d;
                    text-decoration: none;
                }
            }
        }
    }
</style>
