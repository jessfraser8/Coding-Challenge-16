// U09226075
// Create Profile.js.

function Profile({name, role, photoURL}) {
    return (
     <div>
        <h3>{name}</h3>
        <p>{role}</p>
        <img src={photoURL} alt={`Profile of ${name}`}/>
     </div>
    );
  }
  
  export default Profile;


