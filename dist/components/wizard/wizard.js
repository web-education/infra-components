import { Component, Input, Renderer, ContentChildren, ElementRef } from '@angular/core';
import { LabelsService } from '../../services';
var Step = (function () {
    function Step() {
        this.hasError = false;
        this.isFinished = false;
    }
    Step.prototype.test = function () {
        return "TEST !! " + name;
    };
    return Step;
}());
export { Step };
Step.decorators = [
    { type: Component, args: [{
                selector: 'step',
                template: "<ng-content></ng-content>",
                styles: ["\n        :host {\n            display: none;\n            overflow: auto;\n            padding : 1em;\n        }\n        :host.active {\n            display: block;\n        }\n    "]
            },] },
];
Step.ctorParameters = function () { return []; };
Step.propDecorators = {
    'name': [{ type: Input },],
    'isActived': [{ type: Input },],
};
var Wizard = (function () {
    function Wizard(labelsService, renderer, ref) {
        this.labelsService = labelsService;
        this.renderer = renderer;
        this.ref = ref;
        this.activeStep = 0;
    }
    Wizard.prototype.ngAfterContentInit = function () {
        if (this.steps.length == 0)
            throw new Error("<wizard> component musts nest at least 1 <step> compoent");
    };
    Wizard.prototype.ngOnDestroy = function () {
    };
    Wizard.prototype.labels = function (label) {
        return this.labelsService.getLabel(label);
    };
    Wizard.prototype.cancel = function () { };
    Wizard.prototype.previousStep = function () {
        if (this.activeStep > 0) {
            this.steps.toArray()[this.activeStep].isActived = false;
            this.steps.toArray()[this.activeStep - 1].isActived = true;
            this.activeStep--;
        }
    };
    Wizard.prototype.nextStep = function () {
        if (this.activeStep < this.steps.length - 1) {
            this.steps.toArray()[this.activeStep].isActived = false;
            this.steps.toArray()[this.activeStep + 1].isActived = true;
            this.activeStep++;
        }
    };
    Wizard.prototype.canDoNext = function () {
        return true;
    };
    Wizard.prototype.finish = function () { };
    Wizard.prototype.canDoFinish = function () {
        return true;
    };
    return Wizard;
}());
export { Wizard };
Wizard.decorators = [
    { type: Component, args: [{
                selector: 'wizard',
                template: "\n    <nav class=\"steps-progress-menu\">\n        <ul>\n             <li *ngFor=\"let step of steps\" \n                [class.active]=\"step.isActived\"\n                [class.finish]=\"step.isFinished\">\n                {{step.name}}\n            </li>\n        </ul>\n    </nav>\n    <section class=\"steps-content\">\n        <ng-content select=\"step\"></ng-content>\n        <nav class=\"steps-nav-button\">\n            <button class=\"cancel\" (click)=\"cancel()\" [title]=\"labels('cancel')\">\n                {{ labels('cancel') }}\n            </button>\n            <button class=\"previous\" (click)=\"previousStep();\" \n                *ngIf=\"activeStep > 0\" \n                [title]=\"labels('previous')\">\n                {{ labels('previous') }}\n            </button>\n            <button class=\"next\" (click)=\"nextStep();\" \n                *ngIf=\"activeStep < steps.length - 1\" ng-disabled=\"!canDoNext()\"\n                [title]=\"labels('next')\">\n                {{ labels('next') }}\n            </button>\n            <button class=\"finish\" \n                *ngIf=\"activeStep === steps.length - 1\" \n                (click)=\"finish()\" ng-disabled=\"!canDoFinish()\"\n                [title]=\"labels('finish')\">\n                {{ labels('finish') }}\n            </button>\n        </nav>\n    </section>\n    ",
                styles: ["\n        :host {\n            display: block;\n            overflow: auto;\n            background-color: #ccc;\n        }\n        section.steps-content {\n            float: right;\n            width: 75%;\n            background: #fff;\n        }\n        nav.steps-progress-menu {\n            float: left;\n            width: 24%;\n            background-color: transparent;\n        }\n        nav.steps-progress-menu ul li {\n            list-style-type: none;\n            padding: 7px;\n        }\n        nav.steps-progress-menu ul li.active,\n        nav.steps-progress-menu ul li.finish {\n            font-weight: bold;\n        }\n        nav.steps-progress-menu ul li.finish {\n            color: green;\n        }\n        nav.steps-nav-button {\n            text-align : right;\n        }\n    "]
            },] },
];
Wizard.ctorParameters = function () { return [
    { type: LabelsService, },
    { type: Renderer, },
    { type: ElementRef, },
]; };
Wizard.propDecorators = {
    'steps': [{ type: ContentChildren, args: [Step,] },],
};
//# sourceMappingURL=wizard.js.map