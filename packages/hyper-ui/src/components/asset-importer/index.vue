<template>
    <div class="assets-import">
        <div
            v-if="step1"
            class="assets-import__contact">
            <h3>Import contacts</h3>
            <p class="mb-0">
                Now let's match the columns in your uploaded file to your MailChimp list.
            </p>
            <p><a href="#">See an example of the import field match process</a></p>
            <NotificationInline
                type="info"
                size="md"
                class="my-4">
                A simple primary alert—check it out!
            </NotificationInline>
            <Checkbox
                id="test"
                v-model="skippedState">
                Show skipped columns
            </Checkbox>
            <div class="row mt-4">
                <div class="col-12 col-md-4">
                    <div class="card">
                        <div class="card-header p-3 text-center">
                            <h4>Email Address</h4>
                            <h6>dedeqit@gmail.com</h6>
                            <div class="action">
                                <Button
                                    status="outline-danger"
                                    class="mx-1">
                                    Edit
                                </Button>
                                <Button
                                    status="outline-info"
                                    class="mx-1">
                                    Skip
                                </Button>
                            </div>
                        </div>
                        <div class="card-header invert p-3 d-none">
                            <div class="form-group mb-2">
                                <select
                                    id="exampleFormControlSelect1"
                                    class="form-control">
                                    <option>Chose email</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group m-0">
                                <a
                                    href="#"
                                    class="btn btn-sm btn-success">Save</a>
                                <a
                                    href="#"
                                    class="btn btn-sm btn-link mr-2">Skip</a>
                            </div>
                        </div>
                        <ul class="list">
                            <li class="list-title">
                                Email Address
                            </li>
                            <li>dogo@gmail.com</li>
                            <li>stim43@i.com</li>
                            <li>ishar@do.com</li>
                            <li>kim@it-d.com</li>
                        </ul>
                    </div>
                </div>
                <div
                    v-if="skippedState"
                    class="col-12 col-md-4">
                    <div class="card">
                        <div class="card-header p-3 text-center">
                            <h4>First Name</h4>
                            <h6>text field</h6>
                            <div class="action">
                                <Button
                                    status="outline-danger"
                                    class="mx-1">
                                    Edit
                                </Button>
                                <Button
                                    status="outline-info"
                                    class="mx-1">
                                    Skip
                                </Button>
                            </div>
                        </div>
                        <ul class="list">
                            <li class="list-title">
                                First Name
                            </li>
                            <li>Eric</li>
                            <li>Josh</li>
                            <li>Daniel</li>
                            <li>Martin</li>
                        </ul>
                    </div>
                </div>
                <div
                    v-if="skippedState"
                    class="col-12 col-md-4">
                    <div class="card">
                        <div class="card-header p-3 text-center">
                            <h4>Last Name</h4>
                            <h6>text field</h6>
                            <div class="action">
                                <Button
                                    status="outline-danger"
                                    class="mx-1">
                                    Edit
                                </Button>
                                <Button
                                    status="outline-info"
                                    class="mx-1">
                                    Skip
                                </Button>
                            </div>
                        </div>
                        <ul class="list">
                            <li class="list-title">
                                Last Name
                            </li>
                            <li>Doel</li>
                            <li>Leclerc</li>
                            <li>Singh</li>
                            <li>Wahyundi</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-12 text-right">
                    <Button
                        status="outline-success"
                        @click="uploadAssets">
                        Upload
                    </Button>
                </div>
            </div>
        </div>
        <div
            v-if="step2"
            class="assets-import__loading">
            <Loading-bar class="loading-bar" />
            <div class="text">
                <h4>We'ar importing your list!( 3 sec delay )</h4>
                <p>You can navigate away from this page - importing won't be affected!</p>
            </div>
        </div>
        <div
            v-if="step3"
            class="assets-import__results">
            <h3>Import progress</h3>
            <div class="results-status">
                <div>
                    Records added
                    <strong>190</strong>
                </div>
                <div>
                    Updated
                    <strong>12</strong>
                </div>
                <div>
                    Warnings
                    <strong>34</strong>
                </div>
                <div>
                    Errors
                    <strong>3</strong>
                </div>
            </div>
            <div class="w-100 mt-5">
                <ul
                    id="myTab"
                    class="nav nav-tabs"
                    role="tablist">
                    <li class="nav-item">
                        <a
                            id="step1-tab"
                            class="nav-link active"
                            data-toggle="tab"
                            href="#tab1"
                            role="tab"
                            aria-controls="tab"
                            aria-expanded="true">Tab 1</a>
                    </li>
                    <li class="nav-item">
                        <a
                            id="step2-tab"
                            class="nav-link"
                            data-toggle="tab"
                            href="#tab2"
                            role="tab"
                            aria-controls="tab">Tab 2</a>
                    </li>
                    <li class="nav-item">
                        <a
                            id="step3-tab"
                            class="nav-link"
                            data-toggle="tab"
                            href="#tab3"
                            role="tab"
                            aria-controls="tab">Tab 3</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div
                        id="tab1"
                        class="tab-pane fade show active"
                        role="tabpanel"
                        aria-labelledby="step1-tab">
                        <div class="tab-container">
                            <div class="info-list">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>
                                                Line #
                                            </th>
                                            <th>
                                                Message
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                1
                                            </td>
                                            <td>
                                                Some message
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                12
                                            </td>
                                            <td>
                                                Some message a little bit longer
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    components: {
        'Button': () => import('../../').then(m => m.Button),
        'Loading-bar': () => import('../../').then(m => m.Loading-bar),
        'Button': () => import('../../').then(m => m.Button),
        'NotificationInline': () => import('../../').then(m => m.NotificationInline),
        'Checkbox': () => import('../../').then(m => m.Checkbox)
    },
    props: ['showSkipped'],
    data() {
        return {
            skippedState: this.show_skipped,
            step1: true,
            step2: false,
            step3: false
        }
    },
    methods: {
        uploadAssets() {
            this.step1 = false
            this.step2 = true
            this.showResults()
        },
        showResults() {
            setInterval(() => {
                this.step2 = false
                this.step3 = true
            }, 3000)
        }
    }
}
</script>

<style lang="scss" scoped>
    .btn-sm{
        padding: 0px 10px;
    }

    .assets-import__contact{
        padding: 20px;
        color: #fff;
        width: 100%;
        h3{
            color: #fff;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
        }
        p{
            a{
                text-decoration: underline;
            }
        }
        .card{
            background: rgba(0, 0, 0, .1);
            color: #fff;
            select{
                height: 32px;
            }
            h4{
                font-size: 16px;
                font-weight: bold;
                color: #fff;
                margin: 0;
                padding: 0;
            }
            h6{
                color: #fff;
                padding: 5px 0;
            }
            ul{
                padding: 0;
                margin: 0;
                li{
                    list-style: none;
                    display: block;
                    padding: 3px 10px;
                    text-align: left;
                    &:nth-child(1){
                        font-weight: bold;
                        font-size: 15px;
                    }
                    &:nth-child(odd){
                        background: rgba(255, 255, 255, .05);
                    }
                    &:hover{
                        background: rgba(255, 255, 255, .1);
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .assets-import__loading{
        color: #fff;
        width: 100%;
        .loading-bar{
            height: 10px;
        }
        .text{
            text-align: center;
            color: #fff;
            margin-top: 15px;
            padding: 20px;
            h4{
                color: #fff;
                margin: 0;
                padding: 0;
            }
        }
    }
    .assets-import__results{
        padding: 20px;
        color: #fff;
        width: 100%;
        h3{
            color: #fff;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, .1);
        }
        .results-status{
            display: flex;
            flex-wrap: nowrap;
            div{
                width: auto;
                padding: 5px 20px;
                color: #fff;
                font-size: 14px;
                border-left: 1px solid rgba(255, 255, 255, .1);
                strong{
                    font-size: 28px;
                    display: block;
                    width: 100%;
                    margin-top: 5px;
                }
                &:first-child{
                    padding-left: 0;
                    border-left: none;
                }
            }
        }
    }


    .nav-tabs {
        border-bottom: none;
        position: relative;
        .nav-item {
            border-radius: 8px 8px 0 0;
            a {
                color: #606079;
                background: #393955;
                padding: 0 15px;
                font-size: 16px;
                line-height: 32px;
                border: none;
                position: relative;
                box-shadow: 0 -1px 10px rgba(0, 0, 0, .2);
                &:before {
                    content: "";
                    position: absolute;
                    height: 23px;
                    bottom: 0;
                    left: -30px;
                    border: 15px solid transparent;
                    border-bottom: 15px solid #393955;
                    border-right: 15px solid #393955;
                    -webkit-filter: drop-shadow(-5px 0px 3px rgba(0, 0, 0, .15));
                    filter: drop-shadow(-5px 0px 3px rgba(0, 0, 0, .1));
                }
                &:after {
                    content: "";
                    position: absolute;
                    height: 23px;
                    bottom: 0;
                    right: -30px;
                    border: 15px solid transparent;
                    border-bottom: 15px solid #393955;
                    border-left: 15px solid #393955;
                    -webkit-filter: drop-shadow(5px 0px 3px rgba(0, 0, 0, .15));
                    filter: drop-shadow(5px 0px 3px rgba(0, 0, 0, .15));
                }
                &.active {
                    border-bottom: none;
                    background: #3e3e5c;
                    z-index: 8;
                    color: #fff;
                    &:before {
                        border-bottom-color: #3e3e5c;
                        border-right-color: #3e3e5c;
                    }
                    &:after {
                        border-bottom-color: #3e3e5c;
                        border-left-color: #3e3e5c;
                    }
                }
            }
            &:first-child {
                a {
                    box-shadow: 0 0 20px rgba(0, 0, 0, .2);
                    &:before {
                        display: none;
                    }
                }
            }
        }
    }
    .tab-pane {
        position: relative;
        &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            right: 15px;
            height: 15px;
            background: #3e3e5c;
            z-index: 10;
        }
        .tab-container {
            background: #3e3e5c;
            padding: 15px;
            border-radius: 0 5px 5px 5px;
            border-top: none;
            box-shadow: 0 3px 20px rgba(0, 0, 0, .2);
            .table{
                margin: 0;
                thead{
                    tr{
                        background: rgba(0, 0, 0, .1);
                        th{
                            font-weight: bold;
                            color: #fff;
                            border: none;
                            &:first-child{
                                width: 80px;
                                text-align: right;
                            }
                        }
                    }
                }
                tbody{
                    tr{
                        background: rgba(0, 0, 0, .1);
                        &:nth-child(odd){
                            background: rgba(0, 0, 0, .05);
                        }
                        td{
                            border: none;
                            &:first-child{
                                width: 120px;
                                text-align: right;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
