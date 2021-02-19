import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class SecretService {
  public emailAPIEndpoint = "https://axf59e7tq8.execute-api.eu-west-1.amazonaws.com/prod";
  constructor() { }
}
