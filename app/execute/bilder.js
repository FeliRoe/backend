//Aufgabe Nr.1 Punkt 10!
const Bilder = require('../datenstruktur/bilder');

app.post("/bilder", upload.single("image"), (req, res) => {
    fs.writeFile(`uploads/${req.file.originalname}`, req.file.buffer, (err) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send("Bild erfolgreich hochgeladen");
    });
  });

app.delete('/bilder', async (req, res) => {
    try {
    const incident = await Incident.findById(req.body.id)
    incident.image = undefined
    incident.save()
    res.send()
    } catch (e) {
    res.status(400).send(e)
    }
    });

app.get('/:id/bilder', async (req, res) => {
        try{
        const incident = await Incident.findById(req.params.id)
        if (!incident || !incident.image) {
        throw new Error()
        }
        //response header, use set
        res.set('Content-Type', 'image/png')
        res.send(incident.image)
        } catch(e) {
        res.status(404).send()
        }
        });

  