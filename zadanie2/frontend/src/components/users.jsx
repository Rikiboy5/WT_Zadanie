import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedSurname, setEditedSurname] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPhone, setEditedPhone] = useState("");

  // Načítanie používateľov z API
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users") // Skontrolujte správnu URL
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Nepodarilo sa načítať zoznam používateľov.");
        setLoading(false);
        console.error(err);
      });
  }, []);

  // Funkcia na úpravu používateľa
  const handleEdit = (user) => {
    setEditingUser(user);
    setEditedName(user.name);
    setEditedSurname(user.surname);
    setEditedEmail(user.email);
    setEditedPhone(user.phone);
  };

  // Funkcia na uloženie úpravy používateľa
  const handleSaveEdit = () => {
    const updatedUser = {
      name: editedName,
      surname: editedSurname,
      email: editedEmail,
      phone: editedPhone,
    };

    axios
      .put(`http://localhost:5000/api/users/${editingUser._id}`, updatedUser)
      .then((response) => {
        setUsers(
          users.map((user) =>
            user._id === editingUser._id ? { ...user, ...updatedUser } : user
          )
        );
        setSuccess("Používateľ úspešne upravený.");
        setEditingUser(null);
      })
      .catch((err) => {
        setError("Chyba pri úprave používateľa.");
        console.error(err);
      });
  };

  // Funkcia na vymazanie používateľa
  const handleDelete = (userId) => {
    setError("");
    setSuccess("");

    axios
      .delete(`http://localhost:5000/api/users/${userId}`)
      .then(() => {
        setUsers(users.filter((user) => user._id !== userId));
        setSuccess("Používateľ úspešne vymazaný.");
      })
      .catch((err) => {
        setError("Chyba pri mazaní používateľa.");
        console.error(err);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-20 mt-40" >
      <div className="relative w-full max-w-4xl p-8 bg-gray-800 text-white rounded-lg shadow-lg overflow-auto mt-150"> {/* Pridaný margin-top na celé okno */}
        <h2 className="text-3xl font-bold mb-6 text-center">Zoznam Používateľov</h2>
  
        {error && <p className="text-red-500 mb-4 text-center font-semibold">{error}</p>}
        {success && <p className="text-green-500 mb-4 text-center font-semibold">{success}</p>}
  
        {loading ? (
          <p className="text-center text-gray-400">Načítavam používateľov...</p>
        ) : users.length === 0 ? (
          <p className="text-center text-gray-400">Zatiaľ tu nie sú žiadni používatelia.</p>
        ) : (
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user._id} className="flex justify-between items-center bg-gray-700 p-4 rounded-lg">
                <div>
                  <p><span className="font-bold">Meno:</span> {user.name}</p>
                  <p><span className="font-bold">Priezvisko:</span> {user.surname}</p>
                  <p><span className="font-bold">Email:</span> {user.email}</p>
                  <p><span className="font-bold">Štát:</span> {user.country}</p>
                  <p><span className="font-bold">Rok narodenia:</span> {user.birthYear}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-blue-500 hover:bg-blue-600 p-2 rounded text-white font-semibold transition duration-300"
                  >
                    Upraviť
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 hover:bg-red-600 p-2 rounded text-white font-semibold transition duration-300"
                  >
                    Vymazať
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
  
        {/* Formulár pre úpravu používateľa */}
        {editingUser && (
          <div className="mt-8 bg-gray-700 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Upravit Používateľa</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Meno"
                  className="w-full p-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Priezvisko"
                  className="w-full p-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={editedSurname}
                  onChange={(e) => setEditedSurname(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Telefón"
                  className="w-full p-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={editedPhone}
                  onChange={(e) => setEditedPhone(e.target.value)}
                />
                <div className="flex justify-center mt-4">
                  <button
                    onClick={handleSaveEdit}
                    className="bg-green-500 hover:bg-green-600 p-2 rounded text-white font-semibold transition duration-300"
                  >
                    Uložiť zmeny
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
  
}

export default Users;
