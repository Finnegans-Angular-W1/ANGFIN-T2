import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CardComponent } from "./components/card/card.component";
import { CommonModule } from "@angular/common";
import { ModalComponent } from "./components/modal/modal.component";
import { NgModule } from "@angular/core";
import { ProfileComponent } from "./components/profile/profile.component";
import { SafeHTMLPipe } from "./pipes/safe-html.pipe";
import { TitleComponent } from "./components/title/title.component";

@NgModule({
  declarations: [
    TitleComponent,
    ModalComponent,
    SafeHTMLPipe,
    CardComponent,
    ModalComponent,
    SafeHTMLPipe,
    ProfileComponent,
    CardComponent,
    SafeHTMLPipe,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    TitleComponent,
    ModalComponent,
    SafeHTMLPipe,
    CardComponent,
    ProfileComponent,
    SafeHTMLPipe,
  ],
})
export class SharedModule {}
