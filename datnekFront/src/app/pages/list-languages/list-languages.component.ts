import {AfterViewInit, Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ListLanguages} from "../../models/list-languages";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog} from "@angular/material/dialog";
import {DetailsLanguageComponent} from "../details-language/details-language.component";
import {ActivatedRoute, Router} from "@angular/router";
import {WebServicesService} from "../../webServices/web-services.service";
import { UserInfo } from "../../models/userInfo";
import {UsersService} from "../../webServices/users.service";
import {PagesComponent} from "../pages.component";


/**
 * Data to local test on frontEnd
 */
/*let ELEMENT_DATA: ListLanguages[] = [
  {id: 1, language: 'français', writing: 'intermédiaire', comprehension: 'courant', speaking: 'intermédiaire'},
  {id: 2, language: 'anglais', writing: 'intermédiaire', comprehension: 'courant', speaking: 'intermédiaire'},
  {id: 3, language: 'nerlandais', writing: 'intermédiaire', comprehension: 'courant', speaking: 'intermédiaire'}
]*/

@Component({
  selector: 'app-list-languages',
  templateUrl: './list-languages.component.html',
  styleUrls: ['./list-languages.component.scss']
})
export class ListLanguagesComponent implements OnInit, AfterViewInit {
  @Input() open: EventEmitter<any> = new EventEmitter();

  public stateClass = 'btn btn-secondary';
  public stateText = 'Modal closed';
  userInfo: UserInfo;
  listOfLanguages: ListLanguages[];
  public userId = localStorage.getItem('id');

  /**
   * Configuration for what table columns should display
   * also with data retrieving from database
   */
  displayedColumns: string[] = ['languageName', 'writing', 'speaking', 'comprehension', 'Id'];
  dataSource = new MatTableDataSource<ListLanguages>(this.listOfLanguages);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private dialog: MatDialog, private router: Router,
              private params: ActivatedRoute, private ws: WebServicesService,
              private userService: UsersService) { }

  ngOnInit(): void {
    this.getUser();
    this.getAllLanguages();
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
    this.router.navigate(['/pages/new-language', this.userId]);
  }

  /**
   * Open modal to show details
   * and change button color
   * @param data
   */
  detailLanguage(data){
    const dialogRef = this.dialog.open(DetailsLanguageComponent, {data: data});
    this.stateClass = 'btn btn-success';
    this.stateText = 'Modal opened';

    dialogRef.afterClosed().subscribe(result => {
      this.stateClass = 'btn btn-secondary';
      this.stateText = 'Modal closed';
    });
  }

  /**
   * GET user info
   */
  getUser () {
    this.userService.getUserInfo(this.userId)
      .subscribe(
        res => this.userInfo = res[0],
        error => this.router.navigateByUrl('/login')
      )
  };

  getAllLanguages() {
    this.ws.findAll('selectedLanguage', this.userId)
      .subscribe(
        res => this.dataSource = res,
        error => console.error(error)
      )
  }

  deleteLanguage(data) {
    if(confirm('Êtes-vous sûr de vouloir supprimer ce choix ?')){
      this.ws.deleteOne('deleteSelectedLanguage', data, this.userId)
        .subscribe(
          res => {
            if(res.affectedRows === 1) {
              this.getAllLanguages();
            }
          },
          error => console.error(error)
        )
    }
  }

  logOut(){
    localStorage.removeItem('id');
    this.router.navigateByUrl('/login');
  }

}
