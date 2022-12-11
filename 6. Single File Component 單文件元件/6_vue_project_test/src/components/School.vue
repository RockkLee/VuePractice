<template>
    <div>
        <h2>
            <h3>學校名稱: {{name}}</h3>
            <h3>學校地址: {{address}}</h3>
        </h2>
    </div>
</template>

<script>
    export default {
        name:'SchoolItem',
        data() {
            return {
                name: "UUU",
                address: "Taipei"
            }
        },
        methods: {
            
        }
    }
</script>

<style>

</style>