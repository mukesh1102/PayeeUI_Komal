import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';

// import { map } from 'rxjs';
const httpOptions = environment.httpOptions;


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  // baseUrl = "http://localhost:3000/";
  //baseUrl = "http://172.22.32.36:8080/mdm/v1.0/";
  baseUrl = environment.baseUrl;



  // session data
  getSession() {
    return this.http.get<any>('./assets/models/userLoginData.json');
  }
  // post session to update id
  postUpdateProcessId(data: any) {
    return this.http.post<any>('./assets/models/userLoginData.json', data)
  }

  // //
  // getRequestCount(aId: string) {
  //   let data = { assignmentId: parseInt(aId) };
  //   return this.http.post<any>(environment.GetRequestCount, data);
  // }

  // // session data
  // getWorkFlowId(data: any) {
  //   return this.http.post<any>(environment.processURL, data, httpOptions);
  // }

  // getDocumentType() {
  //   return this.http.post<any>(environment.GetDocumentType, null);
  // }



  // task trans id
  // getTaskById(taskId: any) {
  //   // 172.22.32.100:5003/wf/v1.0/budget/task
  //   return this.http.post<any>(this.baseUrlWf, taskId);


  // }

  getrequestedPayload() {
    // let url = "http://localhost:3000/requestedPayload";
    return this.http.get<any>(`${this.baseUrl}` + "requestedPayload");
  }


  getAdminDepartment(adminDeptId: any) {
    return this.http.post<any>(`${this.baseUrl}` + "getAdminDepartment", adminDeptId);

  }
  // get Marital Status
  getMaritalStatus() {
    return this.http.post<any>(`${this.baseUrl}` + "getMaritalStatus", {});

  }
  // get Blood Group
  getBloodGroup() {
    return this.http.post<any>(`${this.baseUrl}` + "getBloodGroup", {});

  }
  // get Gender
  getGender() {
    return this.http.post<any>(`${this.baseUrl}` + "getGender", {});
  }
  // get getDisability Type
  getDisabilityType() {
    return this.http.post<any>(`${this.baseUrl}` + "getDisabilityType", {});

  }
  // get Service Categorye
  getServiceCategory() {
    return this.http.post<any>(`${this.baseUrl}` + "getServiceCategory", {});
  }
  // get Payee Type
  getPayeeType() {
    return this.http.post<any>(`${this.baseUrl}` + "getPayeeType", {});
  }
  // get Service Sub Category
  getServiceSubCategory() {
    return this.http.post<any>(`${this.baseUrl}` + "getServiceSubCategory", {});
  }

  // get Service Quota
  getServiceQuota(){
    return this.http.post<any>(`${this.baseUrl}` + "getServiceQuota", {});

  }
 // getDesignation
 getDesignation(){
  return this.http.post<any>(`${this.baseUrl}` + "getDesignation", {});

}
 // getDepartment
 getDepartment(){
  return this.http.post<any>(`${this.baseUrl}` + "getDepartment", {});

}
   // Get Janaadhaar Data

  GetJanaadhaarData(janaadhaar: any) {
    return this.http.post(`${this.baseUrl}` + `GetJanaadhaarData`, janaadhaar);
  }
  // get sub major head data


  // get minor head
  getMinorHead(subMajorHeadCode: number) {
    let params = new HttpParams().set('subMajorHeadCode', subMajorHeadCode);
    return this.http.get<any>(`${this.baseUrl}` + 'getMinorHead/', { params })
  }

  // get minor head
  getSubMinorHead(minorHeadCode: number) {
    let params = new HttpParams().set('minorHeadCode', minorHeadCode);
    return this.http.get<any>(`${this.baseUrl}` + 'getSubMinorHead/', { params })
  }

  // get group head
  getGroupHead(subMinorHeadCode: number) {
    let params = new HttpParams().set('minorHeadCode', subMinorHeadCode);
    return this.http.get<any>(`${this.baseUrl}` + 'getSubGroupHead/', { params })

    // submit api
    // postSubmit(data: any) {
    //   return this.http.post<any>(this.baseUrl + 'action', data);
    // }



    // getTokenDetails() {
    //   return this.http.post("http://172.22.32.36:9090/SanctionLandingSvc/login", {
    //     "token": "token",
    //     "jsonData": ["Name", "City"]
    //   }

    // )
  }

}