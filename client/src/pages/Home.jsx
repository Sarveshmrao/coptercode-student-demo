import StudentCard from '../components/StudentCard';
import { useState, useEffect } from 'react';

function Home() {
    const [students, setStudents] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/api/students")
        .then((res) => res.json())
        .then((data) => setStudents(data))
        .catch((error) => {
            console.error("Error fetching students:", error);
            alert("Failed to fetch students. Please try again.");
        });
    }, []);

    const handleDelete = async (id) => {
        await fetch(`http://localhost:5000/api/students/${id}`, {
            method: 'DELETE',
        });
        setStudents((prev) => prev.filter((s) => s._id !== id));
        alert("Student deleted successfully");
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            { students.length === 0 ? (
                <p>No students added yet.</p>
            ) : (
                students.map((s) => (
                    <StudentCard key={s._id} student={s} onDelete={handleDelete} />
                ))
            )}
        </div>
    )
} 

export default Home;