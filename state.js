import React, {Component} from 'react' 
class Desafio extends Component {
    state = {
        nome: "Anna",
        idade: 22,
        comida: "Churras",
        musica: ["Facas", "Idiota", "Caso Indefinido"]

    }

render() {
return(
    <div>
        <h1>Nome: {this.state.nome}</h1>
        <h2>Idade:{this.state.idade}</h2>
        <h3>Comida:{this.state.comida}</h3>
        <ul>
            <li>Primeira musica: {this.state.musica[0]}</li>
            <li>Segunda musica: {this.state.musica[1]}</li>
            <li>Terceira musica: {this.state.musica[2]}</li>
        </ul>
        <img src="https://static1.conquistesuavida.com.br/articles/7/11/19/7/@/29722-rica-em-potassio-a-banana-e-a-fruta-mai-1200x630-2.jpg" alt="imagem da banana"></img>
    </div>
   
)
}
}


export default Desafio