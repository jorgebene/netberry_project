import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  @Output() change: EventEmitter<Event> = new EventEmitter<Event>();

  newValue(value: any) {
    this.change.emit(value);    
  }
}
