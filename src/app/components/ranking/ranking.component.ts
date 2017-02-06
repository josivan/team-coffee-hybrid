import { Component, Input } from '@angular/core';
import { Ranking } from './ranking';

@Component({
    selector: 'ranking',
    templateUrl: './ranking.template.html'
})
export class RankingComponent {
    @Input()
    rankingList: Ranking;
}