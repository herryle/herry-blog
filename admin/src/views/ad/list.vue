<template>
  <el-card>
    <div class="addAd">
      <el-button type="primary" icon="el-icon-plus" @click="$router.push(`/ads/create`)">新增广告</el-button>
    </div>
    <el-table :data="model" border style="width: 100%;margin-bottom:5rem">
      <el-table-column prop="_id" type="index" label="序号" width="100" align="center"></el-table-column>
      <el-table-column prop="title" label="广告标题" width="280" align="center"></el-table-column>
      <el-table-column prop="link" label="广告链接" width="280" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/ads/edit/${scope.row._id}`)"
            type="primary"
            size="small"
          >编辑</el-button>
          <el-button @click="deleteAd(scope.row)" type="danger" size="small">删除</el-button>
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
    async fetchAd() {
      const items = await this.$http.get('ad')
      this.model = items.data
    },
    deleteAd(row) {
      this.$confirm(`此操作将永久删除广告 '${row.title}', 是否继续?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const items = await this.$http.delete(`ad/${row._id}`)
          this.fetchAd()
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
    this.fetchAd()
  }
}
</script>

<style>
.addAd {
  margin-bottom: 1rem;
}
</style>