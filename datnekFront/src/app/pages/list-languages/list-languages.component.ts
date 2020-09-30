import {AfterViewInit, Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListLanguages} from "../../models/list-languages";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {DetailsLanguageComponent} from "../details-language/details-language.component";
import {ActivatedRoute, Router} from "@angular/router";
import {WebServicesService} from "../../webServices/web-services.service";


/**
 * Data to local test on frontEnd
 */
let ELEMENT_DATA: ListLanguages[] = [
  {id: 1, language: 'français', writing: 'intermédiaire', comprehension: 'courant', speaking: 'intermédiaire'},
  {id: 2, language: 'anglais', writing: 'intermédiaire', comprehension: 'courant', speaking: 'intermédiaire'},
  {id: 3, language: 'nerlandais', writing: 'intermédiaire', comprehension: 'courant', speaking: 'intermédiaire'}
]

@Component({
  selector: 'app-list-languages',
  templateUrl: './list-languages.component.html',
  styleUrls: ['./list-languages.component.scss']
})
export class ListLanguagesComponent implements OnInit, AfterViewInit {
  @Input() open: EventEmitter<any> = new EventEmitter();

  public stateClass = 'btn btn-secondary';
  public stateText = 'Modal closed';

  /**
   * Configuration for what table columns should display
   * also with data retrieving from database
   */
  displayedColumns: string[] = ['language', 'writing', 'speaking', 'comprehension', 'id'];
  dataSource = new MatTableDataSource<ListLanguages>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private router: Router,
              private params: ActivatedRoute, private ws: WebServicesService) { }

  ngOnInit(): void {
    this.getUser();
  }

  /**
   * Initialise dataSource with paginator
   */
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  /**
   * Open page to create new language
   */
  goToAddNewLanguage(){
    this.router.navigateByUrl('/pages/new-language');
  }

  /**
   * Open modal to show details
   * and change button color
   * @param data
   */
  detailLanguage(data){
    console.log('list ', data)
    const dialogRef = this.dialog.open(DetailsLanguageComponent, {data: data});
    this.stateClass = 'btn btn-success';
    this.stateText = 'Modal opened';

    dialogRef.afterClosed().subscribe(result => {
      this.stateClass = 'btn btn-secondary';
      this.stateText = 'Modal closed';
    });
  }

  getUser() {
    const id = this.params.snapshot.paramMap.get('Id');
    this.ws.findOne('/getUser', id)
      .subscribe(
        res => console.log(res),
        error => console.error(error)
      )
  }

}
