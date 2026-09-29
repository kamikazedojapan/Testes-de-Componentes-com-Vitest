// Importações (Vitest e Component)
import { describe, it, expect, beforeEach } from "vitest";
import { HelloWorld } from "./hello-world"

// Importações do TestBed (Pista/Ambiente de teste)
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { DebugElement } from "@angular/core";

// Estrutura básica do teste (Esqueleto)
describe("HelloWorld Test", () => { // Suíte de testes

    // Criação das variáveis de teste
    let fixture: ComponentFixture<HelloWorld>; // Representação do componente de teste
    let de: DebugElement; // Simular o comportamento do Angular com o componente
    let el: HTMLElement; // Obter o elemento HTML (h1)
    let component: HelloWorld; // Obter o componente original

    beforeEach(() => { // O que sera executado antes dos casos de testes
        TestBed.configureTestingModule({ // Configurar o ambiente de testes
            imports: [HelloWorld] // Importar o componente no ambiente de teste
        }).compileComponents(); // Compilar o componente importado (execução)

        fixture = TestBed.createComponent(HelloWorld); // Criação do componente simulado no ambiente de teste
        de = fixture.debugElement // Simular a execução do componente no Angular
        el = de.nativeElement; // Obter elementos HTML (Exemplo: h1)
        component = fixture.componentInstance; // Criar uma instancia do componente
        fixture.detectChanges(); // Detectar mudanças no componente ou alteração de estado
    })

    it('should create the component', () => { // O Componente deve ser criado corretamente
        expect(fixture.componentInstance).toBeDefined(); // Espero que o componente seja criado corretamente
    })

    it('should display the message', () => { // A mensagem correta deve ser exibida na tela
        const h1 = el.querySelector("h1"); // Obtendo a tag h1 do documento HTML
        expect(h1).toBeDefined(); // Espero que a tag h1 seja criada corretamente
        expect(h1?.textContent).toEqual(component.message) // Espero que a mensagem contida no h1 seja "Hello World"
    })
})