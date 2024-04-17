import { Component, OnInit } from '@angular/core';
import { Init } from 'v8';
import { Menu } from '../menu.model';
import { MenuService } from '../services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-update',
  templateUrl: './menu-update.component.html',
  styleUrl: './menu-update.component.css'
})
export class MenuUpdateComponent implements OnInit{
  
  id!: number;
  menu: Menu = new Menu();
  constructor(private menuService: MenuService,
  private route: ActivatedRoute, private router: Router) { }
  private getMenuById() {
  this.id = this.route.snapshot.params['id'];
  this.menuService.getMenuById(this.id).subscribe({
  next: (data) => {
  this.menu = data;
  },
  error: (e) => {
  console.log(e);
  }
  });
  }
  ngOnInit(): void {
  this.getMenuById();
  }
  updateMenu() {
  this.menuService.updateMenu(this.id, this.menu).subscribe({
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
  this.updateMenu();
  }
 }
