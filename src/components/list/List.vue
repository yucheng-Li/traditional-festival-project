<template>
<div>
    <div class="list-content">
        <div class="list-content-center">
            <Article></Article>
        </div>
    </div>
</div>
</template>

<script>
import Article from './article/article'
export default {
    components: {
        Article
    }
}
</script>
 
 
<style> 
    .list-content {
        background-color: aqua;
    }
    .list-content-center {
        margin: auto;
        /* height: 7rem; */
        width: 10rem;
        background-color: brown;
    }
</style>
