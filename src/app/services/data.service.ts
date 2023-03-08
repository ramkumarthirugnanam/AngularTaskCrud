import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Task} from '../models/task';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class DataService {
  private readonly API_URL = 'http://65.2.51.31:9008/api/task-viewset/';

  dataChange: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private http: HttpClient) {}

  get data(): Task[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllTasks(): void {
    this.http.get<Task[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  // DEMO ONLY, you can find working methods below
  addTask (task: Task): void {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(task);
    this.http.post(this.API_URL, body,{'headers':headers }).subscribe(data => {
      console.log(data);
    });
  }

  updateTask (task : Task , id: number): void {
    this.dialogData = task;
  }

  deleteTask (id: number): void {
    console.log(id);
    this.http.delete(this.API_URL + id ).subscribe(data => {
      console.log(data);
    });

  }
}



/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:

    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/




