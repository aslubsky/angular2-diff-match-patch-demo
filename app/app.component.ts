import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div>
Some diff:
        <pre class="textdiff" line-diff [left]="leftContent" [right]="rightContent"></pre>
</div>`
})
export class AppComponent implements OnInit {
    public leftContent: string;
    public rightContent: string;

    public ngOnInit() {
        this.leftContent = `I am the very model of a modern Major-General,
I've information vegetable, animal, and mineral,
I know the kings of England, and I quote the fights historical,
From Marathon to Waterloo, in order categorical.`;

        this.rightContent = `I am the very model of a modern Major-General,
My animation's comical, unusual, and whimsical,
I know the kings of England, and I quote the fights historical,
From wicked puns and stupid jokes to anvils that drop on your head.`;
    }
}