function openMyMenu(menuName){
    include('includeUserMenu', './view/user/options/options', function(){
        openMenu(menuName)
    })
}