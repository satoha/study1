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
                                            <router-link to="/"><li>TOP</li></router-link>
                                            <router-link to="/cat"><li>Internet</li></router-link>
                                            <router-link to="/cat"><li>HTML</li></router-link>
                                            <router-link to="/cat"><li>CSS</li></router-link>
                                            <router-link to="/cat"><li>Javascript</li></router-link>
                                        </ul>
                                    </nav>
                                </div>
                            </b-sidebar> 
                        </div>
                    </b-col>
                    <b-col class="header-logo">
                        <router-link to="/"><h1>.Pass</h1></router-link>
                    </b-col>
                    <b-col class="header-search">
                        <router-link to="/cat">
                        <button class="header-menu--button">
                            <BIconSearch></BIconSearch>
                        </button>
                        </router-link>
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
    height: 4rem;
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
                color:white;
                cursor: pointer;
                margin-top: 5px;
                ;
            }
        }
    }
    &-logo{
        text-align:center;
        color: white;
    }
    &-search{
        text-align: right;
        margin-right:3rem;
    }
} 

</style>