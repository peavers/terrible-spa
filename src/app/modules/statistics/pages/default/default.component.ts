import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs';
import Utils from '../../../../shared/utils/utils.component';
import { StatisticsService } from '../../../../core/services/statistics.service';
import { MediaFile } from '../../../../core/domain/modules';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: Utils.fadeAnimation(),
})
export class DefaultComponent implements OnInit {
  constructor(private statisticsService: StatisticsService) {}

  totalMediaFileCount: Observable<number> = new Observable<number>();

  totalDirectorySize: Observable<number> = new Observable<number>();

  ignoredFiles: Observable<MediaFile[]> = new Observable<MediaFile[]>();

  ngOnInit() {
    this.totalMediaFileCount = this.statisticsService.getTotalMediaFileCount();
    this.totalDirectorySize = this.statisticsService.getTotalDirectorySize();
    this.ignoredFiles = this.statisticsService.getIgnoredFiles();
  }

  isEmpty(input): boolean {
    return Utils.isEmpty(input);
  }
}
