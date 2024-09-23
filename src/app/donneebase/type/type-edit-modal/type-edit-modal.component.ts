import {  Component, EventEmitter, Input, Output, OnChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-type-edit-modal',
  templateUrl: './type-edit-modal.component.html',
  styleUrl: './type-edit-modal.component.css'
})
export class TypeEditModalComponent implements OnChanges {
  @Input() isVisible = false;
  @Input() type: any;
  @Output() update = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  editTypeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.editTypeForm = this.fb.group({
      nom: ['', Validators.required],
      description: [''],
      updatedAt: [new Date(), [Validators.required]]
    });
  }

  ngOnChanges() {
    console.log('Type reçu : ', this.type); // Ajoutez ceci pour vérifier si la propriété `type` est bien reçue
    if (this.type) {
      this.editTypeForm.patchValue(this.type);
    }
  }

  closeModal() {
    this.isVisible = false;
    this.close.emit();
  }

  onSubmit() {
    console.log('Formulaire soumis : ', this.editTypeForm.value); // Ajoutez ceci pour vérifier les données soumises
    if (this.editTypeForm.valid) {
      this.update.emit(this.editTypeForm.value);
      this.closeModal();
    }
  }
}
