import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md/lib/free/modals/modal.directive';
import { PostsModel, UsersModel } from 'src/app/models/_index';
import { PostsService, UsersService } from 'src/app/services/_index';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  @ViewChild('postBody') public postBodyModal: ModalDirective;

  constructor(private postsService: PostsService,
    private usersService: UsersService) { }

  postsList: PostsModel[] = [];
  usersList: UsersModel[] = [];
  id: number;
  idList: any[] = [];

  ngOnInit(): void {
    this.getUserList();
  }

  getPostList() {
    this.postsService.getList()
      .subscribe(
        (data) => {
          for (let i = 0; i < data.length; i++) {
            var userId = data[i].userId;
            var userData = this.usersList.find((user) => user.id == userId);
            var userName = userData.username;
            data[i]["username"] = userName;
          }
          this.postsList = data;
        });
  }

  getUserList() {
    this.usersService.getList()
      .subscribe(
        (data) => {
          this.usersList = data;
          this.getPostList();
        });
  }

  openDetailBody(id) {
    this.id = id;
    this.idList = this.postsList.filter((id) => id.id == this.id);
    if (this.idList) {
      this.postBodyModal.show();
    }
  }
}
