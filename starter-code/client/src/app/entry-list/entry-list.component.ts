import { Component, OnInit } from '@angular/core';
import { JournalService } from '../../services/Journal.service'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {


  entries: Array<any> = [];
  constructor(private diario: JournalService) {
    this.diario.getJournalentries().subscribe(entry =>{
      this.entries = entry;
    })

  }

  ngOnInit() {
  }

}
