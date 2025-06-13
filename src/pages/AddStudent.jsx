import { useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";

function AddStudent() {
    const navigate = useNavigate();
    const handleAdd = (student) => {
        const existing = JSON.parse(localStorage.getItem("students")) || [];

        const updated = [...existing, student];
        localStorage.setItem("students", JSON.stringify(updated));
        navigate("/");
    }
    return (
        <div>
            <StudentForm onAdd={handleAdd} />
        </div>
    )
}
export default AddStudent;