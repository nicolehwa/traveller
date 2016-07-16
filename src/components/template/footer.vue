<template>
<footer class="footer">
    <div class="container-fluid">
        <nav class="pull-left">
            <ul>
                <li>
                    <a href="#">
                          version 1.0.0</i>
                      </a>
                </li>
            </ul>
        </nav>
        <p class="copyright pull-right">
            &copy; {{year}}Traveller Company
        </p>
    </div>
</footer>

</template>

<script>

import http from '../../services/http';

export default {
    data() {
            return {
                year: new Date().getFullYear(),
                version: '',
                expiry: ''
            }
        },


}

</script>
<style>
</style>
