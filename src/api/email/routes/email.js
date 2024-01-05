module.exports = {
  routes: [
    { // Path defined with a URL parameter
      method: 'GET',
      path: '/email/templates',
      handler: 'email.templates',
      config: {
        auth: false
      }
    }
  ]
}
