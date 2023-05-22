import { Component, ViewChild } from '@angular/core';
import { StudentService } from './student.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  public students: any = []
  public editMode:boolean = false
  @ViewChild('details') form1 :NgForm
  constructor(private _studentService:StudentService){}

  addStudents(data:any){
    if(this.editMode==false){
      this._studentService.addStudents(data).subscribe(()=>{})
    }
    else{
      this._studentService.updateStudents(data).subscribe()
      this.editMode=false
    }
    this.form1.setValue({
      _id:'',
      name:'',
      rollno:'',
      branch:'',
      email:'',
      phone:''
    })
  }

  readStudents(){
    this._studentService.readStudents().subscribe((result:any)=>{this.students = result})
  }

  editStudents(data:any){
    let currentSt = this.students.find((p:any)=>{
      return p._id === data
    })

    this.form1.setValue({
      _id:currentSt._id,
      name:currentSt.name,
      rollno:currentSt.rollno,
      branch:currentSt.branch,
      email:currentSt.email,
      phone:currentSt.phone,
    })
    this.editMode=true
  }

  deleteStudents(data:any){
    this._studentService.deleteStudents(data).subscribe(()=>{})
  }
}
