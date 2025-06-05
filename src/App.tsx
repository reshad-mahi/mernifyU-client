import './App.css';
// Changed: Added redirect
import { Routes, Route, BrowserRouter, redirect } from 'react-router-dom';
import { ALL_ROUTES } from './shared/routes';
import { ProtectedRoute } from './components/ProtectedRoute';
import {
  DashboardContainer,
  Dashboard,
  Login,
  NotFound,
  AllProperties,
  MyProfile,
  // AgentProfile,
  // Agents,
  CreateProperty,
  Users,
  AboutMe,
  // EditProperty,
  // PropertyDetails,
} from './pages';

// Added loginAction function
export async function loginAction({ request }: { request: Request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  console.log("Login Action Data:", { email, password });
  // Perform authentication here
  // If successful:
  // return redirect(ALL_ROUTES.HOME);
  // If failed:
  // return { error: "Invalid login attempt" };
  if (email && password) return redirect(ALL_ROUTES.HOME); // Dummy success
  return { error: "Email and password required" }; // Dummy error
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Changed: Added action={loginAction} */}
          <Route path={ALL_ROUTES.LOGIN} element={<Login />} action={loginAction} />
          <Route path="*" element={<NotFound />} />
          <Route element={<ProtectedRoute />}>
            <Route path={ALL_ROUTES.HOME} element={<DashboardContainer />}>
              <Route
                path={ALL_ROUTES.PROPERTIES}
                element={<AllProperties />}
              ></Route>
              <Route
                path={`${ALL_ROUTES.PROPERTIES}/create`}
                element={<CreateProperty />}
              ></Route>
              <Route path={`${ALL_ROUTES.USER}`} element={<Users />}></Route>
              <Route path={ALL_ROUTES.ABOUT_ME} element={<AboutMe />} />
              <Route index element={<Dashboard />}></Route>
            </Route>
          </Route>
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
