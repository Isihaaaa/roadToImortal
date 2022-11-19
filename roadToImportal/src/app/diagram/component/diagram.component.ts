import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiPlayerData} from "../Api/Model/IApiPlayerData";
import {IPlayerData} from "../model/IPlayerData";

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
}
