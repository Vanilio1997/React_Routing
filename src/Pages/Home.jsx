import {getAllCategories} from '../api';
import React,{useState,useEffect} from 'react';
import Preloader from '../components/Preloader';
import CategoryList from '../components/CategoryList';
import Search from '../components/Search';
// import { useSearchParams } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';


function Home(){
    const[catalog,setCatalog] = useState([])
    const[filtredCatalog,setFiltredCatalog] = useState([]);
    const { pathname, search } = useLocation();
const navigate = useNavigate();
  console.log(search);

    const handleSearch = (str) =>{

        setFiltredCatalog(
        catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()) )
        );
        navigate(`${pathname}?search=${str}`);
    }

    useEffect(() =>{
    getAllCategories().then(data =>{ 
        setCatalog(data.categories);
        setFiltredCatalog( search ?
            data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase())):
            data.categories)
    })
    },[search])
    return( 
    <div>
        <Search  cb={handleSearch}/>
        {
!catalog.length ? null :  <CategoryList catalog={filtredCatalog} />
        }
        </div>
    )
}

export default Home