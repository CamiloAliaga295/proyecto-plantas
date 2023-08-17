const request = require('supertest');
const server= require('../index')

describe("Pruebas rutas Proyecto plantas", ()=>{

    it('debe responder con "Servidor en express" en la ruta raíz', async () => {
        const response = await request(server).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Servidor en express');
      });


    it("agregar un usuario y devuelve un 200", async()=>{
        const nuevoUsuario={
            "id": 5,
            "nombre":"Nuevo cafe",
            "email":"nuevo@email.com",
            "direccion":"nueva direccion",
            "password": "nueva contraseña"
        };
        const {statusCode}= await request(server).post("/usuarios").send(nuevoUsuario)
        expect(statusCode).toBe(200)
    })

    it("obteniendo Objeto", async()=>{
        const response=await request(server).get("/usuarios").send()
        expect(response.body).toBeInstanceOf(Object);
    })


})