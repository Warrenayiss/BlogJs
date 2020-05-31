<template>
    <div class="not-found">
        <div class="container">
            <h1>Page not found !</h1>
            <p>
                Sorry we are unable to find the page you where looking for
            </p>
            <router-link to="/" style="text-decoration: underline;">Return to Home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "not-found"
}
</script>

<style lang="scss">
    
</style>