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
  nomeAteAgora: string = '';
  nomeDigitado: string = '';
  started: boolean = false;


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
    if (!this.started && !this.dados?.name){
      this.nomeOriginal = this.dados.name;
      for (let i = 0; i < this.dados.name.length; i++) {
        let letraAtual = this.dados.name[i];
        if (letraAtual === ' ') {
          resultado += '  '; // Mantém espaços
        } else {
          resultado += '_ ';
        }
      }
      this.nomeAteAgora = resultado;
    }else if(this.started){
      for(let i = 0; i < this.nomeDigitado.length; i++){
        
      }
    }
    return resultado;
  }

  atualizarNome(event: any) {
    this.nomeAteAgora = event.target.value;
  }

  iniciar(){
    this.started = true;
  }
}
