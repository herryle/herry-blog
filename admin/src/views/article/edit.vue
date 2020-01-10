<template>
  <div>
    <el-card>
      <h1>{{ this.id ? '编辑' : '新建' }}文章</h1>
      <el-form @submit.native.prevent="save" label-width="120px">
        <el-form-item label="文章分类">
          <el-select v-model="model.categories" multiple>
            <el-option
              v-for="item of categories"
              :key="item._id"
              :label="item.name"
              :value="item._id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="文章标题" align="center">
          <el-input v-model="model.title"></el-input>
        </el-form-item>
        <el-form-item label="文章作者">
          <el-input v-model="model.author"></el-input>
        </el-form-item>
        <el-form-item label="文章简介">
          <el-input v-model="model.description"></el-input>
        </el-form-item>
        <el-form-item label="文章关键字">
          <el-input v-model="model.keyword"></el-input>
        </el-form-item>
        <el-form-item label="文章封面">
          <el-upload
            list-type="picture-card"
            :action="$http.defaults.baseURL + '/upload'"
            :show-file-list="false"
            :on-success="res => $set(model, 'coverImg', res.url)"
          >
            <img v-if="model.coverImg" :src="model.coverImg" style="width:100%;height:10rem" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="文章详情">
          <mavon-editor v-model="model.body" ref="md" :ishljs="true"></mavon-editor>
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
      model: {},
      categories: []
    }
  },
  methods: {
    async save() {
      if (this.id) {
        const res = await this.$http.put(`article/${this.id}`, this.model)
      } else {
        const res = await this.$http.post('article', this.model)
      }
      this.$router.push('/articles/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch() {
      const item = await this.$http.get(`article/${this.id}`)
      this.model = item.data
    },
    async fetchArticle() {
      const res = await this.$http.get(`category`)
      this.categories = res.data
    }
  },
  created() {
    this.fetchArticle()
    this.id && this.fetch()
  }
}
</script>
