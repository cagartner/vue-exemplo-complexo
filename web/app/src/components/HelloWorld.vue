<template>
    <div class="helloworld">
        {{ message }}
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        data() {
            return {
                message: 'Bem Vindo!'
            }
        }
    }
</script>
<!-- Scoped vai limitar o estilo apenas para esse component -->
<style scoped>
    .helloworld {
        width: 100%;
        float: left;
        background: #ccc;
        font-size: 2rem;
        margin-top: 60px;
        text-align: center;
    }
</style>