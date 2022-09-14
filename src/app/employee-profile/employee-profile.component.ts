import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  namesPattern = "/^[a-zA-Z\s]*$/";
  
  empPerDetForm !:FormGroup;
  name = 'Angular';

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(){
    this.empPerDetForm = this.formbuilder.group({
      salution: ['',Validators.required],
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['',Validators.required],
      date: ['',Validators. required ],
      word: ['',Validators. required ],
      height: ['',Validators. required ],
      Identification: ['',Validators. required ],
      Blood_Group: ['',Validators. required ],
      


      
    });


    console.log('This is init method');
  }
  // / sweet alert   fuction

  submitted = false;
  onSubmit(){
      this.submitted =true;
      if(this.empPerDetForm.invalid){
        return
      }
    
  }

  addEmpDet(){
    console.log(this.empPerDetForm.value);
  }

  // sweet alert massage

  simpleAlert(){
    Swal.fire('Hello world!');
  }
  
  alertWithSuccess(){
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
  }
  
  confirmBox(){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  // only aplphbet user for validation

  letterOnly(event: { which: any; keyCode: any; }) : Boolean{
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      return false;
    }
    return true;
  }

  // only for number validation 
  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
         return false;
      }
      return true;
  
  }
}
