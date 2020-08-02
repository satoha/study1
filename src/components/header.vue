<template>
    <div>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <BIconList></BIconList>
                    </div>
                    <div class="col">
                        <h1>.Pass</h1>
                    </div>
                    <div class="col">
                        <BIconSearch></BIconSearch>
                    </div>
                </div>
            </div>        
        </header>
    </div>
</template>
<script>
import {BIconSearch,BIconList} from 'bootstrap-vue'
export default {
    components: {
        BIconSearch,
        BIconList
    }
}
</script>
<style lang="scss" scoped>
header{
    background-color: green;
    margin-top:0px;
    font-size: 40px;

}    
</style>