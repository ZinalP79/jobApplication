var mongoose = require('mongoose');
// Setup schema
var jobSchema = mongoose.Schema({
    ssc: {
        university: {
            type: String,
            default: ''
        },
        year: {
            type: String,
            default: ''
        },
        percentage: {
            type: String,
            default: ''
        }
    },
    hsc: {
        university: {
            type: String,
            default: ''
        },
        year: {
            type: String,
            default: ''
        },
        percentage: {
            type: String,
            default: ''
        }
    },
    graduation: {
        university: {
            type: String,
            default: ''
        },
        year: {
            type: String,
            default: ''
        },
        percentage: {
            type: String,
            default: ''
        }
    },
    masters: {
        university: {
            type: String,
            default: ''
        },
        year: {
            type: String,
            default: ''
        },
        percentage: {
            type: String,
            default: ''
        }
    },

}, { timestamps: true });

var Education = mongoose.model('education', jobSchema);
module.exports = Education