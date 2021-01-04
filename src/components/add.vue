<template>
  <div class="container">
    <div class="panel panel-default pt-3">
      <div class="panel-body">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label class="control-label">名前</label>
            <input class="form-control" type="text" v-model="name" @blur="$v.name.$touch()" :class="{ 'is-invalid' : $v.name.$error }">
            <div class="invalid-feedback">名前が入力されていません。</div>
          </div>
          <div class="form-group">
            <label class="control-label">性別</label>
            <div class="radio">
              <div class="custom-control custom-radio custom-control-inline" :class="{ 'is-invalid' : $v.sex.$error }">
                <input class="custom-control-input" type="radio" id="man" value="1" v-model="sex" @change="$v.sex.$touch" :class="{ 'is-invalid' : $v.sex.$error }" />
                <label class="custom-control-label" for="man">男性</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline" :class="{ 'is-invalid' : $v.sex.$error }">
                <input class="custom-control-input" type="radio" id="woman" value="2" v-model="sex" @change="$v.sex.$touch" :class="{ 'is-invalid' : $v.sex.$error }" />
                <label class="custom-control-label" for="woman">女性</label>
              </div>
              <div class="invalid-feedback">性別が選択されていません。</div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label">出身地</label>
            <select v-model="place" class="form-control" @change="$v.place.$touch" :class="{ 'is-invalid' : $v.place.$error }">
              <option value="" class="form-control">選択して下さい</option>
              <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id" class="form-control">
                {{ option.name }}
              </option>
            </select>
            <div class="invalid-feedback">出身地が選択されていません。</div>
          </div>
          <div class="form-group">
            <label class="control-label">メールアドレス</label>
            <input class="form-control" type="email" v-model="email" @blur="$v.email.$touch()" :class="{ 'is-invalid' : $v.email.$error }">
            <div class="invalid-feedback">メールアドレスが正しく入力されていません。</div>
          </div>
          <button :disabled="$v.$invalid" type="submit" class="btn btn-primary">送信</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  props: ['options'],
  data: function() {
    return {
        name: '',
        sex: '',
        place: '',
        email: '',
    }
  },
  validations: {
      name: {
        required
      },
      sex: {
        required
      },
      place: {
        required
      },
      email: {
        required, email
      }
  },
  methods: {
    submitForm() {

      this.$v.$touch();

      if(this.$v.$invalid) {
        console.log('バリデーションエラー');
      }
    }
  }
};
</script>
