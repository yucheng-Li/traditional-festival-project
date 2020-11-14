<template>
<div class="first-bg" :style="{backgroundImage: 'url(' +bg + ')'}">
    <div class="first-word">
        <div class="first-word-pos">
            走进
            <br>中国传统节日
            <div class="first-word-p">Five thousand years of long history has created our great China. The national traditional culture lights up the Chinese land with its bright light and integrates with the blood of the Chinese nation.</div>
        </div>
    </div>
    <div class="middle-buttom">
        <router-link to="/video" class="a-left a-together" id="a-left">
        传统节日视频
        </router-link>

        <router-link to="/list" class="a-right a-together" id="a-right">
        传统节日文章
        </router-link>
    </div>
</div>
</template>

<script>
import '../font/font.css'
import $ from 'jquery'
document.onreadystatechange = function(){
    if(document.readyState=="complete"){
        $(function(){
            $("#a-left").hover(function(){
                $(this).addClass("a-left-hover")
                $(".middle-buttom").addClass("middle-buttom-bg-1")
            },function() {
                $(this).removeClass("a-left-hover")
                $(".middle-buttom").removeClass("middle-buttom-bg-1")
        })
        $("#a-right").hover(function(){
                $(this).addClass("a-left-hover")
                $(".middle-buttom").addClass("middle-buttom-bg-2")
            },function() {
                $(this).removeClass("a-left-hover")
                $(".middle-buttom").removeClass("middle-buttom-bg-2")
        })
        }
        )
    }}
export default {
    data() {
        return {
            bg:require('../../public/images/first-background.jpg')
        }
    },
    mounted() {
        if(document.readyState=="complete"){
        $(function(){
            $("#a-left").hover(function(){
                $(this).addClass("a-left-hover")
                $(".middle-buttom").addClass("middle-buttom-bg-1")
            },function() {
                $(this).removeClass("a-left-hover")
                $(".middle-buttom").removeClass("middle-buttom-bg-1")
        })
        $("#a-right").hover(function(){
                $(this).addClass("a-left-hover")
                $(".middle-buttom").addClass("middle-buttom-bg-2")
            },function() {
                $(this).removeClass("a-left-hover")
                $(".middle-buttom").removeClass("middle-buttom-bg-2")
        })
        }
        )
    }
    },
}
</script>
 
 
<style scoped> 

    .middle-buttom {
        transition: 1s;
        height: 100vh;
        display: flex;
        justify-content: center;
        /* align-items: center; */

    }
    .middle-buttom-bg-1 {
        background-color: rgba(172, 187, 187,.5);
    }
    .middle-buttom-bg-2 {
        background-color: rgba(172, 187, 187, 0.5);
    }
    .button-to-video {
        overflow: hidden;
        width: 10vw;
        height: 10vw;
    }
    .button-to-list {
        width: 10vw;
        height: 10vw;
    }

    .a-left {
        
        text-align: center;
        height: 10vw;
        width: 10vw;
        
        text-decoration: none;
        margin-right: 30vh;
        border-radius: 10px;
    }
    .a-left-hover {
        color: white;
        background-color: #019875!important;
        transition: 1s;
    }
    .a-right {
          font-size: 1vw;
        text-align: center;
        line-height: 10vw;
        width: 10vw;
        color: black;
        text-decoration: none;
        margin-left: 20vh;
        border-radius: 10px;
    }
    .a-together{
        font-family: "font-benmo";
        font-size: 1vw;
        line-height: 3.2vw;
        color: #f3f3e5;
        height: 3vw;
        margin-top: 70vh;
        z-index: 100;
    }
    .a-right:hover {
        transition: 1s;
        background-color: #fff;
    }
    .middle-buttom a {
        transition: 1s;
        background-color: rgba(105, 107, 107, 0.5);
    }
    .first-bg {
        height: 100vh;
        margin-top: 0;
        background: no-repeat;
        background-size: 100%;
        /* background-image: url("/images/first-background.jpg"); */
    }
    .first-word {
        position: relative;
    }
    .first-word-pos {
        position: absolute;
        text-align: center;
        transform: translateX(-50%);
        left: 50%;
        top: 20vh;
        color: #f3f3e5;
        font-family: "font-xingkai";
    }
    .first-word-p {
        /* border-top: #fff 1px solid; */
        font-size: .24rem;
        width: 30vw;
        margin: auto;
    }
</style>
