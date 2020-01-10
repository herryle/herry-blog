<template>
  <el-card>
    <div class="addUser">
      <el-button
        type="primary"
        icon="el-icon-plus"
        @click="$router.push(`/users/create`)"
        >新增用户</el-button
      >
    </div>
    <el-table :data="model" border style="width: 100%;margin-bottom:5rem">
      <el-table-column
        prop="_id"
        type="index"
        align="center"
        label="序号"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        width="380"
        align="center"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/users/edit/${scope.row._id}`)"
            type="primary"
            size="small"
            >编辑</el-button
          >
          <el-button @click="deleteUser(scope.row)" type="danger" size="small"
            >删除</el-button
          >
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
    async fetchUser() {
      const items = await this.$http.get('user')
      this.model = items.data
    },
    deleteUser(row) {
      this.$confirm(`此操作将永久删除分类 '${row.name}', 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const items = await this.$http.delete(`user/${row._id}`)
          this.fetchUser()
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
    this.fetchUser()
  }
}
</script>

<style>
.addUser {
  margin-bottom: 1rem;
}
</style>
