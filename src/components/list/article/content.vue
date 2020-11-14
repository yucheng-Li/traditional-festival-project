<template>

<div>
<div class="content-all">
    <div class="content-bg" id="top">

        <nav class="blog-nav">
          <a class="blog-nav-item " href="#top" :class="{active: active===0}">起飞</a>
          <a class="blog-nav-item" href="#part1" :class="{active: active===1}">起源</a>
          <a class="blog-nav-item" href="#part2" :class="{active: active===2}">习俗</a>
          <a class="blog-nav-item" href="#part3" :class="{active: active===3}">饮食</a>
        </nav>
        <div class="nav-title">
            {{article.title}}
        </div>
    </div>
    <div class="content-main">
        <div class="main-part1">
            <div class="source-title" id="part1" ref='part1'>起源</div>
            <p class="set-content source-content">{{article.origin}}</p>
        </div>
        <div class="main-part2">
            <div class="source-title" id="part2">风俗</div>
            <div class="main-custom" v-for="(item, index) in article.convention" :key="index">
                <div class="main-custom-title" >{{item.convention_title}}</div>
                <p class="set-content source-content main-custom-content">{{item.convention_content}}</p>
            </div>
             </div>

        <div class="main-part3">
            <div class="source-title" id="part3">饮食</div>
            <div class=" main-custom-title" >{{article.cooking_culture.cooking_culture_title}}</div>
            <p class="set-content source-content">{{article.cooking_culture.cooking_culture_content}}</p>
        </div>
    </div>
</div>
</div>

</template>

<script>
import '../../../font/font.css'
import '../../../css/content.css'

export default {
    data() {
        return {
           article:{},
           list:['top','part1','part2','part3'],
           itemTab:[],
           float:false,
           active:0
        }
    },
    props:['id'],
    methods: {
            //所有方法
    onscroll() {
      //滚动事件
      let ws = window.scrollY; //当前滚动条位置
      /**当前滚动条的位置大于160则悬浮，小于等于160取消悬浮 */

      this.itemTab.forEach((item, index) => {//循环检测每个标题的位置
        if(ws > 900) {
            this.active = 3
        }
        if (ws>item-10 ) {//判断当前滚动条大于
          this.active = index;//将最后一个大于item的下标赋值给active
                              //active是当前滚动条对应的标题位置
        }
      });
      console.log('active:'+this.active);
      
    }
    },
    mounted() {
        let that = this
                
        var res
        new Promise(function(resolve) {
            res = require('../../../../public/artical.json')
            resolve(res)
        })
        .then((res) => {
           let rex = /\d/;
           let num = this.$route.path.match(rex)[0];
           this.article = res.article_list[+num]
           console.log(this.article)
        }).then(function(){
            window.addEventListener("scroll", that.onscroll);
            //为浏览器添加“scroll”滚动条滚动事件
            for (let i = 0; i < that.list.length; i++) {
              //循环获取的list中标题的位置
              //补充：list中存放的是标题的id数组

              let ele = document.getElementById( that.list[i]);
              console.log(ele)
              that.itemTab.push(ele.offsetTop);
              console.log(ele.offsetTop)
              //获取位置后添加到itemTab数组
            }
        })
          //当页面中所有元素加载完成触发
    
    },
    beforeUpdate() {
       
    },
}
</script>
 
 
<style lang=''> 
    
</style>
