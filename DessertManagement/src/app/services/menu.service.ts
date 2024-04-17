import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Menu } from '../menu.model';
@Injectable({
providedIn: 'root'
})
export class MenuService {
private baseUrl = "http://localhost:9098/menu"
constructor(private httpClient: HttpClient) {
}
getMenuList(): Observable<Menu[]> {
return this.httpClient.get<Menu[]>(`${this.baseUrl}`);
}
createMenu(menu: Menu): Observable<Object> {
return this.httpClient.post(`${this.baseUrl}`, menu);
}
getMenuById(id: number): Observable<Menu>{
return this.httpClient.get<Menu>(`${this.baseUrl}/${id}`);
}
updateMenu(id:number, menu:Menu): Observable<Object>{
return this.httpClient.put(`${this.baseUrl}/${id}`, menu);
}
deleteMenu(id:number): Observable<Object>{
return this.httpClient.delete(`${this.baseUrl}/${id}`);
}
}