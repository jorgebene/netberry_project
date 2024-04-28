import { Component } from '@angular/core';
import { ApiService } from '../../../core/api/services';
import { Heroe } from '../../../core/api/models';
import { Subject, debounceTime } from 'rxjs';
import { Router } from '@angular/router';
import { LoaderService } from '../../../services/loader.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public heroesList: Array<Heroe> = [];
  public loading: boolean = true;
  private filterSubject = new Subject<string>();
  
  constructor
    (
      private _heroesService: ApiService,
      private _loaderService: LoaderService,
      private _router: Router
      ) {
      this.filterSubject.pipe(debounceTime(1000)).subscribe((filterValue) => {
        this.getHeroesList(filterValue);
      });
      this.loading = this._loaderService.isLoading();
    }

  ngOnInit() {
    this.getHeroesList();
  }

  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
		this.filterSubject.next(inputValue);
	}

  loadHeroes(event: Boolean) {
    event ? this.getHeroesList() : false;
  }

  createHeroe() {
    this._router.navigate(['create']);
  }


  getHeroesList(filterName?: string) {
    let params = {
      nombre: filterName
    }
    this.heroesList = [];
    
    this._heroesService.getHeroes(params).subscribe((res: Array<Heroe>) => {
      this.heroesList = res;
    })
  }
}
