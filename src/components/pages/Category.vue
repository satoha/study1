<template>
    <b-container class="cat">
        <h2>Category</h2>
        <section id="cat" class="cat-btn-container">
            <b-button pill class="cat-btn-all" onclick="filterSelection('all')">all category</b-button>
            <b-button pill class="cat-btn-net" onclick="filterSelection('Internet')"> Internet</b-button>
            <b-button pill class="cat-btn-html" onclick="filterSelection('HTML')"> HTML</b-button>
            <b-button pill class="cat-btn-css" onclick="filterSelection('CSS')"> CSS</b-button>
            <b-button pill class="cat-btn-js" onclick="filterSelection('javascript')"> Javascript</b-button>
        </section>
        <section class="cat-card-container">
            <b-row>
                <b-col sm="12" md="6" lg="3">
                    <div>
                        <b-card
                            title="Card Title"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 100%;"
                            
                        >
                            <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </b-card-text>
                        </b-card>
                    </div>
                </b-col>
                <b-col sm="12" md="6" lg="3">
                    <div>
                        <b-card
                            title="Card Title"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width:  100%;"
                            class="mb-2"
                        >
                            <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </b-card-text>
                        </b-card>
                    </div>
                </b-col>
                <b-col sm="12" md="6" lg="3">
                    <div>
                        <b-card
                            title="Card Title"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width:  100%;"
                            class="mb-2"
                        >
                            <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </b-card-text>
                        </b-card>
                    </div>
                </b-col>
                <b-col sm="12" md="6" lg="3">
                    <div>
                        <b-card
                            title="Card Title"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width:  100%;"
                            class="mb-2"
                        >
                            <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </b-card-text>
                        </b-card>
                    </div>
                </b-col>
                <b-col sm="12" md="6" lg="3">
                    <div>
                        <b-card
                            title="Card Title"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width:  100%;"
                            class="mb-2"
                        >
                            <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </b-card-text>
                        </b-card>
                    </div>
                </b-col>
                <b-col sm="12" md="6" lg="3">
                    <div>
                        <b-card
                            title="Card Title"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width:  100%;"
                            class="mb-2"
                        >
                            <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </b-card-text>
                        </b-card>
                    </div>
                </b-col>
                <b-col sm="12" md="6" lg="3">
                    <div>
                        <b-card
                            title="Card Title"
                            img-src="https://picsum.photos/600/300/?image=25"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width:  100%;"
                            class="mb-2"
                        >
                            <b-card-text>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                            </b-card-text>
                        </b-card>
                    </div>
                </b-col>
            </b-row>

        </section>

    </b-container>
</template>
<script>
import Vue from 'vue'
import {BootstrapVue} from 'bootstrap-vue'
Vue.use(BootstrapVue)
export default {
    components: {
        
    }
}
</script>
<style lang="scss" scoped>
$all: #556B2F;
$net:#FF8C00;
$html:#8B0000;
$css: #2F4F4F;
$js:#692F6B;
.cat{
    height: auto;
    background-color:white;
    &-btn{
        &-container{
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
        &-all{
            &:hover{
                background-color: $all;
                color: white;
            }
            &:active{
                background-color: $all;
                color: white;
            }
            background-color: white;
            color: $all;
            border: solid 2px $all;
            margin-right: 1rem;
            margin-top: 1rem;
        }
        &-net{
            &:hover{
                background-color: $net;
                color: white;
            }
            &:active{
                background-color: $net;
                color: white;
            }
            background-color: white;
            color: $net;
            border: solid 2px $net;
            margin-right: 1rem;
            margin-top: 1rem;
        }
        &-html{
            &:hover{
                background-color: $html;
                color: white;
            }
            &:active{
                background-color: $html;
                color: white;
            }
            background-color: white;
            color: $html;
            border: solid 2px $html;
            margin-right: 1rem;
            margin-top: 1rem;
        }
        &-css{
            &:hover{
                background-color: $css;
                color: white;
            }
            &:active{
                background-color: $css;
                color: white;
            }
            background-color: white;
            color: $css;
            border: solid 2px $css;
            margin-right: 1rem;
            margin-top: 1rem;
        }
        &-js{
            &:hover{
                background-color: $js;
                color: white;
            }
            &:active{
                background-color: $js;
                color: white;
            }
            background-color: white;
            color: $js;
            border: solid 2px $js;
            margin-right: 1rem;
            margin-top: 1rem;
        }
    }

    
}
</style>