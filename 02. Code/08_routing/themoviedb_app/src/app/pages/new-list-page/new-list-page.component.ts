import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateListDto } from 'src/app/models/dto/create-list.dto';
import { UserlistService } from 'src/app/services/userlist.service';

@Component({
  selector: 'app-new-list-page',
  templateUrl: './new-list-page.component.html',
  styleUrls: ['./new-list-page.component.css'],
})
export class NewListPageComponent {
  createListForm = new FormGroup({
    nameControl: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    descriptionControl: new FormControl('', Validators.required),
    languageControl: new FormControl('', Validators.required),
  });

  constructor(
    private userListService: UserlistService,
    private router: Router
  ) {}

  onSubmit() {
    let name = this.createListForm.controls.nameControl.value ?? '';
    let description =
      this.createListForm.controls.descriptionControl.value ?? '';
    let language = this.createListForm.controls.languageControl.value ?? '';

    let createListDto = new CreateListDto(name, description, language);
    this.userListService.createList(createListDto).subscribe((resp) => {
      this.router.navigate(['/my-profile']);
    });
  }
}
