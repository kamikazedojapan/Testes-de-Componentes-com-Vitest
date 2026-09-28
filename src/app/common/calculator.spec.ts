//IMPORTAÇÕES
import { describe, it, expect, vi } from 'vitest';
import { calculator } from './calculator';

//CRIAÇÃO DO CASO DE TESTE
describe("Test Calculator", () => {

    it.skip("Should add two numbers", () => {
        const result = calculator.add(6,6);
        expect(result).toBe(12);
    });

    it("shows how mocking work", ()=>{
        const spy = vi.spyOn(calculator,"add").mockReturnValue(10);
        const result = calculator.add(2,8);
        
        expect(result).toBe(10);
        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(2,8);
    })

})
