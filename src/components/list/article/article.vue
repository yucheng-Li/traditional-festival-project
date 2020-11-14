<template>
<div class="article-bg">
    <!-- 传统节日文章 -->
    <div class="article-content">
        <router-link :to="'/list/content'+index" v-for="(item,index) in article_list" :key="index">
            <div class="article-toContent article-item">
                <div class="article-item-title">
                    <strong>{{item.title}}</strong>
                </div>
                <div class="article-item-content">
                    <p align="center" class="article-item-content-end"> {{item.verse_title}}</p>
                    <p align="center">{{item.verse1}}</p>
                    <p align="center">{{item.verse2}}</p>
                    
                </div>
            </div>
        </router-link>
    </div>
    
</div>
</template>

<script>
import '../../../font/font.css'
// const axios = require('axios')
export default {    
    data() {
        return {
            article_list:[]
        }
    },
    
    mounted() {
        var that = this
        var res
        new Promise(function(resolve) {
            res = require('../../../../public/artical.json')
            resolve(res)
        })
        .then(function(res1){
            console.log(res1.article_list)
           that.article_list = res1.article_list

        })
        
    },
}
</script>
 
<style > 
    .article-bg {
        /* background-color: aliceblue; */
    }
    .article-toContent {
        display: flex;
    }
    .article-content {
        
        padding-top: 6vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: "font-xingkai";
        font-size: .32rem;
        background-color: rgba(128, 128, 128, 0.404);
    }
    .article-item {
        background-color: rgba(255, 255, 255, 0.63);
        border-radius: 10px;
        margin: .1rem 1rem;
        height: 15vh;
        box-sizing: content-box;
        overflow: hidden;
    }
    .article-item-title {
        background-color: #0000006c;
        padding: 0 20px 0 20px;
        line-height: 15vh;
        color: aliceblue;
        width: .6.5rem;
        white-space:nowrap;
    }
    
    .article-item:hover {
        transition: 1s;
        color: black;
    }
    .article-item-content {
        display: inline-block;
        width: 45vw;
        box-sizing: border-box;
        padding: 0px 2px 10px 2px;
         font-size: .3rem;
         line-height: .05rem;
    }
    .article-item-content-end {
        font-size: .18rem;
        line-height: .001rem;
    }
    .article-item:hover {
        transition: .5s;
        background-color: rgb(161, 253, 207);
        color: rgb(9, 23, 36);
    }
    .article-content a {
        text-decoration: none;
        color: rgb(39, 55, 70);
    }
</style>
