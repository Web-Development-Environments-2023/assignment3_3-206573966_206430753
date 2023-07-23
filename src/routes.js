import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
  path: "/MyRecipeFull/:recipeId",
  name: "MyRecipeFull",
  component: () => import("./pages/MyRecipeViewPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "/createRecipe",
    name: "createRecipe",
    component: () => import("./pages/CreateRecipePage"),
  },
  {
    path: "/MyRecipe",
    name: "MyRecipe",
    component: () => import("./pages/MyRecipePage"),
  },
  {
    path: "/FamilyRecipe",
    name: "FamilyRecipe",
    component: () => import("./pages/FamilyRecipePage"),
  },
  {
    path: "/FavoriteRecipe",
    name: "FavoriteRecipe",
    component: () => import("./pages/FavoritePage"),
  },
  {
    path: "/MyFamilyRecipeFull/:recipeId",
    name: "MyFamilyRecipeFull",
    component: () => import("./pages/FamilyRecipeViewPage"),
    },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;
