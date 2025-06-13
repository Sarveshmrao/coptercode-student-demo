import { useState } from 'react';

function StudentForm({ onAdd }) {
    const [form, setForm] = useState({
        name: "",
        roll: "",
        department: "",
        email: "",
        section: "A",
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.roll)
          return alert("Name and Roll are required");
        onAdd({ ...form, id: Date.now() });
        setForm({
            name: "",
            roll: "",
            department: "",
            email: "",
            section: "A",
        });
    }

    return (
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 shadow-md rounded-xl max-w-md mx-auto"
      >
        <h2 className="text-xl font-semibold mb-4"> Add New Student </h2>
        <input
          className="w-full p-2 border mb-3"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border mb-3"
          type="text"
          name="roll"
          placeholder="Roll Number"
          value={form.roll}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border mb-3"
          type="text"
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
        />
        <input
          className="w-full p-2 border mb-3"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Add Student
        </button>
      </form>
    );
}
export default StudentForm;