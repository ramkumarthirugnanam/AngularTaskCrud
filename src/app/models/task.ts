export class Task {
  id : number;
  name: string;
  description: string;
  priority:  BigInteger;
  assigned_date: Date;
  closing_date: Date;
  status: boolean;
  assignee:  String ;
  suggested_solution: String;
}
