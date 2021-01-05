<template>
  <div class="container">
    <div class="panel panel-default pt-3">
      <div class="panel-body">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label class="control-label">名前</label>
            <input class="form-control" type="text" v-model="form.name" @blur="$v.form.name.$touch()" :class="{ 'is-invalid' : $v.form.name.$error }">
            <div class="invalid-feedback">名前が入力されていません。</div>
          </div>
          <div class="form-group">
            <label class="control-label">性別</label>
            <div class="radio">
              <div class="custom-control custom-radio custom-control-inline" :class="{ 'is-invalid' : $v.form.sex.$error }">
                <input class="custom-control-input" type="radio" id="man" value="1" v-model="form.sex" @change="$v.form.sex.$touch" :class="{ 'is-invalid' : $v.form.sex.$error }" />
                <label class="custom-control-label" for="man">男性</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline" :class="{ 'is-invalid' : $v.form.sex.$error }">
                <input class="custom-control-input" type="radio" id="woman" value="2" v-model="form.sex" @change="$v.form.sex.$touch" :class="{ 'is-invalid' : $v.form.sex.$error }" />
                <label class="custom-control-label" for="woman">女性</label>
              </div>
              <div class="invalid-feedback">性別が選択されていません。</div>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label">出身地</label>
            <select v-model="form.selectedPlaceId" class="form-control" @change="$v.form.selectedPlaceId.$touch" :class="{ 'is-invalid' : $v.form.selectedPlaceId.$error }">
              <option value="" class="form-control">選択して下さい</option>
              <option v-for="place in places" :value="place.id" :key="place.id" class="form-control">
                {{ place.name }}
              </option>
            </select>
            <div class="invalid-feedback">出身地が選択されていません。</div>
          </div>
          <div class="form-group">
            <label class="control-label">メールアドレス</label>
            <input class="form-control" type="email" v-model="form.email" @blur="$v.form.email.$touch()" :class="{ 'is-invalid' : $v.form.email.$error }">
            <div class="invalid-feedback">メールアドレスが正しく入力されていません。</div>
          </div>
          <button :disabled="$v.form.$invalid" type="submit" class="btn btn-primary">送信</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'BaseForm',
  props: {
    name: String,
    sex: Number,
    selectedPlaceId: Number,
    email: String,
  },
  data: function() {
    return {
      form: {
        name: this.name,
        sex: this.sex,
        selectedPlaceId: this.selectedPlaceId,
        email: this.email,
      },
      places: []
    }
  },
  mounted: function () {
    this.places = [
      { id: 1, name: '北海道'},
      { id: 2, name: '青森県'},
      { id: 3, name: '岩手県'},
      { id: 4, name: '宮城県'},
      { id: 5, name: '秋田県'},
      { id: 6, name: '山形県'},
      { id: 7, name: '福島県'},
      { id: 8, name: '茨城県'},
      { id: 9, name: '栃木県'},
      { id: 10, name: '群馬県'},
      { id: 11, name: '埼玉県'},
      { id: 12, name: '千葉県'},
      { id: 13, name: '東京都'},
    ]
  },
  validations: {
    form: {
      name: {
        required
      },
      sex: {
        required
      },
      selectedPlaceId: {
        required
      },
      email: {
        required, email
      }
    }
  },
  methods: {
    submitForm() {

      this.$v.form.$touch();

      if(this.$v.form.$invalid) {
        console.log('バリデーションエラー');
      }
    }
  }
};
</script>
