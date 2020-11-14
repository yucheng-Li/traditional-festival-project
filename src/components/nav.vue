<template>
<div class="nav-first">
    <div class="nav">
        <div class="nav-container">
            <router-link :to="'/'+ now_router_x"  >
            <i :class="'iconfont icon-'+now_router_x"></i>
                <!-- <div class="nav-home nav-item" id="nav-a-left">{{now_router_x}}</div> -->
            </router-link>
            <router-link :to="'/'+ now_router_y">
                <i :class="'iconfont icon-'+now_router_y"></i>
                <!-- <div class="nav-list nav-item">{{now_router_y}}</div> -->
            </router-link>
        </div>      
    </div>
</div>
</template>

<script>

import $ from 'jquery'
import '../font/icon/iconfont.css'
document.onreadystatechange = function(){
    if(document.readyState=="complete"){
        $(function(){
            $("nav-a-left").hover(function(){
                $(".nav-container").addClass("a-left-hover")
            },function() {
                $(".nav-container").removeClass("a-left-hover")
            })
        })
    }
}


export default {
    data() {
        return {
            choose:{
                "/home":["video","list"],
                "/video":["home","list"],
                "/list":["home","video"]
            },
            now_router_x:'video',
            now_router_y:'list'
        }
    },
    watch:{
        $route(to){  
          var myRe = /\/[a-z]+/g;
          var array = to.path.match(myRe)
          this.now_router_x =  this.choose[array[0]][0];
          this.now_router_y = this.choose[array[0]][1];
    }
},
    
}
</script>
 
<style>
    
    .nav-first {
        /* height: 4.2vh; */
        /* margin-top: 4.2vh; */
        /* background-color: rgba(1, 152, 117, 0); */
    }
    .nav {
        box-sizing: border-box;
        padding-right: 0px;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        
    }
    .nav-container {
         display: flex;
        justify-content: space-between;
        /* background: rgba(1, 152, 117, 0.253); */
        color: rgba(1, 152, 117, 0.253);;
        font-size: .26rem;
        height: .36rem;
    }   
    .nav-container a {
        text-decoration: none;
        color: rgba(247, 247, 247, 0.918);
        margin: .15rem .5rem;
    }
    .nav a:hover {
        transition: .5s;
        color:#fcbb5a;
    }
   
</style>
