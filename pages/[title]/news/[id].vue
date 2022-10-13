<template>
    <span>{{$route.params.id}}</span>
</template>

<script>

export default {
    mounted(){
        // console.log($router);
    },
    beforeRouteEnter(route) {
        console.log(route);
    }
   
}

</script>