import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md/lib/free/modals/modal.directive';
import { TodosModel, UsersModel } from 'src/app/models/_index';
import { TodosService, UsersService } from 'src/app/services/_index';
import { Constants } from '../../constants';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @ViewChild('createTodos') public createTodosModal: ModalDirective;
  @ViewChild('frame') public frameModal: ModalDirective;

  todosList: TodosModel[] = [];
  todos = new TodosModel();
  usersList: UsersModel[] = [];
  userName: string;
  validatingForm: FormGroup;
  message: string;

  constructor(private todosService: TodosService,
    private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUserList();

    this.validatingForm = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZçÇğĞıİöÖşŞüÜ \-\']+')])
    });
  }

  //#region -validations
  get title() {
    return this.validatingForm.get('title');
  }

  get userId() {
    return this.validatingForm.get('userId');
  }
  //#endregion

  getTodosList() {
    this.todosService.getList()
      .subscribe(
        (d) => {
          for (let i = 0; i < d.length; i++) {
            var userId = d[i].userId;
            var userData = this.usersList.find((user) => user.id == userId);
            var userName = userData.username;
            d[i]["username"] = userName;
          }
          this.todosList = d;
        });
  }

  getUserList() {
    this.usersService.getList()
      .subscribe(
        (data) => {
          this.usersList = data;
          this.getTodosList();
        });
  }

  openNewTodo() {
    this.createTodosModal.show();
  }

  addTodo() {
    this.createTodosModal.hide();
    this.message = Constants.successAddMessage;
    this.frameModal.show();
    /* Eğer post methodu olsaydık aşşağıdaki yorum satırı açılacaktı, girdiği verileri (this.todos) servis e gönderecekti.*/
    // this.todosService.addTodos(this.todos)
    //   .subscribe(
    //     (d) => {
    //      this.message = Constants.successAddMessage;
    //     });
  }
}
