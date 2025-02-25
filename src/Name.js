import { useState } from "react";

const NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Full Name Display</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
            <label>First Name:</label>
            <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className=""
          required
        />
        </div>
        <div>

            <label>Last Name:</label>
            <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className=""
          required
        />
        </div>
        <button type="submit" className="">
          Submit
        </button>
      </form>
      {fullName && <div className="mt-4 ">Full Name: {fullName}</div>}
    </div>
  );
};

export default NameForm;
