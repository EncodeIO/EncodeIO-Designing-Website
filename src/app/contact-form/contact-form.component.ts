import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { GetCountriesService } from '../get-countries.service';
import {DialogService} from '../dialog/dialog-service.service';

declare var require: any

const PNF = require('google-libphonenumber').PhoneNumberFormat;
const PNV = require('google-libphonenumber').PhoneNumberUtil.ValidationResult;
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  
  results: any;
  countries: any;
  services: any;

  selection?: string;
  selectedService = [];
  numberError?: string;

  constructor(private countryService: GetCountriesService, public dialogService:DialogService){
    this.countries = countryService.getCountries();
    this.services = countryService.getServices();
  }

  form = new FormGroup({
    location: new FormControl(),
    country: new FormControl(),
    countrycode: new FormControl(),
    phoneNumber: new FormControl(),
    details: new FormControl(),
    name: new FormControl(),
    email: new FormControl()

  });

  format(v: any) {
    if(!v.name)
    {
      alert("Please provide your name.");
      return;
    }
    if(!v.email)
    {
      alert("Please provide your email.");
      return;
    }
    if(!this.selection)
    {
      alert("Please select your location.");
      return;
    }
    if(!v.phoneNumber)
    {
      alert("Please fill in your contact number.");
      return;
    }
    if(!this.selectedService.length)
    {
      alert("Please select the services that you are looking for.");
      return;
    }
    if(!v.details)
    {
      alert("Please provide some details about the project.");
      return;
    }
    const results = phoneUtil.parseAndKeepRawInput(v.countrycode.replace(" ", "") + v.phoneNumber.replace(" ", ""), v.location);
    if (phoneUtil.isValidNumber(results)) {
      console.log(phoneUtil.format(results, PNF.E164));
      console.log(phoneUtil.getRegionCodeForNumber(results));
    } else {
      const code = phoneUtil.isPossibleNumberWithReason(results);
      switch (code) {
        case PNV.INVALID_COUNTRY_CODE:
          this.numberError = 'INVALID_COUNTRY_CODE';
          break;
        // case PNV.TOO_SHORT:
        //   this.numberError= 'TOO_SHORT';
        //   break;
        // case PNV.TOO_LONG:
        //   this.numberError = 'TOO_LONG';
        //   break;
        // case PNV.IS_POSSIBLE_LOCAL_ONLY:
        //   this.numberError = 'IS_POSSIBLE_LOCAL_ONLY';
        //   break;
        // case PNV.INVALID_LENGTH:
        //   this.numberError = 'INVALID_LENGTH';
        //   break;
        default:
          this.numberError = 'Invalid Contact Number';
      }
      alert(this.numberError);
      return;
    }

    this.dialogService.openModal("Title1","Message Test", true, ()=>{
      //confirmed
      console.log('Yes');
    }, ()=>{
      //not confirmed
      console.log('No');
    });
    
  }

  getValues() {
    console.log(this.selection);
  }

}
