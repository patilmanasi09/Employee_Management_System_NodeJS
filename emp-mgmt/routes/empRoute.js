const express = require('express')
const empController = require('../controller/empController')

const router = express.Router()

router.get('/getAllEmp', empController.getAllEmp)

router.post('/createEmp', empController.createEmp)

router.delete('/delEmp/:ID', empController.deleteEmp)

router.patch('/updateEmp/:ID', empController.updateEmp)

router.get('/getEmpInfo/:ID', empController.getEmpInfo)

router.get('/getDeptWiseEmp/:department', empController.getDeptWiseEmp)

router.get('/joining-month',empController.getJoiningMonthWiseEmployee)

router.get('/monthBirthdayEmployee/:month', empController.getThisMonthBirthdayEmployee)

router.get('/searchEmployeeByName', empController.searchEmployeeByName) 

router.get('/searchEmployeeByCity', empController.searchEmployeeByCity)

router.get('/sortEmployeeByJoiningDate', empController.sortEmployeeByJoiningDate)

router.get('/sortEmployeeByName', empController.sortEmployeeByName)

router.get('/getTotalEmployeesCount', empController.getTotalEmployeesCount)

router.get('/getTotalEmployeesDepartmentWise', empController.getTotalEmployeesDepartmentWise)

router.get('/getOldestEmployee', empController.getOldestEmployee)

router.get('/getNewestJoinedEmployee', empController.getNewestJoinedEmployee)

router.get('/filterEmployeesByJoiningDate', empController.filterEmployeesByJoiningDate)

router.put('/updateCompleteEmployeeDetails/:ID', empController.updateCompleteEmployeeDetails)

module.exports = router