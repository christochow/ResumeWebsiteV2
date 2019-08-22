import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  results: object[];
  db: AngularFireDatabase;

  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.results = [];
    this.getResults();
  }

  getResults() {
    this.db.list('results', ref => ref.orderByChild('result')
      .limitToLast(5)).valueChanges().subscribe(r => {
        if(r !== undefined){
          this.results = r.reverse();
        }
    });
  }

  addResult(result) {
    this.db.list('results').push(result);
  }


}
