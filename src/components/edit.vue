<template>
  <div class="container">
    <div class="panel panel-default">
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
            <select class="form-control">
              <option>東京都</option>
              <option>鳥取県</option>
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
