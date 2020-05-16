<template>
  <div>
    <h1>Students list</h1>
    <hr />
    <div v-if="students && latest">
      <h2>Total: {{ total }}</h2>
      <table>
        <thead>
          <th v-for="item in Object.keys(latest)" :key="item">
            {{ item.toUpperCase() }}
          </th>
          <th>ACTION</th>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <td v-for="(item, i) in Object.values(student)" :key="student.id + i + item">{{ item }}</td>
            <td><button @click="deleteStudents(student.id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <router-link :to="{ name: 'Add' }" tag="button">Add</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Utils from '@/mixin'
// import { Student } from '../type'

@Component({
  mixins: [Utils]
})
export default class ViewList extends Vue {}
</script>
