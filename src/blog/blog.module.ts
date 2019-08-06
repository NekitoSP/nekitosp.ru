import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { WorkItemComponent } from 'src/work-item/work-item.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

@NgModule({
    declarations: [
        BlogComponent,
        WorkItemComponent
    ],
    imports: [
        MarkdownModule.forRoot({
            markedOptions: {
              provide: MarkedOptions,
              useValue: {
                gfm: true,
                tables: true,
                breaks: true,
                pedantic: false,
                sanitize: false,
                smartLists: true,
                smartypants: false,
              },
            },
          }),
        BrowserModule,
        BlogRoutingModule
    ],
    providers: [],
    bootstrap: [BlogComponent]
})
export class BlogModule { }
