import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import StudentForm from '../components/StudentForm';

function EditStudent() {
    const { id } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/students/${id}`).then((res) => {
            if(!res.ok) throw new Error("Failed to fetch student data");
            return res.json();
        }).then((data) => {
            setStudent(data);
        }).catch((error) => {
            console.error("Error fetching student data:", error);
            alert("Failed to fetch student data. Please try again.");
        })
    }, [id]);

    return (
        <div>
            {student && <StudentForm initialData={student} />}
        </div>
    )
}

export default EditStudent;