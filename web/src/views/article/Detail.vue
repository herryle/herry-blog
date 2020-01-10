<template>
  <div class="page-deatil" v-if="model">
    <div class="article-deatil">
      <mavon-editor
        v-model="model.body"
        :ishljs="true"
        :defaultOpen="'preview'"
        :editable="false"
        :subfield="false"
        :toolbarsFlag="false"
      />
    </div>
    <sidebar></sidebar>
  </div>
</template>

<script>
import sidebar from '../../components/Sidebar'

export default {
  components: {
    sidebar
  },
  props: {
    id: { require: true }
  },
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`article/${this.id}`)
      this.model = res.data
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style lang="scss">
.page-deatil {
  width: 70%;
  min-height: 80vh;
  margin: 20px auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  .article-deatil {
    padding: 20px;
    min-width: 80%;
    font-size: 1.333333rem /* 16/12 */;
    background: #fff;
    line-height: 2rem /* 24/12 */;
    // flex: 1;
    margin-right: 1.916667rem /* 23/12 */;
    border-radius: 15px;
    img {
      width: 50%;
      height: auto;
    }
  }
}
</style>
