<template>
<div>
    this is content {{id}}   
</div>
</template>

<script>
const axios = require('axios')
export default {
    data() {
        return {
           article:[]
        }
    },
    props:['id'],
    methods: {
    },
    mounted() {
        axios.get('/artical.json')
        .then((res) => {
           console.log(res.data)
        })
    },
}
</script>
 
 
<style lang=''> 
    
</style>
