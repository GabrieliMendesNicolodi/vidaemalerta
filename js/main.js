function clickMenu(icon){
    console.log(icon);
    jQuery("nav").toggle('slow');
    if(jQuery(icon).text() == "menu_open"){
        jQuery(icon).text("menu");
    }else{
        jQuery(icon).text("menu_open");
    }
}