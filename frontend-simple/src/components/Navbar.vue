<template>
    <div>
        <v-navigation-drawer
        fixed
        v-model="drawer"
        app
        >
        <v-list dense>
            <v-list-tile @click="">
            <v-list-tile-action>
                <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="">
            <v-list-tile-action>
                <v-icon>contact_mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
                <v-list-tile-title>Contact</v-list-tile-title>
            </v-list-tile-content>
            </v-list-tile>
        </v-list>
        </v-navigation-drawer>
        <v-toolbar color="indigo" dark>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            
            <v-toolbar-title>
                GNF 2017/2018
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <router-link to="/">
                <v-btn icon>
                <v-icon>home</v-icon>
                </v-btn>
            </router-link>
            <router-link to="dataviz">
                <v-btn icon>
                <v-icon>insert_chart</v-icon>
                </v-btn>
            </router-link>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: true
        }
    }
}
</script>

<style>

</style>
