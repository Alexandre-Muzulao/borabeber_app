function facebook() {
    facebookConnectPlugin.login(
      ['public_profile', 'email'],
      function (result) {
        facebookConnectPlugin.api(
          '/me?fields=email,name,picture.height(1024).width(980)',
          ['public_profile', 'email'],
          function (userData) {
            return userData
          },
          function (error) {
            alert(JSON.stringify(error))
          }
        )
      },
      function (error) {
        alert(JSON.stringify(error), 'Ops, probleminha /=')
      }
    )
  }

function socialmock(social, callback){
  MobileUI.ajax.get(url + '/socialmock')
  .query('social=' + social)
  .send()
  .then(function(res){
    callback (res)
  })
}