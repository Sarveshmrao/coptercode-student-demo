import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import StudentForm from '../components/StudentForm';

function EditStudent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('students')) || [];
        const found = stored.find(s => s.id === parseInt(id));
        if(!found) return navigate('/');
        setStudent(found);
    }, [id, navigate]);

    const handleUpdate = (updatedStudent) => {
        const stored = JSON.parse(localStorage.getItem('students')) || [];
        const updatedList = stored.map(s => s.id === parseInt(id) ? updatedStudent : s);
        localStorage.setItem('students', JSON.stringify(updatedList));
        navigate('/');
    }
    return (
        <div>
            {student && <StudentForm onAdd={handleUpdate} initialData={student} />}
        </div>
    )
}

export default EditStudent;