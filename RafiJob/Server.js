const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8880; 

app.use(cors());

app.get('/api/jobs', (req, res) => {
    const filePath = path.join(__dirname, 'job_list.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).json({ error: "Failed to read data" });
        }

        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (parseError) {
            console.error("Error parsing JSON:", parseError);
            res.status(500).json({ error: "Invalid JSON format" });
        }
    });
});

app.use(express.static(path.join(__dirname, '.')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Job Server running at http://localhost:${PORT}`);
    console.log(`API Endpoint available at http://localhost:${PORT}/api/jobs`);
});