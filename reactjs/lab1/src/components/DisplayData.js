import { useState } from "react";

function DisplayData() {
    const [data] = useState({
        id: "1",
        jobTitleName: "Developer",
        firstName: "Ahmed",
        lastName: "Ali",
        preferredFullName: "Ahmed Ali",
        employeeCode: "E1",
        region: "CA",
        phoneNumber: "408-1234567",
        emailAddress: "ahmed.ali@gmail.com"

    })

    return (
        <div className='App'>
            <h1>Data</h1>
            <div className='data'>
                ID: {data.id} <br />
                Job Title: {data.jobTitleName} <br />
                First Name: {data.firstName} <br />
                Last Name: {data.lastName} <br />
                Full Name: {data.preferredFullName} <br />
                Employee Code: {data.employeeCode} <br />
                Region: {data.region} <br />
                Phone Number: {data.phoneNumber} <br />
                Email Address: {data.emailAddress} <br />
            </div>

            {/* Another Solution */}
            {/* {Object.entries(data).map(field => (
                    <div>{field[0]}: {field[1]}</div>
                ))} */}
        </ div>
    );
}

export default DisplayData;