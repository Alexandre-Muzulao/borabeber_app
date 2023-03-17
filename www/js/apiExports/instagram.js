function instragam(){
    MobileUi.ajax.get()
    .query('https://api.instagram.com/oauth/authorize/?client_id=720854838409388&redirect_uri=REDIRECT-URI&response_type=token')
    .send()
    .then(function(){
        
    })
}