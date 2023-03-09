import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people/people-response.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css'],
})
export class PeopleListComponent implements OnInit {
  listadoPersonajes: People[] = [];

  constructor(private peopleService: PeopleService) {}
  ngOnInit(): void {
    this.peopleService.getPeopleList().subscribe((respuesta) => {
      this.listadoPersonajes = respuesta.results;
    });
  }

  getPeopleId(people: People) {
    return people.url.split('/').reverse()[1];
  }
}
