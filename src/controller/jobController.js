const Job = require('../model/jobModel')
const Education = require('../model/educationModel')
const WorkExperience = require('../model/workExperienceModel');
var mongoose = require('mongoose');

exports.createJob = async (req, res) => {
    try {
        const body = req.body
        let createdbody = { ...body }
        delete createdbody.education
        delete createdbody.work
        let edu_id
        if (body.education) {
            const entry1 = new Education(body.education)
            const save1 = await entry1.save()
            if (save1) {
                edu_id = save1._id
            }
        }
        let word_id = []

        if (body?.work?.length > 0) {
            const save2 = await WorkExperience.insertMany(body.work)
            word_id = save2.map((item) => { return item._id })
        }

        createdbody.educationId = edu_id
        createdbody.workExperienceId = word_id

        const newentry = new Job(createdbody)
        const saveentry = await newentry.save();

        return res.status(201).json({ status: true, message: "Job application created.", data: saveentry })
    } catch (error) {
        return res.status(500).json({ status: false, message: "Something went wrong.", error })
    }
};

exports.viewjobs = async (req, res) => {
    try {
        const result = await Job.aggregate([
            {
                $lookup:
                {
                    from: 'workexperiences',
                    localField: 'workExperienceId',
                    foreignField: '_id',
                    as: 'workExperienceId'
                }
            },
            {
                $lookup:
                {
                    from: 'educations',
                    localField: 'educationId',
                    foreignField: '_id',
                    as: 'educationId'
                }
            },
            {
                "$unwind":
                {
                    "path": "$educationId",
                    "preserveNullAndEmptyArrays": true
                }
            }
        ])

        return res.status(201).json({ status: true, message: "All jobs.", data: result })
    } catch (error) {
        return res.status(500).json({ status: false, message: "Something went wrong." })
    }
};

exports.viewjobsbyId = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Job.aggregate([
            {
                $lookup:
                {
                    from: 'workexperiences',
                    localField: 'workExperienceId',
                    foreignField: '_id',
                    as: 'workExperienceId'
                }
            },
            {
                $lookup:
                {
                    from: 'educations',
                    localField: 'educationId',
                    foreignField: '_id',
                    as: 'educationId'
                }
            },
            {
                "$unwind":
                {
                    "path": "$educationId",
                    "preserveNullAndEmptyArrays": true
                }
            },
            {
                $match: {
                    _id: mongoose.Types.ObjectId(id)
                }
            }
        ])

        return res.status(201).json({ status: true, message: "Jobs by id.", data: result })
    } catch (error) {
        return res.status(500).json({ status: false, message: "Something went wrong." })
    }
};

exports.deletejob = async (req, res) => {
    try {
        const id = req.params.id
        const result = await Job.deleteOne({ _id: id })
        return res.status(201).json({ status: true, message: "Job application deleted." })
    } catch (error) {
        return res.status(500).json({ status: false, message: "Something went wrong." })
    }
};