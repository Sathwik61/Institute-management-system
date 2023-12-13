const hosteller = require('../models/hostelSchema');


const hostellerRegister = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        const existingStudent = await hosteller.findOne({
            rollNum: req.body.rollNum,
            hostelName: req.body.hostelName,
        });

        if (existingStudent) {
            res.status(400).json({ message: 'Roll Number already exists' });
        } else {
            const hostelStudent = new hosteller({
                name: req.body.name,
                rollNum: req.body.rollNum,
                password: hashedPass,
                hostelName: req.body.hostelName,
            });

            let result = await hostelStudent.save();

            result.password = undefined; 
            res.status(201).json(result);
        }
    } catch (err) {
        console.error('Error registering hostel student:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports=hostellerRegister;