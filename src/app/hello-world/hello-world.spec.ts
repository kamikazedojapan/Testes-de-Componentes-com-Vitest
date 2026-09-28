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

    })

    it('should create the component', () => { // O Componente deve ser criado corretamente

    })

    it('should display the message', () => { // A mensagem correta deve ser exibida na tela

    })
})