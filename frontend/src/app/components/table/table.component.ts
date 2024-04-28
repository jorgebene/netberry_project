import {AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Heroe } from '../../core/api/models';
import { TitleCasePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../../pages/heroes/delete/delete.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [MatTableModule, MatSortModule, TitleCasePipe, MatIconModule],
})
export class TableComponent implements AfterViewInit {
  @Input() heroes: Array<Heroe> = [];
  @Output() load: EventEmitter<Boolean> = new EventEmitter<Boolean>;
  @ViewChild(MatSort) sort: MatSort = new MatSort;

  public displayedColumns: string[] = ['nombre', 'alias', 'habilidades', 'iconos'];
  public dataSource = new MatTableDataSource();

  constructor(
    private _matDialog: MatDialog,
    private _router: Router) {}

  ngOnInit() {
    this.dataSource.data = this.heroes;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges) {
      this.dataSource.data = changes.heroes.currentValue;
  }

  editHeroe(id: number, nombre: string, alias: string, habilidades: string) {
    this._router.navigate(['create'], 
    {
      queryParams: {
        id: id, 
        nombre: nombre, 
        alias: alias, 
        habilidades: habilidades, 
        edit: true
      }
    });
  }

  delete(id: number) {
    const dialogRef = this._matDialog.open(DeleteComponent, {
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(() => {
      this.load.emit(true);
    });
  }
}
