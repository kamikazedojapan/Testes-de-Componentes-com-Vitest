// Importações
import { describe, it, expect, beforeEach, vi} from "vitest"
import { TabsComponent } from './tabs'
import { TabData } from './tabs.model';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { MOCK_TABS } from '../testing/testing-data'

// Estrutura básica dos testes
describe('TabsComponent Test', () => {
    let component: TabsComponent;
    let fixture: ComponentFixture<TabsComponent>;
    let de: DebugElement;
    let mockTabs: TabData[] = MOCK_TABS // Atribui os dados do MOCK_TABS (advanced, beginner)

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TabsComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(TabsComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        fixture.componentRef.setInput("tabs", mockTabs);
        fixture.detectChanges();
    })
})