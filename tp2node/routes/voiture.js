const express = require('express');
const router = express.Router();

let voitures = [
    { id: 1, name: 'clio' },
    { id: 2, name: 'karhba' },
    { id: 3, name: '205' }
];

router.post('/', (req, res) => {
    const nouvelleVoiture = req.body;
    if (nouvelleVoiture.id && nouvelleVoiture.name) {
        voitures.push(nouvelleVoiture);
        res.status(201).json(nouvelleVoiture);
    } else {
        res.status(400).json({ error: 'Invalid data' });
    }
});

router.get('/', (req, res) => {
    res.status(200).json(voitures);
});

router.get('/:id', (req, res) => {
    const voitureId = parseInt(req.params.id, 10);
    const voiture = voitures.find(v => v.id === voitureId);
    if (voiture) {
        res.status(200).json(voiture);
    } else {
        res.status(404).json({ error: 'Voiture not found' });
    }
});

router.put('/:id', (req, res) => {
    const voitureId = parseInt(req.params.id, 10);
    const voiture = voitures.find(v => v.id === voitureId);
    if (voiture) {
        const updatedData = req.body;
        if (updatedData.name) {
            voiture.name = updatedData.name;
            res.status(200).json(voiture);
        } else {
            res.status(400).json({ error: 'Invalid data' });
        }
    } else {
        res.status(404).json({ error: 'Voiture not found' });
    }
});

router.delete('/:id', (req, res) => {
    const voitureId = parseInt(req.params.id, 10);
    const voitureIndex = voitures.findIndex(v => v.id === voitureId);
    if (voitureIndex !== -1) {
        voitures.splice(voitureIndex, 1);
        res.status(200).json({ message: 'Voiture deleted' });
    } else {
        res.status(404).json({ error: 'Voiture not found' });
    }
});

module.exports = router;
