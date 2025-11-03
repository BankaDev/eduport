import { useState } from "react";
import Button from "../shared/button";
import Modal from "../shared/modal";

const Test2 = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const [registerForm, SetRegisterForm] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const onDataInput = (e) => {
    const { name, value } = e.target;
    SetRegisterForm((prev) => ({ ...prev, [name]: value }));
  };

  const onRegister = (e) => {
    e.preventDefault();

    // Basic validation
    if (!registerForm.fullname || !registerForm.email || !registerForm.password) {
      alert("Please fill all fields");
      return;
    }

    setData([...data, { ...registerForm, date: new Date().toDateString() }]);
    SetRegisterForm({ fullname: "", email: "", password: "" });
    setOpen(false);
  };

  return (
    <div className="w-11/12 md:w-8/12 xl:w-7/12 p-12 mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">CRUD Example</h1>

      <Button color="info" size="sm" className="mb-6" onClick={() => setOpen(true)}>
        ➕ Add New
      </Button>

      <div className="overflow-hidden rounded-xl shadow-md border border-gray-200 bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3 border border-gray-200">Full Name</th>
              <th className="text-left p-3 border border-gray-200">Email</th>
              <th className="text-left p-3 border border-gray-200">Password</th>
              <th className="text-left p-3 border border-gray-200">Date</th>
              <th className="text-left p-3 border border-gray-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors border-t">
                  <td className="p-3 border border-gray-200 font-medium text-gray-800">
                    {item.fullname}
                  </td>
                  <td className="p-3 border border-gray-200 text-gray-600">
                    {item.email}
                  </td>
                  <td className="p-3 border border-gray-200 text-gray-500">
                    {item.password}
                  </td>
                  <td className="p-3 border border-gray-200 text-gray-500">
                    {item.date}
                  </td>
                   <td className="p-3 border border-gray-200 text-gray-500">
                    <div className="flex gap-2">
                    <Button color="success" size="sm"><i className="fa fa-edit"></i> </Button>
                    <Button color="danger" size="sm"><i className="fa fa-trash"></i> </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-gray-500 py-6 text-sm">
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal open={open} close={() => setOpen(false)} title="Register User" footer={false}>
        <form onSubmit={onRegister} className="space-y-5 mt-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={registerForm.fullname}
              onChange={onDataInput}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="Enter full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={registerForm.email}
              onChange={onDataInput}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={registerForm.password}
              onChange={onDataInput}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-3">
            <Button color="secondary" size="sm" type="button" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button color="info" size="sm" type="submit">
              Save
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Test2;
