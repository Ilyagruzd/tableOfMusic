import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {IMusic} from "./interfaces/IMusic";
import {MusicService} from "./services/music.service";
import {MatPaginator} from "@angular/material/paginator";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTable, MatHeaderCell, MatCell, MatColumnDef, MatHeaderCellDef, MatCellDef, MatHeaderRow, MatRow, MatHeaderRowDef, MatRowDef, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private musicService: MusicService) {
    this.dataSource = new MatTableDataSource(musicService.listOfMusic);
  }

  title = 'TableOfMusic';
  dataSource:  MatTableDataSource<IMusic, MatPaginator>;
  displayedColumns = ['id', 'name', 'fileName'];
  activeMusic = "";

  setActiveMusic(src: string) {
    this.activeMusic = src;
  }
}
