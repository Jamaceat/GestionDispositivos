import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  private isModalOpen = new BehaviorSubject<boolean>(false);
  private modalMessage = new BehaviorSubject<string>('');

  get isOpen$() {
    return this.isModalOpen.asObservable();
  }

  get message$() {
    return this.modalMessage.asObservable();
  }

  openModal(message: string) {
    this.modalMessage.next(message);
    this.isModalOpen.next(true);
  }

  closeModal() {
    this.isModalOpen.next(false);
  }
}
