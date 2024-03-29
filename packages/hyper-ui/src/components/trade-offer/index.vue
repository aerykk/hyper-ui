<template>
    <div
        class="trade-offer"
        :class="{ 'trade-offer--new': offer.new }">
        <div class="trade-offer__date">
            <span>
                <span
                    v-if="offer.new"
                    class="trade-offer__status">NEW</span>
                {{ offer.createdAt | formatDate }} - {{ offer.createdAt | timeAgo }}
            </span>
            <span>
                Expires {{ offer.createdAt | addTime(2, 'weeks') | timeAgo }}
            </span>
        </div>
        <div
            class="trade-offer__content"
            @click="expandDetails()">
            <Author
                :name="offer.contractor.name"
                :img="offer.contractor.img" />
            <span>
                Trade {{ offer.yourOffer.length }} for {{ offer.contractorOffer.length }} assets
            </span>
            <div>
                <Button
                    status="success"
                    iconHide>
                    Accept
                </Button>
                <Button
                    status="danger"
                    iconHide>
                    Decline
                </Button>
            </div>
        </div>
        <transition name="slide-in-top">
            <div
                v-if="showDetails"
                class="trade-offer__details">
                <h4>Offer details</h4>
                <table
                    v-for="(assets, assetsKey) in assets"
                    :key="assetsKey"
                    class="trade-offer__assets-table">
                    <thead>
                        <th>{{ assetsKey }} items</th>
                        <th>Total value {{ totalVal[assetsKey] | convertCurrency }}</th>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(asset, index) in assets"
                            :key="index">
                            <td>
                                <Tooltip>
                                    <AssetPreview
                                        slot="tooltip"
                                        :asset="asset" />
                                    <div class="asset__info">
                                        <Img
                                            :src="asset.image"
                                            class="asset__image" />
                                        {{ asset.name }}
                                    </div>
                                </Tooltip>
                            </td>
                            <td>{{ asset.price.current | convertCurrency }}</td>
                        </tr>
                    </tbody>
                </table>
                <table class="trade-offer__summary-table">
                    <thead>
                        <tr>
                            <th colspan="2">
                                Summary:
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ contrName }} items:</td>
                            <td>- {{ totalVal[contrName] | convertCurrency }}</td> <blo></blo>
                        </tr>
                        <tr>
                            <td>Yours items:</td>
                            <td>+ {{ totalVal.Yours | convertCurrency }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Final balance:</td>
                            <td>
                                <span
                                    class="total-balance"
                                    :class="[ finalBalance > 0
                                        ? 'total-balance--positive'
                                        : finalBalance < 0
                                            ? 'total-balance--negative'
                                            : ''
                                    ]">
                                    {{ finalBalance > 0 ? '+' : '' }}
                                    {{ finalBalance }}$
                                </span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
                <div class="trade-offer__action">
                    <Button
                        status="info"
                        iconHide
                        @click="$router.push({
                            path: '/marketplace/trade/' + offer.id
                        })">
                        Go to transaction
                    </Button>
                    <span>
                        <Button
                            status="success"
                            iconHide>Accept</Button>
                        <Button
                            status="danger"
                            iconHide>Decline</Button>
                    </span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'TradeOffer',
    components: {
        'Button': () => import('../../').then(m => m.Button),
        'Author': () => import('../../').then(m => m.Author),
        'Tooltip': () => import('../../').then(m => m.Tooltip),
        'AssetPreview': () => import('../../').then(m => m.AssetPreview)
    },
    props: {
        offer: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            showDetails: false
        }
    },
    computed: {
        totalVal() {
            const { assets, round } = this
            return Object.entries(assets).reduce((total, [owner, assets]) => ({
                ...total,
                [owner]: round(
                    assets.reduce((price, asset) => price += asset.price.current, 0)
                )
            }), {})
        },
        finalBalance() {
            return this.round(this.totalVal.Yours - this.totalVal[this.contrName])
        },
        contrName() {
            return `${this.offer.contractor.name}s`
        },
        assets() {
            return {
                Yours: this.offer.yourOffer,
                [this.contrName]: this.offer.contractorOffer
            }
        }
    },
    methods: {
        expandDetails() {
            this.showDetails = !this.showDetails
            if (this.offer.new) this.$emit('wasSeen')
        },
        round(num) {
            return Math.floor(num * 100) / 100
        }
    }
}
</script>

<style lang="scss" scoped>
    .trade-offer {
        margin-bottom: 25px;
        border-radius: 4px;
    }
    $new: #5D75F7;
    .trade-offer__status {
        background: $new;
        font-size: 11px;
        border-radius: 4px;
        padding: 2px;
        font-weight: bold;
        color: #fff;
        margin-right: 4px;
    }
    .trade-offer--new .trade-offer__content {
        border-color: $new;
    }
    .trade-offer__date {
        color: rgba(255,255,255,.6);
        font-size: 13px;
        margin-bottom: 5px;
        display: flex;
        justify-content: space-between;
    }
    .trade-offer__content {
        background: rgba(1,1,1,.25);
        border: 1px solid transparent;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        border-radius: 4px;
        &:hover {
            background: rgba(1,1,1,.15);
        }
    }
    .trade-offer__details {
        border-top: 1px solid rgba(255,255,255,.1);
        padding: 20px;
        background-image: linear-gradient(to bottom, #2c2e47, #404363);
        border-radius: 0 0 4px 4px;
    }
    .trade-offer__assets-table {
        width: 100%;
        margin: 30px 0;
        th {
            padding: 5px 0;
        }
        td {
            padding: 5px 0;
            color: rgba(255,255,255,.6);
        }
        td:last-child, th:last-child {
            text-align: right;
        }
        .asset__info {
            display: flex;
            align-items: center;
        }
        .asset__image {
            width: 24px;
            height: 24px;
            border-radius: 4px;
            margin-right: 10px;
        }
    }
    .trade-offer__summary-table {
        margin-top: 40px;
        margin-bottom: 30px;
        td:first-child {
            min-width: 100px;
        }
        td {
            color: rgba(255,255,255,.6);
            padding: 4px 0;
        }
        tfoot td {
            border-top: 1px solid #535673;
        }
    }
    .trade-offer__action {
        display: flex;
        justify-content: space-between;
    }
    .total-balance {
        color: #fff;
        &.total-balance--negative {
            color: rgb(255, 118, 118);
        }
        &.total-balance--positive {
            color: #41ba5d;
        }
    }

</style>
