import Sidebar from './sidebar'
import Topbar from './topbar'
import Pagecontent from './pagecontent'
import './App.css';

function App() {
  return (
    <div class="d-flex" id="wrapper">
      <Sidebar></Sidebar>
      <div id="page-content-wrapper">
      <Topbar></Topbar>
      <Pagecontent></Pagecontent>
      </div>
    </div>
  );
}

export default App;
