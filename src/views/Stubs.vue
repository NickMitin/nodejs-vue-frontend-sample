<template>
    <div>
        <h1>Stubs</h1>
        <StubList :dataSource="dataSource" :columns="columns" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from 'axios';


import StubList from "../components/StubList.vue";

const apiUrl = import.meta.env.VITE_APP_API_BASE_URL_LOCAL

export default defineComponent({
    name: "Home",
    components: {
        StubList
    },
    data() {
        return {
            dataSource: [],
            columns: [
                {
                    title: 'ID',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: 'Title',
                    dataIndex: 'title',
                    key: 'title',
                },
                {
                    title: 'Description',
                    dataIndex: 'description',
                    key: 'description',
                },
                {
                    title: 'Number',
                    dataIndex: 'number',
                    key: 'number',
                },
            ]
        }
    },
    created() {
        axios.get(`${apiUrl}stubs`)
            .then(response => {
                // JSON responses are automatically parsed.
                this.dataSource = response.data
            })
            .catch(e => {
                this.errors.push(e)
            })
    }
});
</script>
