"use strict";
module.exports = class offerFormatter {
    login(req) {
        let form_data = {
            email: req.body.email,
            password: req.body.password
        };
        return form_data;
    }

    addStudent(req) {
        let form_data = {
            register_number: req.body.register_number,
            first_name: req.body.first_name,
            middle_name: req.body.middle_name,
            last_name: req.body.last_name,
            birth_date: req.body.birth_date,
            birth_place: req.body.birth_place,
            cast: req.body.cast,
        };
        return form_data;
    }
}