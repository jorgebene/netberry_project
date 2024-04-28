import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loading = false;
	private _refresh$ = new Subject<void>();

  constructor() {}

  get refresh$() {
		return this._refresh$;
	}

  show() {
    this.loading = true;
		this._refresh$.next();
  }

  hide() {
    this.loading = false;
		this._refresh$.next();
  }

  isLoading() {
    return this.loading;
  }
}
