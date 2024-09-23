import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TypeService } from '../../../services/type.service';
import { IType } from '../../../interfaces/itype';

@Component({
  selector: 'app-type-detail',
  templateUrl: './type-detail.component.html',
  styleUrl: './type-detail.component.css'
})
export class TypeDetailComponent {

  typeForm!: FormGroup ;

  constructor(private fb: FormBuilder, private typeService: TypeService) {
    this.typeForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: [''],
      createdAt: [new Date(), [Validators.required]],
      updatedAt: [new Date(), [Validators.required]]
    });
  }

  onSubmit() {
    if (this.typeForm.valid) {
      const newType: IType = this.typeForm.value;
      this.typeService.createType(newType).subscribe(
        (response) => {
          console.log('Type créé avec succès', response);
        },
        (error) => {
          console.error('Erreur lors de la création du type', error);
        }
      );
    }
  }
}
