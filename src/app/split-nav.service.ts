import { Injectable } from '@angular/core';
import { Nav } from 'ionic-angular';

@Injectable()
export class SplitNavService {
    sideNavController: Nav;
    mainNavController: Nav;

    constructor() {}

    registerNavControllers(sideNavController, mainNavController) {
        this.sideNavController = sideNavController;
        this.mainNavController = mainNavController;
    }
}