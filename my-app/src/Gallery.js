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
  
