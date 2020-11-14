<template>
<div>
    <div class="list-content" :style="{backgroundImage: 'url(' +bg + ')'}">
        <div class="list-content-center">
            <Article></Article>
        </div>
    </div>
</div>
</template>

<script>
import Article from './article/article'
export default {
    data() {
        return {
            bg:require('../../../public/images/article-bg-1.jpg')
        }
    },
    components: {
        Article
    }
}
</script>
 
 
<style> 
    .list-content {
        width: 99vw;
        /* background-image: url("/images/article-bg-1.jpg"); */
        background-size:100% 100%;
        background-repeat:no-repeat;
    }
    .list-content-center {
        margin: auto;
        /* height: 7rem; */
        width: 10rem;
        /* background-color: brown; */
    }
</style>
