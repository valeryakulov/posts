import React, { useEffect, useState } from "react";
import Body from "./components/Body";
import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";
import api from "./utils/Api";
import HomePage from "./pages/HomePage/HomePage";
import PostCard from "./pages/PostCard/PostCard";
import { Route, Routes } from "react-router-dom";
import PostCreate from "./pages/PostCreate";
import useDebounce from "./hooks/useDebounce";
import Search from "./components/Search";







const App = () => {
 
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [search, setSearch] = useState("");
 
  
   // Запрос за данными
   useEffect(() => {
    Promise.all([api.getAllProducts(), api.getUserInfo()]).then(
      ([posts, user]) => {
        setPosts(posts);
        setUser(user);
      }
    );
  }, []);
 
  

  // Обновление статуса лайка на товаре
  const changeProductLike = (isLike, id) => {
    api.changeProductLike(isLike, id).then((newProduct) => {
      const newProducts = posts.map((el) =>
        el._id === id ? newProduct : el
      );
      setPosts(newProducts);
    });
  };
  
//Создание поста
const onSubmit = (values) => {
  api
    .createPost(values)
    .then(() => api.getAllProducts().then((posts) => setPosts(posts)));
};

   // Поиск данных по введенном тексту
   const debounceSearch = useDebounce(search, 500);

   const searchData = () => {
     api.getSearchProducts(debounceSearch).then((data) => {
      setPosts(data);
      //  setCount(data.length);
     });
   };
 
   useEffect(() => {
     searchData();
   }, [debounceSearch]);

    // change theme
  // const changeTheme = () => {
  //   theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  // };



  return (
    <>
<AppHeader/>
<Search onChange={setSearch} onSearch={searchData} />
  <Body >    
    <Routes>
        <Route path="/" element = {
          <HomePage 
          user={user} 
          posts={posts} 
          onSubmit={onSubmit} 
          onChangeProductLike={changeProductLike}/>}>
        </Route>
        <Route path="/PostCard/:PostCardID" 
          element={<PostCard user={user}/>}>
        </Route>
        <Route
        path ="PostCreate" element={<PostCreate user={user} 
          onSubmit={onSubmit} />}>
        </Route>
    </Routes>
  </Body>
<AppFooter/>
   
    </>
    
  );
  };
export default App;


 