import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, delay, shareReplay, tap } from 'rxjs/operators';
import { Product } from './product.interface';
import { LoadingService } from '../services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://storerestservice.azurewebsites.net/api/products/';
  products$: Observable<Product[]>;

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService) { 
    this.initProducts();
  }

  initProducts() {
    let url:string = this.baseUrl + `?$orderby=ModifiedDate%20desc`;

    this.products$ = this
                      .http
                      .get<Product[]>(url)
                      .pipe(
                        delay(1500),
                        tap(console.table),
                        shareReplay()
                      );

    this.loadingService.showLoaderUntilCompleted(this.products$).subscribe();
  }

  insertProduct(newProduct: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, newProduct).pipe(delay(2000));
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + id);           
  }
}
