import { Component, inject, input, output } from '@angular/core';

@Component({
  selector: 'app-modal-error',
  imports: [],
  templateUrl: './modal-error.component.html',
  styleUrl: './modal-error.component.scss'
})
export class ModalErrorComponent {
  message = input.required<string | null>();
  closeModal = output();

  constructor() {}

  onClose() {
    this.closeModal.emit();
  }
}
