<template>
  <v-app id="inspire">
    <navbar></navbar>
    <!-- Main Content from here -->
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
        >
          <v-flex xs12>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <footer></footer>
  </v-app>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import GNLFooter from './components/GNLFooter.vue'

  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          { icon: 'bubble_chart', title: 'Inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
        text : "i am a ~~tast~~ **test**.dsfgh"
      }
    },
    components: {
      Navbar,
      GNLFooter
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table {
  width: 100%;
  display: table;
}
table, th, td{
  border: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
thead {
  border-bottom: 1px solid #d0d0d0;
}
table.bordered>thead>tr, table.bordered>tbody>tr {
  border-bottom: 1px solid #d0d0d0;
}
td, th {
  padding: 9px 5px;
  display: table-cell;
  text-align: left;
  vertical-align: middle;
  border-radius: 2px;
}
</style>
