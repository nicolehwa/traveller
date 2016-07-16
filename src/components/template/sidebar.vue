<template>

<div class="sidebar" data-color="red" data-image="assets/images/sidebar-6.jpg">
    <div class="sidebar-wrapper">
        <div class="logo">
            <a href="#" class="simple-text">
                Traveller
            </a>
        </div>

        <ul class="nav">
            <li>
                <a v-link="{ name: 'home' }">
                    <i class="pe-7s-home"></i>
                    <p>Dashboard</p>
                </a>
            </li>
            <li>
                <a v-link="{ name: 'tour' }">
                    <i class="pe-7s-cash"></i>
                    <p>Tour</p>
                </a>
            </li>
        </ul>
    </div>
</div>

</template>

<script>

import Session from '../../services/session';

export default {
    data() {
        return {}
    }
}

</script>
<style>
</style>
