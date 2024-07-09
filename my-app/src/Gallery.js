// U09226075
// Create Gallery.js.

import Profile from './Profile.js'

function Gallery({employees}) {
    return (
        <div>
            {employees.map(employees => (
                <Profile
                key={employees.id}
                name={employees.name}
                role={employees.role}
                photoURL={employees.photoURL}
                />
            ))}
        </div>
     
    );
  }
  
  export default Gallery;
  
// Create header component and export it.
export function Header() {
    return (
        <div>
            <h1>Meet the Team</h1>
        </div>
    );
  }