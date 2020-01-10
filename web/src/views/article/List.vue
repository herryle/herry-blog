<template>
  <div class="page-article">
    <div class="article-list" v-if="model">
      <div class="article-box" v-for="(item, n) in model" :key="n">
        <div class="article-item">
          <div class="article-item-info">
            <div class="article-item-title">
              <router-link tag="a" :to="`/deatil/${item._id}`">
                {{
                item.title
                }}
              </router-link>
            </div>
            <div class="articles-item-description">{{ item.description }}</div>
            <div class="article-item-intro">
              <span class="tags" v-for="(i, n) in item.categories" :key="n">
                {{
                i.key
                }}
              </span>
              <span class="iconfont icon-people author">{{ item.author }}</span>
              <span class="iconfont icon-eye browse">400</span>
            </div>
          </div>
        </div>
        <span class="article-img">
          <img :src="item.coverImg" alt />
        </span>
      </div>
    </div>

    <sidebar></sidebar>
  </div>
</template>

<script>
import sidebar from '../../components/Sidebar'
export default {
  props: {
    id: {
      require: true
    }
  },
  components: {
    sidebar
  },
  watch: {
    id: 'fetch'
  },
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async fetch() {
      if (!this.id) {
        const res = await this.$http.get('article')
        this.model = res.data
      } else {
        const res = await this.$http.get(`categories/${this.id}`)
        this.model = res.data
        if (res.data.length === 0) {
          this.$router.push('/')
        }
      }
    }
  },
  created() {
    this.fetch()
  }
}
</script>

<style lang="scss">
.page-article {
  width: 70%;
  // min-height: 80vh;
  margin: 20px auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  .article-list {
    background: #fff;
    min-width: 80%;
    margin-right: 2%;
    border-radius: 15px;
    .article-box {
      display: flex;
      justify-content: space-between;
      padding: 8px 25px;
      border-bottom: 1px solid #f6f6f6;
      .article-item-info {
        padding: 0.833333rem /* 10/12 */;
        line-height: 3rem;
        .article-item-title {
          font-size: 1.583333rem /* 19/12 */;
          a {
            text-decoration: none;
            color: #333;
          }
          a:hover {
            color: #409eff;
          }
        }
        .articles-item-description {
          color: #777;
        }
        .article-item-intro {
          span {
            margin-right: 20px;
            color: #777;
            font-size: 0.958333rem /* 11.5/12 */;
          }
          .tags {
            padding: 6px 18px;
            background: rgba(51, 119, 255, 0.1);
            color: #409eff;
            border-radius: 15px;
          }
        }
      }
      .article-img {
        width: 5.833333rem /* 70/12 */;
        margin-top: 1.666667rem /* 20/12 */;
        img {
          height: auto;
          width: 100%;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
