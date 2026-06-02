const express = require('express'); 
const mysql = require('mysql2/promise'); 
const cors = require('cors'); 
const app = express(); 

app.use(cors()); 
app.use(express.json()); 

const dbConfig = { 
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'crud_funcionarios' 
}; 

const db = mysql.createPool(dbConfig); 

// GET /api/funcionarios 
app.get('/api/funcionarios', async (req, res) => { 
    try { 
        const [rows] = await db.execute('SELECT * FROM funcionarios ORDER BY id DESC'); 
        res.json(rows); 
    } catch (error) { 
        res.status(500).json({ error: error.message }); 
    } 
}); 

// POST /api/funcionarios 
app.post('/api/funcionarios', async (req, res) => { 
    try { 
        const { nome, funcao, salario } = req.body; 
        
        if (!nome || !funcao || !salario) { 
            return res.status(400).json({ error: 'Campos obrigatórios' }); 
        } 
        
        const [result] = await db.execute( 
            'INSERT INTO funcionarios (nome, funcao, salario) VALUES (?, ?, ?)', 
            [nome, funcao, parseFloat(salario)] 
        ); 
        
        res.json({ success: true, id: result.insertId }); 
    } catch (error) { 
        res.status(500).json({ error: error.message }); 
    }
});

// Inicializar o servidor (opcional, caso precise)
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});