
import { Component, OnInit } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

//CIDER
@Component({
    selector: 'favs',
    templateUrl: './fav.component.html',
    styles: [
        `
        ul{list-style-type: none;} 
        li{float:left;width:150px;height:50px;background:#f0f0f0;margin:2px;cursor:pointer;padding:2em 0.5em}
        li:hover{background:#d0d0d0;}
        `
    ]
})
export class favsComponent implements OnInit {
    private title: string = "Favourites Tools";
    data?;
    showPop = false;
    radioSelected: any;
    NewFolderList:any[] = [];
    OldFolderList:any[] = [];
    showPopFn = function (fav, i) {
        fav.showPop = !fav.showPop;
        this.btnInfo = '';
    }
    addToFolder = function (foldertype, fav) {
        var f = foldertype + 'FolderList';

//fetch array dynamically on-the-fly and push
        if(!this[f].length){
            this[f].push(fav);
        }else{
            if(this[f].indexOf(fav) < 0){
                this[f].push(fav);
            }
        }
        console.log(this[f]);

        // if (foldertype === 'New') {
        //     if (!this.NewFolderList.length) {
        //         this.NewFolderList.push(fav);
        //     } else {
        //         if (this.NewFolderList.indexOf(fav) > (-1)) {
        //             this.NewFolderList.push(fav);
        //         }
        //     }
        // } else {
        //     if (!this.OldFolderList.length) {
        //         this.OldFolderList.push(fav);
        //     } else {
        //         if (this.OldFolderList.indexOf(fav) > (-1)) {
        //             this.OldFolderList.push(fav);
        //         }
        //     }
        // }

    }

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.data = this.route.snapshot.data.test;
        console.log(this.data);

    }
}