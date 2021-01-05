<template>
  <base-form
    :name="name"
    :sex="sex"
    :selectedPlaceId="selectedPlaceId"
    :email="email"
  >
  </base-form>
</template>

<script>
import BaseForm from './BaseForm'

export default {
  name: 'Edit',
  data () {
    return {
      name: '',
      sex: '',
      selectedPlaceId: '',
      email: '',
    }
  },
  created: function () {
      this.name = '田中 一郎',
      this.sex = 1,
      this.selectedPlaceId = 2,
      this.email = 'test1@gmail.com'
  },
  components: { BaseForm }
}
</script>
