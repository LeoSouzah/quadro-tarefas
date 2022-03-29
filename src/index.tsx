import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from 'miragejs';

createServer({
    models: {
        tarefas: Model
    },
    routes() {

        this.get('/api/tarefas', (schema, request) => {
            return schema.db.tarefas
        })

        this.post('/api/tarefas', (schema, resquest) => {
            const data = JSON.parse(resquest.requestBody);

            return schema.db.tarefas.insert(data);
        })

        this.put('/api/tarefas', (schema, request) => {
            const data = JSON.parse(request.requestBody);

            return schema.db.tarefas.update(data.id, data,);
            
            
        })

        this.delete('/api/tarefas', (schema, request) => {
            const data = JSON.parse(request.requestBody);

            schema.db.tarefas.remove(data.id);
            return data;
            
        })

    }
})

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
