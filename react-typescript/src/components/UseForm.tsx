import { useEffect, useState, ChangeEvent } from 'react'
import App from '../App';

interface UserFormState {
  email: string;
  password: string;
  }
  function UseForm() {
  const [userForm, setUserForm] = useState<UserFormState>({
  email: '',
  password: '',
  });
  

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setUserForm(userForm => ({
        email:e.target.value,
        password:"********"
        }))
          }
        useEffect(()=>{

        },[])
 

  return (
    <>
      <div className="app">
      <form>
        <input type="text"
              id="email"
              name="email"
              onChange={handleChange}
              value={ userForm.email || ''}
            />
            </form>
      </div>
    </>
  )
}

export default UseForm;
