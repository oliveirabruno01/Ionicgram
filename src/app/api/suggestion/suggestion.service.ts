import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Suggestion } from 'src/app/types/Suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {
  private API_URL = 'https://raw.githubusercontent.com/oliveirabruno01/Ionicgram/master/fake-server/suggestions.json';
  
  constructor(private http: HttpClient) { }

  getSuggestions(): Array<Suggestion> {
    let res = this.http.get<Array<Suggestion>>(this.API_URL);
    let suggestions: Array<Suggestion> = [];

    res.subscribe(response => {
      response.map(suggestion => {
        let s: Suggestion = {} as Suggestion;
        s.userId = suggestion.userId;
        suggestions.push(s);
      })
    })
    return suggestions;
  }
}
