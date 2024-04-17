import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { Menu } from '../menu.model';
@Component({
selector: 'app-menu-create',
templateUrl: './menu-create.component.html',
styleUrls: ['./menu-create.component.css']
})
export class MenuCreateComponent implements OnInit {
menu: Menu = new Menu();
constructor(private menuService: MenuService, private router: Router) { }
ngOnInit(): void {
}
saveMenu() {
this.menuService.createMenu(this.menu).subscribe({
next: (data) => {
console.log(data);
this.redirectToMenuList();
},
error: (e) => {
console.log(e);
}
});
}
redirectToMenuList() {
this.router.navigate(['/menu']);
}
onSubmit() {
console.log(this.menu);
this.saveMenu();
}
  
}
