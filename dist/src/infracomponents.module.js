var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import './rxjs-extensions';
import { NgModule } from '@angular/core';
import * as deps from './module.dependencies';
import { DynamicModuleImports, LabelsService } from './services';
var InfraComponentsModule = InfraComponentsModule_1 = (function () {
    function InfraComponentsModule() {
    }
    InfraComponentsModule.forRoot = function (providers) {
        var usedProviders = [
            providers['DynamicModuleImports'] || DynamicModuleImports,
            providers['LabelsService'] || LabelsService
        ];
        return {
            ngModule: InfraComponentsModule_1,
            providers: usedProviders
        };
    };
    return InfraComponentsModule;
}());
InfraComponentsModule = InfraComponentsModule_1 = __decorate([
    NgModule({
        imports: deps.imports,
        declarations: deps.declarations,
        providers: [],
        exports: deps.exportList
    }),
    __metadata("design:paramtypes", [])
], InfraComponentsModule);
export { InfraComponentsModule };
var InfraComponentsModule_1;
//# sourceMappingURL=infracomponents.module.js.map