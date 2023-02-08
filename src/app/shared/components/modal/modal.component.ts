import { Modal } from './../../interfaces/modal';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalInfo:Modal = {open: false, paragraphs: [], title: ''};

  @Output() close = new EventEmitter<boolean>();
  @Output() accept = new EventEmitter<boolean>();

  constructor( ) { }

  ngOnInit(): void {}

  closeModal(){
    this.modalInfo.open = false;

    this.accept.emit(false); //Emits false to parent component
    this.close.emit(false);//close modal
  }

  acceptModal(){
    this.modalInfo.open = false;
    
    this.accept.emit(true);//Emits true to parent component
    this.close.emit(false);//close Modaal
  }

}
