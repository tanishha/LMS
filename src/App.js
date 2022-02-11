import './App.css';
import 'antd/dist/antd.css';
import { Layout } from "antd";
import HomeComponent from './Components/Home/home.component';
import TopHeader from './Components/Container/header.component';
import SidebarComponent from './Components/Container/sidebar.component';
import FooterComponent from './Components/Container/footer.component'
const {Content} = Layout;

function App() {
  return (
   <>
     <Layout>
        <SidebarComponent />
        <Layout>
          <TopHeader />
          <Content style={{ margin: "90px 16px 0px 220px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 600 }}
            >
              <HomeComponent/>
            </div>
          </Content>
          <FooterComponent />
        </Layout>
      </Layout>
   </>
  );
}

export default App;
