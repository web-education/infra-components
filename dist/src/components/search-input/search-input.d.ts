import { Renderer, ChangeDetectorRef, ElementRef, OnInit, OnDestroy, DoCheck } from '@angular/core';
export declare class SearchInput implements OnInit, OnDestroy, DoCheck {
    private _elRef;
    private _cdRef;
    private _renderer;
    constructor(_elRef: ElementRef, _cdRef: ChangeDetectorRef, _renderer: Renderer);
    private delay;
    private _delay;
    private onChange;
    private searchBox;
    private searchTerms;
    private observable;
    private observer;
    private evalAttributes();
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    search(str: string): void;
}
