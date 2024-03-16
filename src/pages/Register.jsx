// new users who will create there account
import {register} from ""

const Register = () => {
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: 'include',
        });
        const result = await response.json();
      }

    return (
        <div>
        <h1>Register Page</h1>
        <form onSubmit={handleSubmit} >
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">password</label>
        <input type="password" id="password"/>
        <button type="submit">Register</button>
        </form>
        </div>
    )
}

export default Register;


  /*
how we would get a jwt token
uncontrolled form
async function handleSubmit(e) {
  e.preventDefault()
  const formData = new FormData(e.target)
  const data = Object.fromEntries(formData)

  const response = await fetch(api_url)
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.Stringify(data),
  credentials: 'include',
})
const result = await response.json();
}

  */