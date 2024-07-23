import request from 'supertest';
import app from '../app.js';
import assert from 'assert';

describe('Pruebas de la aplicación', function() {
    this.timeout(5000); 

    it('Debería mostrar la página de inicio', function(done) {
        request(app)
            .get('/')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('Debería registrar un nuevo usuario', function(done) {
        request(app)
            .post('/validar')
            .send({
                ced: '00002',
                nom: 'yuandaa',
                apell: 'yPedrez',
                pass: 'passi',
                correo: 'yjan.pe@exadmple.com'
            })
            .expect(200)
            .expect(function(res) {
                assert.ok(res.text.includes('Usuario registrado con éxito.'));
            })
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });

    it('Debería iniciar sesión correctamente', function(done) {
        request(app)
            .post('/login')
            .send({
                username: '00002',
                password: 'passi'
            })
            .expect(200)
            .expect(function(res) {
                assert.ok(res.text.includes('Inicio de sesión exitoso'));
            })
            .end(function(err, res) {
                if (err) return done(err);
                done();
            });
    });
});
