import { useState } from "react";

const LockAda = ({onLockAda}: any)=>{

    const [address, setAddress] = useState('');
    const [qty, setQty] = useState('');
    const [dueDate, setDueDate] = useState('');

    const onSubmit = (e : any) =>{
        e.preventDefault() //prevent full page refresh
        onLockAda([address, qty, dueDate]);
    }

    return(
        <form onSubmit={onSubmit}>
            <div>
                <b>Benficiary Wallet Address</b>
                <br /><br />
                <input name="address" type="text" id="address" placeholder="Enter beneficiary address" value={address}
                onChange= {(e)=>setAddress(e.target.value)} />
            </div>
            <div>

            <b>Amount of Ada to Lock</b>
            <br /><br />
            <input id="qty" name="qty" type="number" placeholder="enter amount of ada to Lock" value={qty} 
            onChange={(e)=>setQty(e.target.value)}/>
            </div>

            <div>
                <b>Vesting expiry date</b>
                <br /><br />
                <input name="duedate" type="date" id="dueDate" placeholder="Select Vesting expiry date" value={dueDate}
                onChange={(e)=>setDueDate(e.target.value)} />
            </div>
            <br /><br />
            <input type="submit" value="Lock Ada" />
        </form>
    )
}
export default LockAda;