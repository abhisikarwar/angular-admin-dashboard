import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AdminService {
  token = window.localStorage.getItem('token')

  httpOptions2 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    })
  };
  httpOptions4 = {
    headers: new HttpHeaders({

    })
  };



  API_URL = environment.Api_url;
  constructor(private httpClient: HttpClient) { }

  admin_login(data) {
    return this.httpClient.post(this.API_URL + '/auth/login', data, this.httpOptions2)
  }
  admin_details(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/auth/admin_details', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token2
      })
    })
  }
  update_details(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/auth/update_details', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token2
      })
    })
  }
  imageUpload(data) {
    return this.httpClient.post(this.API_URL + '/file/image', data, this.httpOptions4)
  }
  videoUpload(data) {
    return this.httpClient.post(this.API_URL + '/file/video', data, this.httpOptions4)
  }
  destinationAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/adddestination', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  destinationGet(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getdestination', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  destinationEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatedestination', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  destinationGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getdestinationbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  destinationRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletedestination', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  subjectAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addsubject', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  subjectGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getsubject', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  subjectEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatesubject', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  subjectGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getsubjectbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  subjectRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletesubject', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  skillAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addskill', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  skillGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getskill', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  skillEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updateskill', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  skillGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getskillbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  skillRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deleteskill', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  cityAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addcity', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  cityGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getcity', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  cityEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatecity', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  cityGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getcitybyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  cityRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletecity', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  cityByZone(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/citybyzone', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  continentAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addcontinent', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  continentGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getcontinent', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  continentEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatecontinent', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })

  }
  continentGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getcontinentbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  continentRemove(data) {
    let token2 = window.localStorage.getItem('token')

    return this.httpClient.post(this.API_URL + '/admin/deletecontinent', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  countryAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addcountry', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  countryGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getcountry', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  countryEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatecountry', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  countryGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getcountrybyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  countryRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletecountry', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  countryByContient(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getcountrybycontient', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  zoneAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addzone', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  zoneGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getzone', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  zoneEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatezone', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  zoneGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getzonebyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  zoneRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletezone', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  zoneByCountry(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/zonebycountry', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  geographyAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addgeography', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  geographyGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getgeography', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  geographyEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updategeography', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  geographyGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getgeographybyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  geographyRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletegeography', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  journey_planerAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addjourney_planer', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  journey_planerGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getjourney_planer', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  journey_planerEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatejourney_planer', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  journey_planerGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getjourney_planerbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  journey_planerRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletejourney_planer', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  mediaProjectAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addmediaproject', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  mediaProjectGet(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getmediaproject', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  mediaProjectEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatemediaproject', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  mediaProjectGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getmediaprojectbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  mediaProjectRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletemediaproject', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  schoolAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addschool', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  schoolGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getschool', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  schoolEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updateschool', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  schoolGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getschoolbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  schoolRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deleteschool', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  editorAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addeditor', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  editorGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/geteditor', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  editorEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updateeditor', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  editorGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/geteditorbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  editorRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deleteeditor', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  descoversheetAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/adddescoversheet', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  descoversheetGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getdescoversheet', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  descoversheetEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatedescoversheet', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  descoversheetGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getdescoversheetbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  descoversheetRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletedescoversheet', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  journeysAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addjourneys', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  journeysGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getjourneys', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  studentjourney_planer(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/studentjourney_planer', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  teacherjourney_planer(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/teacherjourney_planer', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  mentorjourney_planer(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/mentorjourney_planer', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  itineraryjourney_planer(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/itineraryjourney_planer', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  skilljourney_planer(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/skilljourney_planer', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  yapjourney_planer(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/yapjourney_planer', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  tjpjourney_planer(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/tjpjourney_planer', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  bbjourney_planer(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/bbjourney_planer', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  ttjourney_planer(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/ttjourney_planer', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  journeysEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatejourneys', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  journeysGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getjourneysbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  journeysRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletejourneys', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  journeymentorAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addjourneymentor', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  journeymentorGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getjourneymentor', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  journeymentorEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatejourneymentor', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  journeymentorGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getjourneymentorbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  journeymentorRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletejourneymentor', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  studentAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addstudent', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  studentGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getstudent', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  studentEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatestudent', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  studentGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getstudentbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  studentRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletestudent', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  teacherAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addteacher', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  teacherGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getteacher', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  teacherEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updateteacher', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  teacherGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getteacherbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  teacherRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deleteteacher', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  worksheetAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addworksheet', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  worksheetGet() {
    let token2 = window.localStorage.getItem('token')
    this.httpOptions.headers.append('Authorization', token2);
    console.log(this.httpOptions.headers)
    return this.httpClient.get(this.API_URL + '/admin/getworksheet', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token2
      })
    })
  }
  worksheetEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updateworksheet', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  worksheetGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getworksheetbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  worksheetRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deleteworksheet', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  courseAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addcourse', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  courseGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getcourse', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  courseEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatecourse', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  courseGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getcoursebyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  courseRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletecourse', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  categoryAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addcategory', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  categoryGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getcategory', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  categoryEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatecategory', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  categoryGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getcategorybyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  categoryRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletecategory', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  

  certificateAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addcertificate', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  certificateGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getcertificate', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  certificateEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatecertificate', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  certificateGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getcertificatebyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  certificateRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletecertificate', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  faqcategotyAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addfaqcategoty', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  faqcategotyGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getfaqcategoty', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  faqcategotyEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatefaqcategoty', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  faqcategotyGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getfaqcategotybyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  faqcategotyRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletefaqcategoty', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  fawqaAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addfawqa', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  fawqaGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getfawqa', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  fawqaEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatefawqa', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  fawqaGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getfawqabyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  fawqaRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletefawqa', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  qaAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addqa', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  qaGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getqa', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  qaEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updateqa', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  qaGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getqabyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  qaRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deleteqa', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  badgetuckshopAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addbadgetuckshop', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgetuckshopGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getbadgetuckshop', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgetuckshopEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatebadgetuckshop', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgetuckshopGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getbadgetuckshopbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgetuckshopRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletebadgetuckshop', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  

  badgeskillfactoryAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addbadgeskillfactory', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgeskillfactoryGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getbadgeskillfactory', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgeskillfactoryEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatebadgeskillfactory', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgeskillfactoryGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getbadgeskillfactorybyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgeskillfactoryRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletebadgeskillfactory', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  badgeprofileAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addbadgeprofile', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgeprofileGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getbadgeprofile', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgeprofileEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatebadgeprofile', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgeprofileGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getbadgeprofilebyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgeprofileRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletebadgeprofile', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  badgemediaprojectAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addbadgemediaproject', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgemediaprojectGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getbadgemediaproject', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgemediaprojectEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatebadgemediaproject', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgemediaprojectGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getbadgemediaprojectbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgemediaprojectRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletebadgemediaproject', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  badgejourneyreadinessAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addbadgejourneyreadiness', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgejourneyreadinessGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getbadgejourneyreadiness', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgejourneyreadinessEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatebadgejourneyreadiness', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgejourneyreadinessGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getbadgejourneyreadinessbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgejourneyreadinessRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletebadgejourneyreadiness', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  badgefeedbackformsAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addbadgefeedbackforms', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgefeedbackformsGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getbadgefeedbackforms', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgefeedbackformsEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatebadgefeedbackforms', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgefeedbackformsGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getbadgefeedbackformsbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgefeedbackformsRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletebadgefeedbackforms', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  badgefaqAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addbadgefaq', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgefaqGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getbadgefaq', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgefaqEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatebadgefaq', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgefaqGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getbadgefaqbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgefaqRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletebadgefaq', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

  badgediscoverysheetAdd(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/addbadgediscoverysheet', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgediscoverysheetGet() {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.get(this.API_URL + '/admin/getbadgediscoverysheet', { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgediscoverysheetEdit(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/updatebadgediscoverysheet', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgediscoverysheetGetById(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/getbadgediscoverysheetbyid', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }
  badgediscoverysheetRemove(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/admin/deletebadgediscoverysheet', data, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': token2 }) })
  }

}