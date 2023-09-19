import React, { useState } from 'react';
import '../styles/UpdateQuote.css';

function UpdateQuote() {
    const [previousQuoteText, setPreviousQuoteText] = useState('');
    const [newQuoteText, setNewQuoteText] = useState('');
    const [previousAuthorName, setPreviousAuthorName] = useState('');
    const [newAuthorName, setNewAuthorName] = useState('');
    const [previousCategory, setPreviousCategory] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');


    const generateRandomTicket = () => {
        const min = 1000;
        const max = 9999;
        const randomTicket = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomTicket;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate a delay to mimic a server request
        setTimeout(() => {
            setIsSubmitting(false);
            const ticket = generateRandomTicket();
            setSuccessMessage(
                `Thank you for submitting your request to update the quote. Your ticket number is: ${ticket}. Our experts will investigate and work on it.`
            );
            setNewQuoteText('');
            setNewAuthorName('');
            setNewCategory('');
        }, 2000);
    };

    return (
        <div className="UpdateQuote">
            <header>
                <a href='/'>
                    <h1>Quotes API</h1>
                </a>
            </header>
            <div className='update-form'>
                <h1>Update Quote Request</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <div className='column'>
                            <label htmlFor='previousQuoteText'>Previous Quote:</label>
                            <textarea
                                id='previousQuoteText'
                                value={previousQuoteText}
                                onChange={(e) => setPreviousQuoteText(e.target.value)}
                                required
                            />
                        </div>
                        <div className='column'>
                            <label htmlFor='newQuoteText'>New Quote:</label>
                            <textarea
                                id='newQuoteText'
                                value={newQuoteText}
                                onChange={(e) => setNewQuoteText(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='column'>
                            <label htmlFor='previousAuthorName'>Previous Author:</label>
                            <input
                                type='text'
                                id='previousAuthorName'
                                value={previousAuthorName}
                                onChange={(e) => setPreviousAuthorName(e.target.value)}
                                required
                            />
                        </div>
                        <div className='column'>
                            <label htmlFor='newAuthorName'>New Author:</label>
                            <input
                                type='text'
                                id='newAuthorName'
                                value={newAuthorName}
                                onChange={(e) => setNewAuthorName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className='column'>
                            <label htmlFor='previousCategory'>Previous Category:</label>
                            <input
                                type='text'
                                id='previousCategory'
                                value={previousCategory}
                                onChange={(e) => setPreviousCategory(e.target.value)}
                                required
                            />
                        </div>
                        <div className='column'>
                            <label htmlFor='newCategory'>New Category:</label>
                            <input
                                type='text'
                                id='newCategory'
                                value={newCategory}
                                onChange={(e) => setNewCategory(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <p>* All fields are required</p>
                    </div>
                    <div className='form-group'>
                        <button type='submit' disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Submit Update Request'}
                        </button>
                    </div>
                </form>
                {successMessage && <p className='update-message'>{successMessage}</p>}
            </div>
        </div>
    );
}

export default UpdateQuote;
