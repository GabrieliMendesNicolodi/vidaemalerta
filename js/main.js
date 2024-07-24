function clickMenu(icon){
    if(jQuery(icon).text() == "menu_open"){
        jQuery(icon).text("menu").removeClass("closebtn");
        jQuery("nav").removeClass("areawidth");
    }else{
        jQuery(icon).text("menu_open").addClass("closebtn");
        jQuery("nav").addClass("areawidth");
    }
}