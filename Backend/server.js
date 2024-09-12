import express from 'express';
import mysql from 'mysql2';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const crmBaseUrl = 'https://your-freshsales-domain.api.freshsales.io'; // Replace with your FreshSales CRM base URL
const crmApiKey = process.env.FRESHSALES_API_KEY;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Heeral@123',
    database: 'contacts'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to the database.');
});

// Helper function to create contact in CRM
const createCrmContact = async (contact) => {
    try {
        const response = await axios.post(`${crmBaseUrl}/api/contacts`, contact, {
            headers: {
                'Authorization': `Token token=${crmApiKey}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Helper function to retrieve contact from CRM
const getCrmContact = async (contactId) => {
    try {
        const response = await axios.get(`${crmBaseUrl}/api/contacts/${contactId}`, {
            headers: {
                'Authorization': `Token token=${crmApiKey}`
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Helper function to update contact in CRM
const updateCrmContact = async (contactId, contact) => {
    try {
        const response = await axios.put(`${crmBaseUrl}/api/contacts/${contactId}`, contact, {
            headers: {
                'Authorization': `Token token=${crmApiKey}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Helper function to delete contact from CRM
const deleteCrmContact = async (contactId) => {
    try {
        await axios.delete(`${crmBaseUrl}/api/contacts/${contactId}`, {
            headers: {
                'Authorization': `Token token=${crmApiKey}`
            }
        });
        return { message: 'Contact deleted' };
    } catch (error) {
        throw error;
    }
};

// Endpoint to create a contact
app.post('/createContact', async (req, res) => {
    const { first_name, last_name, email, mobile_number, data_store } = req.body;

    console.log('Data Store:', data_store); 

    const contact = { first_name, last_name, email, mobile_number };

    if (data_store === 'CRM') {
        try {
            const result = await createCrmContact(contact);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else if (data_store === 'DATABASE') {
        const sql = 'INSERT INTO contacts (first_name, last_name, email, mobile_number) VALUES (?, ?, ?, ?)';
        db.query(sql, [first_name, last_name, email, mobile_number], (err, result) => {
            if (err) throw err;
            res.json({ id: result.insertId, ...contact });
        });
    } else {
        res.status(400).json({ error: 'Invalid data_store value' });
    }
});

// Endpoint to get a contact
app.post('/getContact', async (req, res) => {
    const { contact_id, data_store } = req.body;

    if (data_store === 'CRM') {
        try {
            const result = await getCrmContact(contact_id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else if (data_store === 'DATABASE') {
        const sql = 'SELECT * FROM contacts WHERE id = ?';
        db.query(sql, [contact_id], (err, result) => {
            if (err) throw err;
            if (result.length > 0) {
                res.json(result[0]);
            } else {
                res.status(404).json({ error: 'Contact not found' });
            }
        });
    } else {
        res.status(400).json({ error: 'Invalid data_store value' });
    }
});

// Endpoint to update a contact
app.post('/updateContact', async (req, res) => {
    const { contact_id, new_email, new_mobile_number, data_store } = req.body;

    if (data_store === 'CRM') {
        try {
            const result = await updateCrmContact(contact_id, { email: new_email, mobile_number: new_mobile_number });
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else if (data_store === 'DATABASE') {
        const sql = 'UPDATE contacts SET email = ?, mobile_number = ? WHERE id = ?';
        db.query(sql, [new_email, new_mobile_number, contact_id], (err, result) => {
            if (err) throw err;
            res.json({ message: 'Contact updated' });
        });
    } else {
        res.status(400).json({ error: 'Invalid data_store value' });
    }
});

// Endpoint to delete a contact
app.post('/deleteContact', async (req, res) => {
    const { contact_id, data_store } = req.body;

    if (data_store === 'CRM') {
        try {
            const result = await deleteCrmContact(contact_id);
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else if (data_store === 'DATABASE') {
        const sql = 'DELETE FROM contacts WHERE id = ?';
        db.query(sql, [contact_id], (err, result) => {
            if (err) throw err;
            res.json({ message: 'Contact deleted' });
        });
    } else {
        res.status(400).json({ error: 'Invalid data_store value' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
