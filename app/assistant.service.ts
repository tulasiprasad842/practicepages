import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Assistants } from './model/assistant-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssistantService {
  constructor(private http: HttpClient) {
  }

  private USER_URL = 'https://randomuser.me/api/';

  getAssistants(number: string): Observable<Assistants> {
    const params = { results: number };

    return this.http.get<Assistants>(this.USER_URL, {
      params: params
    });
  }
}
