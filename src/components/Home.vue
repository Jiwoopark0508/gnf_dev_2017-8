<template>
    <div>
        <v-card dark class="pa-1">
            <v-card-text v-html="text">
                {{text}}
            </v-card-text>
        </v-card>
        <br/>
        <v-card >
            <v-toolbar color="indigo" dark app>
                <v-toolbar-title>Workshop Schedule</v-toolbar-title>
            </v-toolbar>
            <table class="pa-3 bordered">
                <thead>
                    <tr >
                        <th v-for="head in headers" :key="head.id"
                        >
                            {{head.text}}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="item in items" :key="item.id"
                        :class="{odd : item.dateid % 2 != 0 }">
                        <td v-if="item.isFirst" :rowspan="count_array(item)">
                            {{item.date}} 
                        </td>
                        <td>{{item.time}}</td>
                        <td>{{item.program}}</td>
                        <td>{{item.speaker}}</td>
                        <td>{{item.location}}</td>
                        <td>{{item.etc}}</td>
                    </tr>
                </tbody>
            </table>
                    
        </v-card>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import testmd from '../markdown/home.md'
import schedule from './schedule.json'
export default {
    data() {
        return {
            text: testmd,
            headers: [
                { text: 'Date', align: 'left', value: 'date', sortable: false, id:1 },
                { text: 'Time', align: 'right', value: 'time',sortable: false, id:2 },
                { text: 'Program', align: 'right',value: 'program', sortable: false, id:3 },
                { text: 'Speaker', align: 'right',value: 'speaker',sortable: false, id:4 },
                { text: 'Location', align: 'right',value: 'location',sortable: false, id:5 },
                { text: 'Etc', align: 'right',value: 'etc',sortable: false, id:6 },
            ],
            items: schedule
        }
    },
    methods: {
        count_array: function(target) {
            let cnt = 0;
            for(let i = 0; i < this.items.length; i++) {
                if (target.dateid == this.items[i].dateid) cnt ++;
            }
            return cnt;
        }
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
.odd
    background: #f2f2f2

</style>
