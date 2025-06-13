import StudentCard from '../components/StudentCard';
import { useState, useEffect } from 'react';

function Home() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('students')) || [];
        setStudents(stored);
    }, []);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            { students.length === 0 ? (
                <p>No students added yet.</p>
            ) : (
                students.map((s) => (
                    <StudentCard key={s.id} student={s} />
                ))
            )}
        </div>
    )
} 

export default Home;