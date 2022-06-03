const User = (props) => {
    console.log(props.match.params)
    let ID= props.match.params.id
    return ( 
        <div>
 <h1>User Details</h1>
            ID: {ID}
        </div>
     );
}
 
export default User;