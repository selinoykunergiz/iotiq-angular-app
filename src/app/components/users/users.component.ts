import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodosModel, UsersModel } from 'src/app/models/_index';
import { TodosService, UsersService } from 'src/app/services/_index';
import { ModalDirective } from 'angular-bootstrap-md/lib/free/modals/modal.directive';
import { Constants } from '../../constants';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild('createUser') public createUserModal: ModalDirective;
  @ViewChild('frame') public frameModal: ModalDirective;

  usersList: UsersModel[] = [];
  users = new UsersModel();
  validatingForm: FormGroup;
  zipKodList = {};
  citySelected: boolean = false;
  message: any;
  todosList: TodosModel[] = [];
  constructor(private usersService: UsersService,
    private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.getTodosList();

    this.validatingForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZçÇğĞıİöÖşŞüÜ \-\']+')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required])
    });
  }

  //#region -validations
  get name() {
    return this.validatingForm.get('name');
  }

  get email() {
    return this.validatingForm.get('email');
  }

  get phone() {
    return this.validatingForm.get('phone');
  }

  get city() {
    return this.validatingForm.get('city');
  }

  get zipcode() {
    return this.validatingForm.get('zipcode');
  }
  //#endregion

  //#region +0-9 ve '.' girilmesini, e harfinin de girilmemesini sağlar.
  isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (String.fromCharCode(charCode) != '.' && String.fromCharCode(charCode) != '-'
      && (String.fromCharCode(charCode) < '0' || String.fromCharCode(charCode) > '9'))
      return false;
    return true;
  }
  //#endregion

  openCreateUser() {
    this.createUserModal.show();
  }

  getUserList() {
    this.usersService.getList()
      .subscribe(
        (data) => {
          for (let i = 0; i < data.length; i++) {
            let todoCount = this.todosList.filter(todo => todo.userId == data[i].id).length;
            data[i]["todoCount"] = todoCount;
          }

          this.usersList = data;
        });
  }

  getTodosList() {
    this.todosService.getList()
      .subscribe(
        (d) => {
          this.todosList = d;
          this.getUserList();
        });
  }

  getCreateUser() {
    this.createUserModal.hide();
    this.message = Constants.successAddMessage;
    this.frameModal.show();
    /* Eğer post methodu olsaydık aşşağıdaki yorum satırı açılacaktı, girdiği verileri (this.users) servis e gönderecekti.*/
    // this.usersService.createUser(this.users)
    //   .subscribe(
    //     (d) => {
    //      this.message = Constants.successAddMessage;
    //     });
  }

  onSelectCity(selectedVal) {
    let cityName = selectedVal.currentTarget.value;
    const nDeger = {
      "a": selectedVal.currentTarget.value.split(':')[0].trim(),
      "b": selectedVal.currentTarget.value.split(':')[1].trim()
    }
    cityName = nDeger.b.trim();
    this.zipKodList = this.usersList.filter((name) => name.address.city == cityName);
    this.citySelected = true;
  }
}
