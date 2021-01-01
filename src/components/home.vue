<template>
  <div class="container">
    <div class="py-2 clearfix">
      <router-link type="button" class="btn btn-primary float-right" to="add">追加</router-link>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">名前</th>
          <th scope="col">性別</th>
          <th scope="col">出身地</th>
          <th scope="col">メールアドレス</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>田中 一郎</td>
          <td>男</td>
          <td>東京都</td>
          <td>test1@gmail.com</td>
          <td>
            <div class="bd-example">
              <button type="button" class="btn btn-primary">編集</button>
              <button type="button" class="btn btn-danger">削除</button>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>田中 二郎</td>
          <td>男</td>
          <td>東京都</td>
          <td>test2@gmail.com</td>
          <td>
            <div class="bd-example">
              <button type="button" class="btn btn-primary">編集</button>
              <button type="button" class="btn btn-danger">削除</button>
            </div>
          </td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>山田 花子</td>
          <td>女</td>
          <td>鳥取県</td>
          <td>test3@gmail.com</td>
          <td>
            <div class="bd-example">
              <button type="button" class="btn btn-primary">編集</button>
              <button type="button" class="btn btn-danger">削除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
