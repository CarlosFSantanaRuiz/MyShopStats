import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";
import { Profile } from '../../common/models/profile'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfile:Profile;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {

    this.authService.getProfile().subscribe(profile => {
        this.userProfile = profile;
        
    },
    err => {
      console.log(" Still in here");
      console.log(err);
      return false;
    });
  }

}
