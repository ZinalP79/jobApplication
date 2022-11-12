var mongoose = require('mongoose');
const { Schema } = mongoose;
// Setup schema
var jobSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: String,
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    contact: {
        type: String,
        required: true
    },
    educationId: {
        type: Schema.Types.ObjectId,
        ref: 'education'
    },
    workExperienceId: [{
        type: Schema.Types.ObjectId,
        ref: 'workExperience'
    }],
    knownLanguage: {
        english: {
            read: {
                type: Boolean,
                default: false
            },
            write: {
                type: Boolean,
                default: false
            },
            speak: {
                type: Boolean,
                default: false
            }
        },
        gujarati: {
            read: {
                type: Boolean,
                default: false
            },
            write: {
                type: Boolean,
                default: false
            },
            speak: {
                type: Boolean,
                default: false
            }
        },
        hindi: {
            read: {
                type: Boolean,
                default: false
            },
            write: {
                type: Boolean,
                default: false
            },
            speak: {
                type: Boolean,
                default: false
            }
        },
    },
    technicalExperience: {
        php: {
            beginner: {
                type: Boolean,
                default: false
            },
            mediator: {
                type: Boolean,
                default: false
            },
            expert: {
                type: Boolean,
                default: false
            }
        },
        laravel: {
            beginner: {
                type: Boolean,
                default: false
            },
            mediator: {
                type: Boolean,
                default: false
            },
            expert: {
                type: Boolean,
                default: false
            }
        },
        mysql: {
            beginner: {
                type: Boolean,
                default: false
            },
            mediator: {
                type: Boolean,
                default: false
            },
            expert: {
                type: Boolean,
                default: false
            }
        },
        javascript: {
            beginner: {
                type: Boolean,
                default: false
            },
            mediator: {
                type: Boolean,
                default: false
            },
            expert: {
                type: Boolean,
                default: false
            }
        }
    },
    location: {
        type: String
    },
    expectedCTC: String,
    currentCTC: String,
    noticePeriod: String

}, { timestamps: true });
// Export Job model
var Job = mongoose.model('job', jobSchema);
module.exports = Job