<template>
    <a-table :dataSource="dataSource" :columns="columns" />
</template>
<script setup lang="ts">
import { defineComponent, reactive, defineProps } from 'vue';
const props = defineProps({
    dataSource: Array,
    columns: Array
})
</script>
<script lang="ts">
export default {

}
</script>