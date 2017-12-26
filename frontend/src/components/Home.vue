<template>
<v-container grid-list-md fluid fill-height>
    <v-layout
        row wrap
    >   
        <v-flex d-flex sm9 xs12> <!-- Description -->
            <v-card dark class="pa-1">
                <v-card-text v-html="text">
                    {{text}}
                </v-card-text>
            </v-card>
        </v-flex>
        <v-flex d-flex sm3 xs12> <!-- Live board -->
            <v-card v-if="isLive(items[event_idx])" dark>
                <v-toolbar color="red" dark app>
                    <v-toolbar-title class="text-xs-center">
                        Live
                    </v-toolbar-title>
                </v-toolbar>
                <v-card-text >
                    {{ items[event_idx].program }}<br/>
                    by {{items[event_idx].speaker}} 님
                </v-card-text>
            </v-card>
            <v-card v-else>
                <v-toolbar color="indigo" dark app>
                    <v-toolbar-title>
                        Next
                    </v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                    <i>{{items[event_idx + 1].program}}</i>
                    <br/>
                    by {{items[event_idx + 1].speaker}} 님
                    <br/>
                    from {{ next_time }}
                </v-card-text>
            </v-card>
        </v-flex>
        <br/>
        <v-flex xs12>
            <v-card >
                <v-toolbar color="indigo" dark app>
                    <v-toolbar-title>Workshop Schedule</v-toolbar-title>
                </v-toolbar>
                <table class="pa-3 bordered">
                    <thead>
                        <tr >
                            <th v-for="head in headers" :key="head.id"
                                :class='{"hidden-sm-and-down" : head.isHidden}'
                            >
                                {{head.text}}
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(item, idx) in items" :key="item.id"
                            :class="{odd : item.dateid % 2 != 0, active: isLive(item) }">
                            <td v-if="item.isFirst" :rowspan="count_array(item)">
                                {{item.date}} 
                            </td>
                            <td>{{item.time}}</td>
                            <td>{{item.program}}</td>
                            <td>{{item.speaker}}</td>
                            <td class="hidden-sm-and-down">{{item.location}}</td>
                            <td class="hidden-sm-and-down">{{item.etc}}</td>
                        </tr>
                    </tbody>
                </table>
                        
            </v-card>
        
        </v-flex>        
    </v-layout>
</v-container>
</template>

<script>
import schedule from './schedule.json'
import marked from 'marked'

export default {
    data() {
        return {
            text: "",
            headers: [
                { text: 'Date', align: 'left', value: 'date', sortable: false, id:1, isHidden:false },
                { text: 'Time', align: 'right', value: 'time',sortable: false, id:2, isHidden:false },
                { text: 'Program', align: 'right',value: 'program', sortable: false, id:3, isHidden:false },
                { text: 'Speaker', align: 'right',value: 'speaker',sortable: false, id:4, isHidden:false },
                { text: 'Location', align: 'right',value: 'location',sortable: false, id:5, isHidden:true },
                { text: 'Etc', align: 'right',value: 'etc',sortable: false, id:6, isHidden:true },
            ],
            items: schedule
        }
    },
    computed: {
        event_idx: function() {
            let now = this.$moment();
            let elem;
            for(let idx = 0; idx < this.items.length; idx++) {
                elem = this.items[idx];
                if(now.diff(this.$moment(elem.formattedDate, "YYYY-MM-DD HH:mm")) < 0) {
                    return idx - 1;
                }
            }
            return idx - 1;
        },
        next_time: function() {
            return this.$moment(this.items[this.event_idx+1].formattedStartTime, "YYYY-MM-DD HH:mm").format("HH:mm");
        }
    },
    methods: {
        count_array: function(target) {
            let cnt = 0;
            for(let i = 0; i < this.items.length; i++) {
                if (target.dateid == this.items[i].dateid) cnt ++;
            }
            return cnt;
        },
        isLive(program) {
            let now = this.$moment();
            let startTime = this.$moment(program.formattedStartTime, "YYYY-MM-DD HH:mm")
            let endTime = this.$moment(program.formattedEndTime, "YYYY-MM-DD HH:mm")
            let inRange = startTime.diff(now) < 0 && now.diff(endTime) < 0
            return inRange ? true : false;
        }
    },
    mounted() {
        let url = "http://localhost:3000/markdown"
        let self = this;
        this.$http.get(url)
                .then((data) => {
                    self.text = marked(data.data);
                });
    },
    components: {
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
.active
    background: burlywood
</style>
