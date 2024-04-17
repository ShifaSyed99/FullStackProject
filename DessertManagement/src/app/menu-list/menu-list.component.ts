import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { Menu } from '../menu.model';
@Component({
selector: 'app-menu-list',
templateUrl: './menu-list.component.html',
styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
menus: Menu[] | undefined;
  MenuService: any;
  menu: any;
constructor(private menuService: MenuService, private router: Router) {
}
ngOnInit(): void {
this.getMenus();
}
private getMenus() {
this.menuService.getMenuList().subscribe(data => {
this.menus = data;
});
}
updateMenu(id: number) {
this.router.navigate(['update-menu', id]);
}
deleteMenu(id: number) {
this.menuService.deleteMenu(id).subscribe(data => {
console.log(data);
this.getMenus();
});
}
 /* getMenu() {
    throw new Error('Method not implemented.');
  }*/
}