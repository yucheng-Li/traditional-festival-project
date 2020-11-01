<template>
<div>
    <div class="nav">
        <div class="nav-container">
            <router-link to="/">
                <div class="nav-home nav-item">Home</div>
            </router-link>
            <router-link to="/list">
                <div class="nav-list nav-item">List</div>
            </router-link>
        </div>
        
    </div>
</div>
</template>

<script>
export default {
    
}
</script>
 
<style>
    .nav {
        box-sizing: border-box;
        padding-right: 0px;
        position: fixed;
        left: 0;
        top: 0;
        /* margin: 5px 50px 5px 10px; */
        width: 100%;
        /* height: 80px; */
        
    }
    .nav-container {
         display: flex;
        justify-content: space-between;
        background: #000;
        color: aliceblue;
        font-size: .26rem;
        height: .40rem;
    }
    .nav-container a {
        text-decoration: none;
        color: aliceblue;
        margin: 0 .1rem;
    }
   
</style>
