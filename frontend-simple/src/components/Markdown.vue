<template>
    <div>
        <v-card class="pa-3">
            <v-card-textarea>
                <vue-markdown># Google Newslab 3기 개발자 프로젝트
h2 Heading by HTML
## h2 Heading
### h3 Heading
                </vue-markdown>
            </v-card-textarea>
        </v-card>
    </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
    data() {
        return {
            text: "#iam ~tast *text"
        }
    },
    components: {
        VueMarkdown
    }
}
</script>

<style>

</style>
