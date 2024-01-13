import DashboardMenu from '../../../components/pages/dashboard/DashboardMenu';
import DashboardPageStyle from '../../../styles/DashboardPageStyle.css'; 
import CreateCoursePage from './createCourse/CreateCoursePage';
import MyCoursesPage from './myCourses/MyCoursesPage';
import MyProfile from './myProfile/MyProfile';
import { useState } from 'react';

function DashboardPage () {
    const [activeIndex, setActiveIndex] = useState(null); 

    return (
        <div>  
            <div>  
                <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                    <div class="h-full overflow-y-auto  dark:bg-gray-800"> 
                        <DashboardMenu activeIndex={activeIndex} setActiveIndex={setActiveIndex} />   
                    </div>
                </aside> 
            </div> 
            {activeIndex === 0 && <MyProfile />}
            {activeIndex === 1 && <CreateCoursePage />}
            {activeIndex === 2 && <MyCoursesPage />}
        </div>
    )
}

export default DashboardPage;