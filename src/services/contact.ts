export interface ContactFormData {
    name: string;
    email: string;
    ig?: string;
    date?: string;
    type?: string;
    budget?: string;
    message: string;
    hp?: string;
}

const GOOGLE_FORM_ACTION_URL = import.meta.env.VITE_GOOGLE_FORM_ACTION_URL;

const GOOGLE_FORM_ENTRY_IDS = {
    name: 'entry.899649035',
    email: 'entry.1436265529',
    ig: 'entry.2072878158',
    type: 'entry.1919973654',
    budget: 'entry.1649371035',
    message: 'entry.2056025095',
    date_year: 'entry.1144187709_year',
    date_month: 'entry.1144187709_month',
    date_day: 'entry.1144187709_day',
};

/**
 * Submits the contact form data to Google Forms using a direct no-cors POST request.
 * @param data The form data object.
 * @returns A promise that resolves when the submission is triggered.
 */
export const submitContactForm = async (data: ContactFormData): Promise<void> => {
    // Honeypot check: if the hidden hp field is filled, silently return success without sending.
    if (data.hp) {
        return Promise.resolve();
    }

    const submitData = new URLSearchParams();

    // Map data to Google Form entry IDs
    submitData.append(GOOGLE_FORM_ENTRY_IDS.name, data.name);
    submitData.append(GOOGLE_FORM_ENTRY_IDS.email, data.email);

    if (data.ig) submitData.append(GOOGLE_FORM_ENTRY_IDS.ig, data.ig);
    if (data.type) submitData.append(GOOGLE_FORM_ENTRY_IDS.type, data.type);
    if (data.budget) submitData.append(GOOGLE_FORM_ENTRY_IDS.budget, data.budget);

    submitData.append(GOOGLE_FORM_ENTRY_IDS.message, data.message);

    // Handle date splitting for Google Forms Google Date format
    if (data.date) {
        const [year, month, day] = data.date.split('-');
        submitData.append(GOOGLE_FORM_ENTRY_IDS.date_year, year);
        submitData.append(GOOGLE_FORM_ENTRY_IDS.date_month, month);
        submitData.append(GOOGLE_FORM_ENTRY_IDS.date_day, day);
    }

    // Submit via fetch using no-cors to prevent cross-origin issues from the browser
    await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: submitData.toString(),
    });
};
