<template>
  <div class="container">
    <div class="panel panel-default pt-3">
      <div class="panel-body">
        <form>
          <div class="form-group">
            <label class="control-label">名前</label>
            <input class="form-control" type="text">
          </div>
          <div class="form-group">
            <label class="control-label">性別</label>
            <div class="radio">
              <label><input type="radio" name="radio">男</label>
              <label><input type="radio" name="radio">女</label>
            </div>
          </div>
          <div class="form-group">
            <label class="control-label">出身地</label>
            <select v-model="selected" class="form-control">
              <option disabled value="">選択して下さい</option>
              <option v-for="option in options" v-bind:value="option.name" v-bind:key="option.id">
                {{ option.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label class="control-label">メールアドレス</label>
            <input class="form-control" type="email">
          </div>
          <button class="btn btn-primary">送信</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['options']
};
</script>
