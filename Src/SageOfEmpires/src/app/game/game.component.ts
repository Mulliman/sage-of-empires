import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Player, Opponent, PlayerColours, TeamColourOptions, PlayerColourConstants } from '../model';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { GameService } from '../services/game.service';
import { BuildOrderService } from '../services/build-order.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CivService } from '../services/civ.service';
import { Aztecs, Berbers, Britons, Bulgarians, Burgundians, Burmese, Byzantines, Celts, Chinese, Cumans, Ethiopians, Franks, Goths, Huns, Incas, Indians, Italians, Japanese, Khmer, Lithuanians, Koreans, Magyars, Malay, Malians, Mayans, Mongols, Persians, Portuguese, Saracens, Sicilians, Slavs, Spanish, Tatars, Teutons, Turks, Vietnamese, Vikings } from '../civs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @ViewChild('divToScroll') divToScroll: ElementRef;

  timesCtrlClicked = 0;
  dialogRef: MatDialogRef<CliDialog, any>;

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

    let global2 = this.renderer.listen('document', 'keyup', (evt) => {
      this.doubleControlEvent(evt);
    })
  }

  openCli() {
    console.log(`openCli`, this.dialogRef);

    if(this.dialog && this.dialog.openDialogs.length){
      this.dialog.closeAll();
      this.dialogRef.close();
      this.dialogRef = null;  
    }else{
      this.dialogRef = this.dialog.open(CliDialog);

      this.dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
  }

  doubleControlEvent(evt) {
    if (evt.key === ' ') {
      this.timesCtrlClicked++
      if (this.timesCtrlClicked >= 2) {
        console.log('Double control')
        this.openCli();
      }
      setTimeout(() => (this.timesCtrlClicked = 0), 200)
    }  
  }
}

@Component({
  selector: 'cli-dialog',
  template: "<h1>Press hotkeys</h1><p>E.g. <ul class='list-no-space'><li><strong>14</strong> starts the game</li><li><strong>gg</strong> ends the game</li></ul>"
})
export class CliDialog {

  civControl = new FormControl();
  filteredOptions: Observable<string[]>;
  command: string = "";
  listener;

  commands: { str: string, f: () => CliAfterAction }[] = [
    //{ str: "aa", f: () => { this.focusOnPlayerBox() } },

    // Select Civs
    { str: "az", f: () => { this.gameService.setPlayer(new Player(new Aztecs())); return CliAfterAction.KeepOpen; } },
    { str: "be", f: () => { this.gameService.setPlayer(new Player(new Berbers())); return CliAfterAction.KeepOpen; } },
    { str: "br", f: () => { this.gameService.setPlayer(new Player(new Britons())); return CliAfterAction.KeepOpen; } },
    { str: "bul", f: () => { this.gameService.setPlayer(new Player(new Bulgarians())); return CliAfterAction.KeepOpen; } },
    { str: "burg", f: () => { this.gameService.setPlayer(new Player(new Burgundians())); return CliAfterAction.KeepOpen; } },
    { str: "burm", f: () => { this.gameService.setPlayer(new Player(new Burmese())); return CliAfterAction.KeepOpen; } },
    { str: "ce", f: () => { this.gameService.setPlayer(new Player(new Celts())); return CliAfterAction.KeepOpen; } },
    { str: "ch", f: () => { this.gameService.setPlayer(new Player(new Chinese())); return CliAfterAction.KeepOpen; } },
    { str: "cu", f: () => { this.gameService.setPlayer(new Player(new Cumans())); return CliAfterAction.KeepOpen; } },
    { str: "et", f: () => { this.gameService.setPlayer(new Player(new Ethiopians())); return CliAfterAction.KeepOpen; } },
    { str: "fr", f: () => { this.gameService.setPlayer(new Player(new Franks())); return CliAfterAction.KeepOpen; } },
    { str: "go", f: () => { this.gameService.setPlayer(new Player(new Goths())); return CliAfterAction.KeepOpen; } },
    { str: "hu", f: () => { this.gameService.setPlayer(new Player(new Huns())); return CliAfterAction.KeepOpen; } },
    { str: "inc", f: () => { this.gameService.setPlayer(new Player(new Incas())); return CliAfterAction.KeepOpen; } },
    { str: "ind", f: () => { this.gameService.setPlayer(new Player(new Indians())); return CliAfterAction.KeepOpen; } },
    { str: "it", f: () => { this.gameService.setPlayer(new Player(new Italians())); return CliAfterAction.KeepOpen; } },
    { str: "ja", f: () => { this.gameService.setPlayer(new Player(new Japanese())); return CliAfterAction.KeepOpen; } },
    { str: "kh", f: () => { this.gameService.setPlayer(new Player(new Khmer())); return CliAfterAction.KeepOpen; } },
    { str: "ko", f: () => { this.gameService.setPlayer(new Player(new Koreans())); return CliAfterAction.KeepOpen; } },
    { str: "li", f: () => { this.gameService.setPlayer(new Player(new Lithuanians())); return CliAfterAction.KeepOpen; } },
    { str: "mag", f: () => { this.gameService.setPlayer(new Player(new Magyars())); return CliAfterAction.KeepOpen; } },
    { str: "mala", f: () => { this.gameService.setPlayer(new Player(new Malay())); return CliAfterAction.KeepOpen; } },
    { str: "mali", f: () => { this.gameService.setPlayer(new Player(new Malians())); return CliAfterAction.KeepOpen; } },
    { str: "may", f: () => { this.gameService.setPlayer(new Player(new Mayans())); return CliAfterAction.KeepOpen; } },
    { str: "mo", f: () => { this.gameService.setPlayer(new Player(new Mongols())); return CliAfterAction.KeepOpen; } },
    { str: "pe", f: () => { this.gameService.setPlayer(new Player(new Persians())); return CliAfterAction.KeepOpen; } },
    { str: "po", f: () => { this.gameService.setPlayer(new Player(new Portuguese())); return CliAfterAction.KeepOpen; } },
    { str: "sa", f: () => { this.gameService.setPlayer(new Player(new Saracens())); return CliAfterAction.KeepOpen; } },
    { str: "si", f: () => { this.gameService.setPlayer(new Player(new Sicilians())); return CliAfterAction.KeepOpen; } },
    { str: "sl", f: () => { this.gameService.setPlayer(new Player(new Slavs())); return CliAfterAction.KeepOpen; } },
    { str: "sp", f: () => { this.gameService.setPlayer(new Player(new Spanish())); return CliAfterAction.KeepOpen; } },
    { str: "ta", f: () => { this.gameService.setPlayer(new Player(new Tatars())); return CliAfterAction.KeepOpen; } },
    { str: "te", f: () => { this.gameService.setPlayer(new Player(new Teutons())); return CliAfterAction.KeepOpen; } },
    { str: "tu", f: () => { this.gameService.setPlayer(new Player(new Turks())); return CliAfterAction.KeepOpen; } },
    { str: "vie", f: () => { this.gameService.setPlayer(new Player(new Vietnamese())); return CliAfterAction.KeepOpen; } },
    { str: "vik", f: () => { this.gameService.setPlayer(new Player(new Vikings())); return CliAfterAction.KeepOpen; } },

    { str: "Az", f: () => { this.gameService.setOpponent(new Opponent(new Aztecs())); return CliAfterAction.KeepOpen; } },
    { str: "Be", f: () => { this.gameService.setOpponent(new Opponent(new Berbers())); return CliAfterAction.KeepOpen; } },
    { str: "Br", f: () => { this.gameService.setOpponent(new Opponent(new Britons())); return CliAfterAction.KeepOpen; } },
    { str: "Bul", f: () => { this.gameService.setOpponent(new Opponent(new Bulgarians())); return CliAfterAction.KeepOpen; } },
    { str: "Burg", f: () => { this.gameService.setOpponent(new Opponent(new Burgundians())); return CliAfterAction.KeepOpen; } },
    { str: "Burm", f: () => { this.gameService.setOpponent(new Opponent(new Burmese())); return CliAfterAction.KeepOpen; } },
    { str: "Ce", f: () => { this.gameService.setOpponent(new Opponent(new Celts())); return CliAfterAction.KeepOpen; } },
    { str: "Ch", f: () => { this.gameService.setOpponent(new Opponent(new Chinese())); return CliAfterAction.KeepOpen; } },
    { str: "Cu", f: () => { this.gameService.setOpponent(new Opponent(new Cumans())); return CliAfterAction.KeepOpen; } },
    { str: "Et", f: () => { this.gameService.setOpponent(new Opponent(new Ethiopians())); return CliAfterAction.KeepOpen; } },
    { str: "Fr", f: () => { this.gameService.setOpponent(new Opponent(new Franks())); return CliAfterAction.KeepOpen; } },
    { str: "Go", f: () => { this.gameService.setOpponent(new Opponent(new Goths())); return CliAfterAction.KeepOpen; } },
    { str: "Hu", f: () => { this.gameService.setOpponent(new Opponent(new Huns())); return CliAfterAction.KeepOpen; } },
    { str: "Inc", f: () => { this.gameService.setOpponent(new Opponent(new Incas())); return CliAfterAction.KeepOpen; } },
    { str: "Ind", f: () => { this.gameService.setOpponent(new Opponent(new Indians())); return CliAfterAction.KeepOpen; } },
    { str: "It", f: () => { this.gameService.setOpponent(new Opponent(new Italians())); return CliAfterAction.KeepOpen; } },
    { str: "Ja", f: () => { this.gameService.setOpponent(new Opponent(new Japanese())); return CliAfterAction.KeepOpen; } },
    { str: "Kh", f: () => { this.gameService.setOpponent(new Opponent(new Khmer())); return CliAfterAction.KeepOpen; } },
    { str: "Ko", f: () => { this.gameService.setOpponent(new Opponent(new Koreans())); return CliAfterAction.KeepOpen; } },
    { str: "Li", f: () => { this.gameService.setOpponent(new Opponent(new Lithuanians())); return CliAfterAction.KeepOpen; } },
    { str: "Mag", f: () => { this.gameService.setOpponent(new Opponent(new Magyars())); return CliAfterAction.KeepOpen; } },
    { str: "Mala", f: () => { this.gameService.setOpponent(new Opponent(new Malay())); return CliAfterAction.KeepOpen; } },
    { str: "Mali", f: () => { this.gameService.setOpponent(new Opponent(new Malians())); return CliAfterAction.KeepOpen; } },
    { str: "May", f: () => { this.gameService.setOpponent(new Opponent(new Mayans())); return CliAfterAction.KeepOpen; } },
    { str: "Mo", f: () => { this.gameService.setOpponent(new Opponent(new Mongols())); return CliAfterAction.KeepOpen; } },
    { str: "Pe", f: () => { this.gameService.setOpponent(new Opponent(new Persians())); return CliAfterAction.KeepOpen; } },
    { str: "Po", f: () => { this.gameService.setOpponent(new Opponent(new Portuguese())); return CliAfterAction.KeepOpen; } },
    { str: "Sa", f: () => { this.gameService.setOpponent(new Opponent(new Saracens())); return CliAfterAction.KeepOpen; } },
    { str: "Si", f: () => { this.gameService.setOpponent(new Opponent(new Sicilians())); return CliAfterAction.KeepOpen; } },
    { str: "Sl", f: () => { this.gameService.setOpponent(new Opponent(new Slavs())); return CliAfterAction.KeepOpen; } },
    { str: "Sp", f: () => { this.gameService.setOpponent(new Opponent(new Spanish())); return CliAfterAction.KeepOpen; } },
    { str: "Ta", f: () => { this.gameService.setOpponent(new Opponent(new Tatars())); return CliAfterAction.KeepOpen; } },
    { str: "Te", f: () => { this.gameService.setOpponent(new Opponent(new Teutons())); return CliAfterAction.KeepOpen; } },
    { str: "Tu", f: () => { this.gameService.setOpponent(new Opponent(new Turks())); return CliAfterAction.KeepOpen; } },
    { str: "Vie", f: () => { this.gameService.setOpponent(new Opponent(new Vietnamese())); return CliAfterAction.KeepOpen; } },
    { str: "Vik", f: () => { this.gameService.setOpponent(new Opponent(new Vikings())); return CliAfterAction.KeepOpen; } },

    { str: "11", f: () => { console.log("colour", PlayerColourConstants.blue1); this.gameService.setPlayerColour(PlayerColourConstants.blue1); return CliAfterAction.KeepOpen; } },
    { str: "22", f: () => { this.gameService.setPlayerColour(PlayerColourConstants.red2); return CliAfterAction.KeepOpen; } },
    { str: "33", f: () => { this.gameService.setPlayerColour(PlayerColourConstants.green3); return CliAfterAction.KeepOpen; } },
    { str: "44", f: () => { this.gameService.setPlayerColour(PlayerColourConstants.yellow4); return CliAfterAction.KeepOpen; } },
    { str: "55", f: () => { this.gameService.setPlayerColour(PlayerColourConstants.cyan5); return CliAfterAction.KeepOpen; } },
    { str: "66", f: () => { this.gameService.setPlayerColour(PlayerColourConstants.pink6); return CliAfterAction.KeepOpen; } },
    { str: "77", f: () => { this.gameService.setPlayerColour(PlayerColourConstants.grey7); return CliAfterAction.KeepOpen; } },
    { str: "88", f: () => { this.gameService.setPlayerColour(PlayerColourConstants.orange8); return CliAfterAction.KeepOpen; } },
    { str: "q1", f: () => { this.gameService.setOpponentColour(PlayerColourConstants.blue1); return CliAfterAction.KeepOpen; } },
    { str: "q2", f: () => { this.gameService.setOpponentColour(PlayerColourConstants.red2); return CliAfterAction.KeepOpen; } },
    { str: "q3", f: () => { this.gameService.setOpponentColour(PlayerColourConstants.green3); return CliAfterAction.KeepOpen; } },
    { str: "q4", f: () => { this.gameService.setOpponentColour(PlayerColourConstants.yellow4); return CliAfterAction.KeepOpen; } },
    { str: "q5", f: () => { this.gameService.setOpponentColour(PlayerColourConstants.cyan5); return CliAfterAction.KeepOpen; } },
    { str: "q6", f: () => { this.gameService.setOpponentColour(PlayerColourConstants.pink6); return CliAfterAction.KeepOpen; } },
    { str: "q7", f: () => { this.gameService.setOpponentColour(PlayerColourConstants.grey7); return CliAfterAction.KeepOpen; } },
    { str: "q8", f: () => { this.gameService.setOpponentColour(PlayerColourConstants.orange8); return CliAfterAction.KeepOpen; } },
    { str: "14", f: () => { this.gameService.toggleStartPause(); return CliAfterAction.Close; } },
    { str: "gg", f: () => { this.gameService.gg(); return CliAfterAction.Close; } }
  ];

  focusOnPlayerBox(){
    var el: any = document.querySelector(".player-box");

    if(el){
      setTimeout(() => {
        el.focus();
      }, 100);
      
    }
  }

  constructor(public civService: CivService,
    public gameService: GameService,
    private renderer: Renderer2,
    private dialogRef: MatDialogRef<CliDialog>) { }

  ngOnInit(): void {
    this.setUpListener();
  }  

  setUpListener(){
    this.listener = this.renderer.listen('document', 'keypress', (evt: KeyboardEvent) => {
      console.log('keypress the document', evt);

      if(evt.keyCode == 13){
        this.dialogRef.close();
      }

      const inputChar = String.fromCharCode(evt.charCode);
      this.command += inputChar;

      console.log(this.command);
      
      this.doCommand(this.command);
    })
  }

  ngOnDestroy(){
    console.log("killing");
    this.listener();
  }

  doCommand(value) {
    console.log("doCommand", this.command);

    var match = this.commands.find(c => this.command.endsWith(c.str));

    if (match) {
      console.log("doCommand - match", match);
      var whatToDoNow = match.f();
      this.command = "";

      this.listener();
      this.setUpListener();

      if(whatToDoNow == CliAfterAction.Close){
        this.dialogRef.close();
      }
    }
  }
}

export enum CliAfterAction {
  Close,
  KeepOpen
}