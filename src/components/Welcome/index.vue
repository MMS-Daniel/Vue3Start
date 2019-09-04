<template>
    <h1>{{ msg }} {{this.$store.state.name}}</h1>
</template>

<script>
export default {
    name: "Welcome",
    props: {
        msg: String
    }
};
</script>
