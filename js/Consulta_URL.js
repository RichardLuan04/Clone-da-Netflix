function Consulta(parametro) {  
    
    let loc = location.search.substring(1, location.search.length)
    let parametro_valor = false  
    let parametros = loc.split("&")
    for (i=0; i<parametros.length;i++) {   
        parametro_name = parametros[i].substring(0,parametros[i].indexOf('='))  
        if (parametro_name == parametro) {                                          
            parametro_valor = parametros[i].substring(parametros[i].indexOf('=')+1)   
        }   
    }   
    if (parametro_valor) {   
        return parametro_valor   
    }   
    else {   
        return undefined
    }   
}