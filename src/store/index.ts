import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState, Student, Students } from '@/type'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    students: []
  },
  mutations: {
    UPDATE_STUDENTS(state, student: Student) {
      state.students.push(student)
    },
    DELETE_STUDENTS(state, id: number) {
      const search = state.students.filter(i => i.id !== id)
      state.students = search
    }
  },
  actions: {
    updateStudents(contex, student: Student) {
      contex.commit('UPDATE_STUDENTS', student)
    },
    deleteStudents(contex, id: number) {
      contex.commit('DELETE_STUDENTS', id)
    }
  },
  getters: {
    students(state): Students {
      return state.students
    },
    maxId(state): number {
      return state.students.reduce((max, student) => (student.id > max ? student.id : max), state.students[0]?.id ?? 0)
    },
    total(state): number {
      return state.students.length
    },
    latest(state): Student {
      return state.students.slice(-1)[0]
    }
  }
}
export default new Vuex.Store<RootState>(store)
