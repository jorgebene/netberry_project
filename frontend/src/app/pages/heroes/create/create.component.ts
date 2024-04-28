import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../core/api/services';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  providers: [UpperCasePipe]
})
export class CreateComponent {
  public heroeForm!: FormGroup;
  public edit: boolean = false;
  private _id!: number;

  constructor(
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _heroesService: ApiService,
    private _upperCasePipe: UpperCasePipe
  ) {}

  ngOnInit() {
    this.initializeForm();
    this._activeRoute.queryParamMap.subscribe((res: Params) => {
      if(res.params.edit == 'true') {
        this._id = parseInt(res.params.id);
        this.edit = JSON.parse(res.params.edit);
        this.getHeroe(
          res.params.nombre, 
          res.params.alias, 
          res.params.habilidades
        );
      }
    })
  }

  initializeForm() {
    this.heroeForm = this._fb.group({
			nombre: ['', [Validators.required]],
			alias: ['', [Validators.required]],
			habilidades: ['', [Validators.required]],
		});
  }

  back() {
    this._router.navigate(['']);
  }

  getHeroe(nombre: string, alias: string, habilidades: string) {
      this.heroeForm.controls['nombre'].setValue(this._upperCasePipe.transform(nombre));
      this.heroeForm.controls['alias'].setValue(alias);
      this.heroeForm.controls['habilidades'].setValue(habilidades);
  }

  editHeroe(nombre: string, alias: string, habilidades: string) {
    let params = {
      id: this._id,
      body: {
        nombre: nombre,
        alias: alias,
        habilidades: habilidades
      }
    }
    this._heroesService.heroesIdPut(params).subscribe(() => {
      this._snackBar.open('Héroe creado correctamente', '', {
        duration: 1500,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: 'app-notification-success'
      });
      this._router.navigate(['']);
    },() => {
      this._snackBar.open('Error al crear el héroe', '', {
        duration: 1500,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: 'app-notification-error'
      });
    })
  }

  createHeroe(nombre: string, alias: string, habilidades: string) {
    let params = {
      body: {
        'nombre': nombre,
        'alias': alias,
        'habilidades': habilidades
      }
    }

    this._heroesService.heroesPost(params).subscribe(() => {
      this._snackBar.open('Héroe creado correctamente', '', {
        duration: 1500,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: 'app-notification-success'
      });
      this._router.navigate(['']);
    },() => {
      this._snackBar.open('Error al crear el héroe', '', {
        duration: 1500,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: 'app-notification-error'
      });
    })
  }
}

