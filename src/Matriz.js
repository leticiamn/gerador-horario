import React, { Component } from 'react';
import disciplinasJson from './disciplinas.json'; // Importe o arquivo JSON das disciplinas

class Matriz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disciplinas: [],
            matriz: [],
        };
    }

    componentDidMount() {
        this.setState({ disciplinas: disciplinasJson }, () => {
            this.distribuirDisciplinas();
        });
    }

    distribuirDisciplinas() {
        const tamPopulacao = 25;
        const p = 5;
        const { disciplinas } = this.state;
        let linha = [];
        let matriz = [];

        let PopInicial = [];

        for (let j = 0; j < p; j++) {
            linha = [];
            for (let i = 0; i < tamPopulacao; i++) {
                if (parseInt(disciplinas.disciplinas[i].periodo) === parseInt(j + 1)) {
                    //console.log("Período: " + parseInt(j + 1));
                    //console.log(disciplinas.disciplinas[i].id + "-" + disciplinas.disciplinas[i].idProfessor);
                    linha.push(disciplinas.disciplinas[i].id + "-" + disciplinas.disciplinas[i].idProfessor + "-P" + j);
                    //console.log(linha);
                }
            }
            matriz.push(linha);
        }

        for (let i = 0; i < matriz.length; i++) {
            linha = matriz[i].sort(function () {
                return Math.random() - 0.5;
            });
            //matriz[i] = linha;
            PopInicial = PopInicial.concat(linha);
        }
        this.setState({ matriz });
        console.log("--------------------------------> Populucação Inicial: ");
        console.log(PopInicial);

        this.avaliacao();
    }

    avaliacao() {

    }

    render() {
        const { matriz } = this.state;

        return (
            <div>
                {matriz.map((linha, index) => (
                    <div key={index}>
                        {linha.map(disciplina => (
                            <span key={disciplina.id}>{disciplina.nome} </span>
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

export default Matriz;
