// IMPORTAÇÔES
import { beforeEach, it, describe, expect, vi} from "vitest";
import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed} from "@angular/core/testing";
import { Dialog } from "@angular/cdk/dialog";
import { By } from "@angular/platform-browser";

import { CoursesCardList } from "./courses-card-list";
import { Course } from "../model/course";
import { MOCK_COURSES } from "../testing/testing-data";
import { CoursesDialog } from "../courses-dialog/courses-dialog";

// Estrutura básica do teste (Esqueleto)
describe("Testes de Integração do courses-card-list", () => { // Agrupa os testes relacionados ao componente e à integração.
    let component: CoursesCardList; // Guardará a instância do componente testado.
    let fixture: ComponentFixture<CoursesCardList>; // Controlará o componente e seu ciclo de vida no teste.
    let de: DebugElement; // Permitirá consultar elementos do template usando as ferramentas do Angular.
    let courses: Course[] // Guardará a lista de cursos que será passada ao componente.

    const dialogMock = { open: vi.fn() }; // Simula o serviço Dialog e permite observar chamadas a open.

    beforeEach(async () => { // Executa esta preparação antes de cada teste da suíte.
        courses = MOCK_COURSES; // Usa os cursos de exemplo definidos nos dados de teste.

        await TestBed.configureTestingModule({ // Configura o ambiente de teste do Angular.
            imports: [CoursesCardList, CoursesDialog] // Adiciona os CoursesCardList e CoursesCardList ao ambiente de teste
        }).compileComponents(); // Compila o componente e seu template antes de criá-lo

        fixture = TestBed.createComponent(CoursesCardList); // Cria o component dentro do ambiente de teste.
        component = fixture.componentInstance; // Obtém a instância da classe do componente.
        de = fixture.debugElement; // Obtém a representação Angular da árvore do template.
    })

    it('Exibir a lista de cursos',() => {
        // Arrange
        fixture.componentRef.setInput('courses', MOCK_COURSES);

        // Act
        fixture.detectChanges();

        // Assert
        const cards = de.queryAll(By.css('.course-card'));

        expect(cards).toHaveLength(MOCK_COURSES.length);
        expect(de.nativeElement.textContent).toContain("Beginner Course");
        expect(de.nativeElement.textContent).toContain("Advanced Course");
    });

    it('Exibir uma mensagem quando não houver cursos', () => {
        // Arrange
        fixture.componentRef.setInput('courses', [])

        // Act
        fixture.detectChanges();

        // Assert
        const message = de.query(By.css('.no-courses'));
        
        expect(message.nativeElement.textContent).toContain('No courses found');
    });

    it('Abrir o dialogo ao clicar no botão "Edit"', () => {
        // Arrange
        const course = MOCK_COURSES
        fixture.componentRef.setInput('courses', [courses]);
        fixture.detectChanges();

        // Act
        de.query(By.css('edit-btn')).nativeElement.click();

        // Assert
        expect(dialogMock.open).toHaveBeenCalledWith(CoursesDialog, {
            width: '500px',
            data: { course },
        })
    })
})