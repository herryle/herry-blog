<template>
  <el-card>
    <div class="add">
      <el-button type="primary" icon="el-icon-plus" @click="$router.push(`/articles/create`)">新增文章</el-button>
    </div>
    <el-table :data="model" border style="width: 100%;margin-bottom:5rem">
      <el-table-column prop="_id" type="index" label="序号" width="100" align="center"></el-table-column>
      <el-table-column label="文章封面" width="200" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.coverImg" style="width:5rem;height:5rem" />
        </template>
      </el-table-column>
      <el-table-column label="文章分类" width="180" align="center">
        <template slot-scope="scope">{{scope.row.categories.map(e=>e.name).join(' / ')}}</template>
      </el-table-column>
      <el-table-column prop="title" label="文章标题" align="center" width="280"></el-table-column>
      <el-table-column prop="browse" label="浏览次数" width="100" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/articles/edit/${scope.row._id}`)"
            type="primary"
            size="small"
          >编辑</el-button>
          <el-button @click="deleteArticle(scope.row)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      model: []
    }
  },
  methods: {
    async fetchArticle() {
      const items = await this.$http.get('article')
      this.model = items.data
    },
    deleteArticle(row) {
      this.$confirm(`此操作将永久删除文章 '${row.title}', 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const items = await this.$http.delete(`article/${row._id}`)
          this.fetchArticle()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  },
  created() {
    this.fetchArticle()
  }
}
</script>

<style>
.add {
  margin-bottom: 1rem;
}
</style>