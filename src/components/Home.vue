<template>
    <div>
        <!-- <nav-menu></nav-menu> -->
        <NavMenu></NavMenu>
        <router-view/>
    </div>
</template>

<script>
import NavMenu from './common/NavMenu'
export default {
    name: 'Home',
    components: { NavMenu }
}
</script>

<style scoped>
</style>
