import { NgModule } from '@angular/core';
import {
	HTTP_INTERCEPTORS,
	HttpClientModule,
	provideHttpClient,
	withInterceptorsFromDi,
} from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
	imports: [HttpClientModule],
	providers: [
		provideHttpClient(withInterceptorsFromDi()),
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true,
		},
	],
})
export class AuthModule {}
