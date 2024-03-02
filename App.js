import React, { useState } from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ShowCourseComponent from './components/ShowCourseComponent';
import UserCartComponent from './components/UserCartComponent';
 
function App() {
    const [courses, setCourses] = useState([
        { id: 1, 
          name: 'Overlays T-shirt', 
          price: 999, 
          image: 
'https://overlays.co/cdn/shop/products/CopyofDSC01567.jpg?v=1680197290&width=800'
        },
        { id: 2, 
          name: 'Overlays Jacket', 
          price: 1899, 
          image: 
'https://overlays.co/cdn/shop/files/DSC09898copy2.jpg?v=1699162223&width=800'
        },
        { id: 3, 
          name: 'Overlays Fire  Hoodie ', 
          price: 2699, 
          image: 
'https://overlays.co/cdn/shop/files/WhatsAppImage2024-01-13at19.21.54.jpg?v=1705150928&width=800'
        }
    ]);
 
    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
 
    const addCourseToCartFunction = (GFGcourse) => {
        const alreadyCourses = cartCourses
                               .find(item => item.product.id === GFGcourse.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === GFGcourse.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
        }
    };
 
    const deleteCourseFromCartFunction = (GFGCourse) => {
        const updatedCart = cartCourses
                            .filter(item => item.product.id !== GFGCourse.id);
        setCartCourses(updatedCart);
    };
 
    const totalAmountCalculationFunction = () => {
        return cartCourses
               .reduce((total, item) => 
                           total + item.product.price * item.quantity, 0);
    };
 
    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };
 
    const filterCourseFunction = courses.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );
 
    return (
        <div className="App">
            <SearchComponent searchCourse={searchCourse} 
                             courseSearchUserFunction=
                                 {courseSearchUserFunction} />
            <main className="App-main">
                <ShowCourseComponent
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
 
                <UserCartComponent
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                    }
                    setCartCourses={setCartCourses}
                />
            </main>
        </div>
    );
}
 
export default App;