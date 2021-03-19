import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrearproveedorService {

  date = new Date();


  constructor(private http: HttpClient) { }



  crearLegalPerson(legalPerson: any) {

    console.log("Persona Juridica");
    console.log(legalPerson);
    return this.http.post<Boolean>(`http://52.247.56.140:8080/createDataPJ`, legalPerson);
  }

  crearNaturalPerson(naturalPerson: any) {
    console.log("Persona Natural");
    console.log(naturalPerson);
    return this.http.post<any>(`http://52.247.56.140:8080/createDataPN`, naturalPerson);
  }


}
