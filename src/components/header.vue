<template>
    <div>
        <header class="header">
            <b-container fluid>
                <b-row align-v="center">
                    <b-col class="header-menu">
                        <div>
                            <button v-b-toggle.sidebar class="header-menu--button">
                                <BIconList></BIconList>
                            </button>
                            <b-sidebar id="sidebar" class="header-menu__opened" title="Menu" bg-variant="dark" text-variant="light" shadow>
                                <div class="px-3 py-2">
                                    <nav class="header-menu--contents">
                                        <ul type="none">
                                            <li>HOME</li>
                                            <li>Internet</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </nav>
                                </div>
                            </b-sidebar> 
                        </div>
                    </b-col>
                    <b-col class="header-logo">
                        <h1>.Pass</h1>
                    </b-col>
                    <b-col class="header-search">
                        <button v-b-toggle.sidebar class="header-menu--button">
                            <BIconSearch></BIconSearch>
                        </button>
                    </b-col>
                </b-row>
            </b-container>       
        </header>
    </div>
</template>
<script>
import Vue from 'vue'
import {BootstrapVue,BIconSearch,BIconList} from 'bootstrap-vue'
Vue.use(BootstrapVue)
export default {
    components: {
        BIconSearch,
        BIconList
    }
}
</script>
<style lang="scss" scoped>
$mc: #556B2F;
$ac1: #2F3C6B;
$ac2: #692F6B;
$base: #B4C498;
.header{
    background-color: $mc;
    margin-top: 0;
    font-size: 36px;
    position: fixed;
    width: 100%;
    color: white;
    &-menu{
        text-align: left;
        margin-left: 3rem;
        &--button{
            &:hover{
                background-color: $ac1;
            }
            cursor: pointer;
            background-color: transparent;
            border: none;
            color: white;
        }
        &--contents{
            ul li{
                &:hover{
                background-color: $ac1;
                }
                cursor: pointer;
                margin-top: 5px;
                ;
            }
        }
    }
    &-logo{
        text-align:center;
    }
    &-search{
        text-align: right;
        margin-right:3rem;
    }
} 

</style>