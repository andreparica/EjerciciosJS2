let tamaño = prompt ("Escoja el tamaño de su pizza: personal, mediana o familiar");

switch (tamaño) {
    case "personal":
        switch (prompt ("¿La deseas de pollo y champiñones, hawaina o carnes?")) {
            case "pollo y champiñones":
                switch (prompt("¿con queso o sin queso?")) {
                    case "con queso":
                        alert("Usted ha selecciona una pizza personal de pollo y champiñones con queso");
                        
                        break;

                        case "sin queso":
                            switch (prompt ("¿con salsa o con borde de bocadillo?")) {
                                case "con salsa":
                                    alert("Usted ha selecciona una pizza personal de pollo y champiñones sin queso y con salsa");
                                    
                                    break;

                                    case "con borde de bocadillo":
                                        alert("Usted ha selecciona una pizza personal de pollo y champiñones sin queso y con borde de bocadillo");
                                    
                                        break;
                            
                                default:
                                    alert ("Elige una de las opciones presentadas");
                                    break;
                            }
                        
                        break;
                
                    default:
                        alert ("Elige una de las opciones presentadas");
                        break;
                }
                
                break;

            case "hawaina":
                switch (prompt ("¿la desea sin piña o sin jamon?")) {
                    case "sin piña":
                        alert("Usted ha seleccionado una pizza personal hawaina sin piña");
                        
                        break;

                        case "sin jamon":
                        if  (prompt ("¿la desea con salami?")  == "si"     ){
                            alert ("Usted ha seleccionado una pizza personal hawaina sin jamon con salami");
                            
                        } else {
                            alert ("Usted ha seleccionado una pizza personal hawaina sin jamon");
                            
                        }
                        
                        break;
                
                    default:
                        alert ("Elige una de las opciones presentadas");
                        break;
                }
                
                break;

            case "carnes":
                switch (prompt ("¿la desea sin salami o con queso?")) {
                    case "sin salami":
                        if  (prompt ("¿la desea con cabano?")  == "si"     ){
                            alert ("Usted ha seleccionado una pizza personal de carnes, sin salami con cabano");
                            
                        } else {
                            alert ("Usted ha seleccionado una pizza personal de carnes sin salami.");
                            
                        }
                        
                        break;

                    case "con queso":
                            alert ("Usted ha seleccionado una pizza personal de carnes con queso.");

                        break;


                
                    default:
                        alert ("Elige una de las opciones presentadas");
                        break;
                }
                
                break;
            
        
            default:
                alert ("Elige una de las opciones presentadas");
                break;
        }
        
        break;

    case "mediana":
        switch (prompt ("¿la desea mexicana o criolla?")) {
            case "mexicana":

                switch (prompt ("¿la desea con nachos o sin nachos?")) {
                    case "nachos":
                        case "con nachos":
                        alert ("Usted ha seleccionado una pizza mediana mexicana con nachos.");        
                        break;
        
                        case "sin nachos":
                            if  (prompt ("¿la desea con extra guacamole?")  == "si"     ){
                                alert ("Usted ha seleccionado una pizza mediana mexicana sin nachos con extra guacamole");
        
                            } else {
                                alert ("Usted ha seleccionado una pizza mexicana mediana sin nachos.");
                                
                            }
                            break;
                        }
                break;

            
                case "criolla":
                    switch (prompt ("¿la desea con maiz o sin maiz?")) {
                        case "con maiz":
                            alert ("Usted ha seleccionado una pizza mediana criolla con maíz");
                            
                            break;

                        case "sin maiz":
                            switch (prompt("¿la desea con extracarne molida o con queso?")) {
                                case "extracarne molida":
                                    alert ("Usted ha seleccionado una pizza mediana criolla con extracarne molida");
                                    
                                    break;

                                case "con queso":
                                    alert ("Usted ha seleccionado una pizza mediana criolla con queso");
                                        
                                    break;
    
                            
                                default:
                                    alert ("Elige una de las opciones presentadas");
                                    break;
                            }
                    
                        default:
                            alert ("Elige una de las opciones presentadas");
                            break;
                    }
                    
                    break;
            
            
                
                    default:
                        alert ("Elige una de las opciones presentadas");
                        break;
                }

        break;

    case "familiar":
        switch (prompt("¿la deseas vegetariana o carne y pollo")) {
            case "vegetariana":
                switch (prompt("¿la deseas con queso o sin queso?")) {
                    case "con queso":
                        case "queso":
                            alert("Usted ha seleccionado un pizza familiar vegetariana con queso");
                        break;

                        case "sin queso":
                            alert("Usted ha seleccionado un pizza familiar vegetariana");
                        break;
                
                    default:
                        alert ("Elige una de las opciones presentadas");
                        break;
                }
                
                break;

            case "carne y pollo":
                switch (prompt ("la deseas con adicion de salchichas o adicion de champiñones?")) {
                    case "con adicion de salchichas":
                        case "adicion de salchichas":
                            alert ("Usted ha selecciona una pizza familiar de carne y pollo con adición de salchichas");
                        
                        break;

                        case "adicion de champiñones":
                            case "con adicion de champiñones":
                            alert ("Usted ha selecciona una pizza familiar de carne y pollo con adición de champiñones");
                        
                        break;
                
                    default:
                        alert ("Elige una de las opciones presentadas");
                        break;
                }
        
            default:
                alert ("Elige una de las opciones presentadas");
                break;
        }
        
        break;

    default:
        alert ("Elige una de las opciones presentadas");
        break;
}
