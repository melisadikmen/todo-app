import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, FormsModule, MatInputModule,FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app';
  work: string = "";
  works: string[] = [];
  updateWork: string = "";
  isUpdateFormActive: boolean = false;
  index: number = 0;

  constructor(library: FaIconLibrary) {
    library.addIcons(faPen,faTrashCan);
  }
  save() {
    this.works.push(this.work);
    this.work = "";
  }

  remove(index: number) {
    let result: boolean = confirm("Kaydı silmek istiyor musunuz?");
    if (result == true) {
      this.works.splice(index, 1);
    }
  }
  update() {
    this.works[this.index] = this.updateWork;
    this.cancel();
  }
  get(work: string, index: number) {
    this.updateWork = work;
    this.index = index;
    this.isUpdateFormActive = true;
  }
  cancel() {
    this.isUpdateFormActive = false;
  }

  changeInputCLass() {
    if (this.work.length < 3)
      return "form-control is-invalid"
    return "form-control is-valid"
  }
}
