import "/home/bs/Documents/react-social-media-project/src/pages/register/register.scss"
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className='register'>
      <div className='card'>
       <div className='left'>
        <h1>Lama Social</h1>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi quos accusantium commodi consequuntur magni nulla minus et! Neque error optio modi dolorum voluptatem.
</p>
<span>Do you have an account?</span>
<Link to="/login">
<button>Login</button>
</Link>
       </div>
          <div className='right'>
            <h1>Register</h1>
            <form>
             <input type='text' placeholder='Username' />
             <input type='email' placeholder='Email' />
             <input type='password' placeholder='Password' />
             <input type='text' placeholder='Name' />
             <Link to={"/register"}> 
             <button>Register</button>
             </Link>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Register;