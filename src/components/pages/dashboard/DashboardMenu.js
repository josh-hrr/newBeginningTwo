import DashboardMenuStyle from '../../../styles/DashboardMenuStyle.css';
import { useState } from 'react';
import ProfileIcon from '../../svgIcons/ProfileIcon';
import MyCoursesIcon from '../../svgIcons/MyCoursesIcon';
import MyCommunityIcon from '../../svgIcons/MyCommunityIcon';
import MyPromotionsIcon from '../../svgIcons/MyPromotionsIcon';
import MyConfigIcon from '../../svgIcons/MyConfigIcon';
import ButtonBlue from '../../formElements/ButtonBlue';
import MyCreateCourseIcon from '../../svgIcons/MyCreateCourseIcon';

function DashboardMenu ({activeIndex, setActiveIndex}) {
 

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const menuItems = [
        { text: 'Mi perfil', svg: <ProfileIcon iconColor="text-colorOrange"/> },
        { text: 'Crear curso', svg: <MyCreateCourseIcon /> },
        { text: 'Mis cursos', svg: <MyCoursesIcon /> }, 
        { text: 'Mi comunidad', svg: <MyCommunityIcon /> },
        { text: 'Promociones', svg: <MyPromotionsIcon /> },
        { text: 'Configuración', svg: <MyConfigIcon /> },  
    ];
    
    return (
        <div className="dashboard-menu md:h-full">  
            <ul className="sideBarMenuList"> 
                {
                    menuItems.map((item, index) => {
                        return (
                            <li className={`flex justify-start items-center text-center ${activeIndex === index ? 'active' : ''}`} onClick={() => handleClick(index)}> 
                                <div className="dashboard-menu__item shadow border-white border-4"> 
                                    {item.svg}
                                </div> 
                                <p className="hidden md:block m-0  ">
                                    {item.text}
                                </p> 
                            </li>
                        )
                    })
                }     
            </ul>   
        </div>
    )
}

export default DashboardMenu;