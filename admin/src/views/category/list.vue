<template>
  <el-card>
    <div class="addCategory">
      <el-button type="primary" icon="el-icon-plus" @click="$router.push(`/categories/create`)">新增分类</el-button>
    </div>
    <el-table :data="model" border style="width: 100%;margin-bottom:5rem">
      <el-table-column prop="_id" type="index" align="center" label="序号" width="100"></el-table-column>
      <el-table-column prop="name" label="分类名称" width="280" align="center"></el-table-column>
      <el-table-column prop="key" label="分类关键字" width="280" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/categories/edit/${scope.row._id}`)"
            type="primary"
            size="small"
          >编辑</el-button>
          <el-button @click="deleteCategory(scope.row)" type="danger" size="small">删除</el-button>
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
    async fetchCategory() {
      const items = await this.$http.get('category')
      this.model = items.data
    },
    deleteCategory(row) {
      this.$confirm(`此操作将永久删除分类 '${row.name}', 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const items = await this.$http.delete(`category/${row._id}`)
          this.fetchCategory()
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
    this.fetchCategory()
  }
}
</script>

<style>
.addCategory {
  margin-bottom: 1rem;
}
</style>