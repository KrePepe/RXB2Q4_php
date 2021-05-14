import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MyAdat} from './adat.model';

@Injectable({
  providedIn: "root"
})
export class ElsoService{
  public adatok: MyAdat[] = [];

  constructor( private http: HttpClient ) {
  }

  public fetch(): Observable<any>{
    return this.http.get( 'https://opentdb.com/api.php?amount=7&category=9')
  }

  // read(id): Observable<any> {
  //   return this.http.get(`modify/${id}`);
  // }
}
console.log(MyAdat)
