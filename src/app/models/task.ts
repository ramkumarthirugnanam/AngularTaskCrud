export class Task {
  id : number;
  name: string;
  description: string;
  priority:  BigInteger;
  suggested : string;
  assigned_date: Date;
  closing_date: Date;
  status: boolean;
  assignee:  BigInteger;
  suggested_solution: String
}
