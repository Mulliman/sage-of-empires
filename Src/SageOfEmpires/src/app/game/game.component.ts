import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Player, Opponent } from '../model';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { GameService } from '../services/game.service';
import { BuildOrderService } from '../services/build-order.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CivService } from '../services/civ.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @ViewChild('divToScroll') divToScroll: ElementRef;

  // player: Player;
  // opponent: Opponent;

  constructor(public gameService: GameService,
    private buildOrderService: BuildOrderService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    public dialog: MatDialog) {

  }

  ngOnInit(): void {

    this.buildOrderService.onStepSetAsDone.subscribe((value) => {
      console.log("onStepSetAsDone", value);


      var el = this.divToScroll.nativeElement.querySelector('[data-scroll-to-seconds="' + value + '"]');

      console.log("onStepSetAsDone - el", el);

      if (el) {
        var top = el.offsetTop;
        console.log("onStepSetAsDone - el.offsetTop", top);
        this.divToScroll.nativeElement.scrollTop = top;
      }
    });

    let global = this.renderer.listen('document', 'dblclick', (evt) => {
      console.log('Clicking the document', evt);
      this.openCli();
    })
  }

  openCli() {
    console.log(`openCli`);

    const dialogRef = this.dialog.open(CliDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

// @Component({
//   selector: 'cli-dialog',
//   template: `<input type='text' placeholder='Enter command...' matInput [formControl]='civControl' [matAutocomplete]='auto' />
// <mat-autocomplete #auto="matAutocomplete" (optionSelected)='doCommand($event.option.value)'>
// <mat-option *ngFor="let civ of civService.civs" [value]="civ.name">
//  {{civ.name}}
// </mat-option>
// </mat-autocomplete>`
// })

@Component({
  selector: 'cli-dialog',
  template: "<h1>Press some keys</h1>"
})
export class CliDialog {

  civControl = new FormControl();
  filteredOptions: Observable<string[]>;
  command: string = "";

  commands: { str: string, f: () => void }[] = [
    { str: "14", f: () => { this.gameService.toggleStartPause(); } }
  ];

  constructor(public civService: CivService,
    public gameService: GameService,
    private renderer: Renderer2,
    private dialogRef: MatDialogRef<CliDialog>) { }

  ngOnInit(): void {
    let global = this.renderer.listen('document', 'keypress', (evt: KeyboardEvent) => {
      console.log('keypress the document', evt);

      const inputChar = String.fromCharCode(evt.charCode);
      this.command += inputChar;

      console.log(this.command);
      

      this.doCommand(this.command);
    })
  }

  doCommand(value) {
    console.log("doCommand", this.command);

    var match = this.commands.find(c => c.str == this.command);

    if (match) {
      console.log("doCommand - match", match);
      match.f();
      this.dialogRef.close();
    }
  }


}