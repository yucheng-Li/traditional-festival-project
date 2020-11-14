<template>
<div class="lunbotu-bg" :style="{backgroundImage: 'url(' +bg + ')'}">
    <div class="swiper-certify">
        <div class="trun-left" @click="slideClick('left')"></div>
        
        <ul class="swiper-certif-list"
           
            id="if-img"
        >
            <li
            v-for="(item,index) in swiperOption.imgs"
            :key="index"
            :class="classRender[index] || leftHide"
             
            class="YcenterPosition"
            
            >   
                <div class="if-img">   
                    <i class="iconfont icon-icon_play iconfont-ps if-img-hidden" id="icon-click" v-on:click="videoPlay()"></i>
                </div>
                <video width="100%" height="100%"  id="myAudio" v-on:click="videoPlay()">
                    <source :src=item type="video/mp4">
                </video>
            </li>
        </ul>
        <div class="trun-right"  @click="slideClick('right')">
            
        </div>
    </div>
</div>
</template>
 
<script>
// import { clearInterval } from 'timers';
import $ from 'jquery'
import '../../font/icon/iconfont.css'


export default {
    props:{
        swiperOption:{
            type:Object,
            default:function(){require('../../../public/video/中秋.mp4')
                return {
                    imgs:[
                        require('../../../public/video/中秋.mp4'),
                        require('../../../public/video/端午.mp4'),
                        require('../../../public/video/元宵.mp4'),
                        require('../../../public/video/重阳.mp4'),
                        require('../../../public/video/清明.mp4')],     //图片地址
                    speed:5000,  //轮播时间
                    startIndex:0    //开始图片
                }
            }
        }
    },
    data(){
        var me = this;
        var imgs = me.swiperOption.imgs || [];
        var max =  imgs.length;
        var speed = me.swiperOption.speed || 3000;
        var startIndex = me.swiperOption.startIndex || 0;
        var hideNum = Math.floor((max - 5)/2);
 
        return {
            bg:require('../../../public/images/video-bg.jpg'),
            flag:true,
            max:max,
            speed:speed,
            index:startIndex,
            classCenter:"p4",
            classLeft:['p2', 'p3'],
            classRight:['p5', 'p6'],
            leftHide:'p0',
            rightHide:'p7',
            hideNum:hideNum,
            classRender:[],
            // timerT:null
        }
    },
    watch:{
        'swiperOption.imgs':{
             handler:function(val){
                this.max = val.length;
                this.hideNum = Math.floor((val.length - 5)/2);
             },
             deep:true
        }
    },
    created(){
    },
    mounted(){  
        this.init();
        
    },
    beforeUpdate() {
        
    },
    updated() {
        $(function(){
            $(".p4").hover(function(){
                $(".p4 i").removeClass("if-img-hidden")
            },
            function(){
                $(".p4 i").addClass("if-img-hidden")
                }
            )
        })
    },
    methods:{
        videoPlay(){
            if(this.flag){
                $(".p4 video")[0].play()
                $(".p4 i").removeClass("icon-icon_play")
                $(".p4 i").addClass("icon-ai07")
            }else{
                $(".p4 video")[0].pause()
                $(".p4 i").removeClass("icon-ai07")
                $(".p4 i").addClass("icon-icon_play")
            }
            this.flag = !this.flag
        },
        init(){
            var me = this;
            if(me.max <= 5){
                me.refresh();
            }else if(me.max > 5){
                me.initLunbo();
            }
        },
        initLunbo(){
            var me = this;
            me.refresh();
            me.createTimer();
        },
        createTimer(){
            var me = this;
 
            clearInterval(me.timerT);
            me.timerT = setInterval(function () {
               //console.log(me.index)
                me.change(1);
            }, me.speed);
        },
        change(dir){
            var me = this;
            var index =  me.index;
            index = index + dir;
            if(index < 0){
                index = me.max - 1;
            }
            if(index >= me.max){
                index = 0;
            }
            me.index = index;
            //当前展示第 index 个
            me.refresh();
            me.$emit("change",me.index);
        },
        refresh(){
            var me = this;
            var index = me.index;
            if(index < 0 || index >= me.max){
                return ;
            }
            //因为只展示五个
            var arr = new Array(me.max);
            var left = index -1;
            var right = index + 1;
            arr[index] = me.classCenter;
             
            var count = me.hideNum + 1; //左右都需要减两次
            var classLeft = me.classLeft.slice(0);
            while(count >= 0){
                if(left < 0){
                    left = me.max-1;
                }
                if(classLeft.length >= 0){
                    arr[left] = classLeft.pop();
                }else{
                    arr[left] = me.leftHide;
                }
                 
                left--;
                count--;
            }
            count = me.hideNum + 1;
            var classRight = me.classRight.slice(0);
            while(count >= 0){
                if(right >= me.max){
                    right = 0;
                }
                if(classRight.length){
                    arr[right] = classRight.shift();
                }else{
                    arr[right] = me.rightHide;
                }
                right++;
                count--;
            }
            
            for(var i = 0; i < arr.length; i++){
                if(!arr[i]){
                    arr[i] = me.rightHide;
                }
            }
            me.classRender = arr;
        },
        changeTo(index){
            var me = this;
             if(index < 0){
                index = me.max - 1;
            }
            if(index >= me.max){
                index = 0;
            }
            me.index = index;
            me.refresh();
            me.$emit("change",me.index);
        },
        slideClick(cls){

            var self = this;
            if(cls == "left"){
                //左
                self.change(1)
                $("video").each(function(index,item){
                    item.pause()
                })
                $(".p5 i").removeClass("icon-ai07")
                $(".p5 i").addClass("icon-icon_play")
                this.flag = true
            }
            if(cls == "right"){
                //右
                self.change(-1)
                $("video").each(function(index,item){
                    item.pause()
                })
                $(".p3 i").removeClass("icon-ai07")
                $(".p3 i").addClass("icon-icon_play")
                this.flag = true

            }
        },
        onMouseEnter(){
            
        },
        onMouseLeave(){
           
        }
 
    }
}

</script>
<style lang="scss" scoped src="./swiper-certify.scss"></style>