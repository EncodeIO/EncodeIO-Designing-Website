import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dialog-template',
  templateUrl: 'dialog-template.component.html',
  styleUrls:['dialog-template.component.css']
})
export class DialogTemplateComponent  {

  modalTitle: string;
  modalMessage: string;
  issubmitSuccess = true;
  modalType:ModalType = ModalType.INFO;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.modalMessage = data.message;
    this.issubmitSuccess = data.IsSubmitSuccess;
    this.modalType = data.type;
    
    console.log(data)
  }

}
export enum ModalType {
  INFO = 'info',
  WARN = 'warn'
}