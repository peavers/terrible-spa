import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MediaList } from '../../../../core/domain/modules';
import { MediaListService } from '../../../../core/services/media-list.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-library',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fade', [transition('void => *', [style({ opacity: 0 }), animate(150, style({ opacity: 1 }))])]),
  ],
})
export class ListComponent implements OnInit {
  mediaList: Observable<MediaList> = new Observable<MediaList>();

  constructor(private route: ActivatedRoute, private mediaListService: MediaListService) {}

  ngOnInit() {
    this.route.params.subscribe((response) => {
      this.mediaList = this.mediaListService.findById(response.id);
    });
  }
}
