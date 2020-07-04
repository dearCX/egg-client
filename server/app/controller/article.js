const Controller = require('egg').Controller
const moment = require('moment')

class ArticleController extends Controller {
  async create() {
    const { ctx } = this;
    console.log(ctx.request.body)
    let params = {
      ...ctx.request.body,
      createTime: moment().format('YYYY-MM-DD HH:mm:ss')
    }
    const res = await ctx.service.article.create(params)
    if(res){
      ctx.body = {
        status: 200,
        data: res
      }
    }else{
      ctx.body = {
        status: 500,
        errorMsg: '发布文章失败'
      }
    }
  }
  async lists() {
    const { ctx } = this
    const res = await ctx.service.article.lists()
    if(res){
      ctx.body = {
        status: 200,
        data: res
      }
    }else{
      ctx.body = {
        status: 500,
        errorMsg: '查询文章列表失败'
      }
    }
  }
  async detail() {
    const { ctx } = this
    const res = await ctx.service.article.detail(ctx.params.id)
    if(res) {
      ctx.body = {
        status: 200,
        data: res
      }
    } else {
      ctx.body = {
        status: 500,
        errorMsg: '文章查询详情失败'
      }
    }
  }
}

module.exports = ArticleController;
