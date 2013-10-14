/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Doctor = mongoose.model('Doctor'),
    _ = require('underscore');


/**
 * Find doctor by id
 */
exports.doctor = function(req, res, next, id) {
    Doctor.load(id, function(err, doctor) {
        if (err) return next(err);
        if (!doctor) return next(new Error('Failed to load doctor ' + id));
        req.doctor = doctor;
        next();
    });
};

/**
 * Create a doctor
 */
exports.create = function(req, res) {
    var doctor = new Doctor(req.body);
    doctor.user = req.user;

    doctor.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                doctor: doctor
            });
        } else {
            res.jsonp(doctor);
            console.log(res.jsonp);
        }
    });
};

/**
 * Update a doctor
 */
exports.update = function(req, res) {
    var doctor = req.doctor;

    doctor = _.extend(doctor, req.body);

    doctor.save(function(err) {
        res.jsonp(doctor);
    });
};

/**
 * Delete an doctor
 */
exports.destroy = function(req, res) {
    var doctor = req.doctor;

    doctor.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(doctor);
        }
    });
};

/**
 * Show an doctor
 */
exports.show = function(req, res) {
    res.jsonp(req.doctor);
};

/**
 * List of Doctors
 */
exports.all = function(req, res) {
    Doctor.find().sort('-created').populate('user', 'name username').exec(function(err, doctors) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(doctors);
        }
    });
};