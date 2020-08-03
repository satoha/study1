<template>
    <div>
        <footer class="footer">
            <nav class="footer-nav">
                <b-container fulid>
                    <b-row align-v="center"> 
                        <b-col sm="12" md="6" lg="3"><div class="footer-nav--content">Internet</div></b-col>
                        <b-col sm="12" md="6" lg="3"><div class="footer-nav--content">HTML</div></b-col>
                        <b-col sm="12" md="6" lg="3"><div class="footer-nav--content">CSS</div></b-col>
                        <b-col sm="12" md="6" lg="3"><div class="footer-nav--content">Javascript</div></b-col>
                    </b-row>
                </b-container>
            </nav>
            <b-container fluid class="footer-bottom">
                <b-row align-v="center">
                    <b-col>
                    </b-col>
                    <b-col class="footer-logo">
                        <h2>.Pass</h2>
                    </b-col>
                    <b-col class="footer-copyright">
                        <p>&copy;copyright 2020 satoha all reserved</p>
                    </b-col>
                </b-row>
            </b-container> 
        </footer>
    </div>
</template>
<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
export default {
    
}
</script>
<style lang="scss" scoped>
$mc: #556B2F;
$ac1: #2F3C6B;
$ac2: #692F6B;
$base: #B4C498;
.footer{
    background-color: $mc;
    width: 100%;
    color: white;
    text-align: center;
    padding: 1rem;
    &-nav{
        &--content{
            &:hover{
                background-color: $ac1;
            }
            margin-top:1rem;
            border: solid 1px white;
            padding:1rem;
            
        }
    }
    &-bottom{
        margin-top: 2rem;
    }
}
</style>