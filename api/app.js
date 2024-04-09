const express = require('express');
const fs = require('fs');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const PORT = require('./port')
const server = express();



// Define the route for '/api/items/{version}/{itemName}'
server.get('/api/items/:version/:itemName', (req, res) => {
    const version = req.params.version;
    const itemName = req.params.itemName.toLowerCase();

    // Read Minecraft items data from the JSON file based on the requested version
    const versionFolderPath = path.join(__dirname, `Data/${version}`);
    const filePath = path.join(versionFolderPath, 'items.json');

    if (fs.existsSync(filePath)) {
        const minecraftData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const item = minecraftData.find(item => item.name === itemName);

        if (item) {
            // Set the proper content type and send JSON with indentation
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(item, null, 2));
        } else {
            res.status(404).json({ message: "Item not found" });
        }
    } else {
        res.status(404).json({ message: "Version not found" });
    }
});

// Define the route for '/api/blocks/{version}/{blockName}'
server.get('/api/blocks/:version/:blockName', (req, res) => {
    const version = req.params.version;
    const blockName = req.params.blockName.toLowerCase();

    // Read Minecraft blocks data from the JSON file based on the requested version
    const versionFolderPath = path.join(__dirname, `Data/${version}`);
    const filePath = path.join(versionFolderPath, 'blocks.json');

    if (fs.existsSync(filePath)) {
        const minecraftBlocks = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const block = minecraftBlocks.find(block => block.name === blockName);

        if (block) {
            // Set the proper content type and send JSON with indentation
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(block, null, 2));
        } else {
            res.status(404).json({ message: "Block not found" });
        }
    } else {
        res.status(404).json({ message: "Version not found" });
    }
});

// Serve Swagger UI
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(require('../swagger.json')));

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
