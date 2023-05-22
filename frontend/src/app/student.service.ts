import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public url="http://localhost:3000/addStudents"
  public url1="http://localhost:3000/readStudents"
  public url3="http://localhost:3000/updateStudents"
  public url4="http://localhost:3000/deleteStudents"
  constructor(private http:HttpClient) { }

  addStudents(data:any){
    alert("Student added")
    return this.http.post(this.url, data)
  }

  readStudents(){
    return this.http.get(this.url1)
  }

  updateStudents(data:any){
    alert("Student updated")
    return this.http.put(this.url3, data)
  }

  deleteStudents(data:any){
    alert("Student deleted")
    return this.http.delete(this.url4+"/"+data)
  }
}
