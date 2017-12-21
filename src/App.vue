 <template>
  <v-app id="inspire">
    <v-toolbar color="indigo" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>GNF 2017/2018</v-toolbar-title>
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
      <router-link to="layout">
        <v-btn icon>
          <v-icon>insert_chart</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>
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
    <v-footer color="indigo" app>
      <span class="white--text">&copy;GNF 2017/8</span>
      <v-spacer>
        <span class="white--text right">Syllabus</span>
      </v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
  import VueMarkdown from 'vue-markdown'

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
      VueMarkdown
    }
  }
</script>

<style>
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
