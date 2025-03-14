import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChamaApiService } from './services/chama-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'dykm';
  dados: any;
  nomeOriginal: string = '';
  nomeTentado: string = '';
  contagem: number = 0;


  constructor(private chamaApiService: ChamaApiService) {}

  ngOnInit() {
    console.log('Iniciando chamada para API...');
    this.chamaApiService.getDados().subscribe(
      (response) => {
        this.dados = response;
        console.log('Dados recebidos:', this.dados);
      },
      (error) => {
        console.error('Erro ao buscar dados', error);
      }
    );
  }

  getHiddenName(): string {
    let resultado = '';
    if (this.dados?.name){
      this.nomeOriginal = this.dados.name;
      for (let i = 0; i < this.dados.name.length; i++) {
        let letraAtual = this.dados.name[i];
        if(this.contagem > i){
          resultado += this.dados.name[i] + " ";
        }else{
          if (letraAtual === ' ') {
            resultado += '  ';
          } else {
            resultado += '_ ';
          }
        }
      }
    }
    return resultado;
  }

  atualizarNome(event: any) {
    this.nomeTentado = event.target.value;
  }

  tentativa(){
    if(this.nomeTentado === this.dados.name){
      this.contagem = this.dados.name.length
      alert("Parabéns, você acertou!!");
    }else{
      alert("Nome incorreto! Tente novamente.");
    }
  }
  revela(){
    this.contagem += 1;
  }
}
