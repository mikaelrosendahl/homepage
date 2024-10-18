import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { DiaryService } from '../services/diary.service';
import { DiaryEntry } from '../models/diary-entry-model'; 

@Component({
  selector: 'app-diary-entry',
  templateUrl: './diary-entry.html',
})
export class DiaryEntryComponent implements OnInit {

  diaryEntry: DiaryEntry | undefined;

  constructor(
    private route: ActivatedRoute,
    private diaryService: DiaryService
  ) { }

  ngOnInit(): void {
    const entryId = this.route.snapshot.paramMap.get('id');
    if (entryId) {
      this.loadEntry(+entryId);
    }
  }

  loadEntry(id: number): void {
    this.diaryService.getEntryById(id).subscribe(
      (entry: DiaryEntry) => {
        this.diaryEntry = entry;
        console.log('Inlägg hämtat:', this.diaryEntry); // För att verifiera att vi får data
      },
      error => {
        console.error('Fel vid hämtning av inlägget:', error);
      }
    );
  }
}
