function openMyMenu(menuName, idMenuDiv){
    include('mainUserMenu', './view/user/options/options', function(){
        openMenu('userMenu')
    })
}