const Job = require('../models/Job');

const jobController = {
    createJob: async (req, res) => {
        const { title, description } = req.body;

        try {
            const newJob = new Job({
                title,
                description,
                user: req.user.id,
            });

            const job = await newJob.save();
            res.json(job);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    },

    getJobs: async (req, res) => {
        try {
            const jobs = await Job.find({ user: req.user.id }).sort({ date: -1 });
            res.json(jobs);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    },

    updateJob: async (req, res) => {
        const { title, description, status } = req.body;

        try {
            let job = await Job.findById(req.params.id);
            if (!job) return res.status(404).json({ msg: 'Job not found' });

            if (job.user.toString() !== req.user.id) {
                return res.status(401).json({ msg: 'Not authorized' });
            }

            job = await Job.findByIdAndUpdate(req.params.id, { $set: { title, description, status } }, { new: true });
            res.json(job);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    },

    deleteJob: async (req, res) => {
        try {
            let job = await Job.findById(req.params.id);
            if (!job) return res.status(404).json({ msg: 'Job not found' });

            if (job.user.toString() !== req.user.id) {
                return res.status(401).json({ msg: 'Not authorized' });
            }

            await Job.findByIdAndRemove(req.params.id);
            res.json({ msg: 'Job removed' });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    },
};

module.exports = jobController;
