const emp = [
    {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul@example.com",
        address: "Pune, Maharashtra",
        contactNumber: "9876543210",
        dateOfBirth: "1999-05-14",
        joiningDate: "2024-01-10",
        department: "IT"
    },
    {
        id: 2,
        name: "Priya Patil",
        email: "priya@example.com",
        address: "Mumbai, Maharashtra",
        contactNumber: "9876501234",
        dateOfBirth: "2000-08-22",
        joiningDate: "2023-11-15",
        department: "HR"
    },
    {
        id: 3,
        name: "Amit Joshi",
        email: "amit@example.com",
        address: "Nashik, Maharashtra",
        contactNumber: "9988776655",
        dateOfBirth: "1998-12-05",
        joiningDate: "2022-06-20",
        department: "Finance"
    },
    {
        id: 4,
        name: "Sneha Kulkarni",
        email: "sneha@example.com",
        address: "Nagpur, Maharashtra",
        contactNumber: "9123456780",
        dateOfBirth: "1997-03-18",
        joiningDate: "2021-09-12",
        department: "Marketing"
    },
    {
        id: 5,
        name: "Vikas Mehta",
        email: "vikas@example.com",
        address: "Aurangabad, Maharashtra",
        contactNumber: "9988123456",
        dateOfBirth: "1996-11-25",
        joiningDate: "2020-04-05",
        department: "IT"
    }
];



const getAllEmp = (req, res) => {
    try {
        res.status(200).send({ employee: emp })
    } catch (error) {
        res.status(500).send({ message: "Server error" })
    }
}

function createEmp(req, res) {
    try {
        const { name, email, address, contactNumber, dateOfBirth, joiningDate, department } = req.body

        const newEmp = {
            id: Date.now(),
            name: name,
            email: email,
            address: address,
            contactNumber: contactNumber,
            dateOfBirth: dateOfBirth,
            joiningDate: joiningDate,
            department: department
        }
        emp.push(newEmp)
        res.status(201).send({ message: "Emp added successfully" })
    } catch (error) {
        res.status(500).send({ message: "Server error" })
    }
}

//delete emp
function deleteEmp(req, res) {
    const { ID } = req.params;
    try {
        const index = emp.findIndex((e) => e.id == ID)
        if (index == -1) {
            res.status(404).send({ message: "Employee not found" })
        }
        emp.splice(index, 1)
        res.status(200).send({ message: "Employee deleted successfully" })
    } catch (error) {
        res.status(500).send({ message: "Server error" })
    }
}


//update emp
const updateEmp = (req, res) => {
    const { ID } = req.params;
    const { address } = req.body
    try {
        const index = emp.findIndex((e) => e.id == ID)
        console.log(index)
        if (index == -1) {
            res.status(404).send({ message: "Employee not found" })
        }
        emp[index].address = address
        res.status(200).send({ message: "Employee updated successfully" })

    } catch (error) {
        res.status(500).send({ message: "Server error" })
    }
}

//get Emp Info By ID
const getEmpInfo = (req, res) => {
    const { ID } = req.params;
    try {
        const index = emp.findIndex((e) => e.id == ID)
        console.log(index)
        if (index == -1) {
            res.status(404).send({ message: "Employee not found" })
        } else {
            res.status(200).send({ msg: "Get Employee Info", employee: emp[index] })
        }
    } catch (error) {
        res.status(500).send({ message: "Server error" })
    }
}

// GET DEPARTMENT WISE EMPLOYEE
const getDeptWiseEmp = (req, res) => {

    const { department } = req.params;

    try {

        const employees = emp.filter(
            (e) =>
                e.department.toLowerCase() === department.toLowerCase()
        );

        res.status(200).send({ msg: "Get Department Wise employees", employees });

    } catch (error) {

        res.status(500).send({
            message: "Server error"
        });
    }
};


// GET JOINING MONTH WISE EMPLOYEE
const getJoiningMonthWiseEmployee = (req, res) => {

    try {

        const month = req.query.month;

        if (!month) {
            return res.status(400).send({
                message: "Month is required"
            });
        }

        const result = emp.filter((e) => {

            const joiningMonth =
                new Date(e.joiningDate).getMonth() + 1;

            return joiningMonth == month;
        });

        res.status(200).send({
            msg: "Get Joining month wise employees",
            employees: result
        });

    } catch (error) {

        res.status(500).send({
            message: "Server error"
        });
    }
};


// GET BIRTHDAY EMPLOYEE MONTH WISE
const getThisMonthBirthdayEmployee = (req, res) => {

    try {

        const { month } = req.params;

        const result = emp.filter((e) => {

            const birthMonth =
                new Date(e.dateOfBirth).getMonth() + 1;

            return birthMonth == month;
        });

        res.status(200).send({
            msg: "Get Birthday employees",
            employees: result
        });

    } catch (error) {

        res.status(500).send({
            message: "Server error"
        });
    }
};


//Search Employee By Name
const searchEmployeeByName = (req, res) => {

    try {

        const { name } = req.query;

        if (!name) {
            return res.status(400).send({
                message: "Name is required"
            });
        }

        const employees = emp.filter((e) =>
            e.name.toLowerCase().includes(name.toLowerCase())
        );

        res.status(200).send({ msg: "Search Employee By Name", employees });

    } catch (error) {

        res.status(500).send({
            message: "Server error"
        });
    }
};

//search Employee By City
const searchEmployeeByCity = (req, res) => {

    try {

        const { city } = req.query;

        if (!city) {
            return res.status(400).send({
                message: "City is required"
            });
        }

        const employees = emp.filter((e) =>
            e.address.toLowerCase().includes(city.toLowerCase())
        );

        res.status(200).send({ msg: "Get City Wise employees", employees });

    } catch (error) {

        res.status(500).send({
            message: "Server error"
        });
    }
};

// Sort Employee By Joining Date
const sortEmployeeByJoiningDate = (req, res) => {

    try {

        const sortedEmployees = [...emp].sort((a, b) => new Date(a.joiningDate) - new Date(b.joiningDate)); 


        res.status(200).send({ msg: "Sort Employee By Joining Date", employees: sortedEmployees });

    } catch (error) {

        res.status(500).send({  message: "Server error"});
    }
};

// Sort Employee By Name (A-Z)
const sortEmployeeByName = (req, res) => {

    try {

        const sortedEmployees = [...emp].sort((a, b) => a.name.localeCompare(b.name));

        res.status(200).send({msg: "Employees sorted by name (A-Z)", employees: sortedEmployees});

    } catch (error) {

        res.status(500).send({message: "Server error" });
    }
};

//Get Total Employees Count
const getTotalEmployeesCount = (req, res) => {
    try {
        const totalEmployees = emp.length;
        res.status(200).send({ msg: "Total Employees Count", count: totalEmployees });
    }   catch (error) {
        res.status(500).send({ message: "Server error" });
    }
};


//Get total Employees department wise

const getTotalEmployeesDepartmentWise = (req, res) => {

    try {

        const result = {};

        emp.forEach((e) => {

            if (result[e.department]) {
                result[e.department]++;
            } else {
                result[e.department] = 1;
            }
        });

        res.status(200).send({
            msg: "Total Employees Department Wise",
            employees: result
        });

    } catch (error) {

        res.status(500).send({
            message: "Server error"
        });
    }
};

//Get Oldest Employee
const getOldestEmployee = (req, res) => {

    try {

        const oldestEmployee = [...emp].sort(
            (a, b) =>
                new Date(a.dateOfBirth) - new Date(b.dateOfBirth)
        )[0];

        res.status(200).send({msg: "Get Oldest Employee", employee: oldestEmployee});

    } catch (error) {

        res.status(500).send({message: "Server error" });
    }
};

// GET NEWEST JOINED EMPLOYEE
const getNewestJoinedEmployee = (req, res) => {

    try {

        const newestEmployee = [...emp].sort((a, b) =>
                new Date(b.joiningDate) - new Date(a.joiningDate)
        )[0];

        res.status(200).send({msg: "Get Newest Joined Employee", employee: newestEmployee});

    } catch (error) {

        res.status(500).send({ message: "Server error"});
    }
};


// FILTER EMPLOYEES BETWEEN TWO JOINING DATES
const filterEmployeesByJoiningDate = (req, res) => {

    try {

        const { start, end } = req.query;

        if (!start || !end) {
            return res.status(400).send({
                message: "Start and End dates are required"
            });
        }

        const result = emp.filter((e) => {

            const joiningDate =
                new Date(e.joiningDate);

            return (
                joiningDate >= new Date(start) &&
                joiningDate <= new Date(end)
            );
        });

        res.status(200).send({msg: "Filtered Employees Between Two Joining Dates", employees: result});
        

    } catch (error) {

        res.status(500).send({ message: "Server error" });
    }
};

// UPDATE COMPLETE EMPLOYEE DETAILS
const updateCompleteEmployeeDetails = (req, res) => {

    try {

        const { ID } = req.params;

        const index = emp.findIndex(
            (e) => e.id == ID
        );

        if (index === -1) {
            return res.status(404).send({ message: "Employee not found" });
        }

        const {
            name,
            email,
            address,
            contactNumber,
            dateOfBirth,
            joiningDate,
            department
        } = req.body;

        emp[index] = {
            ...emp[index],
            name,
            email,
            address,
            contactNumber,
            dateOfBirth,
            joiningDate,
            department
        };

        res.status(200).send({
            message: "Employee updated successfully",
            employee: emp[index]
        });

    } catch (error) {

        res.status(500).send({
            message: "Server error"
        });
    }
};



module.exports = {
    getAllEmp,
    createEmp,
    deleteEmp,
    updateEmp,
    getEmpInfo,
    getDeptWiseEmp,
    getJoiningMonthWiseEmployee,
    getThisMonthBirthdayEmployee,
    searchEmployeeByName,
    searchEmployeeByCity,
    sortEmployeeByJoiningDate,
    sortEmployeeByName,
    getTotalEmployeesCount,
    getOldestEmployee,
    getNewestJoinedEmployee,
    filterEmployeesByJoiningDate,
    updateCompleteEmployeeDetails,
     getTotalEmployeesDepartmentWise
}
