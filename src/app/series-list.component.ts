import { Component, OnInit } from '@angular/core';
import { Series } from './models/series.model' // Importera interfacet
import { SeriesService } from './services/series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.html'
  
})
export class SeriesListComponent implements OnInit {
  seriesList: Series[] = [];

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.loadSeries();
  }

  loadSeries(): void {
    this.seriesService.getSeries().subscribe(
      (data: Series[]) => {
        this.seriesList = data;
      },
      error => {
        console.error('Fel vid hämtning av serier:', error);
      }
    );
  }
}

