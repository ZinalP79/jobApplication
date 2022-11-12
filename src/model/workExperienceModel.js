var mongoose = require('mongoose');
// Setup schema
var jobSchema = mongoose.Schema({
    company: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        default: ''
    },
    from: {
        type: Date,
        default: null
    },
    to: {
        type: Date,
        default: null
    }


}, { timestamps: true });

var WorkExperience = mongoose.model('workExperience', jobSchema);
module.exports = WorkExperience