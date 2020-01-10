<template>
  <div>
    <el-card class="box-card">
      <h1>{{ this.id ? '编辑' : '新建' }}用户</h1>
      <el-form @submit.native.prevent="save" label-width="120px">
        <el-form-item label="用户名称">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`user/${this.id}`)
      this.model = res.data
    },
    async save() {
      this.id
        ? await this.$http.put(`user/${this.id}`, this.model)
        : await this.$http.post(`user`, this.model)
      this.$router.push('/users/list')
    }
  },
  created() {
    this.id && this.fetch()
  }
}
</script>
