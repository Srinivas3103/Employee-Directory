import React, { useState } from 'react';
import { employees_list } from '../../assets/assets';   
import './FilterBar.css';

const departments = ["Engineering", "Finance", "Legal", "Sales"];
const roles = [
    "Intern Engineer", "Software Engineer", "Lead Engineer",
    "Accountant", "Finance Manager", "Intern Accountant",
    "Lawyer", "Legal Team Lead", "Sales Lead", "Salesperson"
];

const FilterBar = ({ onApply, onReset, onShowCountChange }) => {
    const [showFilter, setShowFilter] = useState(false);
    const [filters, setFilters] = useState({
        firstName: '',
        department: '',
        role: ''
    });

    // Add Employee popup state
    const [showAdd, setShowAdd] = useState(false);
    const [addForm, setAddForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        role: ''
    });
    const [addError, setAddError] = useState('');

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleApply = () => {
        if (onApply) onApply(filters);
        setFilters({ firstName: '', department: '', role: '' });
        setShowFilter(false);
    };

    const handleReset = () => {
        setFilters({ firstName: '', department: '', role: '' }); // Reset filters
        if (onReset) onReset();
        setShowFilter(false);
    };
    // Add Employee handlers
    const handleAddChange = (e) => {
        setAddForm({ ...addForm, [e.target.name]: e.target.value });
    };

    const handleAddEmployee = (e) => {
        e.preventDefault();

        const stored = localStorage.getItem('addedEmployees');
        const localEmployees = stored ? JSON.parse(stored) : [];

        const allEmployees = [
            ...localEmployees,
            ...(typeof employees_list !== "undefined" ? employees_list : [])
        ];

        // Check for duplicate email or name
        const fullName = `${addForm.firstName} ${addForm.lastName}`.trim().toLowerCase();
        const email = addForm.email.trim().toLowerCase();

        const duplicate = allEmployees.find(emp =>
            emp.email.trim().toLowerCase() === email ||
            emp.name.trim().toLowerCase() === fullName
        );

        if (duplicate) {
            setAddError("User already exists");
            return;
        }

        if (
            !addForm.firstName.trim() ||
            !addForm.lastName.trim() ||
            !addForm.email.trim() ||
            !addForm.department ||
            !addForm.role
        ) {
            setAddError("All fields are required.");
            return;
        }
        setAddError('');

        const newEmployee = {
            name: `${addForm.firstName} ${addForm.lastName}`,
            email: addForm.email,
            department: addForm.department,
            role: addForm.role,
            id: Date.now()
        };
        localEmployees.unshift(newEmployee);
        localStorage.setItem('addedEmployees', JSON.stringify(localEmployees));
        window.dispatchEvent(new Event('employeeAdded'));
        setShowAdd(false);
        setAddForm({
            firstName: '',
            lastName: '',
            email: '',
            department: '',
            role: ''
        });
    };
    return (
        <div className='filter-bar'>
            <div className='filter-controls'>
                <button className='filter-button' onClick={() => setShowFilter(true)}>Filter</button>
                <div className='show-items'>
                    <label htmlFor="show-items" className='show-label'>Show:</label>
                    <select
                        id="show-items"
                        className='show-select'
                        onChange={e => {
                            if (typeof onShowCountChange === 'function') {
                                const value = e.target.value === 'all' ? Infinity : Number(e.target.value);
                                onShowCountChange(value);
                            }
                        }}
                    >
                        <option value="10">Show 10</option>
                        <option value="25">Show 25</option>
                        <option value="50">Show 50</option>
                        <option value="100">Show 100</option>
                        <option value="all">Show All</option>
                    </select>
                </div>
            </div>
            <div>
                <button className='add-employee-button' onClick={() => setShowAdd(true)}>Add Employee</button>
            </div>
            {/* Filter Popup */}
            {showFilter && (
                <div className="filter-popup-overlay" onClick={() => setShowFilter(false)}>
                    <div className="filter-popup" onClick={e => e.stopPropagation()}>
                        <h3>Filter Employees</h3>
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                value={filters.firstName}
                                onChange={handleChange}
                                placeholder="Enter first name"
                            />
                        </label>
                        <label>
                            Department:
                            <input
                                type="text"
                                name="department"
                                value={filters.department}
                                onChange={handleChange}
                                placeholder="Enter department"
                            />
                        </label>
                        <label>
                            Role:
                            <input
                                type="text"
                                name="role"
                                value={filters.role}
                                onChange={handleChange}
                                placeholder="Enter role"
                            />
                        </label>
                        <div className="filter-popup-actions">
                            <button onClick={handleApply} className='button'>Apply Filter</button>
                            <button onClick={handleReset}>Reset Filters</button>
                            <button onClick={() => setShowFilter(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
            {/* Add Employee Popup */}
            {showAdd && (
                <div className="filter-popup-overlay" onClick={() => {
                    setShowAdd(false);
                    setAddForm({
                        firstName: '',
                        lastName: '',
                        email: '',
                        department: '',
                        role: ''
                    });
                }}>
                    <form
                        className="filter-popup"
                        onClick={e => e.stopPropagation()}
                        onSubmit={e => {
                            handleAddEmployee(e);
                            setAddForm({
                                firstName: '',
                                lastName: '',
                                email: '',
                                department: '',
                                role: ''
                            });
                        }}
                    >
                        <h3>Add Employee</h3>
                        <label>
                            First Name:
                            <input
                                type="text"
                                name="firstName"
                                value={addForm.firstName}
                                onChange={handleAddChange}
                                required
                                placeholder="Enter first name"
                            />
                        </label>
                        <label>
                            Last Name:
                            <input
                                type="text"
                                name="lastName"
                                value={addForm.lastName}
                                onChange={handleAddChange}
                                required
                                placeholder="Enter last name"
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={addForm.email}
                                onChange={handleAddChange}
                                required
                                placeholder="Enter email"
                            />
                        </label>
                        <label>
                            Department:
                            <select
                                name="department"
                                value={addForm.department}
                                onChange={handleAddChange}
                                required
                            >
                                <option value="">--Select Department--</option>
                                {departments.map(dep => (
                                    <option key={dep} value={dep}>{dep}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Role:
                            <select
                                name="role"
                                value={addForm.role}
                                onChange={handleAddChange}
                                required
                            >
                                <option value="">--Select Role--</option>
                                {roles.map(role => (
                                    <option key={role} value={role}>{role}</option>
                                ))}
                            </select>
                        </label>
                        {addError && <div style={{ color: 'red', marginBottom: 8 }}>{addError}</div>}
                        <div className="filter-popup-actions">
                            <button type="submit" className='add-form-button'>Add</button>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowAdd(false);
                                    setAddForm({
                                        firstName: '',
                                        lastName: '',
                                        email: '',
                                        department: '',
                                        role: ''
                                    });
                                }}
                                className='add-form-button'
                            >Cancel</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default FilterBar;