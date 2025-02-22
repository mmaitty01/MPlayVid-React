import React from 'react';
import{categories} from "../Constants/constants";
import logo from "../assets/videom.png";

const Navbar = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory }) => {
  
  return (
    <nav className="bg-indigo-950 p-3 flex justify-between items-center">
        <div className="hidden md:flex text-white font-bold text-lg">
          <a href="/"> <img src={logo} className="w-18 h-9 object-contain" /></a>          
        </div>
        <input class="placeholder:text-gray-300 placeholder:italic w-80"  
        placeholder="Search for Video"  
        type="text"   
        name="search"
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}/>
        
        <div className="hidden md:flex space-x-6 text-white">
        {categories.map((cat) => (
        <button
          key={cat}
          className={`p-2 rounded ${selectedCategory === cat ? "bg-sky-400 " : "bg-indigo-950 "}`}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}
        </div>

        <div className="md:hidden flex items-center">
          <select
          className="p-2 bg-gray-300 rounded"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}>
            {categories.map((cat) => ( <option key={cat}>{cat}</option> ))}
          </select>
        </div>

      
    </nav>
  );
};



export default Navbar;
