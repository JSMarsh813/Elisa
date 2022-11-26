function Test(){

    return (


<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
     
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
     
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>

  <div className="navbar-center hidden lg:flex">


    <ul className="menu menu-horizontal p-0">

      <li><a>Item 1</a></li>
     
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>

    )
}

export default Test