import { Component, Input } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `   
  
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <h5>Date: {{event.date}}</h5>
        <h5>Time: {{event.time}}</h5>
        <h5>Price: \${{ event.price }}</h5>
        <h5 class="text-color">Location: {{event.location.city}}</h5>
    </div>
    
    `,
    //You can provide styles in this way or using stylesUrl to point to .css files
    styles: [
        `
            .text-color {
                color: #b37d8b
            }
        `
    ]
})

export class EventThumbnailComponent {
    //Input decorator tells Angular this event property will be passed in from another component
    @Input() event: any

}