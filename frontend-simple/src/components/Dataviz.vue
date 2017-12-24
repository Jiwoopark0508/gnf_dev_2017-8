<template>
<v-container fluid fill-height>
    <v-layout
        justify-center
    >
        <v-flex xs12>
        <v-card class="pa-1">
            <v-card-text v-html="text">
                {{text}}
            </v-card-text>
        </v-card>
        <br/>
        <v-card>
            <v-toolbar color="indigo" dark app>
                <v-toolbar-title>Schedule</v-toolbar-title>
            </v-toolbar>
            <v-data-table
                dark
                v-bind:headers="headers"
                hide-actions
                :items="items"
                class="elevation-1"
                >
                <template slot="items" slot-scope="props">
                    <td >{{props.item.week}}</td>
                    <td class="text-xs-right">{{props.item.date}}</td>
                    <td class="text-xs-right">{{props.item.name}}</td>
                    <td class="text-xs-right">{{props.item.name}}</td>
                </template>
            </v-data-table>
        </v-card>
     </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import testmd from '../test.md'
export default {
    data() {
        return {
            headers: [
                { text: 'Date', align: 'left', value: 'date', sortable: false },
                { text: 'Time', align: 'right', value: 'time',sortable: false },
                { text: 'Program', align: 'right',value: 'program', sortable: false },
                { text: 'Speaker', align: 'right',value: 'speaker',sortable: false },
                { text: 'Location', align: 'right',value: 'location',sortable: false },
                { text: 'Etc', align: 'right',value: 'etc',sortable: false },
            ],

            text: testmd,
            items: [
                {
                    date: '2017-12-20(수)',
                    time: '10:10 ~ 11:10',
                    program: "디지털, 저널리즘, 미디어의 역할",
                    speaker: "강정수",
                    location: "구글코리아 21층 마당",
                },
          ]

        }
    },
    methods: {
        renderd: () => {console.log("!")}
    },
    components: {
        VueMarkdown
    }
}
</script>

<style lang="sass">
*
    font-weight: 600
.main-text
    h1
        font-weight: 400
code
    background: none
    color: black
    font-size: 100%
    box-shadow: none

</style>
