import { employees_list } from '../../assets/assets';
import './Employees.css'
import { useEffect, useState } from 'react';

const Employees = ({ search, filters, showCount = 10 }) => {
  const [localEmployees, setLocalEmployees] = useState([]);
  const [deletedIds, setDeletedIds] = useState(() => {
    // Load deleted IDs from localStorage on mount
    const stored = localStorage.getItem('deletedEmployeeIds');
    return stored ? JSON.parse(stored) : [];
  });
  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: '',
    email: '',
    department: '',
    role: ''
  });

  useEffect(() => {
    const loadEmployees = () => {
      const stored = localStorage.getItem('addedEmployees');
      setLocalEmployees(stored ? JSON.parse(stored) : []);
    };
    loadEmployees();
    window.addEventListener('employeeAdded', loadEmployees);
    return () => window.removeEventListener('employeeAdded', loadEmployees);
  }, []);

  // Save deleted IDs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('deletedEmployeeIds', JSON.stringify(deletedIds));
  }, [deletedIds]);

  const handleDelete = (id) => {
    // Try to delete from local employees first
    const updated = localEmployees.filter(emp => emp.id !== id);
    if (updated.length !== localEmployees.length) {
      setLocalEmployees(updated);
      localStorage.setItem('addedEmployees', JSON.stringify(updated));
    } else {
      // If not found in local, mark as deleted for static employees
      setDeletedIds(prev => [...prev, id]);
    }
  };

  const handleEditClick = (employee) => {
    setEditId(employee.id);
    setEditForm({
      name: employee.name,
      email: employee.email,
      department: employee.department,
      role: employee.role
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSave = (id) => {
    const updated = localEmployees.map(emp =>
      emp.id === id ? { ...emp, ...editForm } : emp
    );
    setLocalEmployees(updated);
    localStorage.setItem('addedEmployees', JSON.stringify(updated));
    setEditId(null);
  };

  const handleEditCancel = () => {
    setEditId(null);
  };

  // Filter out deleted employees
  const allEmployees = [
    ...localEmployees,
    ...employees_list.filter(emp => !deletedIds.includes(emp.id))
  ];

  const filteredEmployees = allEmployees.filter(employee => {
    const matchesSearch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.email.toLowerCase().includes(search.toLowerCase());

    const matchesFirstName = filters.firstName
      ? employee.name.toLowerCase().startsWith(filters.firstName.toLowerCase())
      : true;
    const matchesDepartment = filters.department
      ? employee.department.toLowerCase().includes(filters.department.toLowerCase())
      : true;
    const matchesRole = filters.role
      ? employee.role.toLowerCase().includes(filters.role.toLowerCase())
      : true;

    return matchesSearch && matchesFirstName && matchesDepartment && matchesRole;
  });

  const employeesToShow = filteredEmployees.slice(0, showCount);


  return (
    <div className='employees-list'>
      {employeesToShow.length === 0 ? (
        <div className="employee-not-found">
          Employee not found
        </div>
      ) : (
        employeesToShow.map((employee, idx) => (
          <div key={employee.id || idx} className='employee-card'>
            {editId === employee.id ? (
              <>
                <input
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                  style={{ marginBottom: 8, width: '100%' }}
                />
                <input
                  name="email"
                  value={editForm.email}
                  onChange={handleEditChange}
                  style={{ marginBottom: 8, width: '100%' }}
                />
                <input
                  name="department"
                  value={editForm.department}
                  onChange={handleEditChange}
                  style={{ marginBottom: 8, width: '100%' }}
                />
                <input
                  name="role"
                  value={editForm.role}
                  onChange={handleEditChange}
                  style={{ marginBottom: 8, width: '100%' }}
                />
                <div className='button-container'>
                  <button className='button' onClick={() => handleEditSave(employee.id)}>Save</button>
                  <button className='button' onClick={handleEditCancel}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <h3>{employee.name}</h3>
                <p className="emp-detail"><span className="emp-label">Email:</span> {employee.email}</p>
                <p className="emp-detail"><span className="emp-label">Department:</span> {employee.department}</p>
                <p className="emp-detail"><span className="emp-label">Role:</span> {employee.role}</p>
                <div className='button-container'>
                  <button className='button' onClick={() => handleEditClick(employee)}>Edit</button>
                  <button className='button' onClick={() => handleDelete(employee.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );

};

export default Employees;
