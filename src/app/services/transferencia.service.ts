import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Transferencia } from 'src/models/transferencia.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias'

constructor(private httpClient: HttpClient) {
  this.listaTransferencia = []
}

  get transferencias(){
    return this.listaTransferencia;
  }
  //API REST
  public todasTransf(): Observable<Transferencia[]>{
    return  this.httpClient.get<Transferencia[]>(this.url)
  }

  public adicionar (transferencia: Transferencia): Observable<Transferencia> {
      this.tratamento(transferencia);
      return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  private tratamento(transferencia: any){
    transferencia.data = new Date();
  }

}
