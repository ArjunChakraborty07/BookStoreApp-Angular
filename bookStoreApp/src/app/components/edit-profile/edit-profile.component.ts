import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  public hide: boolean = true;
  file: any;
  isProfile = 'true';
  profile: string = localStorage.getItem('image');
  username: string = localStorage.getItem('username');
  password: string;
  usermail: string = localStorage.getItem('email');
  fullname: string = localStorage.getItem('name');
  mobile = localStorage.getItem('mobile');
  constructor(private userService: UserService) {}

  ngOnInit() {}
  update() {
    console.log('to update');
    console.log(this.fullname);
    console.log(this.password);
  }
  OnSelectedFile(event) {
    console.log(event.target.files[0]);
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', this.file);
      this.file.inProgress = true;
      console.log('FormData:', formData.get('file'));
      this.userService
        .uploadProfie(formData, this.isProfile)
        .subscribe((result: any) => {
          console.log('PROFILE RESULT:', result);
          if (result.status === 200) {
            localStorage.setItem('image', result.data);
            this.profile = result.data;
            console.log(this.profile);
          }
        });
    }
  }
}
