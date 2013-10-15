/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Doctor Schema
 */
var DoctorSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String, default: '',trim: true
    },
    title:{
        type: String, default:'', trim: true
    },
    city: {
        type: String, default:'', trim: true
    },
    speciality:{
        type: String, default:'', trim: true
    },
    hospital:{
        type: String, default:'', trim: true
    },
    hospital_address:{
        type: String, default:'', trim: true
    },
    clinic_address:{
        type: String, default:'', trim: true
    },
    phone_number:{
        type: String, default:'', trim: true
    },
    user: {
        type: Schema.ObjectId, ref: 'User'
    }
});

/**
 * Validations
 */
DoctorSchema.path('name').validate(function(name) {
    return name.length;
}, 'Title cannot be blank');

/**
 * Statics
 */
DoctorSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username').exec(cb);
    }
};

mongoose.model('Doctor', DoctorSchema);