import { Component, OnInit } from '@angular/core';
import { IType } from '../../../interfaces/itype';
import { TypeResponse, TypeService } from '../../../services/type.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrl: './type-list.component.css'
})
export class TypeListComponent implements OnInit {

  types: IType[] = [];
  totalPages: number = 0;
  currentPage: number = 1;
  pageSize: number = 5;
  search: string = '';
  isEditModalVisible = false;
  selectedType: any = null;

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
    this.loadTypes();
  }

  loadTypes(page: number = this.currentPage) {
    this.typeService.getTypes(page, this.pageSize, this.search).subscribe(response  => {
      this.types = response.types;
      this.totalPages = response.totalPages;
      this.currentPage = response.currentPage;
    });
  }

  onSearchChange(searchValue: string) {
    this.search = searchValue;
    this.currentPage = 1; 
    this.loadTypes(); // Recharger les types avec le nouveau critère de recherche
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadTypes();
    }
  }

  openEditModal(type: any) {
    console.log(type)
    this.selectedType = type;
    this.isEditModalVisible = true;
  }

  updateType(updatedType: any) {
    this.typeService.updateType(this.selectedType.id, updatedType).subscribe(() => {
      this.loadTypes();
    });
  }

  deleteType(id: number) {
    this.typeService.deleteType(id).subscribe(() => {
      this.loadTypes();
    });
  }
}
