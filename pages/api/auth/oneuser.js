import User from '../../../lib/models/user';

export default async function handler(req, res) {
    const { id } = req.query; // Destructure the id from the query string
    try {
        const user = await User.findById(id);
        if (user) {
            res.status(200).json({ user });
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching user' });
    }
}
