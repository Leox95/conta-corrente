import { TransferenciaService } from './../app/services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";
import { Router} from '@angular/router'


@Component({
    selector: 'nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']

})


export class NovaTransferenciaComponent{

  @Output() aoTransferir = new EventEmitter<object>();

  //variaveis
  public valor: number = 0;
  public destino: number = 0;

  constructor(private service: TransferenciaService, private router: Router){}




  transferir(){
    console.log('Transferencia realizada com sucesso')
    const valorEmitir = {valor: this.valor, destino: this.destino}
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado)
        this.zerarValor()
        this.router.navigateByUrl('extrato')
      },
      (error) => console.log(error)

    );

  }

  zerarValor(){
    this.valor = 0;
    this.destino = 0;
  }
}
