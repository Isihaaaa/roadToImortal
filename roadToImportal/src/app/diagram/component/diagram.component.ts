import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IApiPlayerData} from "../api/Model/IApiPlayerData";

import {IPlayerData} from "../model/IPlayerData";
import {ChartConfiguration} from "chart.js";


@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {

  private _apiBaseUrl = 'https://api.opendota.com/api/players/'
  private _playerId = '61293187';
  public player: IPlayerData = {
    profile:{
      account_id: 0,
      personaname: 'string',
      name: 'string',
      plus: false,
      cheese: 0,
      steamid: 'string',
      avatar: 'string',
      avatarmedium: 'string',
      avatarfull: 'string',
      profileurl: 'string',
      last_login: 'string',
      loccountrycode: 'string',
      is_contributor: false,
      is_subscriber: false
    },
    solo_competitive_rank: 0,
    mmr_estimate: {estimate:1},
    leaderboard_rank: 0,
    competitive_rank: 0,
    rank_tier: 0,
  };
  public stringifyPlayer = '';
  public lineChartData:ChartConfiguration<'line'>['data']= {
    // ezek a horizpntális vonalon megjelenő labelek hetes bontás esetén a hét napjai. éves bontás esetén a hónapok neve
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
    ],
    datasets:[{
      // adott időszakra az mrr pontok
      data:[65, 59, 80, 81, 56, 55, 40],
      // a line labelje
      label: 'Series A',
      fill: true,
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)'
    }]

  };
  public lineChartOptions: ChartConfiguration<'line'>['options']= {
    responsive: true
  };
  public lineChartLegend = true;

  constructor(private _http: HttpClient) {
  }

  ngOnInit(): void {
    this.getPlayer(this._playerId)
  }


  public getPlayer(id: string) {
    this._http.get<IApiPlayerData>(`${this._apiBaseUrl}${id}`).subscribe(result => {
      if (result) {
        this.player = result;
      }
      console.log(JSON.stringify(this.player))
    })
  }

  public getMatches(id: string){
    //https://api.opendota.com/api/players/{account_id}/matches


  }
}
