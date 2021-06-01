import { Injectable } from '@angular/core';
import { Estudante } from './estudante';
import { ESTUDANTES } from './mock-estudantes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstudanteService {

  private estudantesUrl = 'http://localhost:3000/estudantes';  // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getEstudantes(): Observable<Estudante[]> {
  return this.http.get<Estudante[]>(this.estudantesUrl).pipe(
    tap(_ => this.log('fetched estudantes')),
    catchError(this.handleError<Estudante[]>('getEstudantes', []))
  );
}

getEstudante(id: number): Observable<Estudante> {
  const url = `${this.estudantesUrl}/${id}`;
  return this.http.get<Estudante>(url).pipe(
    tap(_ => this.log(`fetched estudante id=${id}`)),
    catchError(this.handleError<Estudante>(`getEstudante id=${id}`))
  );
}

/** PUT: update the hero on the server */
updateEstudante(estudante: Estudante): Observable<any> {
  const url = `${this.estudantesUrl}/${estudante.id}`;
  return this.http.put(url, estudante, this.httpOptions).pipe(
    tap(_ => this.log(`updated estudante id=${estudante.id}`)),
    catchError(this.handleError<any>('updateEstudante'))
  );
}

/** POST: add a new hero to the server */
addEstudante(estudante: Estudante): Observable<Estudante> {
  return this.http.post<Estudante>(this.estudantesUrl, estudante, this.httpOptions).pipe(
    tap((newEstudante: Estudante) => this.log(`added estudante w/ id=${newEstudante.id}`)),
    catchError(this.handleError<Estudante>('addEstudante'))
  );
}
/** DELETE: delete the hero from the server */
deleteEstudante(id: number): Observable<Estudante> {
  const url = `${this.estudantesUrl}/${id}`;

  return this.http.delete<Estudante>(url, this.httpOptions).pipe(
    tap(_ => this.log(`deleted estudante id=${id}`)),
    catchError(this.handleError<Estudante>('deleteEstudante'))
  );
}








  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`EstudanteService: ${message}`);
  }

  

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
