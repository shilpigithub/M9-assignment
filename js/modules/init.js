export async function fetchEmployeesArr() {
    try{
        const response = await fetch('/data/employee.json')
        const employees = await response.json()
       // console.log(employees)
        return employees
    }catch(e){
        console.error(e)
    }
}