<style lang="">
</style>

<script>
import sidebar from './sideBar.vue'
import navbar from './navbar.vue'
import main from './main.vue'
export default {
	components: {
		sidebar,
    navbar,
    main
	}
}
</script>

<template>
<sidebar></sidebar> 
<navbar></navbar> 

<main></main>
</template>