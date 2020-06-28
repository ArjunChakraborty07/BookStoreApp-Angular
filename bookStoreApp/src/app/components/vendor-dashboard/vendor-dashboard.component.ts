import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AddBookComponent } from "../add-book/add-book.component";
import { MessageService } from "src/services/message.service";
import { UserService } from "src/services/user.service";

@Component({
  selector: "app-vendor-dashboard",
  templateUrl: "./vendor-dashboard.component.html",
  styleUrls: ["./vendor-dashboard.component.scss"],
})
export class VendorDashboardComponent implements OnInit {
  isBookFormOpened = false;
  file: any;
  isProfile = 'true';
  constructor(
    private dialog: MatDialog,
    private messageService: MessageService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.messageService.changeMessage();
  }

  openBookForm() {
    this.dialog.open(AddBookComponent, {
      panelClass: "custom-modalbox",
    });
  }
  OnSelectedFile(event) {
    console.log(event.target.files[0]);
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", this.file);
      this.file.inProgress = true;
      console.log("FormData:", formData.get("file"));
      this.userService.uploadProfie(formData,this.isProfile).subscribe((result: any) => {
        console.log("PROFILE RESULT:", result);
        localStorage.setItem("image", result.data["imageUrl"]);
      });
    }
  }
}
