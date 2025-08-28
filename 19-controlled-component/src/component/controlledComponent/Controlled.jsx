import React from 'react';
import Navbar from '../customcomponent/navbar'
import Usercontrol from '../customcomponent/user-control';
import Grid from '../customcomponent/grid';
export default function Controlled() {
  return (
    <div className='container-fluid'>
        <h2>Controlled Component</h2>
        <Navbar theme="bg-dark text-white" title="Shopper" menuItems={["Home","Shop","Products","Docs"]} logo="https://t4.ftcdn.net/jpg/05/49/98/67/360_F_549986733_NOkIdqXufSSX5o0NEVcWUOE8M8B9p7Vu.jpg" />
        <Navbar theme="bg-danger text-white" title="Raj" menuItems={["Home","Course","New Batched"]} logo="https://img.pikbest.com/png-images/20250502/lord-krishna-logo-badge_11695534.png!bw700" />
        <hr />
        <div className="w-25">
            <Usercontrol label="Departure"  type="date"/>
            <Usercontrol label="Your Photo"  type="file"/>
            <Usercontrol label="Fav Color"  type="color"/>
        </div>
        <hr />
        <div className='container-fluid'>
            <h2>Products</h2>
            <Grid field={["Name","Price","Stock"]} data={[{Name:"TV",Price:24000.44,Stock:"Available"},{Name:"Mobile",Price:15000.4,Stock:"Out Of Stock"}]} />
            <h2>Employee</h2>
            <Grid field={["FirstName","Designation"]} data={[{FirstName:"Raj Yadav",Designation:"Boss"}]} />
        </div>
    </div>
  )
}
