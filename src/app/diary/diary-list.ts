import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.html',
})
export class DiaryListComponent implements OnInit {

  diaryEntries: any[] = [];
  newEntry: any = { title: '', content: '' }; // Variabel för nytt inlägg

  constructor(private http: HttpClient, private router: Router) {}

  // Hämta alla inlägg från API:et
  ngOnInit() {
    // Specificera att svaret är en array av 'any'
    this.http.get<any[]>('https://localhost:44330/api/diary').subscribe(
      (data: any[]) => {
        this.diaryEntries = data;
      },
      error => {
        console.error('Fel vid hämtning av data:', error);
      }
    );
  }

  // Metod för att skapa ett nytt inlägg
  createEntry() {
    this.http.post('https://localhost:44330/api/diary', this.newEntry).subscribe(
      (response: any) => {
        console.log('Inlägg skapat:', response);
        // Uppdatera listan med inlägg efter skapandet
        this.diaryEntries.push(response.entry); // Lägg till rätt objekt (response.entry)
        this.newEntry = { title: '', content: '' }; // Återställ formuläret
      },
      error => {
        console.error('Fel vid skapande av inlägg:', error);
        console.log('Detaljer om svaret:', error.error);
      }
    );
  }

  viewEntry(entry: any) {
    if (!entry || !entry.id) {
      console.error('Ogiltigt entry eller saknad ID:', entry);
      return;
    }
    this.router.navigate(['/diary', entry.id]);
  }
}
