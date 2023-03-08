import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject} from '@angular/core';
import {DataService} from '../../services/data.service';
import {FormControl, Validators , FormBuilder, FormGroup} from '@angular/forms';
import {Task} from '../../models/task';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../dialogs/add/add.dialog.html',
  styleUrls: ['../../dialogs/add/add.dialog.css']
})

export class AddDialogComponent {

  status : boolean;
  assignee: any = [ { id : 1 } ];

  
  //userform ! : FormGroup;
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Task,
              public dataService: DataService , private fb: FormBuilder ) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  ngOninit() {
  //  this.userForm  = this.fb.group({
  //   name: ['' , Validators.required],
  //   desc: ['' , Validators.required],
  //   priority: ['' , Validators.required],
  //   assigndate: ['' , Validators.required],
  //   closingdate: ['',Validators.required]
  
  //  })

  }


  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
        '';
  }

  submit() {
  // empty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    if(this.data != null) {
      this.status = true;
      this.dataService.addTask(this.data);
    }
    
  }
}
