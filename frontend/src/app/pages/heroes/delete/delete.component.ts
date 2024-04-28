import { Component, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { ApiService } from '../../../core/api/services';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatDialogTitle, 
    MatDialogContent, 
    MatDialogActions, 
    MatDialogClose,
    MatSnackBarModule],
})

export class DeleteComponent {
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: HeroeId,
    public dialogRef: MatDialogRef<DeleteComponent>,
    private _heroesService: ApiService,
    private _snackBar: MatSnackBar
  ) {}

  delete() {
    this._heroesService.heroesIdDelete({id: this.data.id}).subscribe(() => {
      this._snackBar.open('Héroe eliminado correctamente', '', {
        duration: 1500,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: 'app-notification-success'
      })
      this.close();
    }, error => {
      this._snackBar.open('Error al eliminar el héroe', '', {
        duration: 1500,
        horizontalPosition: 'end',
        verticalPosition: 'top',
        panelClass: 'app-notification-error'
      })
    })
  }

  close() {
    this.dialogRef.close();
  }
}

export interface HeroeId {
  id: number;
}
