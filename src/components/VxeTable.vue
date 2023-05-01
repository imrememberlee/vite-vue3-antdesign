<template>
  <vxe-table
    ref="xTable"
    max-height="500"
    :data="tableData"
    :edit-config="{ trigger: 'manual', mode: 'row' }"
  >
    <vxe-column field="name" title="Name" width="120" :edit-render="{}">
      <template #edit="{ row }">
        <a-input v-model:value="row.name"></a-input>
      </template>
    </vxe-column>
    <vxe-column field="age" title="Age" width="120" :edit-render="{}">
      <template #edit="{ row }">
        <a-input-number v-model:value="row.age"></a-input-number>
      </template>
    </vxe-column>
    <vxe-column field="date" title="Date" width="200" :edit-render="{}">
      <template #default="{ row }">
        {{ row.date ? dayjs(row.date).format('YYYY-MM-DD') : '' }}
        <!-- <a-date-picker v-model:value="row.date" type="date" @change="(date: any) => changeData(date, rowIndex)"></a-date-picker> -->
      </template>
      <template #edit="{ row, rowIndex }">
        <a-date-picker
          v-model:value="row.date"
          type="date"
          @change="(date: any) => changeData(date, rowIndex)"
        ></a-date-picker>
      </template>
    </vxe-column>
    <!-- <vxe-table-column field="date7" title="ATimePicker" width="200" :edit-render="{name: 'ATimePicker', props: {type: 'date', format: 'HH:mm:ss'}}"></vxe-table-column> -->
    <vxe-table-column
      field="date7"
      title="ATimePicker"
      width="200"
      :cell-render="{
        name: 'ATimePicker',
        props: { type: 'date', format: 'HH:mm:ss' },
      }"
    >
      <template #default="{ row }">
        <a-time-picker v-model:value="row.date7" value-format="HH:mm:ss" />
      </template>
    </vxe-table-column>
    <vxe-column title="操作" width="160">
      <template #default="{ row }">
        <a-button @click="editRowEvent(row)">编辑</a-button>
      </template>
    </vxe-column>
  </vxe-table>
  <a-input></a-input>
  <a-date-picker v-model:value="value1" />
  {{ dayjs(value1).format('YYYY-MM-DD') }}
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import dayjs, { Dayjs } from 'dayjs'
import { VxeTableInstance } from 'vxe-table'
// import locale from 'ant-design-vue/es/date-picker/locale/zh_CN'
// import customParseFormat from 'dayjs/plugin/customParseFormat'
// dayjs.extend(customParseFormat)
// dayjs.locale('zh-cn')
interface useInfoModel {
  id: string | number
  name: string
  age: number
  date?: Dayjs
  date7?: Dayjs
}
let tableData = reactive<useInfoModel[]>([{ id: 0, age: 0, name: '' }])
tableData = [
  { id: 100, name: 'test022222', age: 28, date: dayjs('2015-01-01') },
  { id: 101, name: 'test1', age: 32, date: dayjs('2015-01-01') },
  { id: 102, name: 'test2', age: 36, date: dayjs('2015-01-01') },
  { id: 102, name: 'test2', age: 36, date: dayjs('2015-01-01') },
  { id: 102, name: 'test2', age: 36, date: undefined },
  { id: 102, name: 'test2', age: 36, date: undefined },
  { id: 102, name: 'test2', age: 36, date: undefined },
  // { id: 102, name: 'test2', age: 36, date: dayjs(new Date(), "YYYY-MM-DD") },
]
const value1 = ref<Dayjs>()
const changeData = (date: Dayjs, idx: number): void => {
  console.log('date', date)
  console.log('idx', idx)
  tableData[idx].date = date
}
const xTable = ref<VxeTableInstance>()
const editRowEvent = (row: useInfoModel) => {
  const vxetable = xTable.value
  vxetable && vxetable.setEditRow(row)
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
