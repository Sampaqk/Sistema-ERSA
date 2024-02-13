export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })
let url ='http://localhost/sistema/api/public/api/'
  api.url = url
  api.setBaseURL(url)

  // Inject to context as $api
  inject('api', api)
}
