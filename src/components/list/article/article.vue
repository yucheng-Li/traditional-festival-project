<template>
<div>
    this is article
    <div class="article-content">
        <router-link :to="'/list/content'+item.num" v-for="item in article_list" :key="item.num">
            <div class="article-toContent article-item">
                Go to Content{{item.num}}
            </div>
        </router-link>
    </div>
    
</div>
</template>

<script>
export default {    
    data() {
        return {
            article_list:[
                {
                    num:1
                    },
                {
                    num:2
                    },
                {
                    num:3
                    },
                {
                    num:4
                    },
                {
                    num:5
                    },
                {
                    num:6
                    },
                {
                    num:7
                    },
                {
                    num:8
                    },
            ]
        }
    },
}
</script>
 
<style > 
    .article-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: .32rem;
    }
    .article-item {
        background-color: aquamarine;
        margin: .1rem 1rem;
        height: 1.4rem;
    }
    .article-item:hover {
        background-color: #136;
        color: aliceblue;
    }
</style>
