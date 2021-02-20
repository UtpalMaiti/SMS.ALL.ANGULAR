import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "sidebar-logo",
  templateUrl: "./sidebar-logo.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarLogoComponent {
  
  private appName="Bulk SMS"
  constructor() {}

  public get appNameLbl(){
    return this.appName; 
  }
}
