
<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'

type  ColumnType = {
    accesor: string,
    label: string
}

type Props<T> = {
    items: T[],
    columns: ColumnType[],
    loading: boolean
}

export default defineComponent({
    props: {
        items: {
            type: Array,
            default: () => []
        },
        columns: {
            type: Array as PropType<ColumnType[]>,
            required: true,
            default: () => []
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props, context) {
        const search = ref('');

        const filteredItems = computed(() => {
            if (search.value === '') {
                return [...props.items];
            }
            return [...props.items].filter(item => {
                return props.columns.some((column: ColumnType) => {
                    const value = getItem(item, column);
                    return String(value).toLowerCase().includes(search.value.toLowerCase());
                });
            });
        });

        function getItem(item: any, column: ColumnType) {
            return column.accesor.split('.').reduce((acc, key) => acc ? acc[key] : null, item);
        }

        return {
            search,
            filteredItems,
            getItem
        }
    },
})
</script>



<template>
    <div v-if="loading">
        loading ...
    </div>
    <div v-else>
        <div class="mb">
            <label>Buscar: </label>
            <input 
                type="text" 
                v-model="search"
            />
        </div>
        <table cellpadding="0" cellspacing="0">
            <thead>
                <tr>
                    <th v-for="(column, index) in columns" :key="index">{{column.label}}</th>
                </tr>    
            </thead>
            <tbody>
                <tr v-for="(item, index) in filteredItems" :key="index">
                    <td v-for="(column, index) in columns" :key="index">
                        {{getItem(item, column)}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.mb {
    margin-bottom: 30px;
}
table {
    width: 100%;
}
table th {
    background-color: #eee;
}
table td, table th {
    line-height: 2.5em;
    border-bottom: 1px solid #ccc;
}
</style>
