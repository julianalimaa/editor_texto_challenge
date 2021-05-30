function selecionaMenu(ev){
    
    var itens = document.querySelectorAll(".item_menu")

    itens.forEach((item)=> {
        item.classList.remove("item_menu_selecionado")
    })

    ev.classList.add("item_menu_selecionado")
}




