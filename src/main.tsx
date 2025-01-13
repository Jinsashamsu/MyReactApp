import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
/* import MemoUsage from './Components/MemoUsage.tsx'
import Post from './Components/Post.tsx' */
import Blog from './Components/Blog.tsx'
import CheckCallBack from './Components/CallBack.tsx'
import UserContext from './Components/UserContext.tsx'
import ContextUpdate from './Components/ContextUpdateParent.tsx'
import Parent from './Components/FunctionProp/Parent.tsx'
import CounterUsingReducer from './Components/ReducerSample.tsx'
import ShoppingCart from './Components/ShoppingCart.tsx'
import HOCMain from './Components/HOC/HOCMain.tsx'
import NavigationMain from './Components/NavigationRouter/NavigationMain.tsx'
import RM_Parent from './Components/ReactMemo/RM_Parent.tsx'
import { BrowserRouter } from 'react-router-dom'
import FetchUsingAxios from './Components/FetchMechanism/AxiosEg.tsx'
import FetchExample from './Components/FetchMechanism/FetchEg.tsx'
import ProtectedRoute from './Components/NavigationRouter/ProtectedRouter.tsx'
import Auth from './Components/NavigationRouter/ProtectedRouter.tsx'
import RedexCounter from './Components/Redex/RedexEg.tsx'
import ReduxThunkFetchUsers from './Redux/ReduxFetchUsersMain.tsx'
import UsersComponent from './Redux/ReduxThunkUser.tsx'
import { Provider } from "react-redux";
import ReduxThunkStore from './Redux/ReduxStore.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostsByQuery from './Components/ReactQuery/PostsByQuery.tsx'
import BearCounter from './Components/ZustandLib/ZustandCounterMain.tsx'
import RecoilCounter from './Components/RecoilLib/RecoilCounter.tsx'
import { RecoilRoot } from 'recoil'
import LazyComponents from './Components/LazyLoadComponent.tsx'
import HelloWorld from './Components/HelloWorld.tsx'
import MyButton from './Components/MyButton.tsx'
import FactoryPattern from './Components/DesignPatterns/FactoryPattern.tsx'
import PaymentOptions from './Components/DesignPatterns/FactoryPatternPMGW.tsx'
import ProtectedProfile, { BorderedProfile, ProfileWithBorderToggle, ProfileWithMouseEvent } from './Components/DesignPatterns/HOCPattern/Profile.tsx'
import RenderClickTracker from './Components/DesignPatterns/RenderPropsPattern/ClickTracker.tsx'
import RenderAuthenticatedProfile, { RenderProfileWithBorder } from './Components/DesignPatterns/RenderPropsPattern/RenderProfile.tsx'
import BorderedComponentRendering from './Components/DesignPatterns/RenderPropsPattern/BorderedComponenetRender.tsx'
import BorderedWithInnerFunction from './Components/DesignPatterns/BorderingWithoutPattern.tsx'
import CustomHookDataFetch from './Components/DesignPatterns/FetchPatterns/FetchCustomHook.tsx'
import RenderPropsFetching from './Components/DesignPatterns/FetchPatterns/RenderPropFetching.tsx'
import HOCFetchPattern from './Components/DesignPatterns/FetchPatterns/HOCFetch.tsx'
import SingletonSession from './Components/DesignPatterns/SingletonPattern/SingletonPattern.tsx'
import SetTheme from './Components/DesignPatterns/SingletonPattern/ThemeManagement/ThemeManager.tsx'
import ObserverMain from './Components/DesignPatterns/ObserverPattern/ObserverMain.tsx'
import TabsAsCompound from './Components/DesignPatterns/CompundPattern/CompoundPatternMain.tsx'
import LoginForm from './Components/CypressTest/CYLogin.tsx'


const user = { username: "JohnDoe", loggedIn: true, id: '24234324' }; // Mocked user data
const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    {/* <MemoUsage></MemoUsage> */}
    
    {/* <UserContext.Provider value={user}>
    <Blog></Blog>
    </UserContext.Provider> */}
    {/* <ContextUpdate></ContextUpdate> */}
    {/* <Parent></Parent> */}
    {/* <CounterUsingReducer></CounterUsingReducer> */}
    {/* <ShoppingCart></ShoppingCart> */}
    {/* <HOCMain></HOCMain> */}
    {/* <CheckCallBack></CheckCallBack> */}
    {/* <BrowserRouter>
    <NavigationMain></NavigationMain>
    </BrowserRouter> */}
    {/* <RM_Parent></RM_Parent> */}
    {/* <FetchUsingAxios></FetchUsingAxios>
    <FetchExample></FetchExample> */}
    
    {/* <></Auth>Auth */}
    
    {/* <RedexCounter></RedexCounter> */}
    {/* <Provider store={ReduxThunkStore}>
    <UsersComponent></UsersComponent>
    </Provider> */}
{/* 18-12-2024 */}
{/* <QueryClientProvider client={queryClient}>
<PostsByQuery />
</QueryClientProvider> */}
{/* <BearCounter></BearCounter> */}
{/* <RecoilRoot>
<RecoilCounter></RecoilCounter>
</RecoilRoot> */}
{/* <LazyComponents></LazyComponents> */}
<HelloWorld></HelloWorld>
{/* <MyButton label="Click Me"></MyButton> */}

{/* 30-12-2024 Factory Pattern - Conditional based component rendering */}
{/* <FactoryPattern></FactoryPattern>
<PaymentOptions></PaymentOptions> */}

{/* 02-01-2025 -HOC Pattern - Code sharing for common logic on different components*/}
{/* <ProtectedProfile></ProtectedProfile>
<ProfileWithBorderToggle></ProfileWithBorderToggle>
<BorderedProfile></BorderedProfile>
<ProfileWithMouseEvent></ProfileWithMouseEvent> */}

{/* 03-01-2025 Render Pattern */}
{/* <RenderClickTracker></RenderClickTracker> 
<RenderAuthenticatedProfile></RenderAuthenticatedProfile>
<RenderProfileWithBorder></RenderProfileWithBorder>
<BorderedComponentRendering></BorderedComponentRendering>
 */}

{/* 03-01-2025 Eg without HOC or render pattern. Simple. But not standard. Better use HOC or render */}
{/* <BorderedWithInnerFunction></BorderedWithInnerFunction> */}

{/* 06-01-2025 */}
{/* remote api -custom hooks, renderprops, HOC */}
{/* <CustomHookDataFetch></CustomHookDataFetch> */}
{/* <RenderPropsFetching></RenderPropsFetching> */}
{/* <HOCFetchPattern></HOCFetchPattern> */}

{/* 06-01-2025 */}
{/* <SingletonSession></SingletonSession> */}

{/* 07-01-2025 - Singleton pattern application in themem management*/}
{/* <SetTheme></SetTheme> */}

{/* 07-01-2025 - observer pattern */}
{/* <ObserverMain></ObserverMain> */}

{/* <TabsAsCompound></TabsAsCompound> */}
<LoginForm></LoginForm>
  </StrictMode>,
)
