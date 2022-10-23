<template>
    <div>
        <span style="position: fixed; top: 300px; left: 500px; font-size: 120px;">{{id}}</span>
        <div style="position: fixed; top: 300px; left: 500px">
            <NuxtLink to="/hello/news/123">Link Click Test Loader</NuxtLink>
        </div>
    </div>

</template>

<script>
export default {

    mounted() {
    },
    data() {
        return {
            id: this.$route.params.id,
        }
    },
}

</script>