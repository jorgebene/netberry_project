import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor() {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
		let newReq = req.clone();

		newReq = req.clone({
			setHeaders: {
				'Access-Control-Allow-Origin': '*',
			},
		});

		// Response
		return next.handle(newReq).pipe(
			catchError((error) => {
				return throwError(error);
			})
		);
	}
}
