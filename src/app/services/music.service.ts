import { Injectable } from '@angular/core';
import {IMusic} from "../interfaces/IMusic";

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  constructor() { }

  listOfMusic: IMusic[] = [
    {
      id: 1,
      name: "Baby Queen",
      fileName: "Gorillaz-Baby-Queen.mp3",
      fileSrc: "/assets/musics/Gorillaz-Baby-Queen.mp3",
    },
    {
      id: 2,
      name: "Lacrimosa",
      fileName: "Mozart-Lacrimosa.mp3",
      fileSrc: "/assets/musics/Mozart-Lacrimosa.mp3",
    },
    {
      id: 3,
      name: "Waltz.mp3",
      fileName: "Dmitri-Shostakovich-Waltz.mp3",
      fileSrc: "/assets/musics/Dmitri-Shostakovich-Waltz.mp3",
    },
    {
      id: 4,
      name: "Clint Eastwood",
      fileName: "Gorillaz-Clint-Eastwood.mp3",
      fileSrc: "/assets/musics/Gorillaz-Clint-Eastwood.mp3",
    }
  ]
}
