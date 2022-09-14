import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { noop } from 'rxjs';
import { EmployeeClass } from './employee-class.model';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';


import * as $ from 'jquery';

@Component({
  selector: 'app-employeemaster',
  templateUrl: './employeemaster.component.html',
  styleUrls: ['./employeemaster.component.css']
})



export class EmployeemasterComponent implements OnInit {
  namesPattern = "/^[a-zA-Z\s]*$/";

  empPerDetForm !: FormGroup;
  // public languages: EmployeeClass[]; // create a variable of type tbl_language object  

  name = 'Angular';


  public isShow = false;

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit() {
    this.empPerDetForm = this.formbuilder.group({
      salution: ['', Validators.required],
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['', Validators.required],
      date: ['', Validators.required],
      word: ['', Validators.required],
      height: ['', Validators.required],
      Identification: ['', Validators.required],
      Blood_Group: ['', Validators.required],
    });
    this.getMaritalStatus();
    this.getBloodGroup();
    this.getGender();
    this.getDisabilityType();
    this.getServiceCategory();
    this.getPayeeType();
    this.getServiceSubCategory();
    this.getServiceQuota();
    this.getDesignation();
    this.getDepartment();
    }

  MaritalStatusdata: any = [];
  BloodGroupdata: any = [];
  GenderData: any = [];
  DisabilityTypeData: any = [];
  getServiceCategoryeData:any=[];
  getPayeeTypeData:any=[];
  getServiceSubCategoryData:any=[];
  getServiceQuotaData:any=[];
  getDesignationData:any=[];
  getDepartmentData:any=[];
  //get Matrital Status
  getMaritalStatus(): void {

    this.apiService.getMaritalStatus().subscribe({

      next: (res) => {
        // var MaritalStatusJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.MaritalStatusdata = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get MaritalStatus ");
        // console.log("error from get MaritalStatus api is ", errorObj);
        // console.log("error from get MaritalStatus api is ", err);
        // alert(err.error.message)
      }
    })
  }
  //get Blood Group
  getBloodGroup(): void {

    this.apiService.getBloodGroup().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.BloodGroupdata = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get BloodGroup ");
        // console.log("error from get BloodGroup api is ", errorObj);
        // console.log("error from get BloodGroup api is ", err);
        // alert(err.error.message)
      }
    })
  }
  //get Gender
  getGender(): void {

    this.apiService.getGender().subscribe({

      next: (res) => {
        // var genderJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
         
          this.GenderData = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get Gender ");
        // console.log("error from get Gender api is ", errorObj);
        // console.log("error from get Gender api is ", err);
        // alert(err.error.message)
      }
    })
  }
  //get DisabilityType
  getDisabilityType(): void {

    this.apiService.getDisabilityType().subscribe({

      next: (res) => {
        // var DisabilityTypeJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.DisabilityTypeData = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get Disability Type ");
        // console.log("error from get Disability Type api is ", errorObj);
        // console.log("error from get Disability Type api is ", err);
        // alert(err.error.message)
      }
    })
  }
   //get getServiceCategorye
   getServiceCategory(): void {

    this.apiService.getServiceCategory().subscribe({

      next: (res) => {
        // var getServiceCategoryJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.getServiceCategoryeData = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get Disability Type ");
        // console.log("error from get Disability Type api is ", errorObj);
        // console.log("error from get Disability Type api is ", err);
        // alert(err.error.message)
      }
    })
  }
   //get getPayeeType
   getPayeeType(): void {

    this.apiService.getPayeeType().subscribe({

      next: (res) => {
        // var getPayeeTypeJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.getPayeeTypeData = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get Disability Type ");
        // console.log("error from get Disability Type api is ", errorObj);
        // console.log("error from get Disability Type api is ", err);
        // alert(err.error.message)
      }
    })
  }
    //get getServiceSubCategory
    getServiceSubCategory(): void {

      this.apiService.getServiceSubCategory().subscribe({
  
        next: (res) => {
          // var getServiceSubCategoryJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.getServiceSubCategoryData = res.data
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
          // alert("error while fatching data from get Disability Type ");
          // console.log("error from get Disability Type api is ", errorObj);
          // console.log("error from get Disability Type api is ", err);
          // alert(err.error.message)
        }
      })
    }
    //get Service Quota
    getServiceQuota():void{
      this.apiService.getServiceQuota().subscribe({
  
        next: (res) => {
          // var getServiceQuotaJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.getServiceQuotaData = res.data
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
          // alert("error while fatching data from get Disability Type ");
          // console.log("error from get Disability Type api is ", errorObj);
          // console.log("error from get Disability Type api is ", err);
          // alert(err.error.message)
        }
      })
    }
     //get Service Quota
     getDesignation():void{
      this.apiService.getDesignation().subscribe({
  
        next: (res) => {
          // var getDesignationJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.getDesignationData = res.data
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
          // alert("error while fatching data from get Disability Type ");
          // console.log("error from get Disability Type api is ", errorObj);
          // console.log("error from get Disability Type api is ", err);
          // alert(err.error.message)
        }
      })
    }
     //get Service Quota
     getDepartment():void{
      this.apiService.getDepartment().subscribe({
  
        next: (res) => {
          // var getDepartmentJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.getDepartmentData = res.data
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
          // alert("error while fatching data from get Disability Type ");
          // console.log("error from get Disability Type api is ", errorObj);
          // console.log("error from get Disability Type api is ", err);

          // alert(err.error.message)
        }
      })
    }
    JanaadhaarData: any[] = [];

    GetJanaadhaarData(janaadhaar :any):void{
      let requestedData: any = { "janaadhaar": janaadhaar }
      this.apiService.GetJanaadhaarData(requestedData).subscribe({

        next: (res) => {
         
          let data = Object.values(res);
          for (let i = 0; i < data[1].length; i++) {
            this.JanaadhaarData.push(data);
          }
          console.log(this.JanaadhaarData[0][0].status);
          // var getServiceSubCategoryJson = JSON.parse(res);
          // var statusJson = JSON.parse(res.status);
          // if (statusJson = 200) {
          //   this.getServiceSubCategoryData = getServiceSubCategoryJson
          // }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
          // alert("error while fatching data from get Disability Type ");
          // console.log("error from get Disability Type api is ", errorObj);
          // console.log("error from get Disability Type api is ", err);
          alert(err.error.message)
        }
      })
    }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    if (this.empPerDetForm.invalid) {
      return
    }

  }


  EmpPersonal() {
    $('#dvEmpPersonalDetail').show();
    $('#dvEmpOfficialDetail').hide();
    $("#dvEmpAddress").hide();
    $("#dvEmpFamily").hide();
    $('#dvEmpBank').hide();
    $('#dvEmpPay').hide();
    $('.btnclr').addClass('btn btn-danger')
    $('#btnEmpPersonal').removeClass('btn btn-danger');
  }

  EmpService() {
    $('#dvEmpOfficialDetail').show();
    $('#dvEmpPersonalDetail').hide();
    $("#dvEmpAddress").hide();
    $("#dvEmpFamily").hide();
    $('#dvEmpBank').hide();
    $('#dvEmpPay').hide();
    $('.btnclr').addClass('btn btn-danger')
    $('#btnEmpService').removeClass('btn btn-danger');
  }
  EmpAddress() {
    $("#dvEmpAddress").show();
    $('#dvEmpOfficialDetail').hide();
    $('#dvEmpPersonalDetail').hide();
    $("#dvEmpFamily").hide();
    $('#dvEmpBank').hide();
    $('#dvEmpPay').hide();
    $('.btnclr').addClass('btn btn-danger')
    $('#btnEmpAddress').removeClass('btn btn-danger');
  }

  EmpFamily() {
    $("#dvEmpFamily").show();
    $("#dvEmpAddress").hide();
    $('#dvEmpOfficialDetail').hide();
    $('#dvEmpPersonalDetail').hide();
    $('#dvEmpBank').hide();
    $('#dvEmpPay').hide();
    $('.btnclr').addClass('btn btn-danger')
    $('#btnEmpFamily').removeClass('btn btn-danger');
  }
  EmpBank() {
    $("#dvEmpFamily").hide();
    $("#dvEmpAddress").hide();
    $('#dvEmpOfficialDetail').hide();
    $('#dvEmpPersonalDetail').hide();
    $('#dvEmpBank').show();
    $('#dvEmpPay').hide();
    $('#dvEmpDoc').hide();
    $('.btnclr').addClass('btn btn-danger')
    $('#btnEmpBank').removeClass('btn btn-danger');

  }
  EmpPay() {
    $('#dvEmpBank').hide();
    $('#dvEmpPay').show();
    $('#dvEmpDoc').hide();
    $("#dvEmpFamily").hide();
    $("#dvEmpAddress").hide();
    $('#dvEmpOfficialDetail').hide();
    $('#dvEmpPersonalDetail').hide();
    $('.btnclr').addClass('btn btn-danger')
    $('#btnEmpPay').removeClass('btn btn-danger');
  }
  EmpDoc() {
    $('#dvEmpDoc').show();
    $("#dvEmpFamily").hide();
    $("#dvEmpAddress").hide();
    $('#dvEmpOfficialDetail').hide();
    $('#dvEmpPersonalDetail').hide();
    $('#dvEmpBank').hide();
    $('#dvEmpPay').hide();
    $('.btnclr').addClass('btn btn-danger')
    $('#btnEmpDoc').removeClass('btn btn-danger');
  }
  addEmpDet() {
    console.log(this.empPerDetForm.value);
  }

  // sweet alert massage

  simpleAlert() {
    Swal.fire('Hello world!');
  }

  alertWithSuccess() {
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
  }

  confirmBox() {
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

  letterOnly(event: { which: any; keyCode: any; }): Boolean {
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


