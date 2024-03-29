import { Component, OnInit } from '@angular/core';
import { Assistant, Name, Location, ProfilePicture } from '../model/assistant-model';
import { AssistantService } from '../assistant.service';

@Component({
  selector: 'app-assistant-list',
  templateUrl: './assistant-list.component.html',
  styleUrls: ['./assistant-list.component.scss']
})
export class AssistantListComponent implements OnInit {

  constructor(private assistantService:AssistantService) {
  }

  DEFAULT_ASSISTANTS:string = '6';
  formShowing:boolean = false;
  views:Object[] = [
    {
      name: "My Account",
      description: "Edit my account",
      icon: "assignment ind"
    },
    {
      name: "Next events",
      description: "Find incoming events!",
      icon: "event"
    }
  ];

  assistants:Assistant[];
  errorMessage:string;

  model:Assistant;

  add() {
    this.assistants.push(this.model);
    this.initModel();
  }

  getAssistants() {
    this.assistantService.getAssistants(this.DEFAULT_ASSISTANTS).subscribe(
      assistants => {
        this.assistants = assistants.results;
      },
      error => this.errorMessage = <any>error
    );
  }

  ngOnInit() {
    this.getAssistants();
    this.initModel();
  }

  initModel(){
    this.model=new Assistant(new Name('', ''), new Location(''), '', new ProfilePicture(''), '')
  }

  // initModel() {
  //   this.model = new Assistant(new Name('', ''), new Location(''), '', new ProfilePicture(''), '');
  // }

}
