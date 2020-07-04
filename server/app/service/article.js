const Service = require("egg").Service

class AritcleService extends Service{
  async create(params) {
    const { app } = this;
    try{
      const res = await app.mysql.insert('article', params);
      return res
    }catch(err){
      console.log(err)
      return null
    }
  }

  async lists() {
    const { app } = this;
    try{
      const res = await app.mysql.select('article');
      return res
    }catch(err){
      console.log(err)
      return null
    }
  }

  async detail(id) {
    const { app } = this
    if(!id) {
      console.log('id必须传递')
      return null
    }
    try {
      const res = await app.mysql.get('article', {id})
      return res
    } catch (error) {
      console.log(error)
      return null
    }
  }
}
module.exports = AritcleService;
