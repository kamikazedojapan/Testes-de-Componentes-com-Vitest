// Importações
import { describe, it, expect, beforeEach, vi} from "vitest"
import { TabsComponent } from './tabs'
import { TabData } from './tabs.model';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import { MOCK_TABS } from '../testing/testing-data'
import { By } from "@angular/platform-browser";

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

    it('Should create the tabs component', () => {
        expect(component).toBeDefined();
    });
    it('Should render the correct number of tab buttons', () => {
        const buttons = de.queryAll(By.css(".tab-link"));
        expect(buttons.length).toBe(2);
    });
    it('Should apply the activate class to the selected tab', () => {
        fixture.componentRef.setInput("activeTab", "advanced");
        fixture.detectChanges();
        const button = de.query(By.css(".tab-link:last-child"));
        expect(button.nativeElement.classList).toContain("active");
    });
    it("Should emit 'activateTab' when a tab clicked", () => {
        const button = de.query(By.css(".tab-link:last-child"));
        button.nativeElement.click();
        fixture.detectChanges();
        expect(component.activeTab()).toBe("advanced");
    });
})