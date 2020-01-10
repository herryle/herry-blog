<template>
  <div>
    <el-card class="box-card">
      <h1>{{this.id?'编辑':'新建'}}广告</h1>
      <el-form @submit.native.prevent="save" label-width="120px">
        <el-form-item label="广告标题">
          <el-input v-model="model.title"></el-input>
        </el-form-item>
        <el-form-item label="广告链接">
          <el-input v-model="model.link"></el-input>
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
      const res = await this.$http.get(`ad/${this.id}`)
      this.model = res.data
    },
    async save() {
      this.id ? await this.$http.put(`ad/${this.id}`, this.model) : await this.$http.post(`ad`, this.model)
      this.$router.push('/ads/list')
    }
  },
  created() {
    this.id && this.fetch()
  }
}
</script>