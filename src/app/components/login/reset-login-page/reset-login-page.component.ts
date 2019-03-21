import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-reset-login-page',
  templateUrl: './reset-login-page.component.html',
  styleUrls: ['./reset-login-page.component.css']
})
export class ResetLoginPageComponent implements OnInit {
  success: Boolean;
  header: String;
  msg: String = '';

  private password: String = '';
  private confirmPassword: String ='';
  private token: String = '';

  constructor(
    private authService: AuthService,
    private activeRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.token = this.activeRoute.snapshot.params['id'];
  }

  onSubmit(){
    this.authService.onResetPassword(this.password, this.confirmPassword, this.token).subscribe(data => {
      this.success = data.success;
      this.msg = data.msg;
      if(data.success == true){
        this.header = "You Are All Set"
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 5000);
      } else {
        this.header = "Oh No There Was An Issue"
      }
    });
  };

}
