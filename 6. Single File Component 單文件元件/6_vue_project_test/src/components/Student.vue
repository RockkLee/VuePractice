<template>
    <div>
        <h2>
            <h3>學生名稱: {{name}}</h3>
            <h3>學生ID: {{id}}</h3>
        </h2>
    </div>
</template>

<script>
    export default {
        name:'StudentItem',
        data() {
            return {
                name: "Sheng",
                id: "A123456789"
            }
        },
        methods: {
            
        }
    }
</script>

<style>

</style>