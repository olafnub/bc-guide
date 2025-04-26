// import React, { useState, useEffect } from 'react';
// import { BiUpvote, BiSolidUpvote } from "react-icons/bi";

// export default function UpVote({counterKey}: {counterKey: string}) {
//     const [count, setCount] = useState(0);
//     const [clicked, setClicked] = useState(false);
//     const [loading, setLoading] = useState(false);

//     useEffect(() => {
//         const fetchCount = async () => {
//             try {
//                 const res = await fetch(`/api/upvote?key=${counterKey}`);
//                 if (!res.ok) throw new Error('Failed to fetch count');
//                 const data = await res.json();
//                 setCount(data.count || 0);
//             } catch (error) {
//                 console.error('Error fetching count:', error);
//             }
//         };
//         fetchCount();
//     }, [counterKey]);

//     const handleUpVote = async () => {
//         if (loading || clicked) return;
//         setLoading(true);
//         try {
//             const res = await fetch(`/api/upvote?key=${counterKey}`, {
//                 method: 'POST',
//             });
//             if (!res.ok) throw new Error('Failed to update count');
//             const data = await res.json();
//             setCount(data.count || 0);
//             setClicked(true);
//             // Store the vote in localStorage to persist across page reloads
//             localStorage.setItem(`voted-${counterKey}`, 'true');
//         } catch (error) {
//             console.error('Error updating count:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <button 
//             onClick={handleUpVote}
//             className={`upvote-button ${clicked ? 'upvoted' : ''}`}
//             style={{
//                 background: 'transparent',
//                 border: 'none',
//                 color: clicked ? '#00D1B2' : '#666',
//                 cursor: loading || clicked ? 'default' : 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '4px',
//                 fontSize: '16px',
//                 opacity: loading ? 0.7 : 1,
//                 padding: '4px 8px',
//                 transition: 'all 0.2s ease'
//             }}
//             disabled={loading || clicked}
//             title={clicked ? 'Already voted' : 'Vote for this topic'}
//         >
//             {clicked ? <BiSolidUpvote size={20} /> : <BiUpvote size={20} />}
//             <span>{count}</span>
//         </button>
//     );
// }