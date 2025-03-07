const school = require('../Models/school');
const haversine = require('haversine-distance');

const addSchool = async(req, res) => {
   
        const { name, address, latitude, longitude } = req.body;

        if (!name || !address || latitude == null || longitude == null) {
            return res.status(400).send({ message: 'information is not Valid'});
        }


        try {
            const existingSchool = await school.findOne({where: {name: name}});

            if (existingSchool) {
                return res.status(400).json({
                    success: false,
                    message: 'College with same name already exist'
                });
            }

            const newSchool = await school.create({ name, address, latitude, longitude });
            res.status(201).send(newSchool);

        }  catch(error) {
            res.status(500).send('erro adding school', error);
        }
}

const listOfSchools = async(req, res) => {

    const { latitude, longitude} = req.query;

    if (latitude == null || longitude == null) {
        return res.status(400).send({message: 'Value of latitude or longitude not given'});
    }

    try {

        const schools = await school.findAll();
        const userLocation =  { latitude: parseFloat(latitude), longitude: parseFloat(longitude) };

        const schoolWithDistance = schools.map(school => {
            const schoolLocation = { latitude: school.latitude, longitude: school.longitude };
            const distance = haversine(userLocation, schoolLocation)
            return { ...school.toJSON(), distance };
        })

        schoolWithDistance.sort((a, b) => a.distance -b.distance);
        res.status(200).send(schoolWithDistance);

    } catch (err) {
        res.status(500).send({ message: 'internal server error', err})
    }
}



module.exports = { addSchool, listOfSchools }; 