import { Component, OnInit } from '@angular/core';
import { Municipio } from 'src/app/modelos/municipio.model';
import { MetodoGetService } from 'src/app/services/metodo-get.service';


@Component({
  selector: 'app-municipio-lista',
  templateUrl: './municipio-lista.component.html',
  styleUrls: ['./municipio-lista.component.css']
})
export class MunicipioListaComponent implements OnInit {
  municipios: Municipio[]=[];
  municipiosOriginal: Municipio[]=[];
  departamentos: string[]=[]; // Solo necesitamos los nombres de los departamentos
  selectedDepartamento: string ="";

  constructor(private municipioService: MetodoGetService) { }

  ngOnInit(): void {
    this.loadDepartamentos();
    this.loadMunicipios();
  }

  loadMunicipios() {
    this.municipioService.getMunicipios().subscribe(data => {
      this.municipiosOriginal = data;
      this.municipios = data;
    });
  }

  loadDepartamentos() {
    this.municipioService.getDepartamentos().subscribe(data => {
      // Extraemos los nombres de los departamentos sin duplicados
      this.departamentos = Array.from(new Set(data.map(d => d.departamento)));
    });
  }

  filterByDepartamento() {
    if (this.selectedDepartamento) {
      this.municipios = this.municipiosOriginal.filter(
        municipio => municipio.departamento === this.selectedDepartamento
      );
    } else {
      this.loadMunicipios();
    }
  }

}
