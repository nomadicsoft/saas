import { Model as BaseModel } from 'vue-api-query'

export default class Model extends BaseModel {

  // Define a base url for a REST API
  baseURL() {
    return '/api'
  }

  // Implement a default request method
  request(config) {
    return this.$http.request(config)
  }
}
