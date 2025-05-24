import React from 'react';
import pastUpdates from './pastUpdates.json';


export default function PastUpdateLog() {
  return (
    <>
    <div style={{
        background: 'var(--assignment-box-primary)',
        borderRadius: '1rem',
        padding: '2rem',
        marginTop: '3rem'
    }}>
        <h2 style={{ 
        fontSize: '1.75rem',
        marginBottom: '1.5rem',
        textAlign: 'center'
        }}>
        Lesson Updates
        </h2>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {pastUpdates.recent.map((update, index) => (
            <div key={index} style={{
            padding: '1rem',
            borderBottom: index !== pastUpdates.recent.length - 1 ? '1px solid var(--ifm-color-emphasis-300)' : 'none'
            }}>
            <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '0.5rem'
            }}>
                <h3 style={{ 
                fontSize: '1.125rem',
                margin: 0
                }}>
                {update.title}
                </h3>
                <span style={{ 
                fontSize: '0.875rem',
                color: 'var(--ifm-color-emphasis-600)'
                }}>
                {update.date}
                </span>
            </div>
            </div>
        ))}
        </div>
    </div>
    </>
  );
}
