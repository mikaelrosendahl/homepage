import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';
import { DiaryService } from '../services/diary.service'; 

@Component({
  selector: 'app-diary-list',
  templateUrl: './diary-list.html',
})
export class DiaryListComponent implements OnInit { 

  diaryEntries: any[] = [];
  //newEntry: any = { title: '', content: '' }; // Variabel för nytt inlägg

  constructor(private diaryService: DiaryService, private router: Router) {}

  // Hämta alla inlägg från API:et vid sidladdning
  ngOnInit() {
    this.loadDiaryEntries();
  }
  
  generatePreview(content: string, limit: number): string {
    // Skapa en kort förhandsvisning baserat på textinnehållet (utan att förstöra HTML)
    const div = document.createElement('div');
    div.innerHTML = content; // Tolka HTML
    const textContent = div.textContent || ''; // Extrahera endast text
    return textContent.length > limit ? textContent.slice(0, limit) + '...' : textContent;
  }
  
  // Hämta alla inlägg från DiaryService
  loadDiaryEntries() {
    this.diaryService.getAllEntries().subscribe(
      (data: any[]) => {
        this.diaryEntries = data;
      },
      error => {
        console.error('Fel vid hämtning av data:', error);
      }
    );
  }

  
  trackById(index: number, entry: any): number {
  return entry.id; // Eller vilken unik identifierare du har
}

  // Metod för att navigera till specifikt inlägg
  viewEntry(entry: { id: number, title: string, content: string }) {
    if (!entry || !entry.id) {
      console.error('Ogiltigt entry eller saknad ID:', entry);
      return;
    }
    this.router.navigate(['/diary', entry.id]);
  }
}
