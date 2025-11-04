import { useState } from "react";

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const sidebarWidth = open ? 240 : 0;
  const menus=[
    {
        label:"Dashboard",icon:"fa fa-home"
    },
    {
        label:"Settings",icon:"fa fa-cog"
    },
    {
        label:"Customers",icon:"fa fa-users"
    },
    {
        label:"Authentication",icon:"fa fa-lock",   
        children:[
            {label:"Sign In",icon:"fa fa-sign-in"},
            {label:"Sign Up",icon:"fa fa-user-plus"},
            {label:"Forgot Password",icon:"fa fa-unlock-alt"}

        ]
    }
 
  ];

  const [collapsed, setCollapsed] = useState(0);
  const [collapsedIndex, setCollapsedIndex] = useState(null);

const onMenuClick=(menu,index)=>{
  setCollapsedIndex(index);
    if(menu.children) return setCollapsed(collapsed === 0 ? "auto" : 0);
    // if(!menu.children) return setCollapsed(0);
}   
  

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside
             className={`sidenav fixed top-0 left-0 h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-100 shadow-lg transition-all duration-500 ease-in-out overflow-y-auto overflow-x-hidden`}
            style={{ width: sidebarWidth }}
            >
            {/* Sidebar Header */}
            <div className="p-5 text-lg font-bold border-b border-slate-700 tracking-wide flex items-center gap-2">
                <span className="text-xl">🧭</span>
                {open && <span>Admin Panel</span>}
            </div>

            {/* Sidebar Menu */}
            <nav className="mt-4 flex flex-col space-y-1 px-2">
                {menus.map((menu, index) => (
                    <div key={index} className="group relative">
                    {/* Main Menu Item */}
                    <button
                        onClick={()=>setCollapsed(()=>onMenuClick(menu,index))}
                        className={`flex items-center w-full px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-700 hover:text-white transition-all ${
                        open ? "justify-between" : "justify-center"
                        }`}
                    >
                        <div className="flex items-center">
                        <i
                            className={`${menu.icon} text-lg transition-all duration-300 ${
                            open ? "mr-3" : ""
                            }`}
                        ></i>
                        {open && <span>{menu.label}</span>}
                        </div>

                        {/* Dropdown arrow */}
                        {open && menu.children && (
                        <span>
                            <i className="fa fa-angle-down"></i>
                        </span>
                        )}

                        {/* Tooltip when collapsed */}
                        {!open && (
                        <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-slate-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                            {menu.label}
                        </span>
                        )}
                    </button>

                    {/* Submenu */}
                    {open && menu.children && (
                        <div className="ml-7 mt-2 flex flex-col space-y-1" style={{
                            height:(collapsedIndex === index) ? collapsed :0 ,
                            overflow:"height 1s ease",
                            
                        }}>
                        {menu.children.map((child, childIndex) => (
                            <button
                            key={childIndex}
                            className="flex items-center w-full px-3 py-1 rounded-md text-sm font-medium hover:bg-slate-700 hover:text-white transition-all"
                          
                            >
                            <i className={`${child.icon} text-base mr-2`}></i>
                            <span>{child.label}</span>
                            </button>
                        ))}
                        </div>
                    )}
                    </div>
                ))}
            </nav>


        </aside>


      {/* Main Layout */}
      <div
        className="flex-1 flex flex-col min-h-screen transition-all duration-500 ease-in-out"
        style={{ marginLeft: sidebarWidth }}
      >
        {/* Header */}
        <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-md px-6 md:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              className="text-white text-lg hover:scale-110 transition-transform"
              onClick={() => setOpen(!open)}
            >
              <i className="fa fa-bars"></i>
            </button>
            <h1 className="text-lg md:text-xl font-semibold tracking-wide">
              Admin Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm hidden sm:inline">
              Welcome, <b>Admin</b>
            </span>
            <button className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded text-sm transition-all">
              Logout
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8 bg-gray-50 overflow-y-auto transition-all">
          <div className="bg-white rounded-xl shadow p-6 min-h-[70vh] transition-all">
            {children}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-gray-400 text-sm text-center py-4 border-t border-slate-700">
          © {new Date().getFullYear()} Admin Dashboard — All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
