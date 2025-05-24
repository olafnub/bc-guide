import React, {useState} from 'react';
import { CiSquareChevDown } from "react-icons/ci";
import { CiSquareChevUp } from "react-icons/ci";
import './styles.css';

const Faq = ({question, answer}: {question: string, answer: string}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpand();
        }
    };

    return (
        <div className="faqBox">
            <div className="faqHeader" role="button" tabIndex={0} onClick={toggleExpand} onKeyDown={handleKeyDown}>
                <h4>{question}</h4>
                <button
                    className="faqToggle"
                    aria-expanded={isExpanded}
                    aria-label={isExpanded ? "Collapse answer" : "Expand answer"}
                >
                    {isExpanded ? <CiSquareChevUp size={25} /> : <CiSquareChevDown size={25} />}
                </button>
            </div>
            {isExpanded && (
                <div className="faqAnswer">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

export default Faq;