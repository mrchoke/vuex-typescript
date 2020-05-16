import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapGetters } from 'vuex'

@Component({
  computed: mapGetters(['students', 'maxId', 'total', 'latest']),
  methods: { ...mapActions(['updateStudents', 'deleteStudents']) }
})
export default class Utils extends Vue {}
