<template>
  <div>
    <el-card class="box-card">
      <h1>{{this.id?'编辑':'新建'}}分类</h1>
      <el-form @submit.native.prevent="save" label-width="120px">
        <el-form-item label="分类名称">
          <el-input v-model="model.name"></el-input>
        </el-form-item>
        <el-form-item label="分类关键字">
          <el-input v-model="model.key"></el-input>
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
      const res = await this.$http.get(`category/${this.id}`)
      this.model = res.data
    },
    async save() {
      this.id ? await this.$http.put(`category/${this.id}`, this.model) : await this.$http.post(`category`, this.model)
      this.$router.push('/categories/list')
    }
  },
  created() {
    this.id && this.fetch()
  }
}
</script>