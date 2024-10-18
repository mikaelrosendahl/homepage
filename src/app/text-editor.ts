

import { Component } from '@angular/core';
import { DiaryService } from './services/diary.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.html',

})
export class TextEditorComponent {

  diaryEntries: any[] = [];
  newEntry: any = { title: '', content: '' }; // Variabel för nytt inlägg -->
  constructor(private diaryService: DiaryService, private router: Router) {}

  createEntry() {
    this.diaryService.createEntry(this.newEntry).subscribe(
      (response: any) => {
        console.log('Inlägg skapat:', response);
        // Uppdatera listan med inlägg efter skapandet
        this.diaryEntries.push(response); // Lägg till rätt objekt (response)
        this.newEntry = { title: '', content: '' }; // Återställ formuläret
      },
      error => {
        console.error('Fel vid skapande av inlägg:', error);
        console.log('Detaljer om svaret:', error.error);
      }
    );
  }
 
}

