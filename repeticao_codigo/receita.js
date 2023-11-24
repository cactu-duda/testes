/* Dever de casa:
 * 1) pesquisar sobre estruturas de dados em Javascript:
 *      - Objetos: https://www.w3schools.com/js/js_objects.asp
 *      - Array: https://www.w3schools.com/js/js_arrays.asp
 */


var receitas = {
    bolo : {
        titulo : "Receita de bolo",
        descricao : "Receita de bolo bem gostosa",
        ingredientes : [
            "banana", "farinha", "fermento", "leite"
        ],
        preparo : "junte todos os ingredientes"
    },
    biscoito : {
        titulo : "Receita de biscoito",
        descricao : "Receita de biscoito bem gostoso",
        ingredientes : [
            "acucar mascavo", "farinha", "chocolate"
        ],
        preparo : "junte todos os ingredientes"
    },
    torta: {
        titulo : "Receita de torta",
        descricao : "Receita de torta bem gostosa",
        ingredientes : [
            "manteiga", "frango"
        ],
        preparo : "junte todos os ingredientes"
    }
}

function receita(sabor) {
    document.getElementById('titulo').innerHTML = receitas[sabor].titulo;
    document.getElementById('descricao').innerHTML = receitas[sabor].descricao;

    var lista_ingredientes = document.getElementById("ingredientes");
    var ingredientes = receitas[sabor].ingredientes;
    // Zerando a lista para não ficar adicionando itens
    lista_ingredientes.innerHTML = ""
    //


    // Itera (Perguntar pro chat gpt: o que é iterar um array em javascript?) na lista de ingredeientes (que foi coletado a partir do elementi HTML) para adicionar cada item da lista proveniente do objeto
    for (const ingrediente of ingredientes) {
        lista_ingredientes.innerHTML +=  "<li>" + ingrediente + "</li>";
    }

    document.getElementById("preparo").innerHTML = receitas[sabor].preparo
}
