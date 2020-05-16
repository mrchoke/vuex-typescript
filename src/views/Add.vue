<template>
  <div class="about">
    <h1>Add New Student</h1>
    <div><label>FirstName:</label><input type="text" v-model="student.firstname" /></div>
    <div><label>LastName:</label><input type="text" v-model="student.lastname" /></div>
    <div><label>Age:</label><input type="number" max="50" min="7" v-model="student.age" /></div>
    <div>
      <button @click="addNew()">Add</button>
    </div>
    <hr />
    <h2>Total</h2>
    <div>{{ total }}</div>
    <div v-if="latest">
      <h2>Last Record:</h2>
      <table>
        <thead>
          <th>ID</th>
          <th>FullName</th>
          <th>Age</th>
        </thead>
        <tr>
          <td>{{ latest.id }}</td>
          <td>{{ latest.fullname }}</td>
          <td>{{ latest.age }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Utils from '@/mixin'
import { Student } from '../type'

@Component({
  mixins: [Utils]
})
export default class Add extends Vue {
  maxId!: number
  updateStudents!: (student: Student) => void
  student = new Student()

  addNew() {
    const newId: number = this.maxId + 1
    this.student.id = newId
    this.updateStudents(this.student)
    this.student = new Student()
  }
}
</script>
