import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import HomeComponent from "./Components/Home/home.component";
import LineComponent from "./Components/Line/line.component";
import TrainingComponent from "./Components/Line/trainingline.component";
import TopHeader from "./Components/Container/header.component";
import SidebarComponent from "./Components/Container/sidebar.component";
import FooterComponent from "./Components/Container/footer.component";
const { Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <Router>
          <SidebarComponent />
          <Layout>
            <TopHeader />
            <Content style={{ margin: "90px 16px 0px 220px" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 600 }}
              >
                <Routes>
                  <Route exact path="/" element={<HomeComponent />} />
                  <Route path="/line" element={<LineComponent />} />
                  <Route path="/line" element={<LineComponent />} />
                  <Route path="/training/:id" element={<TrainingComponent />} />
                </Routes>
              </div>
            </Content>
            <FooterComponent />
          </Layout>
        </Router>
      </Layout>
    </>
  );
}

export default App;
