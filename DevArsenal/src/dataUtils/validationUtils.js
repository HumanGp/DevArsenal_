import Joi from 'joi';

/* --------------------------------------------
 * 🚀 General Data Validation
 * -------------------------------------------- */

/**
 * Validates data against a given schema.
 * @param {Object} data - Data to validate.
 * @param {Object} schema - Joi validation schema.
 * @returns {Object} - { isValid: Boolean, value: Object, message: Array }
 */
export function validateData(data, schema) {
    const { error, value } = schema.validate(data, { abortEarly: false });

    if (error) {
        return {
            isValid: false,
            message: error.details.map(err => err.message),
        };
    }

    return { isValid: true, value };
}

// Example Schema
const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    age: Joi.number().integer().min(18).max(100).required()
});

const user = {
    name: 'DennisNjoroge',
    email: 'dudeholy36@gmail.com',
    age: 28,
};

console.log(validateData(user, userSchema));

/* --------------------------------------------
 * 🎯 Custom Validation Rules
 * -------------------------------------------- */

// 🔹 Extend Joi with custom rules
export const customJoi = Joi.extend((joi) => ({
    type: 'strongPassword',
    base: joi.string(),
    messages: {
        'strongPassword.weak': '"{{#label}}" must include uppercase, lowercase, number, and special character!',
    },
    validate(value, helpers) {
        if (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/[0-9]/.test(value) || !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
            return { value, errors: helpers.error('strongPassword.weak') };
        }
    },
}));

// Example Usage:
const passwordSchema = Joi.object({
    password: customJoi.strongPassword().required(),
});

// console.log(validateData({ password: 'WeakPass1' }, passwordSchema));

/* --------------------------------------------
 * 📦 Batch Validation
 * -------------------------------------------- */

/**
 * Validates an array of objects against a schema.
 * @param {Array} dataArray - Array of data objects to validate.
 * @param {Object} schema - Joi validation schema.
 * @returns {Object} - { validItems: Array, invalidItems: Array }
 */
export function validateBatch(dataArray, schema) {
    const validItems = [];
    const invalidItems = [];

    dataArray.forEach((data) => {
        const result = validateData(data, schema);
        if (result.isValid) {
            validItems.push(result.value);
        } else {
            invalidItems.push({ data, errors: result.message });
        }
    });

    return { validItems, invalidItems };
}

// Example Usage:
// console.log(validateBatch([{ name: 'Alice' }, { name: '' }], userSchema));

/* --------------------------------------------
 * ⚡  Async Validation Pipeline
 * -------------------------------------------- */

/**
 * Validates data asynchronously (e.g., checking against an external API).
 * @param {Object} data - Data to validate.
 * @param {Function} asyncValidator - Async function that validates the data.
 * @returns {Object} - Validation result.
 */
export async function validateAsync(data, asyncValidator) {
    try {
        const isValid = await asyncValidator(data);
        return { isValid, value: data };
    } catch (error) {
        return { isValid: false, message: error.message };
    }
}

// Example Async Validator (Mock API Check)
// const checkEmailExists = async (email) => {
//     const response = await fetch(`https://api.example.com/check-email?email=${email}`);
//     if (!response.ok) throw new Error('Email check failed');
//     const { exists } = await response.json();
//     if (exists) throw new Error('Email already in use');
//     return true;
// };

// validateAsync({ email: 'test@example.com' }, checkEmailExists).then(console.log);

/* --------------------------------------------
 * 📁 File-Based Data Validation
 * -------------------------------------------- */

import fs from 'fs-extra';
import csvParser from 'csv-parser';

/**
 * Validates CSV file data against a schema.
 * @param {string} filePath - Path to the CSV file.
 * @param {Object} schema - Joi validation schema.
 * @returns {Promise} - Resolves with validation results.
 */
export async function validateCSV(filePath, schema) {
    const validItems = [];
    const invalidItems = [];

    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on('data', (row) => {
                const result = validateData(row, schema);
                if (result.isValid) {
                    validItems.push(result.value);
                } else {
                    invalidItems.push({ row, errors: result.message });
                }
            })
            .on('end', () => resolve({ validItems, invalidItems }))
            .on('error', (error) => reject(error));
    });
}

// Example Usage:
// validateCSV('users.csv', userSchema).then(console.log).catch(console.error);
