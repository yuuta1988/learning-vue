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
        <tr v-for="(user,index) in users" v-bind:key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.sex }}</td>
          <td>{{ user.place }}</td>
          <td>{{ user.email }}</td>
          <td>
            <div class="bd-example">
              <router-link class="btn btn-primary px-3" :to="{ name: 'edit', params: { id: user.id } }">編集</router-link>
              <button @click="deleteUser(index)" type="button" class="btn btn-danger">削除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  const users = [
    {
      'id': 1,
      'name': '田中 一郎',
      'sex': '男',
      'place': '東京都',
      'email': 'test1@gmail.com'
    },
    {
      'id': 2,
      'name': '田中 二郎',
      'sex': '男',
      'place': '東京都',
      'email': 'test2@gmail.com'
    },
    {
      'id': 3,
      'name': '山田 花子',
      'sex': '女',
      'place': '島根県',
      'email': 'test3@gmail.com'
    },
  ];

  export default {
    data(){
      return {
        users: users,
      }
    },
    methods: {
      deleteUser: function(index){
        if (confirm('本当によろしいですか？')) {
          this.users.splice(index, 1);
        }
      }
    }
  }
</script>
