import { useNavigate } from "react-router-dom";

function StudentCard({ student, onDelete }) {
    const navigate = useNavigate();
    return (
      <div className="bg-white shadow-md rounded-xl p-4 text-gray-800">
        <h2 className="text-xl font-semibold">{student.name}</h2>
        <p>
          <strong>Roll:</strong> {student.roll}
        </p>
        <p>
          <strong>Dept:</strong> {student.department}
        </p>
        <p>
          <strong>Email:</strong> {student.email}
        </p>
        <div className="mt-4 flex gap-3">
          <button
            onClick={() => navigate(`edit/${student._id}`)}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(student._id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      </div>
    );
}

export default StudentCard;