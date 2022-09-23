import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit, Input } from '@angular/core';
import { Transferencia } from 'src/models/transferencia.model';

@Component({
  selector: 'extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
   transferencias: any[] = [] ;



  constructor(private service: TransferenciaService) { }


  ngOnInit(): void {
    this.service.todasTransf().subscribe(
      (transferencias: Transferencia[]) => {
        console.table(transferencias);
        this.transferencias = transferencias
      }
    )
  }

}
