import { Component, OnInit } from '@angular/core';
import { DataRepositoryService } from "../app/services/data-repository.service";
import { RootObject, tableRowModel, MeasurmentReportEnum, ColumnDefs } from "./models";
import { extractMeasurementReportData } from "./utils/MeasurementReportUtility";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  gridApi : any;
  getRowNodeId;
  title = 'analytics app';
  data: RootObject[] = []
  tableColumns = ColumnDefs
  tableRows: tableRowModel[] = []

  constructor(private dataRepositoryService: DataRepositoryService) { }

  async ngOnInit() {
    this.getRowNodeId = params  => {
      return params.id;
    };
    this.data = await this.dataRepositoryService.getData()
  }

  userOnClick(index: number){
    var typeArray = extractMeasurementReportData(index, this.data, MeasurmentReportEnum.TYPES);
    var categoriesArray = extractMeasurementReportData(index, this.data, MeasurmentReportEnum.CATEGORIES);
    this.tableRows = typeArray.concat(categoriesArray);
    this.gridApi.redrawRows()
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  
}
